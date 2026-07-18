import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Pause, Youtube, Film, Sparkles, BookOpen, Clock, Compass, Info, ArrowLeft, Heart, MessageSquare, Volume2, VolumeX, ChevronRight, ChevronLeft
} from "lucide-react";
import { ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton, globalAudio } from "./home";
import { updateMetaTags } from "@/lib/seo";
import Navbar from "@/components/Navbar";

interface StoryScene {
  id: number;
  titleKn: string;
  titleEn: string;
  kannadaText: string;
  englishText: string;
  sceneName: string;
  iconType: string;
  youtubeId: string;
  startSeconds: number;
}

const GITA_SCENES: StoryScene[] = [
  {
    id: 0,
    titleKn: "ಅಧ್ಯಾಯ 1: ಕುರುಕ್ಷೇತ್ರ ಯುದ್ಧಭೂಮಿ",
    titleEn: "Scene 1: The Battlefield of Kurukshetra",
    kannadaText: "ಧರ್ಮಕ್ಷೇತ್ರವಾದ ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಪಾಂಡವರು ಮತ್ತು ಕೌರವರ ಸೈನ್ಯಗಳು ಮುಖಾಮುಖಿಯಾಗಿ ನಿಂತಿವೆ. ಯುದ್ಧ ಸನ್ನದ್ಧವಾಗಿದೆ.",
    englishText: "On the sacred field of Kurukshetra, the massive armies of the Pandavas and Kauravas stand face-to-face, ready for war.",
    sceneName: "battlefield",
    iconType: "chariot",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5260
  },
  {
    id: 1,
    titleKn: "ಅಧ್ಯಾಯ 2: ಅರ್ಜುನನ ಶರಣಾಗತಿ",
    titleEn: "Scene 2: Arjuna's Surrender & Despondency",
    kannadaText: "ದುಃಖದಿಂದ ವ್ಯಾಕುಲನಾದ ಅರ್ಜುನನು ತನ್ನ ಬಿಲ್ಲನ್ನು ಕೆಳಗಿಟ್ಟು, ರಥದಲ್ಲಿ ಕುಳಿತು ಶ್ರೀ ಕೃಷ್ಣನಿಗೆ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಶರಣಾಗುತ್ತಾನೆ.",
    englishText: "Overwhelmed with grief and confusion, Arjuna drops his bow (Gandiva) and sits in the chariot, surrendering to Krishna for guidance.",
    sceneName: "despondency",
    iconType: "bow",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5380
  },
  {
    id: 2,
    titleKn: "ಅಧ್ಯಾಯ 2: ಆತ್ಮದ ಅಮರತ್ವ",
    titleEn: "Scene 3: The Immortality of the Soul",
    kannadaText: "ಶ್ರೀ ಕೃಷ್ಣನು ಆತ್ಮದ ಅಮರತ್ವವನ್ನು ಬೋಧಿಸುತ್ತಾನೆ. ಶಸ್ತ್ರಗಳು ಇದನ್ನು ಕತ್ತರಿಸಲಾರವು, ಬೆಂಕಿ ಇದನ್ನು ಸುಡಲಾರದು. ಆತ್ಮಕ್ಕೆ ಸಾವಿಲ್ಲ.",
    englishText: "Krishna teaches that the Soul (Atman) is eternal. Weapons cannot cut it, fire cannot burn it, water cannot wet it, nor wind dry it.",
    sceneName: "soul",
    iconType: "spark",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5460
  },
  {
    id: 3,
    titleKn: "ಅಧ್ಯಾಯ 3: ನಿಷ್ಕಾಮ ಕರ್ಮಯೋಗ",
    titleEn: "Scene 4: The Path of Selfless Action",
    kannadaText: "ನಿಮ್ಮ ಕರ್ತವ್ಯದ ಮೇಲಷ್ಟೇ ನಿಮ್ಮ ಅಧಿಕಾರ, ಫಲಗಳ ಮೇಲಲ್ಲ. ಕರ್ಮಫಲದ ಆಸೆಯಿಲ್ಲದೆ ಕೆಲಸ ಮಾಡುವುದೇ ನಿಜವಾದ ಯೋಗ.",
    englishText: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of your actions. Act without attachment.",
    sceneName: "karma",
    iconType: "lotus",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5580
  },
  {
    id: 4,
    titleKn: "ಅಧ್ಯಾಯ 11: ವಿಶ್ವರೂಪ ದರ್ಶನ",
    titleEn: "Scene 5: The Cosmic Universal Form",
    kannadaText: "ಶ್ರೀ ಕೃಷ್ಣನು ಅರ್ಜುನನಿಗೆ ದಿವ್ಯದೃಷ್ಟಿ ನೀಡಿ, ಸಮಸ್ತ ಬ್ರಹ್ಮಾಂಡವನ್ನೊಳಗೊಂಡ ತನ್ನ ಅದ್ಭುತ ವಿಶ್ವರೂಪವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತಾನೆ.",
    englishText: "Lord Krishna grants Arjuna divine vision and reveals His breathtaking, infinite, multi-dimensional Cosmic Universal Form (Vishwarupa).",
    sceneName: "vishwarupa",
    iconType: "universe",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5700
  },
  {
    id: 5,
    titleKn: "ಅಧ್ಯಾಯ 18: ಶರಣಾಗತಿ ಮತ್ತು ಮೋಕ್ಷ",
    titleEn: "Scene 6: Absolute Devotion & Refuge",
    kannadaText: "ಎಲ್ಲಾ ಚಿಂತೆಗಳನ್ನು ಮರೆತು ನನ್ನೊಬ್ಬನಿಗೆ ಶರಣಾಗು. ನಾನು ನಿನ್ನನ್ನು ಎಲ್ಲಾ ಪಾಪಗಳಿಂದ ಮುಕ್ತಗೊಳಿಸುತ್ತೇನೆ, ದುಃಖಿಸಬೇಡ.",
    englishText: "Abandon all varieties of worries and surrender unto Me alone. I shall deliver you from all sinful reactions. Do not grieve.",
    sceneName: "surrender",
    iconType: "feet",
    youtubeId: "R9U0X8n45Vw",
    startSeconds: 5820
  }
];

