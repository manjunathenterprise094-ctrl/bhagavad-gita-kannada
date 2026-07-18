import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, 
  ListMusic, Music, Sparkles, Clock, Compass, Info, ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import { 
  ProgressBar, ParticlesBackdrop
} from "./home";
import { updateMetaTags } from "@/lib/seo";
import Navbar from "@/components/Navbar";

interface Track {
  id: number;
  filename: string;
  titleKn: string;
  titleEn: string;
  descriptionKn: string;
  descriptionEn: string;
  duration: string;
}

const TRACKS: Track[] = [
  {
    id: 0,
    filename: "01Prastavana.mp3",
    titleKn: "ಪೀಠಿಕೆ (ಪ್ರಸ್ತಾವನೆ)",
    titleEn: "Introduction (Prastavana)",
    descriptionKn: "ಗೀತೆಯ ಮಹತ್ವ ಮತ್ತು ದೈವಿಕ ಹಿನ್ನೆಲೆಯ ಕಿರು ಪರಿಚಯ.",
    descriptionEn: "A brief introduction to the significance and divine background of the Gita.",
    duration: "1:01:04"
  },
  {
    id: 1,
    filename: "02Chapter1.mp3",
    titleKn: "ಅಧ್ಯಾಯ 1: ಅರ್ಜುನವಿಷಾದ ಯೋಗ",
    titleEn: "Chapter 1: Arjuna Vishada Yoga",
    descriptionKn: "ಅರ್ಜುನನ ಗೊಂದಲ, ದುಃಖ ಮತ್ತು ಶರಣಾಗತಿಯ ಸ್ಥಿತಿ.",
    descriptionEn: "Arjuna's dilemma, grief, and state of complete surrender on the battlefield.",
    duration: "1:32:40"
  },
  {
    id: 2,
    filename: "03Chapter2.mp3",
    titleKn: "ಅಧ್ಯಾಯ 2: ಸಾಂಖ್ಯ ಯೋಗ",
    titleEn: "Chapter 2: Sankhya Yoga",
    descriptionKn: "ಆತ್ಮದ ಅಮರತ್ವ ಮತ್ತು ನಿಷ್ಕಾಮ ಕರ್ಮದ ಸಿದ್ಧಾಂತ.",
    descriptionEn: "The immortality of the soul and the supreme philosophy of selfless action.",
    duration: "2:17:29"
  },
  {
    id: 3,
    filename: "04Chapter3.mp3",
    titleKn: "ಅಧ್ಯಾಯ 3: ಕರ್ಮ ಯೋಗ",
    titleEn: "Chapter 3: Karma Yoga",
    descriptionKn: "ಕರ್ತವ್ಯ ಪಾಲನೆ ಮತ್ತು ಲೋಕ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಕರ್ಮದ ಆಚರಣೆ.",
    descriptionEn: "The path of dedicated action and performing duties without attachment.",
    duration: "1:31:22"
  },
  {
    id: 4,
    filename: "05Chapter4.mp3",
    titleKn: "ಅಧ್ಯಾಯ 4: ಜ್ಞಾನಕರ್ಮಸನ್ಯಾಸ ಯೋಗ",
    titleEn: "Chapter 4: Jnana Karma Sanyasa Yoga",
    descriptionKn: "ದೈವಿಕ ಜ್ಞಾನ ಮತ್ತು ಕರ್ಮವನ್ನು ಯಜ್ಞ ರೂಪದಲ್ಲಿ ಸಮರ್ಪಿಸುವುದು.",
    descriptionEn: "Approaching actions with divine wisdom and the eternal lineage of spiritual knowledge.",
    duration: "1:49:31"
  },
  {
    id: 5,
    filename: "06Chapter5.mp3",
    titleKn: "ಅಧ್ಯಾಯ 5: ಕರ್ಮಸನ್ಯಾಸ ಯೋಗ",
    titleEn: "Chapter 5: Karma Sanyasa Yoga",
    descriptionKn: "ಬಾಹ್ಯ ಕರ್ಮ ಸನ್ಯಾಸ ಮತ್ತು ಅಂತರಂಗದ ಕರ್ಮಯೋಗದ ಸಮನ್ವಯ.",
    descriptionEn: "The synthesis of outward renunciation and inward active devotion.",
    duration: "0:50:43"
  },
  {
    id: 6,
    filename: "07Chapter6.mp3",
    titleKn: "ಅಧ್ಯಾಯ 6: ಆತ್ಮಸಂಯಮ ಯೋಗ (ಧ್ಯಾನಯೋಗ)",
    titleEn: "Chapter 6: Atmasanyama Yoga (Dhyana Yoga)",
    descriptionKn: "ಮನಸ್ಸಿನ ನಿಯಂತ್ರಣ, ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಧ್ಯಾನದ ಮಾರ್ಗಗಳು.",
    descriptionEn: "The science of self-control, mental discipline, and absolute meditation.",
    duration: "1:08:46"
  },
  {
    id: 7,
    filename: "08Chapter7.mp3",
    titleKn: "ಅಧ್ಯಾಯ 7: ಜ್ಞಾನವಿಜ್ಞಾನ ಯೋಗ",
    titleEn: "Chapter 7: Jnana Vijnana Yoga",
    descriptionKn: "ಪರಮಾತ್ಮನ ವಿರಾಟ ಶಕ್ತಿ ಮತ್ತು ಭಕ್ತಿಯ ನಾಲ್ಕು ಪ್ರಕಾರಗಳು.",
    descriptionEn: "The divine intelligence, material nature, and four types of seekers.",
    duration: "0:46:14"
  },
  {
    id: 8,
    filename: "09Chapter8.mp3",
    titleKn: "ಅಧ್ಯಾಯ 8: ಅಕ್ಷರಬ್ರಹ್ಮ ಯೋಗ",
    titleEn: "Chapter 8: Akshara Brahma Yoga",
    descriptionKn: "ಮರಣಕಾಲದ ಸ್ಮರಣೆ ಮತ್ತು ಮುಕ್ತಿಯ ಶಾಶ್ವತ ಪಯಣ.",
    descriptionEn: "The ultimate destination, path of liberation, and remembering the Supreme at death.",
    duration: "1:02:10"
  },
  {
    id: 9,
    filename: "10Chapter9.mp3",
    titleKn: "ಅಧ್ಯಾಯ 9: ರಾಜವಿದ್ಯಾರಾಜಗುಹ್ಯ ಯೋಗ",
    titleEn: "Chapter 9: Raja Vidya Raja Guhya Yoga",
    descriptionKn: "ಅತ್ಯಂತ ರಹಸ್ಯವಾದ ಭಕ್ತಿ ಜ್ಞಾನ ಮತ್ತು ಶರಣಾಗತಿ ತತ್ವ.",
    descriptionEn: "The sovereign science, royal secret, and the ease of pure loving devotion.",
    duration: "1:09:07"
  },
  {
    id: 10,
    filename: "11Chapter10.mp3",
    titleKn: "ಅಧ್ಯಾಯ 10: ವಿಭೂತಿ ಯೋಗ",
    titleEn: "Chapter 10: Vibhuti Yoga",
    descriptionKn: "ಸೃಷ್ಟಿಯಲ್ಲಿ ಭಗವಂತನ ಅನಂತ ಪ್ರಭುತ್ವ ಮತ್ತು ಶ್ರೇಷ್ಠ ರೂಪಗಳು.",
    descriptionEn: "The infinite opulences and manifestations of the divine essence in the universe.",
    duration: "1:02:46"
  },
  {
    id: 11,
    filename: "12Chapter11.mp3",
    titleKn: "ಅಧ್ಯಾಯ 11: ವಿಶ್ವರೂಪದರ್ಶನ ಯೋಗ",
    titleEn: "Chapter 11: Vishwarupa Darshana Yoga",
    descriptionKn: "ಅರ್ಜುನನಿಗೆ ಭಗವಂತನ ಕಾಲಸ್ವರೂಪಿ ವಿರಾಟ ರೂಪದ ದರ್ಶನ.",
    descriptionEn: "Arjuna beholds the breathtaking, cosmic multi-dimensional form of Lord Krishna.",
    duration: "1:24:09"
  },
  {
    id: 12,
    filename: "12Chapter12.mp3",
    titleKn: "ಅಧ್ಯಾಯ 12: ಭಕ್ತಿ ಯೋಗ",
    titleEn: "Chapter 12: Bhakti Yoga",
    descriptionKn: "ಸಗುಣ ಮತ್ತು ನಿರ್ಗುಣ ಉಪಾಸನೆ ಹಾಗೂ ಭಕ್ತನ ಲಕ್ಷಣಗಳು.",
    descriptionEn: "The path of direct love, personal worship, and qualities dear to Krishna.",
    duration: "0:32:03"
  },
  {
    id: 13,
    filename: "14Chapter13.mp3",
    titleKn: "ಅಧ್ಯಾಯ 13: ಕ್ಷೇತ್ರಕ್ಷೇತ್ರಜ್ಞವಿಭಾಗ ಯೋಗ",
    titleEn: "Chapter 13: Kshetra Kshetrajna Vibhaga Yoga",
    descriptionKn: "ಶರೀರ (ಕ್ಷೇತ್ರ) ಮತ್ತು ಆತ್ಮ (ಕ್ಷೇತ್ರಜ್ಞ) ನಡುವಿನ ಜ್ಞಾನ.",
    descriptionEn: "Understanding the distinction between the physical body and the observer soul.",
    duration: "0:45:52"
  },
  {
    id: 14,
    filename: "15Chapter14.mp3",
    titleKn: "ಅಧ್ಯಾಯ 14: ಗುಣತ್ರಯವಿಭಾಗ ಯೋಗ",
    titleEn: "Chapter 14: Gunatraya Vibhaga Yoga",
    descriptionKn: "ಪ್ರಕೃತಿಯ ಮೂರು ಗುಣಗಳು: ಸತ್ತ್ವ, ರಜಸ್ ಮತ್ತು ತಮಸ್ ಜ್ಞಾನ.",
    descriptionEn: "The mechanics of three material modes: goodness, passion, and ignorance.",
    duration: "0:37:22"
  },
  {
    id: 15,
    filename: "16Chapter15.mp3",
    titleKn: "ಅಧ್ಯಾಯ 15: ಪುರುಷೋತ್ತಮ ಯೋಗ",
    titleEn: "Chapter 15: Purushottama Yoga",
    descriptionKn: "ಸಂಸಾರವೆಂಬ ಅಶ್ವತ್ಥ ವೃಕ್ಷ ಮತ್ತು ಪುರುಷೋತ್ತಮನ ಸ್ವರೂಪ.",
    descriptionEn: "The sacred banyan tree of cosmic existence and the nature of the Supreme Personality.",
    duration: "0:39:43"
  },
  {
    id: 16,
    filename: "17Chapter16.mp3",
    titleKn: "ಅಧ್ಯಾಯ 16: ದೈವಾಸುರಸಂಪದ್ವಿಭಾಗ ಯೋಗ",
    titleEn: "Chapter 16: Daivasura Sampad Vibhaga Yoga",
    descriptionKn: "ದೈವೀ ಗುಣಗಳು ಮತ್ತು ಆಸುರೀ ಸ್ವಭಾವಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ.",
    descriptionEn: "The divergence between divine virtues and destructive demoniac tendencies.",
    duration: "0:35:12"
  },
  {
    id: 17,
    filename: "18Chapter17.mp3",
    titleKn: "ಅಧ್ಯಾಯ 17: ಶ್ರದ್ಧಾತ್ರಯವಿಭಾಗ ಯೋಗ",
    titleEn: "Chapter 17: Shraddhatraya Vibhaga Yoga",
    descriptionKn: "ಆಹಾರ, ಯಜ್ಞ, ತಪಸ್ಸು ಮತ್ತು ದಾನಗಳಲ್ಲಿ ಮೂರು ವಿಧಗಳು.",
    descriptionEn: "The three fold divisions of faith, food, sacrifice, austerity, and charity.",
    duration: "0:43:47"
  },
  {
    id: 18,
    filename: "19Chapter18.mp3",
    titleKn: "ಅಧ್ಯಾಯ 18: ಮೋಕ್ಷಸನ್ಯಾಸ ಯೋಗ",
    titleEn: "Chapter 18: Moksha Sanyasa Yoga",
    descriptionKn: "ತ್ಯಾಗ, ಜ್ಞಾನ, ಕರ್ಮ ಮತ್ತು ಅಂತಿಮ ಶರಣಾಗತಿಯ ಪರಮ ಸಂದೇಶ.",
    descriptionEn: "The ultimate synthesis of renunciation, absolute surrender, and cosmic peace.",
    duration: "2:04:32"
  },
  {
    id: 19,
    filename: "20Upasanhar.mp3",
    titleKn: "ಉಪಸಂಹಾರ (ಮುಕ್ತಾಯ)",
    titleEn: "Conclusion (Upasanhar)",
    descriptionKn: "ಶ್ರೀ ಕೃಷ್ಣನ ಉಪದೇಶಗಳ ಸಾರಾಂಶ ಮತ್ತು ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಅನುಷ್ಠಾನ.",
    descriptionEn: "Summary of the teachings and guidelines for practicing Gita wisdom in daily life.",
    duration: "1:17:33"
  }
];

