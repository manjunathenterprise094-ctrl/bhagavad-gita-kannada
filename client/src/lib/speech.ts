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

function getBestIndianVoice(voices: SpeechSynthesisVoice[], lang: "en" | "kn" | "sloka") {
  if (!voices || voices.length === 0) return null;

  if (lang === "sloka" || lang === "kn") {
    const knVoice = voices.find(v => v.lang.toLowerCase().includes("kn") || v.name.toLowerCase().includes("kannada"));
    if (knVoice) return knVoice;

    const hiVoice = voices.find(v => v.lang.toLowerCase().includes("hi") || v.name.toLowerCase().includes("hindi"));
    if (hiVoice) return hiVoice;
  }

  const indianEnVoice = voices.find(v => v.lang.toLowerCase().includes("en-in") || v.name.toLowerCase().includes("india"));
  if (indianEnVoice) return indianEnVoice;

  return voices.find(v => v.lang.toLowerCase().startsWith("en")) || voices[0] || null;
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

    let targetTtsLang = "kn";
    let textToSpeak = text;

    if (lang === "sloka") {
      if (kannadaScriptText) {
        targetTtsLang = "kn";
        textToSpeak = kannadaScriptText.replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").trim();
      } else {
        targetTtsLang = "hi";
        textToSpeak = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      targetTtsLang = "kn";
      textToSpeak = text.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
    } else {
      targetTtsLang = "en";
      textToSpeak = cleanSlokaForSpeech(text);
    }

    if (!textToSpeak) return;

    // 1. SYNCHRONOUS PRIMARY SPEECH SYNTHESIS EXECUTION (Zero latency, gesture approved)
    let triggeredSpeech = false;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();

        const voices = window.speechSynthesis.getVoices();
        const bestVoice = getBestIndianVoice(voices, lang);

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        globalActiveUtterance = utterance;
        (window as any)._activeGitaUtterance = utterance;

        if (bestVoice) {
          utterance.voice = bestVoice;
          utterance.lang = bestVoice.lang;
        } else {
          utterance.lang = targetTtsLang === "kn" ? "kn-IN" : targetTtsLang === "hi" ? "hi-IN" : "en-IN";
        }

        utterance.pitch = 0.92;
        utterance.rate = 0.85;

        utterance.onend = () => {
          stopAllGlobalAudio();
        };

        utterance.onerror = () => {
          stopAllGlobalAudio();
        };

        window.speechSynthesis.speak(utterance);
        triggeredSpeech = true;
      } catch (e) {
        console.warn("Speech synthesis trigger failed:", e);
      }
    }

    // 2. BACKEND /api/tts HTML5 AUDIO ATTEMPT (If backend available, stream MP3)
    const cleanSnippet = textToSpeak.slice(0, 180).trim();
    const encodedText = encodeURIComponent(cleanSnippet);
    const audioUrl = `/api/tts?text=${encodedText}&lang=${targetTtsLang}`;

    try {
      const audio = new Audio(audioUrl);
      globalActiveAudio = audio;

      audio.onended = () => {
        stopAllGlobalAudio();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // MP3 backend stream succeeded! Pause Web Speech so MP3 plays cleanly
          if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
          }
        }).catch(() => {
          // MP3 failed/404, Web Speech API is already speaking seamlessly!
        });
      }
    } catch (_) {}

    // Update global state
    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: audioUrl,
      activeInfo: info || null,
      textToSpeak: textToSpeak,
      lang,
      kannadaScriptText,
    });
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






