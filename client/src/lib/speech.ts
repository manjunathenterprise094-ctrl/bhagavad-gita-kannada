import { useState, useEffect } from "react";

export interface SpeechActiveInfo {
  title: string;
  subtitle: string;
}

// Global reference to prevent JS Garbage Collection from stopping mobile speech
let activeUtteranceRef: SpeechSynthesisUtterance | null = null;

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
    .replace(/-/g, " ") // Remove hyphens in Sanskrit words for continuous pronunciation
    .replace(/[*#_~`[\]()]/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function useSpeech() {
  const [activeTextId, setActiveTextId] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeInfo, setActiveInfo] = useState<SpeechActiveInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
        }
      };

      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }, []);

  const hasKannadaVoice = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return false;
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    return currentVoices.some(v => 
      v.lang.toLowerCase().includes("kn") || v.lang.toLowerCase().includes("kannada")
    );
  };

  const getBestIndianVoice = (targetLang: "en" | "kn" | "sloka") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return { voice: null, lang: "en-IN" };
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    if (!currentVoices || currentVoices.length === 0) return { voice: null, lang: "en-IN" };

    // 1. If target is Kannada, check for native Kannada voice
    if (targetLang === "kn" || targetLang === "sloka") {
      const knVoice = currentVoices.find(v => {
        const l = v.lang.toLowerCase();
        const n = v.name.toLowerCase();
        return l.includes("kn") || n.includes("kannada");
      });
      if (knVoice) return { voice: knVoice, lang: knVoice.lang, type: "kn" };
    }

    // 2. Try Hindi voice (hi-IN) - produces authentic Indian pronunciation for Slokas and Kannada
    const hiVoice = currentVoices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("hi-in") || l.includes("hi_in") || l === "hi" || n.includes("hindi") || n.includes("lekha") || n.includes("neerja") || n.includes("kalpana");
    });

    if ((targetLang === "kn" || targetLang === "sloka") && hiVoice) {
      return { voice: hiVoice, lang: hiVoice.lang, type: "hi" };
    }

    // 3. Indian English voices (en-IN)
    const enInVoices = currentVoices.filter(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("en-in") || l.includes("en_in") || n.includes("india") || n.includes("indian") || n.includes("rishi") || n.includes("veena") || n.includes("sangeeta") || n.includes("ravi") || n.includes("heera") || n.includes("aditi") || n.includes("prabhat");
    });

    if (enInVoices.length > 0) {
      const selectedEnIn = enInVoices.find(v => {
        const n = v.name.toLowerCase();
        return n.includes("rishi") || n.includes("veena") || n.includes("sangeeta") || n.includes("ravi") || n.includes("heera") || n.includes("indian");
      }) || enInVoices[0];
      return { voice: selectedEnIn, lang: selectedEnIn.lang, type: "en-in" };
    }

    // 4. Fallback to Hindi if looking for Indian accent and no Indian English
    if (hiVoice) {
      return { voice: hiVoice, lang: hiVoice.lang, type: "hi" };
    }

    // 5. Fallback to general English voice
    const generalEnVoice = currentVoices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.startsWith("en") && (n.includes("male") || n.includes("natural") || n.includes("david") || n.includes("google"));
    }) || currentVoices.find(v => v.lang.toLowerCase().startsWith("en"));

    if (generalEnVoice) {
      return { voice: generalEnVoice, lang: generalEnVoice.lang, type: "en" };
    }

    return { voice: null, lang: "en-IN", type: "en-in" };
  };

  const speak = (
    id: string, 
    text: string, 
    lang: "en" | "kn" | "sloka" = "en", 
    info?: SpeechActiveInfo,
    kannadaScriptText?: string
  ) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported in this browser.");
      return;
    }

    // Stop current speech if same button is tapped
    if (activeTextId === id) {
      window.speechSynthesis.cancel();
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      activeUtteranceRef = null;
      return;
    }

    // Mobile audio context unlock
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();
    setIsPaused(false);
    setActiveInfo(info || null);

    // Get best available Indian voice
    const { voice: matchedVoice, lang: matchedLang, type: voiceType } = getBestIndianVoice(lang);

    let cleanText = text;
    if (lang === "sloka") {
      // If native Kannada or Hindi voice is available, prefer Kannada script
      if ((voiceType === "kn" || voiceType === "hi") && kannadaScriptText) {
        cleanText = kannadaScriptText.replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").trim();
      } else {
        // Otherwise use phonetic English transliteration
        cleanText = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      if (voiceType === "en-in" || voiceType === "en") {
        // If no Kannada voice on device, clean text and make readable for English voice
        cleanText = cleanSlokaForSpeech(text);
      } else {
        cleanText = cleanText.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
      }
    } else {
      cleanText = cleanSlokaForSpeech(cleanText);
    }

    cleanText = cleanText
      .replace(/[*#_~`[\]()]/g, "")
      .replace(/https?:\/\/\S+/g, "")
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    activeUtteranceRef = utterance;
    (window as any)._activeGitaSpeechUtterance = utterance;

    if (matchedVoice) {
      utterance.voice = matchedVoice;
      utterance.lang = matchedVoice.lang;
    } else {
      utterance.lang = matchedLang || "en-IN";
    }

    // Divine, calm, Indian spiritual cadence
    utterance.pitch = 0.92;
    utterance.rate = 0.84;

    utterance.onend = () => {
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      activeUtteranceRef = null;
    };

    utterance.onerror = (err) => {
      console.error("SpeechSynthesis error:", err);
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      activeUtteranceRef = null;
    };

    setActiveTextId(id);
    
    // Ensure mobile browsers execute speak in next tick if needed
    setTimeout(() => {
      if (window.speechSynthesis) {
        window.speechSynthesis.speak(utterance);
      }
    }, 10);
  };

  const pauseSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setActiveTextId(null);
    setIsPaused(false);
    setActiveInfo(null);
    activeUtteranceRef = null;
  };

  return {
    activeTextId,
    speak,
    stop,
    pauseSpeech,
    resumeSpeech,
    isPaused,
    activeInfo,
    hasKannadaVoice
  };
}

