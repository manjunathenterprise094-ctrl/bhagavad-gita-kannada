import { useState, useEffect } from "react";

export interface SpeechActiveInfo {
  title: string;
  subtitle: string;
}

export function useSpeech() {
  const [activeTextId, setActiveTextId] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeInfo, setActiveInfo] = useState<SpeechActiveInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const updateVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
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

  const speak = (id: string, text: string, lang: "en" | "kn", info?: SpeechActiveInfo) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported in this browser.");
      return;
    }

    if (activeTextId === id) {
      window.speechSynthesis.cancel();
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      return;
    }

    window.speechSynthesis.cancel();
    setIsPaused(false);
    setActiveInfo(info || null);
    
    // Clean markdown characters and convert Sanskrit diacritics to plain ASCII English
    let cleanText = text;
    if (lang === "en") {
      cleanText = cleanText
        .replace(/\|/g, ",") // Replace Sanskrit pipes with commas for natural pauses
        .replace(/ṛ/g, "ri")
        .replace(/Ṛ/g, "Ri")
        .replace(/ś/g, "sh")
        .replace(/Ś/g, "Sh")
        .replace(/ṣ/g, "sh")
        .replace(/Ṣ/g, "Sh")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    cleanText = cleanText
      .replace(/[*#_~`[\]()]/g, "")
      .replace(/https?:\/\/\S+/g, "") // remove URLs
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Select voice
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    let matchedVoice = null;
    
    if (lang === "kn") {
      matchedVoice = currentVoices.find(v => 
        v.lang.toLowerCase().includes("kn") || v.lang.toLowerCase().includes("kannada")
      );
    } else {
      // 1. Try to find Indian English (en-IN) voices
      const enInVoices = currentVoices.filter(v => v.lang.toLowerCase().includes("en-in"));
      if (enInVoices.length > 0) {
        matchedVoice = enInVoices.find(v => 
          v.name.toLowerCase().includes("ravi") || 
          v.name.toLowerCase().includes("male") || 
          v.name.toLowerCase().includes("heera")
        ) || enInVoices[0];
      }
      
      // 2. Fallback to general warm/deep English voices if no Indian English voice is installed
      if (!matchedVoice) {
        const voicePreferences = ["male", "david", "google us male", "natural", "en-us"];
        for (const pref of voicePreferences) {
          matchedVoice = currentVoices.find(v => 
            v.lang.toLowerCase().startsWith("en") && 
            v.name.toLowerCase().includes(pref)
          );
          if (matchedVoice) break;
        }
      }
      
      // 3. Absolute fallback
      if (!matchedVoice) {
        matchedVoice = currentVoices.find(v => v.lang.toLowerCase().startsWith("en"));
      }
    }
    
    if (matchedVoice) {
      utterance.voice = matchedVoice;
      utterance.lang = matchedVoice.lang; // Fix language mismatch failure
    } else {
      utterance.lang = lang === "kn" ? "kn-IN" : "en-US";
    }
    
    utterance.pitch = 0.90; // Balanced deep, resonant tone
    utterance.rate = 0.84;  // Poised, divine flow

    utterance.onend = () => {
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
    };
    
    utterance.onerror = (err) => {
      console.error("SpeechSynthesis error:", err);
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
    };

    setActiveTextId(id);
    window.speechSynthesis.speak(utterance);
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
