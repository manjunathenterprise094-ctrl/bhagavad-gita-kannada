import { useState, useEffect } from "react";

export interface SpeechActiveInfo {
  title: string;
  subtitle: string;
}

export interface SpeechState {
  activeTextId: string | null;
  isPlaying: boolean;
  isPaused: boolean;
  audioUrl: string | null;
  activeInfo: SpeechActiveInfo | null;
  textToSpeak: string;
  lang: "en" | "kn" | "sloka";
  kannadaScriptText?: string;
  playbackRate: number;
}

// Global active audio and speech instances
export let globalActiveAudio: HTMLAudioElement | null = null;
export let globalActiveUtterance: SpeechSynthesisUtterance | null = null;

type Listener = (state: SpeechState) => void;
const listeners = new Set<Listener>();

let currentState: SpeechState = {
  activeTextId: null,
  isPlaying: false,
  isPaused: false,
  audioUrl: null,
  activeInfo: null,
  textToSpeak: "",
  lang: "en",
  playbackRate: 1.0,
};

let cachedVoices: SpeechSynthesisVoice[] = [];

// Pre-load voices on client load
if (typeof window !== "undefined" && window.speechSynthesis) {
  const loadVoices = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export function updateSpeechState(partial: Partial<SpeechState>) {
  currentState = { ...currentState, ...partial };
  listeners.forEach(fn => fn(currentState));
}

export function subscribeSpeechState(listener: Listener) {
  listeners.add(listener);
  listener(currentState);
  return () => {
    listeners.delete(listener);
  };
}

export function stopAllGlobalAudio() {
  if (globalActiveAudio) {
    try {
      globalActiveAudio.pause();
      globalActiveAudio.currentTime = 0;
      globalActiveAudio.onended = null;
      globalActiveAudio.onerror = null;
    } catch (_) {}
    globalActiveAudio = null;
  }

  if (typeof window !== "undefined" && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch (_) {}
  }
  globalActiveUtterance = null;

  updateSpeechState({
    activeTextId: null,
    isPlaying: false,
    isPaused: false,
    audioUrl: null,
    activeInfo: null,
  });
}

export function cleanSlokaForSpeech(text: string): string {
  if (!text) return "";
  return text
    .replace(/\|\|/g, " , ")
    .replace(/\|/g, " , ")
    .replace(/ऽ/g, "")
    .replace(/’/g, "")
    .replace(/'/g, "")
    .replace(/ṛ/g, "ri")
    .replace(/Ṛ/g, "Ri")
    .replace(/ś/g, "sh")
    .replace(/Ś/g, "Sh")
    .replace(/ṣ/g, "sh")
    .replace(/Ṣ/g, "Sh")
    .replace(/ḥ/g, "ha")
    .replace(/Ḥ/g, "Ha")
    .replace(/ṁ/g, "m")
    .replace(/Ṁ/g, "M")
    .replace(/ñ/g, "nya")
    .replace(/Ñ/g, "Nya")
    .replace(/ā/g, "aa")
    .replace(/Ā/g, "Aa")
    .replace(/ī/g, "ee")
    .replace(/Ī/g, "Ee")
    .replace(/ū/g, "oo")
    .replace(/Ū/g, "Oo")
    .replace(/-/g, " ")
    .replace(/[*#_~`[\]()]/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getBestIndianVoice(): { voice: SpeechSynthesisVoice | null; isKannadaNative: boolean } {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return { voice: null, isKannadaNative: false };
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return { voice: null, isKannadaNative: false };

  // 1. Try Kannada Voice (kn-IN)
  const knVoice = voices.find(v => {
    const l = v.lang.toLowerCase();
    const n = v.name.toLowerCase();
    return l.includes("kn") || n.includes("kannada");
  });
  if (knVoice) return { voice: knVoice, isKannadaNative: true };

  // 2. Try Hindi Voice (hi-IN)
  const hiVoice = voices.find(v => {
    const l = v.lang.toLowerCase();
    const n = v.name.toLowerCase();
    return l.includes("hi") || n.includes("hindi");
  });
  if (hiVoice) return { voice: hiVoice, isKannadaNative: false };

  // 3. Try Indian English Voice (en-IN)
  const indianEnVoice = voices.find(v => {
    const l = v.lang.toLowerCase();
    const n = v.name.toLowerCase();
    return l.includes("en-in") || l.includes("en_in") || n.includes("india") || n.includes("indian") || n.includes("rishi") || n.includes("veena") || n.includes("sangeeta");
  });
  if (indianEnVoice) return { voice: indianEnVoice, isKannadaNative: false };

  // 4. Default to any English voice
  const defaultEn = voices.find(v => v.lang.toLowerCase().startsWith("en")) || voices[0];
  return { voice: defaultEn || null, isKannadaNative: false };
}

export function useSpeech() {
  const [state, setState] = useState<SpeechState>(currentState);

  useEffect(() => {
    return subscribeSpeechState(setState);
  }, []);

  const hasKannadaVoice = () => true;

  const speak = (
    id: string, 
    text: string, 
    lang: "en" | "kn" | "sloka" = "en", 
    info?: SpeechActiveInfo,
    kannadaScriptText?: string
  ) => {
    // Toggle off if currently active
    if (state.activeTextId === id) {
      stopAllGlobalAudio();
      return;
    }

    stopAllGlobalAudio();

    // Clean text snippet for audio generation
    let rawTextToSpeak = text;
    let targetTtsLang = "kn";

    if (lang === "sloka") {
      if (kannadaScriptText) {
        targetTtsLang = "kn";
        rawTextToSpeak = kannadaScriptText.replace(/\|\|/g, " , ").replace(/\|/g, " , ").replace(/ऽ/g, "").trim();
      } else {
        targetTtsLang = "hi";
        rawTextToSpeak = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      targetTtsLang = "kn";
      rawTextToSpeak = text.replace(/\|\|/g, " , ").replace(/\|/g, " , ").trim();
    } else {
      targetTtsLang = "en";
      rawTextToSpeak = cleanSlokaForSpeech(text);
    }

    if (!rawTextToSpeak) return;

    // Direct synchronous speech execution
    triggerWebSpeech(text, lang, targetTtsLang, kannadaScriptText);

    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: null,
      activeInfo: info || null,
      textToSpeak: rawTextToSpeak,
      lang,
      kannadaScriptText,
    });
  };

  const triggerWebSpeech = (
    textToSpeak: string, 
    lang: "en" | "kn" | "sloka", 
    targetTtsLang: string, 
    kannadaScriptText?: string
  ) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const { voice, isKannadaNative } = getBestIndianVoice();
    let speechText = "";

    if (lang === "sloka") {
      if (isKannadaNative && kannadaScriptText) {
        speechText = kannadaScriptText.replace(/\|\|/g, " , ").replace(/\|/g, " , ").replace(/ऽ/g, "").trim();
      } else {
        // Use Sanskrit Romanized Transliteration for English/Indian voice
        speechText = cleanSlokaForSpeech(textToSpeak);
      }
    } else if (lang === "kn") {
      if (isKannadaNative) {
        speechText = textToSpeak.replace(/\|\|/g, " , ").replace(/\|/g, " , ").trim();
      } else {
        speechText = cleanSlokaForSpeech(textToSpeak);
      }
    } else {
      speechText = cleanSlokaForSpeech(textToSpeak);
    }

    if (!speechText) return;

    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(speechText);
      globalActiveUtterance = utterance;
      (window as any)._activeGitaSpeechUtterance = utterance;

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = "en-IN";
      }

      utterance.pitch = 0.95;
      utterance.rate = 0.82;

      utterance.onstart = () => {
        updateSpeechState({ isPlaying: true, isPaused: false });
      };

      utterance.onend = () => {
        stopAllGlobalAudio();
      };

      utterance.onerror = (err) => {
        console.warn("Speech synthesis error event:", err);
        stopAllGlobalAudio();
      };

      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis trigger error:", e);
    }
  };

  const pauseSpeech = () => {
    if (globalActiveAudio && !globalActiveAudio.paused) {
      globalActiveAudio.pause();
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.pause();
    }
    updateSpeechState({ isPlaying: false, isPaused: true });
  };

  const resumeSpeech = () => {
    if (globalActiveAudio) {
      globalActiveAudio.play().catch(() => {});
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.resume();
    }
    updateSpeechState({ isPlaying: true, isPaused: false });
  };

  const stop = () => {
    stopAllGlobalAudio();
  };

  return {
    activeTextId: state.activeTextId,
    speak,
    stop,
    pauseSpeech,
    resumeSpeech,
    isPaused: state.isPaused,
    activeInfo: state.activeInfo,
    hasKannadaVoice,
    speechState: state,
  };
}