export default function Storybook() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  
  const [activeSpeech, setActiveSpeech] = useState(false);
  const voiceAudioRef = useRef<HTMLAudioElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sceneStartTimestampRef = useRef<number>(0);
  const activeScene = GITA_SCENES[activeSceneIndex];

  const stopVoiceNarrationOnly = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (voiceAudioRef.current) {
      voiceAudioRef.current.pause();
      voiceAudioRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    setActiveSpeech(false);
    
    // Resume background global flute audio if Storybook sequence is playing and not muted
    if (globalAudio && isPlaying && !isAudioMuted) {
      globalAudio.play().catch(e => console.log("Global audio play blocked:", e));
    }
  };

  const playActiveSceneNarration = (index: number) => {
    stopVoiceNarrationOnly();
    sceneStartTimestampRef.current = Date.now();

    const scene = GITA_SCENES[index];
    const audioUrl = `/audio/storybook/scene_${scene.id + 1}.mp3`;
    const audio = new Audio(audioUrl);
    voiceAudioRef.current = audio;

    audio.onerror = () => {
      console.log(`Voiceover MP3 for scene ${scene.id + 1} not found, playing TTS...`);
      voiceAudioRef.current = null;
      triggerSpeechSynthesis(scene.kannadaText, "kn");
    };

    audio.onended = () => {
      voiceAudioRef.current = null;
      handleNarrationEnded();
    };

    audio.onplay = () => {
      setActiveSpeech(true);
      // Pause global flute audio to prevent clashing
      if (globalAudio) globalAudio.pause();
    };

    audio.play().catch((err) => {
      console.warn("Audio play blocked, using TTS fallback:", err);
      voiceAudioRef.current = null;
      triggerSpeechSynthesis(scene.kannadaText, "kn");
    });
  };

  const triggerSpeechSynthesis = (text: string, lang: "kn" | "en") => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      handleNarrationEnded();
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_~`[\]()]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === "kn" ? "kn-IN" : "en-US";

    const voices = window.speechSynthesis.getVoices();
    let matchedVoice = null;
    if (lang === "kn") {
      matchedVoice = voices.find(v => 
        v.lang.toLowerCase().includes("kn") || v.lang.toLowerCase().includes("kannada")
      );
    } else {
      // 1. Try to find Indian English (en-IN) voices
      const enInVoices = voices.filter(v => v.lang.toLowerCase().includes("en-in"));
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
          matchedVoice = voices.find(v => 
            v.lang.toLowerCase().startsWith("en") && 
            v.name.toLowerCase().includes(pref)
          );
          if (matchedVoice) break;
        }
      }
      
      // 3. Absolute fallback
      if (!matchedVoice) {
        matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith("en"));
      }
    }
    if (matchedVoice) utterance.voice = matchedVoice;

    utterance.pitch = 0.88; // Deep, resonant, warm tone
    utterance.rate = 0.82;  // Slow, comforting pace

    // Pause global flute audio to prevent clashing
    if (globalAudio) globalAudio.pause();

    utterance.onend = () => {
      handleNarrationEnded();
    };

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      handleNarrationEnded();
    };

    setActiveSpeech(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleNarrationEnded = () => {
    setActiveSpeech(false);
    
    // Resume global background flute audio
    if (globalAudio && isPlaying && !isAudioMuted) {
      globalAudio.play().catch(e => {});
    }
    
    if (isPlaying) {
      const elapsed = Date.now() - sceneStartTimestampRef.current;
      const minDuration = 8000; // minimum slide show duration in ms (8 seconds)
      
      if (elapsed < minDuration) {
        const delay = minDuration - elapsed;
        console.log(`Narration ended/failed early. Waiting for remaining ${delay}ms before next scene.`);
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = setTimeout(() => {
          transitionToNextScene();
        }, delay);
      } else {
        // Pause 1.5 seconds after a long narration before moving to the next slide
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = setTimeout(() => {
          transitionToNextScene();
        }, 1500);
      }
    }
  };

  const transitionToNextScene = () => {
    setActiveSceneIndex((prev) => (prev === GITA_SCENES.length - 1 ? 0 : prev + 1));
  };

  const handleSpeakerClick = () => {
    if (activeSpeech) {
      stopVoiceNarrationOnly();
    } else {
      playActiveSceneNarration(activeSceneIndex);
    }
  };

  // Sync autoplay state changes and scene changes to active audio narration
  useEffect(() => {
    if (isPlaying) {
      playActiveSceneNarration(activeSceneIndex);
    } else {
      stopVoiceNarrationOnly();
    }
  }, [activeSceneIndex, isPlaying]);

  useEffect(() => {
    updateMetaTags(
      "Gita Interactive Devotional Storybook | Kannada & English",
      "Experience the visual storybook of Srimad Bhagavad Gita in Kannada and English with devotional flute audio, animated scenes, and key teachings.",
      "Gita Kannada storybook, animated Gita stories, Krishna Arjuna stories, Mahabharata cartoon Kannada, Bhagavad Gita visual book"
    );

    // Sync isAudioMuted state with globalAudio status on mount
    if (globalAudio) {
      setIsAudioMuted(globalAudio.muted);
    }

    return () => {
      stopVoiceNarrationOnly();
    };
  }, []);

  const togglePlayback = () => {
    if (!globalAudio) return;
    if (isPlaying) {
      globalAudio.pause();
      setIsPlaying(false);
    } else {
      globalAudio.play().catch(err => console.log("Audio blocked:", err));
      setIsPlaying(true);
      // Play initial narration inside user click context to bypass browser speech blocks
      playActiveSceneNarration(activeSceneIndex);
    }
  };

  const toggleMute = () => {
    if (!globalAudio) return;
    globalAudio.muted = !isAudioMuted;
    setIsAudioMuted(!isAudioMuted);
  };

  const nextScene = () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    setActiveSceneIndex((prev) => (prev + 1) % GITA_SCENES.length);
  };

  const prevScene = () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    setActiveSceneIndex((prev) => (prev - 1 + GITA_SCENES.length) % GITA_SCENES.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/98 to-primary/5 pb-20 relative overflow-hidden font-sans">
      <ProgressBar />
      <ParticlesBackdrop />
      <AudioWidget />
      <Navbar />



      {/* Main Container */}
      <main className="max-w-4xl mx-auto py-6 px-4 space-y-6 relative z-10">
        
        {/* Storybook Hero Visualizer */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-primary/45 shadow-2xl bg-gradient-to-b from-amber-950 via-slate-900 to-amber-950 p-6 flex flex-col justify-between select-none min-h-[320px]">
          
          {/* Dynamic Animated Vector Graphics Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <AnimatePresence mode="wait">
              {activeScene.sceneName === "battlefield" && (
                <motion.div
                  key="battle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Chariot Silhouette SVG */}
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-amber-500">
                    <path d="M10,80 L90,80 L75,50 L25,50 Z" />
                    <circle cx="35" cy="85" r="10" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="65" cy="85" r="10" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M50,50 L50,15 L65,25 Z" fill="#ea580c" />
                  </svg>
                </motion.div>
              )}

              {activeScene.sceneName === "despondency" && (
                <motion.div
                  key="bow"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 0.25, rotate: 12 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Bow (Gandiva) SVG */}
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 stroke-amber-400 fill-none" strokeWidth="3">
                    <path d="M 30 10 C 60 10, 80 40, 80 50 C 80 60, 60 90, 30 90" />
                    <line x1="30" y1="10" x2="30" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  </svg>
                </motion.div>
              )}

              {activeScene.sceneName === "soul" && (
                <motion.div
                  key="soul"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Glowing Spark Atman SVG */}
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-amber-300">
                    <path d="M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10 Z" />
                  </svg>
                </motion.div>
              )}

              {activeScene.sceneName === "karma" && (
                <motion.div
                  key="lotus"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 0.25, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Lotus SVG */}
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-pink-500">
                    <path d="M50,20 C60,40 90,60 50,90 C10,60 40,40 50,20 Z" />
                    <path d="M50,40 C65,55 80,65 50,90 C20,65 35,55 50,40 Z" fill="#f43f5e" opacity="0.8" />
                  </svg>
                </motion.div>
              )}

              {activeScene.sceneName === "vishwarupa" && (
                <motion.div
                  key="universe"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.25, rotate: 360 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Starry Galaxy swirl */}
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 stroke-purple-400 fill-none" strokeWidth="1">
                    <circle cx="50" cy="50" r="10" />
                    <circle cx="50" cy="50" r="25" strokeDasharray="5 5" />
                    <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                  </svg>
                </motion.div>
              )}

              {activeScene.sceneName === "surrender" && (
                <motion.div
                  key="feet"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.3, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Lotus Feet / Surrender Om Watermark */}
                  <div className="text-white text-[150px] font-serif font-bold">ॐ</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Top Panel: Control indicators */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
              Gita Lesson {activeSceneIndex + 1} of {GITA_SCENES.length}
            </span>

            {/* Live Play status indicator */}
            <div className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-green-500 animate-ping" : "bg-amber-500"}`} />
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-white/80">
                {isPlaying ? "Autoplay Active" : "Paused"}
              </span>
            </div>
          </div>

          {/* Middle Panel: Visual Title & Text Slides */}
          <div className="relative z-10 my-auto text-center space-y-4 px-4 sm:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSceneIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <div className="space-y-0.5">
                  <h3 className="text-lg md:text-xl font-bold text-gradient-gold">
                    {activeScene.titleKn}
                  </h3>
                  <h4 className="text-xs font-semibold text-white/70 font-serif">
                    {activeScene.titleEn}
                  </h4>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full" />

                <p className="text-xs md:text-sm font-semibold text-white leading-relaxed font-serif max-w-2xl mx-auto">
                  "{activeScene.kannadaText}"
                </p>
                <p className="text-[10px] md:text-xs text-white/70 italic leading-relaxed max-w-2xl mx-auto font-sans">
                  "{activeScene.englishText}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Panel: Interactive Controls */}
          <div className="relative z-10 flex items-center justify-between w-full pt-4">
            <div className="flex gap-2">
              <button
                onClick={prevScene}
                className="p-2 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Previous scene"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={nextScene}
                className="p-2 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Next scene"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>

              {/* Speak/Voice Narration Button */}
              <button
                onClick={handleSpeakerClick}
                className={`p-2 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                  activeSpeech 
                    ? "bg-green-600 border-green-600 text-white animate-pulse" 
                    : "border-white/20 bg-black/40 hover:bg-white/10 text-white"
                }`}
                title="Listen Voice Narration • ಧ್ವನಿ ವಿವರಣೆ ಆಲಿಸಿ"
              >
                <Volume2 className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayback}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-white font-extrabold text-xs rounded-full flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer font-sans"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4 fill-white" />
                  Pause Storybook
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 fill-white" />
                  Play Ambience Storybook
                </>
              )}
            </button>
          </div>
        </div>

        {/* Informational Guidelines Card */}
        <div className="p-5 rounded-3xl bg-card border border-border/50 shadow-md text-left space-y-3 font-sans">
          <h3 className="text-sm font-extrabold text-primary flex items-center gap-1.5">
            <Info className="h-4 w-4" />
            100% Offline & Copyright-Free Storybook
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This Gita Devotional Storybook is built directly inside the codebase. It operates completely independently of YouTube. It generates visual storyboards on the screen and streams a royalty-free ambient flute score. It is fast, uses minimal data, and is safe from ads and copyright flags.
          </p>
        </div>

        {/* Youtube Fallbacks List */}
        <div className="space-y-3 text-left">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-1">
            <Youtube className="h-4 w-4 text-red-500" />
            External Video Streaming (YouTube Links)
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
            <a
              href="https://www.youtube.com/watch?v=R9U0X8n45Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all flex justify-between items-center group cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Mahabharat Full Movie (Kannada)</span>
                <span className="block text-[10px] text-muted-foreground mt-0.5">2h 10m • Full Animated Cartoon Movie</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=r5ZpS_o6V4M"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all flex justify-between items-center group cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Little Krishna (Kannada)</span>
                <span className="block text-[10px] text-muted-foreground mt-0.5">1h 24m • Animated Kids Story Movie</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

      </main>

      {/* Floating Chat Shortcut */}
      <FloatingChatButton />
    </div>
  );
}