export default function Pravachana() {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = TRACKS[currentTrackIdx];
  const audioUrl = `https://archive.org/download/YatharthGeetaKannadaAudio/${currentTrack.filename}`;

  // SEO Update
  useEffect(() => {
    updateMetaTags(
      "Listen Bhagavad Gita Kannada Pravachana | Full Audio Chapters",
      "Listen to the complete Srimad Bhagavad Gita audio pravachana (chapters 1 to 18) in Kannada translation. Free streamable Yatharth Geeta discourse.",
      "Kannada Bhagavad Gita audio, Gita pravachana, listen Gita Kannada, Gita MP3 download, Yatharth Geeta audio Kannada"
    );
  }, []);

  // Sync Audio Playback
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIdx]);

  // Handle Play Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  // Time Updates
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  // Volume control
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
    }
    if (val > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

  // Navigation
  const playNext = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
  };

  const playPrev = () => {
    setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const handleTrackSelect = (idx: number) => {
    setCurrentTrackIdx(idx);
    setIsPlaying(true);
  };

  // Formatting helpers
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    const formattedSecs = s < 10 ? `0${s}` : s;
    if (h > 0) {
      const formattedMins = m < 10 ? `0${m}` : m;
      return `${h}:${formattedMins}:${formattedSecs}`;
    }
    return `${m}:${formattedSecs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden flex flex-col justify-between">
      <ProgressBar />
      <ParticlesBackdrop />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navbar />

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={playNext}
        preload="metadata"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 relative z-10">
        
        {/* Left Section: Playing Player */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-stretch gap-6">
          <div className="w-full bg-card/65 backdrop-blur-md border border-border/60 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
            {/* Ambient visualizer halo */}
            <div className={`absolute w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/10 blur-2xl pointer-events-none transition-all duration-1000 ${isPlaying ? "scale-125 opacity-100" : "scale-100 opacity-60"}`} />

            {/* Glowing Tag */}
            <div className="divine-badge inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="h-3 w-3" /> Yatharth Geeta Discourse
            </div>

            {/* Rotating Disc / Artwork */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Gold outer rim */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-amber-500/30 flex items-center justify-center p-2 relative">
                {/* Vinyl Rotation */}
                <motion.div 
                  className="w-full h-full rounded-full bg-gradient-to-tr from-amber-950 to-amber-900 border-2 border-amber-500/60 flex items-center justify-center p-3 relative shadow-2xl"
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >
                  {/* Inner vinyl ridges */}
                  <div className="absolute inset-2 border border-black/30 rounded-full" />
                  <div className="absolute inset-4 border border-black/30 rounded-full" />
                  <div className="absolute inset-6 border border-black/30 rounded-full" />
                  
                  {/* Center core */}
                  <div className="w-16 h-16 rounded-full bg-amber-500 border border-amber-600 flex items-center justify-center relative">
                    <span className="text-xl font-serif text-white font-bold select-none">ॐ</span>
                  </div>
                </motion.div>
                
                {/* Decorative playing needle */}
                <div className="absolute -top-4 right-2 w-16 h-16 pointer-events-none origin-top-right transition-transform duration-500"
                  style={{
                    transform: isPlaying ? "rotate(-8deg)" : "rotate(-35deg)"
                  }}
                >
                  <div className="w-1.5 h-12 bg-muted-foreground/60 rounded-full transform rotate-12 ml-6 shadow-md" />
                  <div className="w-3 h-3 bg-primary rounded-full -mt-2.5 ml-5" />
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="max-w-md mb-6 z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gradient-gold leading-tight mb-2">
                {currentTrack.titleKn}
              </h2>
              <h3 className="text-sm font-sans font-medium text-muted-foreground/80 mb-4">
                {currentTrack.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans px-4">
                {currentTrack.descriptionKn}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-sans italic px-6">
                "{currentTrack.descriptionEn}"
              </p>
            </div>

            {/* Progress Bar Seeker */}
            <div className="w-full max-w-lg mb-4 font-sans z-10">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleAudioSeek}
                className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary border-none focus:outline-none"
              />
              <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1 px-1">
                <span>{formatTime(currentTime)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatTime(duration) !== "0:00" ? formatTime(duration) : currentTrack.duration}
                </span>
              </div>
            </div>

            {/* Action Player Controls */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 z-10">
              {/* Prev */}
              <button
                onClick={playPrev}
                className="p-3 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all cursor-pointer"
                aria-label="Previous track"
              >
                <SkipBack className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Play Pause */}
              <button
                onClick={togglePlay}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg cursor-pointer transition-all hover:scale-105 active:scale-95 btn-glow btn-shimmer"
                aria-label={isPlaying ? "Pause track" : "Play track"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 sm:h-7 sm:w-7 fill-white text-white" />
                ) : (
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-white text-white translate-x-0.5" />
                )}
              </button>

              {/* Next */}
              <button
                onClick={playNext}
                className="p-3 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all cursor-pointer"
                aria-label="Next track"
              >
                <SkipForward className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Bottom Actions: Volume & Playlist toggle */}
            <div className="w-full max-w-md flex items-center justify-between gap-4 font-sans text-xs border-t border-border/40 pt-5 mt-2 z-10">
              {/* Volume Seeker */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="Toggle mute"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-4 w-4 text-red-500" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 sm:w-24 h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Playlist button */}
              <button
                onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                  isPlaylistOpen 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "border-primary/20 bg-background/30 text-muted-foreground hover:text-primary"
                }`}
              >
                <ListMusic className="h-3.5 w-3.5" />
                <span>{isPlaylistOpen ? "Hide Playlist" : "Show Playlist"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Chapters Playlist */}
        <AnimatePresence>
          {isPlaylistOpen && (
            <motion.div 
              className="w-full lg:w-96 bg-card/65 backdrop-blur-md border border-border/60 rounded-3xl p-5 shadow-xl flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-3">
                  <h3 className="font-bold text-sm text-primary flex items-center gap-1.5">
                    <Music className="h-4 w-4" /> Chapters & Pravachanas
                  </h3>
                  <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full font-sans">
                    {TRACKS.length} Tracks
                  </span>
                </div>

                {/* Playlist Scrollable Items */}
                <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[350px] lg:max-h-[500px] pr-1">
                  {TRACKS.map((track, idx) => (
                    <button
                      key={track.id}
                      onClick={() => handleTrackSelect(idx)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border font-sans cursor-pointer ${
                        idx === currentTrackIdx
                          ? "bg-primary/10 border-primary/30 text-primary font-semibold shadow-sm"
                          : "border-transparent bg-muted/10 hover:bg-muted/30 text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Index number or playing waves */}
                        <div className="flex items-center justify-center w-6 h-6 rounded-lg text-[10px] bg-background/50 border border-border/50 text-muted-foreground shrink-0 font-bold">
                          {idx === currentTrackIdx && isPlaying ? (
                            <span className="flex gap-0.5 items-end justify-center h-2.5 w-2.5">
                              <span className="w-0.5 h-2 bg-primary animate-bounce rounded-full" style={{ animationDelay: "0s" }} />
                              <span className="w-0.5 h-3 bg-primary animate-bounce rounded-full" style={{ animationDelay: "0.15s" }} />
                              <span className="w-0.5 h-1.5 bg-primary animate-bounce rounded-full" style={{ animationDelay: "0.3s" }} />
                            </span>
                          ) : (
                            idx + 1
                          )}
                        </div>

                        {/* Title details */}
                        <div className="min-w-0">
                          <p className="text-xs truncate font-bold">{track.titleKn}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{track.titleEn}</p>
                        </div>
                      </div>

                      {/* Duration info */}
                      <span className="text-[10px] text-muted-foreground shrink-0 flex items-center gap-1 pl-2">
                        <Clock className="h-2.5 w-2.5" />
                        {track.duration.startsWith("0:") ? track.duration.substring(2) : track.duration}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-start gap-2 bg-primary/5 border border-primary/10 rounded-2xl p-3.5 mt-4 text-[10px] text-muted-foreground leading-relaxed">
                  <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="font-sans">
                    <strong>Note:</strong> Audios are sourced from public domain recitations of Swami Adgadanandji's Yatharth Geeta in Kannada, shared via Archive.org under Creative Commons license.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center opacity-60 text-xs">
        © {new Date().getFullYear()} Srimad Bhagavad Gita · Yatharth Geeta Discourse
      </footer>
    </div>
  );
}
