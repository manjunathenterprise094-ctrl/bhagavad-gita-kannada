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

    let targetTtsLang = "kn";
    let rawTextToSpeak = text;

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

    const cleanSnippet = rawTextToSpeak.slice(0, 180).trim();
    if (!cleanSnippet) return;

    const encodedText = encodeURIComponent(cleanSnippet);
    
    // MP3 Stream Sources
    const proxyUrl = `/api/tts?text=${encodedText}&lang=${targetTtsLang}`;
    const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${targetTtsLang}&client=tw-ob`;
    const corsProxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(directUrl)}`;

    let physicalAudioPlayed = false;

    // 1. PHYSICAL HTML5 MP3 AUDIO ENGINE WITH BLOB MEMORY & UNMUTED LOUDSPEAKER
    try {
      const audio = new Audio();
      audio.volume = 1.0;
      audio.muted = false;
      globalActiveAudio = audio;

      audio.onended = () => {
        stopAllGlobalAudio();
      };

      const tryPlaySource = (urlIndex: number) => {
        const urls = [proxyUrl, directUrl, corsProxyUrl];
        if (urlIndex >= urls.length) {
          if (!physicalAudioPlayed) {
            triggerWebSpeechFallback(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText);
          }
          return;
        }

        const targetUrl = urls[urlIndex];

        // Fetch as Blob for local memory playback
        fetch(targetUrl)
          .then((res) => {
            if (!res.ok) throw new Error("HTTP error " + res.status);
            return res.blob();
          })
          .then((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            audio.src = objectUrl;
            audio.volume = 1.0;
            audio.muted = false;

            const promise = audio.play();
            if (promise !== undefined) {
              promise
                .then(() => {
                  physicalAudioPlayed = true;
                  updateSpeechState({ isPlaying: true, isPaused: false });
                })
                .catch(() => {
                  tryPlaySource(urlIndex + 1);
                });
            }
          })
          .catch(() => {
            // Direct audio src fallback
            audio.src = targetUrl;
            audio.volume = 1.0;
            audio.muted = false;

            const promise = audio.play();
            if (promise !== undefined) {
              promise
                .then(() => {
                  physicalAudioPlayed = true;
                  updateSpeechState({ isPlaying: true, isPaused: false });
                })
                .catch(() => {
                  tryPlaySource(urlIndex + 1);
                });
            }
          });
      };

      tryPlaySource(0);
    } catch (_) {
      triggerWebSpeechFallback(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText);
    }

    // Update state
    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: proxyUrl,
      activeInfo: info || null,
      textToSpeak: rawTextToSpeak,
      lang,
      kannadaScriptText,
    });
  };

  const triggerWebSpeechFallback = (
    textToSpeak: string, 
    lang: "en" | "kn" | "sloka", 
    targetTtsLang: string, 
    kannadaScriptText?: string
  ) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const { voice, isKannadaNative } = getBestIndianVoice();
    let speechText = textToSpeak;

    if (!isKannadaNative) {
      speechText = cleanSlokaForSpeech(textToSpeak);
    }

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
      utterance.rate = 0.85;

      utterance.onstart = () => {
        updateSpeechState({ isPlaying: true, isPaused: false });
      };

      utterance.onend = () => {
        stopAllGlobalAudio();
      };

      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (_) {}
  };

  const pauseSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.pause();
    }
    updateSpeechState({ isPlaying: false, isPaused: true });
  };

  const resumeSpeech = () => {
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






