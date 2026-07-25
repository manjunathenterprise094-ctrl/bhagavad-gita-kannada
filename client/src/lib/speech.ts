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

let proxyCheckStatus: "idle" | "checking" | "supported" | "not_supported" = "idle";

function checkTtsProxy() {
  if (typeof window === "undefined" || proxyCheckStatus !== "idle") return;
  proxyCheckStatus = "checking";
  fetch("/api/tts?text=ping&lang=en")
    .then(res => {
      if (res.status === 200) {
        proxyCheckStatus = "supported";
      } else {
        proxyCheckStatus = "not_supported";
      }
    })
    .catch(() => {
      proxyCheckStatus = "not_supported";
    });
}

if (typeof window !== "undefined") {
  checkTtsProxy();
}

function getBestVoiceForLanguage(langCode: string): { voice: SpeechSynthesisVoice | null; isLanguageNative: boolean } {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return { voice: null, isLanguageNative: false };
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return { voice: null, isLanguageNative: false };

  const target = langCode.toLowerCase();

  // 1. Try exact match for language code (e.g. "kn" or "hi" or "en")
  const nativeVoice = voices.find(v => {
    const l = v.lang.toLowerCase();
    return l.startsWith(target) || (target === "kn" && l.includes("kannada")) || (target === "hi" && l.includes("hindi"));
  });
  if (nativeVoice) return { voice: nativeVoice, isLanguageNative: true };

  // 2. Fallbacks if native language voice not found
  if (target === "kn") {
    // Kannada fallback order: Hindi -> Indian English -> English
    const hiVoice = voices.find(v => v.lang.toLowerCase().startsWith("hi"));
    if (hiVoice) return { voice: hiVoice, isLanguageNative: false };

    const indianEnVoice = voices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("en-in") || n.includes("india") || n.includes("indian") || n.includes("rishi") || n.includes("veena");
    });
    if (indianEnVoice) return { voice: indianEnVoice, isLanguageNative: false };
  }

  if (target === "hi") {
    // Hindi fallback order: Kannada -> Indian English -> English
    const knVoice = voices.find(v => v.lang.toLowerCase().startsWith("kn") || v.name.toLowerCase().includes("kannada"));
    if (knVoice) return { voice: knVoice, isLanguageNative: false };

    const indianEnVoice = voices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("en-in") || n.includes("india") || n.includes("indian") || n.includes("rishi") || n.includes("veena");
    });
    if (indianEnVoice) return { voice: indianEnVoice, isLanguageNative: false };
  }

  // 3. Indian English / Default English fallback
  const defaultIndianEn = voices.find(v => {
    const l = v.lang.toLowerCase();
    return l.includes("en-in") || l.includes("en_in");
  });
  if (defaultIndianEn) return { voice: defaultIndianEn, isLanguageNative: false };

  const defaultEn = voices.find(v => v.lang.toLowerCase().startsWith("en")) || voices[0];
  return { voice: defaultEn || null, isLanguageNative: false };
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

    const cleanSnippet = rawTextToSpeak.slice(0, 160).trim();
    if (!cleanSnippet) return;

    const enc = encodeURIComponent(cleanSnippet);
    
    // MP3 Stream URLs
    const localProxyUrl = `/api/tts?text=${enc}&lang=${targetTtsLang}`;
    const googleDirectUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${enc}&tl=${targetTtsLang}&client=tw-ob`;

    let physicalAudioStarted = false;

    // SYNCHRONOUSLY CREATE UNMUTED HTML5 AUDIO INSTANCE (Preserves click gesture!)
    try {
      const audio = new Audio();
      audio.volume = 1.0;
      audio.muted = false;
      globalActiveAudio = audio;

      audio.onended = () => {
        stopAllGlobalAudio();
      };

      audio.onerror = (e) => {
        console.error("Audio playback error:", e);
        if (!physicalAudioStarted) {
          triggerWebSpeech(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText, text);
        } else {
          stopAllGlobalAudio();
        }
      };

      // Set the audio source based on background proxy check
      if (proxyCheckStatus === "not_supported") {
        audio.src = googleDirectUrl;
      } else {
        audio.src = localProxyUrl;
      }

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            physicalAudioStarted = true;
            updateSpeechState({ isPlaying: true, isPaused: false });
          })
          .catch((err) => {
            console.warn("Primary audio source play failed:", err);
            // If proxy check failed or direct Google Translate fails, fall back:
            if (proxyCheckStatus !== "not_supported") {
              // Try direct Google Translate URL as same-origin bypass
              audio.src = googleDirectUrl;
              audio.play()
                .then(() => {
                  physicalAudioStarted = true;
                  updateSpeechState({ isPlaying: true, isPaused: false });
                })
                .catch((e2) => {
                  console.warn("Fallback direct Google TTS failed:", e2);
                  if (!physicalAudioStarted) {
                    triggerWebSpeech(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText, text);
                  }
                });
            } else {
              // Directly fall back to web speech
              if (!physicalAudioStarted) {
                triggerWebSpeech(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText, text);
              }
            }
          });
      }
    } catch (e) {
      console.warn("HTML5 Audio creation failed, falling back to Web Speech:", e);
      triggerWebSpeech(rawTextToSpeak, lang, targetTtsLang, kannadaScriptText, text);
    }

    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: proxyCheckStatus === "not_supported" ? googleDirectUrl : localProxyUrl,
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
    kannadaScriptText?: string,
    transliteratedText?: string
  ) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const { voice, isLanguageNative } = getBestVoiceForLanguage(targetTtsLang);
    let speechText = textToSpeak;

    // Smart fallback for slokas if the voice is not natively Kannada:
    if (lang === "sloka") {
      if (!isLanguageNative || !voice || !voice.lang.toLowerCase().startsWith("kn")) {
        // If the voice is English/Hindi/etc., it can read the English transliteration
        // whereas it would fail completely on Kannada characters.
        speechText = transliteratedText ? cleanSlokaForSpeech(transliteratedText) : textToSpeak;
      }
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
        utterance.lang = targetTtsLang === "kn" ? "kn-IN" : (targetTtsLang === "hi" ? "hi-IN" : "en-IN");
      }

      utterance.pitch = lang === "sloka" ? 0.95 : 1.0;
      utterance.rate = lang === "sloka" ? 0.8 : 0.9;

      utterance.onstart = () => {
        updateSpeechState({ isPlaying: true, isPaused: false });
      };

      utterance.onend = () => {
        stopAllGlobalAudio();
      };

      utterance.onerror = (e) => {
        console.warn("SpeechSynthesis utterance error:", e);
        stopAllGlobalAudio();
      };

      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("Web Speech trigger failed:", err);
      stopAllGlobalAudio();
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
