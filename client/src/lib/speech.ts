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
    globalActiveAudio.pause();
    globalActiveAudio.currentTime = 0;
    globalActiveAudio.onended = null;
    globalActiveAudio.onerror = null;
    globalActiveAudio = null;
  }
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
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
    .replace(/\|\|/g, ",")
    .replace(/\|/g, ",")
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

function speakWebSpeechFallback(text: string, lang: "en" | "kn" | "sloka", kannadaText?: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
  window.speechSynthesis.cancel();

  const voices = window.speechSynthesis.getVoices();
  let matchedVoice = null;
  let textToSpeak = text;

  if (lang === "sloka" || lang === "kn") {
    matchedVoice = voices.find(v => v.lang.toLowerCase().includes("kn") || v.name.toLowerCase().includes("kannada"));
    if (!matchedVoice) {
      matchedVoice = voices.find(v => v.lang.toLowerCase().includes("hi") || v.name.toLowerCase().includes("hindi"));
    }
  }

  if (!matchedVoice) {
    matchedVoice = voices.find(v => v.lang.toLowerCase().includes("en-in") || v.name.toLowerCase().includes("indian")) ||
                   voices.find(v => v.lang.toLowerCase().startsWith("en"));
  }

  if (lang === "sloka" && matchedVoice && matchedVoice.lang.toLowerCase().includes("kn") && kannadaText) {
    textToSpeak = kannadaText.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
  } else {
    textToSpeak = cleanSlokaForSpeech(textToSpeak);
  }

  if (!textToSpeak) return;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  globalActiveUtterance = utterance;
  (window as any)._activeGitaSpeechUtterance = utterance;

  if (matchedVoice) {
    utterance.voice = matchedVoice;
    utterance.lang = matchedVoice.lang;
  } else {
    utterance.lang = "en-IN";
  }

  utterance.pitch = 0.92;
  utterance.rate = 0.84;

  utterance.onend = () => {
    stopAllGlobalAudio();
  };

  utterance.onerror = () => {
    stopAllGlobalAudio();
  };

  window.speechSynthesis.speak(utterance);
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
    // If user clicks active button, stop audio
    if (state.activeTextId === id) {
      stopAllGlobalAudio();
      return;
    }

    stopAllGlobalAudio();

    let targetTtsLang = "kn";
    let rawTextToSpeak = text;

    if (lang === "sloka") {
      if (kannadaScriptText) {
        targetTtsLang = "kn";
        rawTextToSpeak = kannadaScriptText.replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").trim();
      } else {
        targetTtsLang = "hi";
        rawTextToSpeak = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      targetTtsLang = "kn";
      rawTextToSpeak = text.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
    } else {
      targetTtsLang = "en";
      rawTextToSpeak = cleanSlokaForSpeech(text);
    }

    const cleanSnippet = rawTextToSpeak.slice(0, 180).trim();
    const encodedText = encodeURIComponent(cleanSnippet);
    
    // Construct local /api/tts endpoint AND fallback Google TTS direct link
    const audioUrl = `/api/tts?text=${encodedText}&lang=${targetTtsLang}`;

    // Create and play HTML5 Audio SYNCHRONOUSLY within user click context
    try {
      const audio = new Audio(audioUrl);
      globalActiveAudio = audio;

      audio.onended = () => {
        stopAllGlobalAudio();
      };

      audio.onerror = () => {
        console.warn("HTML5 Audio stream failed, falling back to Web Speech API.");
        speakWebSpeechFallback(text, lang, kannadaScriptText);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("HTML5 Audio play rejected, invoking Web Speech fallback:", err);
          speakWebSpeechFallback(text, lang, kannadaScriptText);
        });
      }
    } catch (e) {
      console.warn("Audio creation failed, falling back to Web Speech:", e);
      speakWebSpeechFallback(text, lang, kannadaScriptText);
    }

    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: audioUrl,
      activeInfo: info || null,
      textToSpeak: rawTextToSpeak,
      lang,
      kannadaScriptText,
    });
  };

  const pauseSpeech = () => {
    if (globalActiveAudio) {
      globalActiveAudio.pause();
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.pause();
    }
    updateSpeechState({ isPlaying: false, isPaused: true });
  };

  const resumeSpeech = () => {
    if (globalActiveAudio) {
      globalActiveAudio.play().catch(() => {});
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
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





