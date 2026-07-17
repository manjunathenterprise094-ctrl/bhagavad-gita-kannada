import { useState, useEffect } from "react";

export function useSpeech() {
  const [activeTextId, setActiveTextId] = useState<string | null>(null);

  const speak = (id: string, text: string, lang: "en" | "kn") => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported in this browser.");
      return;
    }

    if (activeTextId === id) {
      window.speechSynthesis.cancel();
      setActiveTextId(null);
      return;
    }

    window.speechSynthesis.cancel();
    
    // Clean markdown characters like asterisks, hashtags, links, code blocks
    const cleanText = text
      .replace(/[*#_~`[\]()]/g, "")
      .replace(/https?:\/\/\S+/g, "") // remove URLs
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === "kn" ? "kn-IN" : "en-US";

    // Select suitable voice
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => 
      lang === "kn" 
        ? v.lang.toLowerCase().includes("kn") || v.lang.toLowerCase().includes("kannada")
        : v.lang.toLowerCase().startsWith("en")
    );
    
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    
    utterance.pitch = 0.95; // Slightly deeper, warm pitch
    utterance.rate = 0.92;  // Poised and calm speed

    utterance.onend = () => {
      setActiveTextId(null);
    };
    
    utterance.onerror = () => {
      setActiveTextId(null);
    };

    setActiveTextId(id);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setActiveTextId(null);
  };

  // Ensure voices are loaded (some browsers load them asynchronously)
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { activeTextId, speak, stop };
}
