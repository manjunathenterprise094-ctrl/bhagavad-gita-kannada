import { useState, useEffect, useRef } from "react";

export interface SpeechActiveInfo {
  title: string;
  subtitle: string;
}

// Global references for HTML5 Audio element and Web SpeechUtterance
let activeAudioElement: HTMLAudioElement | null = null;
let activeUtteranceRef: SpeechSynthesisUtterance | null = null;
let currentChunkIndex = 0;
let audioChunksList: string[] = [];
let audioLangCode = "kn";

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

function splitTextIntoChunks(text: string, maxLen = 170): string[] {
  if (!text) return [];
  const clean = text.replace(/[*#_~`[\]()]/g, "").replace(/https?:\/\/\S+/g, "").trim();
  if (clean.length <= maxLen) return [clean];

  // Split by punctuation marks
  const parts = clean.split(/(?<=[.,!?;|॥\n])\s+/);
  const chunks: string[] = [];
  let current = "";

  for (const part of parts) {
    if ((current + " " + part).trim().length <= maxLen) {
      current = (current + " " + part).trim();
    } else {
      if (current) chunks.push(current);
      if (part.length > maxLen) {
        // Sub-split by words
        const words = part.split(" ");
        let wordChunk = "";
        for (const word of words) {
          if ((wordChunk + " " + word).trim().length <= maxLen) {
            wordChunk = (wordChunk + " " + word).trim();
          } else {
            if (wordChunk) chunks.push(wordChunk);
            wordChunk = word;
          }
        }
        if (wordChunk) current = wordChunk;
        else current = "";
      } else {
        current = part;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks.filter(c => c.length > 0);
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

  const hasKannadaVoice = () => true; // Always supported via HTML5 Google TTS Audio!

  const stopAllAudio = () => {
    if (activeAudioElement) {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
      activeAudioElement.onended = null;
      activeAudioElement.onerror = null;
      activeAudioElement = null;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    activeUtteranceRef = null;
    audioChunksList = [];
    currentChunkIndex = 0;
  };

  const playHtml5AudioChunk = (
    chunks: string[], 
    index: number, 
    lang: string, 
    onComplete: () => void,
    onFallbackNeeded: () => void
  ) => {
    if (index >= chunks.length) {
      onComplete();
      return;
    }

    const chunk = chunks[index];
    const encodedText = encodeURIComponent(chunk);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${lang}&client=tw-ob`;

    const audio = new Audio(audioUrl);
    activeAudioElement = audio;

    audio.onended = () => {
      currentChunkIndex = index + 1;
      playHtml5AudioChunk(chunks, index + 1, lang, onComplete, onFallbackNeeded);
    };

    audio.onerror = () => {
      console.warn("HTML5 Audio TTS failed, falling back to Web Speech API.");
      onFallbackNeeded();
    };

    audio.play().catch(err => {
      console.warn("HTML5 Audio play interrupted or blocked:", err);
      onFallbackNeeded();
    });
  };

  const getBestIndianVoice = (targetLang: "en" | "kn" | "sloka") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return { voice: null, lang: "en-IN" };
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    if (!currentVoices || currentVoices.length === 0) return { voice: null, lang: "en-IN" };

    if (targetLang === "kn" || targetLang === "sloka") {
      const knVoice = currentVoices.find(v => {
        const l = v.lang.toLowerCase();
        const n = v.name.toLowerCase();
        return l.includes("kn") || n.includes("kannada");
      });
      if (knVoice) return { voice: knVoice, lang: knVoice.lang, type: "kn" };
    }

    const hiVoice = currentVoices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("hi-in") || l.includes("hi_in") || l === "hi" || n.includes("hindi") || n.includes("lekha") || n.includes("neerja") || n.includes("kalpana");
    });

    if ((targetLang === "kn" || targetLang === "sloka") && hiVoice) {
      return { voice: hiVoice, lang: hiVoice.lang, type: "hi" };
    }

    const enInVoices = currentVoices.filter(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.includes("en-in") || l.includes("en_in") || n.includes("india") || n.includes("indian") || n.includes("rishi") || n.includes("veena") || n.includes("sangeeta") || n.includes("ravi") || n.includes("heera");
    });

    if (enInVoices.length > 0) {
      return { voice: enInVoices[0], lang: enInVoices[0].lang, type: "en-in" };
    }

    if (hiVoice) {
      return { voice: hiVoice, lang: hiVoice.lang, type: "hi" };
    }

    const generalEnVoice = currentVoices.find(v => v.lang.toLowerCase().startsWith("en"));
    if (generalEnVoice) {
      return { voice: generalEnVoice, lang: generalEnVoice.lang, type: "en" };
    }

    return { voice: null, lang: "en-IN", type: "en-in" };
  };

  const speakWebSpeechFallback = (
    id: string, 
    text: string, 
    lang: "en" | "kn" | "sloka", 
    kannadaScriptText?: string
  ) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();

    const { voice: matchedVoice, lang: matchedLang, type: voiceType } = getBestIndianVoice(lang);

    let cleanText = text;
    if (lang === "sloka") {
      if ((voiceType === "kn" || voiceType === "hi") && kannadaScriptText) {
        cleanText = kannadaScriptText.replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").trim();
      } else {
        cleanText = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      if (voiceType === "en-in" || voiceType === "en") {
        cleanText = cleanSlokaForSpeech(text);
      } else {
        cleanText = cleanText.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
      }
    } else {
      cleanText = cleanSlokaForSpeech(cleanText);
    }

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

    utterance.pitch = 0.92;
    utterance.rate = 0.84;

    utterance.onend = () => {
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      activeUtteranceRef = null;
    };

    utterance.onerror = () => {
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      activeUtteranceRef = null;
    };

    window.speechSynthesis.speak(utterance);
  };

  const speak = (
    id: string, 
    text: string, 
    lang: "en" | "kn" | "sloka" = "en", 
    info?: SpeechActiveInfo,
    kannadaScriptText?: string
  ) => {
    // If user clicks the currently playing button, stop audio
    if (activeTextId === id) {
      stopAllAudio();
      setActiveTextId(null);
      setIsPaused(false);
      setActiveInfo(null);
      return;
    }

    // Stop any active playing audio or speech
    stopAllAudio();

    setIsPaused(false);
    setActiveInfo(info || null);
    setActiveTextId(id);

    // Determine target audio language code for Google TTS stream
    let targetTtsLang = "kn";
    let rawTextToSpeak = text;

    if (lang === "sloka") {
      if (kannadaScriptText) {
        targetTtsLang = "kn"; // Authentic Kannada text-to-speech recitation
        rawTextToSpeak = kannadaScriptText.replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").trim();
      } else {
        targetTtsLang = "hi"; // Devanagari/Hindi voice for Sanskrit transliteration
        rawTextToSpeak = cleanSlokaForSpeech(text);
      }
    } else if (lang === "kn") {
      targetTtsLang = "kn";
      rawTextToSpeak = text.replace(/\|\|/g, ",").replace(/\|/g, ",").trim();
    } else {
      targetTtsLang = "en";
      rawTextToSpeak = cleanSlokaForSpeech(text);
    }

    const chunks = splitTextIntoChunks(rawTextToSpeak);
    audioChunksList = chunks;
    currentChunkIndex = 0;
    audioLangCode = targetTtsLang;

    if (chunks.length === 0) {
      setActiveTextId(null);
      return;
    }

    // Primary: Play via HTML5 Streaming Audio API (100% mobile & browser compatible)
    playHtml5AudioChunk(
      chunks, 
      0, 
      targetTtsLang, 
      () => {
        // Complete handler
        setActiveTextId(null);
        setIsPaused(false);
        setActiveInfo(null);
        activeAudioElement = null;
      },
      () => {
        // Fallback handler if HTML5 Audio is blocked or offline
        speakWebSpeechFallback(id, text, lang, kannadaScriptText);
      }
    );
  };

  const pauseSpeech = () => {
    if (activeAudioElement) {
      activeAudioElement.pause();
      setIsPaused(true);
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (activeAudioElement) {
      activeAudioElement.play();
      setIsPaused(false);
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stop = () => {
    stopAllAudio();
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


