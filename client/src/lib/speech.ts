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

    // Select a premium, deep, and warm male voice suitable for Lord Krishna
    const voices = window.speechSynthesis.getVoices();
    let matchedVoice = null;
    
    if (lang === "kn") {
      matchedVoice = voices.find(v => 
        v.lang.toLowerCase().includes("kn") || v.lang.toLowerCase().includes("kannada")
      );
    } else {
      // Prioritize deep/warm male voices and Indian English (for authentic Sanskrit pronunciations)
      const voicePreferences = ["male", "david", "ravi", "google us male", "natural", "en-in", "en-us"];
      for (const pref of voicePreferences) {
        matchedVoice = voices.find(v => 
          v.lang.toLowerCase().startsWith("en") && 
          v.name.toLowerCase().includes(pref)
        );
        if (matchedVoice) break;
      }
      if (!matchedVoice) {
        matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith("en"));
      }
    }
    
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    
    utterance.pitch = 0.88; // Lower pitch to sound deep, resonant, and divine
    utterance.rate = 0.85;  // Slower, poised speed for a calm and comforting celestial tone

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
