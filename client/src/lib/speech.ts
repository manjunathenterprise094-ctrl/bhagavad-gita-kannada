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
      stop();
      return;
    }

    stop();

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

    const encodedText = encodeURIComponent(rawTextToSpeak.slice(0, 200));
    const url = `/api/tts?text=${encodedText}&lang=${targetTtsLang}`;

    updateSpeechState({
      activeTextId: id,
      isPlaying: true,
      isPaused: false,
      audioUrl: url,
      activeInfo: info || null,
      textToSpeak: rawTextToSpeak,
      lang,
      kannadaScriptText,
    });
  };

  const pauseSpeech = () => {
    updateSpeechState({ isPlaying: false, isPaused: true });
  };

  const resumeSpeech = () => {
    updateSpeechState({ isPlaying: true, isPaused: false });
  };

  const stop = () => {
    updateSpeechState({
      activeTextId: null,
      isPlaying: false,
      isPaused: false,
      audioUrl: null,
      activeInfo: null,
    });
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




