import { useState, useEffect } from "react";
import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Search, X, Volume2, VolumeX, Menu, Compass, BookOpenCheck, 
  Info, Bookmark, ArrowRight, Sparkles, GraduationCap, Heart, Flame, Crown, Globe,
  MessageSquareMore, Music, Play, Frown, Trophy, Smile, AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { updateMetaTags } from "@/lib/seo";
import { useSpeech } from "@/lib/speech";
import { getSadhanaStats, type SadhanaStats } from "@/lib/sadhana";

// Global Audio Singleton for continuous playback across pages
export let globalAudio: HTMLAudioElement | null = null;
if (typeof window !== "undefined") {
  globalAudio = new Audio("https://gita.sanatana360.com/Krishna.mp3");
  globalAudio.loop = true;
  globalAudio.volume = 0.2;
}

// 1. Scroll Progress Bar Component
export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-primary/10 z-50 pointer-events-none" aria-hidden="true">
      <motion.div 
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

export function FloatingFlute() {
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center select-none" aria-hidden="true">
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [-14, -10, -14],
          scale: [0.95, 1.03, 0.95]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-full h-full opacity-[0.22] dark:opacity-[0.28]"
      >
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Golden Bamboo Flute Gradient */}
            <linearGradient id="fluteGold" x1="50" y1="240" x2="450" y2="256" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="10%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="90%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Peacock Feather Outer Teal/Green Gradient */}
            <linearGradient id="peacockTeal" x1="150" y1="50" x2="280" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Peacock Feather Inner Blue/Indigo Gradient */}
            <linearGradient id="peacockBlue" x1="175" y1="70" x2="265" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Peacock Feather Deep Core */}
            <radialGradient id="peacockCore" cx="210" cy="95" r="15" fx="210" fy="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="60%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#312e81" />
            </radialGradient>

            {/* Sacred Saffron Tassels */}
            <linearGradient id="tasselSaffron" x1="430" y1="248" x2="450" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>

          {/* Divine Background Aura */}
          <circle cx="250" cy="250" r="160" fill="#f59e0b" opacity="0.05" />

          {/* Peacock Feather */}
          {/* Outer Layer */}
          <path d="M 280 120 C 260 80, 240 60, 210 50 C 180 40, 160 50, 150 70 C 140 90, 150 120, 180 140 C 210 160, 250 150, 280 120 Z" fill="url(#peacockTeal)" stroke="#fbbf24" strokeWidth="2.5" />
          
          {/* Middle Blue Layer */}
          <path d="M 265 110 C 250 85, 235 75, 215 70 C 195 65, 180 70, 175 80 C 170 90, 180 110, 200 120 C 220 130, 250 125, 265 110 Z" fill="url(#peacockBlue)" stroke="#f59e0b" strokeWidth="1.5" />
          
          {/* Core Eye */}
          <circle cx="210" cy="95" r="14" fill="url(#peacockCore)" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="206" cy="91" r="4" fill="#ffffff" opacity="0.6" />
          
          {/* Feather Stem */}
          <path d="M 210 95 C 230 140, 260 190, 290 230" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Feather barbs (green/gold lines radiating outward) */}
          <path d="M 230 135 C 210 125, 190 120, 170 120" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
          <path d="M 240 155 C 220 145, 200 140, 180 140" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
          <path d="M 250 175 C 230 165, 210 160, 190 160" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
          
          <path d="M 225 125 C 245 115, 265 110, 285 110" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
          <path d="M 235 145 C 255 135, 275 130, 295 130" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
          <path d="M 245 165 C 265 155, 285 150, 305 150" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />

          {/* Flute Body */}
          <g transform="rotate(-15, 250, 250)">
            {/* The Bamboo pipe */}
            <rect x="50" y="240" width="400" height="18" rx="9" fill="url(#fluteGold)" stroke="#b45309" strokeWidth="2.5" />
            
            {/* Mouth hole */}
            <ellipse cx="80" cy="249" rx="5" ry="3.5" fill="#78350f" />
            
            {/* Finger holes */}
            <circle cx="160" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="200" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="240" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="280" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="320" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="360" cy="249" r="4.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />

            {/* Sacred Tassels */}
            <path d="M 430 249 C 435 269, 440 279, 435 299" stroke="url(#tasselSaffron)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="435" cy="299" r="5" fill="#e11d48" stroke="#fbbf24" strokeWidth="1" />
            <path d="M 435 299 C 430 310, 425 315, 428 332" stroke="url(#tasselSaffron)" strokeWidth="1.5" />
            <circle cx="428" cy="332" r="3.5" fill="#f59e0b" />

            <path d="M 440 249 C 448 269, 452 284, 450 304" stroke="url(#tasselSaffron)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="450" cy="304" r="5" fill="#e11d48" stroke="#fbbf24" strokeWidth="1" />
            <path d="M 450 304 C 445 314, 442 324, 445 340" stroke="url(#tasselSaffron)" strokeWidth="1.5" />
            <circle cx="445" cy="340" r="3.5" fill="#f59e0b" />
          </g>

          {/* Divine sparks / waves */}
          <path d="M 120 280 Q 200 325, 280 280 T 440 280" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
          <path d="M 80 220 Q 180 175, 280 220 T 380 220" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          
          {/* Floating gold stars/sparks */}
          <circle cx="100" cy="210" r="2" fill="#fbbf24" />
          <circle cx="150" cy="310" r="1.5" fill="#fbbf24" />
          <circle cx="340" cy="180" r="2" fill="#fbbf24" />
          <circle cx="400" cy="270" r="2.5" fill="#f59e0b" />
        </svg>
      </motion.div>
    </div>
  );
}

// 2. Ambient Particles Component
export function ParticlesBackdrop() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const particleCount = dimensions.width < 768 ? 10 : 25;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <FloatingFlute />
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
          initial={{ 
            x: Math.random() * dimensions.width, 
            y: Math.random() * dimensions.height + dimensions.height 
          }}
          animate={{ 
            y: -20,
            x: `calc(${Math.random() * dimensions.width}px + ${Math.sin(i) * 30}px)`
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 0.4 
          }}
        />
      ))}
    </div>
  );
}

// 3. Audio Player Component
export function AudioWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(20);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (globalAudio) {
      setIsPlaying(!globalAudio.paused);
      setVolume(globalAudio.volume * 100);
    }
  }, []);

  const togglePlayback = () => {
    if (!globalAudio) return;
    if (isPlaying) {
      globalAudio.pause();
      setIsPlaying(false);
    } else {
      globalAudio.play().catch(err => console.log("Audio play blocked by browser:", err));
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    if (globalAudio) {
      globalAudio.volume = val / 100;
    }
  };

  return (
    <motion.div 
      className="fixed bottom-20 md:bottom-6 right-6 md:right-40 z-40 bg-card/95 backdrop-blur-md border border-primary/20 rounded-full p-1.5 shadow-2xl flex items-center gap-2 overflow-hidden cursor-pointer shadow-primary/5 select-none"
      animate={{ 
        width: isExpanded ? "210px" : "44px",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Icon Sphere */}
      <div className="p-2 rounded-full bg-primary text-primary-foreground flex items-center justify-center h-8.5 w-8.5 shrink-0 shadow-md">
        {isPlaying ? (
          <Volume2 className="h-4 w-4 animate-pulse" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </div>

      {/* Expanded Controls Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 pr-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Play Button Toggle */}
            <button 
              onClick={togglePlayback}
              className="text-[11px] font-sans font-bold text-primary hover:text-primary/80 transition-colors uppercase px-1 cursor-pointer"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Separator */}
            <div className="h-3.5 w-px bg-primary/15" />

            {/* Slider */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              aria-label="Volume slider"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// 4. Mobile Nav Drawer Menu Component
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MobileNavDrawer({ isOpen, onClose }: MobileNavProps) {
  const quickLinks = [
    { href: "/", label: "Gita Home", icon: Compass },
    { href: "/chapters", label: "All Chapters", icon: BookOpen },
    { href: "/verses", label: "All Verses", icon: BookOpenCheck },
    { href: "/bookmarks", label: "My Bookmarks", icon: Bookmark },
    { href: "/chat", label: "Ask Krishna", icon: Sparkles },
    { href: "/pravachana", label: "Listen Gita (Audio)", icon: Music },
    { href: "/storybook", label: "Gita Storybook", icon: BookOpen },
    { href: "/about", label: "About Gita", icon: Info },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Blur Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Navigation Drawer Container */}
          <motion.nav 
            className="absolute top-0 right-0 h-full w-72 bg-card border-l border-primary/10 p-6 flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between mb-8 mt-2">
              <span className="text-lg font-bold text-primary tracking-wide">Bhagavad Gita</span>
              <button 
                onClick={onClose} 
                className="p-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3 mb-3">Navigation</h3>
              {quickLinks.map(link => {
                const Icon = link.icon;
                return (
                  <Link key={link.href} href={link.href} onClick={onClose} className="flex items-center gap-3.5 py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium">
                    <Icon className="h-5 w-5 text-primary/70" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-border/50 text-center space-y-4">
              <a 
                href="https://play.google.com/store/apps/details?id=co.median.android.mbbopqr&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-black border border-border/40 hover:bg-zinc-900 text-white font-sans transition-all w-full justify-center shadow-lg btn-glow"
                aria-label="Install Bhagavad Gita app from Google Play Store"
              >
                <svg viewBox="0 0 512 512" className="h-4 w-4 fill-white shrink-0">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.7-60.7 60.7-60.7 58 33.3c15.1 8.7 25.3 24.3 25.3 42.1s-10.2 33.4-25.3 42.1zM385.4 337.8L104.6 499l220.7-220.7 60.1 59.5z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[7px] uppercase tracking-wider text-zinc-400 font-medium font-sans">GET IT ON</div>
                  <div className="text-xs font-bold font-sans mt-0.5">Google Play</div>
                </div>
              </a>

              <p className="text-[11px] text-muted-foreground font-sans">
                Timeless Wisdom for Modern Living
              </p>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

// 5. Verse of the Day Component
interface RandomVerse {
  chapterId: number;
  verseIndex: number;
  kannada: string;
  transliteration: string;
  meaning: string;
}
function VerseOfTheDay() {
  const [verse, setVerse] = useState<RandomVerse | null>(null);

  useEffect(() => {
    if (bhagavadGitaData && bhagavadGitaData.length > 0) {
      // Pick random chapter
      const ch = bhagavadGitaData[Math.floor(Math.random() * bhagavadGitaData.length)];
      if (ch.verses && ch.verses.length > 0) {
        // Pick random verse
        const v = ch.verses[Math.floor(Math.random() * ch.verses.length)];
        setVerse({
          chapterId: ch.id,
          verseIndex: v.verse,
          kannada: v.kannada,
          transliteration: v.transliteration,
          meaning: v.meaning
        });
      }
    }
  }, []);

  if (!verse) return null;

  return (
    <motion.div 
      className="max-w-2xl mx-auto px-4 mt-10 mb-6 font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="border border-primary/20 bg-card/65 backdrop-blur-sm shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 text-primary/10 group-hover:text-primary/20 transition-colors">
          <Sparkles className="h-10 w-10" />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
              Verse of the Day
            </span>
            <span className="text-xs text-muted-foreground">
              Chapter {verse.chapterId}.{verse.verseIndex}
            </span>
          </div>
          <CardTitle className="text-base font-serif italic text-foreground/90 font-semibold line-clamp-3 leading-relaxed">
            "{verse.kannada}"
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-xs text-muted-foreground font-serif italic mb-3">
            {verse.transliteration}
          </p>
          <div className="border-t border-primary/10 pt-3 flex items-center justify-between">
            <div className="text-xs text-foreground/80 line-clamp-2 max-w-[80%]">
              <strong>Meaning:</strong> {verse.meaning}
            </div>
            <Link href={`/chapter/${verse.chapterId}/verse/${verse.verseIndex}`}>
              <Button size="sm" variant="ghost" className="gap-1 text-primary text-xs hover:text-primary hover:bg-primary/10 px-2.5">
                Read Full <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// 6. Live Search Component
interface SearchResult {
  type: "chapter" | "verse";
  chapterId: number;
  verseId?: string;
  verseIndex?: number;
  title: string;
  preview: string;
}
function SearchSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const q = query.toLowerCase();
      const matches: SearchResult[] = [];

      for (const ch of bhagavadGitaData) {
        // Match Chapter Header
        if (
          ch.title.toLowerCase().includes(q) ||
          ch.kannadaTitle.toLowerCase().includes(q) ||
          ch.description.toLowerCase().includes(q)
        ) {
          matches.push({
            type: "chapter",
            chapterId: ch.id,
            title: `Chapter ${ch.id}: ${ch.title}`,
            preview: ch.description
          });
        }

        // Match Verses
        if (ch.verses) {
          for (const v of ch.verses) {
            if (
              v.kannada.toLowerCase().includes(q) ||
              v.transliteration.toLowerCase().includes(q) ||
              v.meaning.toLowerCase().includes(q)
            ) {
              matches.push({
                type: "verse",
                chapterId: ch.id,
                verseId: v.id,
                verseIndex: v.verse,
                title: `Verse ${ch.id}.${v.verse}`,
                preview: v.meaning
              });
            }
          }
        }
      }

      setResults(matches);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setShowAll(false);
  };

  const displayedResults = showAll ? results : results.slice(0, 5);

  return (
    <div className="relative max-w-2xl mx-auto px-4 z-30" id="search">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search verses, chapters, translations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full pl-12 pr-10 py-5 rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm focus:ring-primary focus:border-primary shadow-md hover:shadow-lg transition-all"
        />
        {query && (
          <button 
            onClick={clearSearch}
            className="absolute right-3.5 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-muted"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {results.length > 0 && isFocused && (
          <motion.div 
            className="absolute top-full left-4 right-4 mt-2 bg-card border border-primary/15 rounded-2xl shadow-2xl overflow-y-auto max-h-96 z-50 text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="p-3 border-b border-primary/10 flex items-center justify-between text-xs font-sans text-muted-foreground">
              <span>{results.length} results found</span>
              {results.length > 5 && !showAll && (
                <button 
                  onClick={() => setShowAll(true)}
                  className="text-primary hover:underline font-bold"
                >
                  View All
                </button>
              )}
            </div>
            <div className="divide-y divide-border/40">
              {displayedResults.map((res, index) => {
                const path = res.type === "chapter" 
                  ? `/chapter/${res.chapterId}`
                  : `/chapter/${res.chapterId}/verse/${res.verseIndex}`;
                return (
                  <Link key={index} href={path}>
                    <div 
                      onClick={() => setIsFocused(false)}
                      className="p-4 hover:bg-primary/5 cursor-pointer transition-colors block text-left"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs uppercase font-bold text-primary">
                          {res.type}
                        </span>
                        <h4 className="text-sm font-bold text-foreground">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {res.preview}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const EMOTIONS = [
  { id: "stress", labelKn: "ಒತ್ತಡ / ಆತಂಕ", labelEn: "Stress / Anxiety", icon: AlertCircle, color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30" },
  { id: "anger", labelKn: "ಕೋಪ / ಕ್ರೋಧ", labelEn: "Anger / Frustration", icon: Flame, color: "from-red-500/10 to-orange-500/10 border-red-500/30" },
  { id: "fear", labelKn: "ಭಯ / ಆತಂಕ", labelEn: "Fear / Worry", icon: Bookmark, color: "from-purple-500/10 to-pink-500/10 border-purple-500/30" },
  { id: "confusion", labelKn: "ಗೊಂದಲ", labelEn: "Confusion / Doubt", icon: Compass, color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/30" },
  { id: "grief", labelKn: "ದುಃಖ / ಶೋಕ", labelEn: "Grief / Sorrow", icon: Frown, color: "from-teal-500/10 to-emerald-500/10 border-teal-500/30" },
];

const EMOTION_REMEDIES: Record<string, {
  titleKn: string;
  titleEn: string;
  krishnaAdviceKn: string;
  krishnaAdviceEn: string;
  verses: { chapter: number; verse: number; desc: string; descKn: string }[];
}> = {
  stress: {
    titleKn: "ಒತ್ತಡ ಮತ್ತು ಆತಂಕಕ್ಕಿರುವ ಪರಿಹಾರ",
    titleEn: "Remedy for Stress & Anxiety",
    krishnaAdviceKn: "ಓ ಸತ್ಯಾನ್ವೇಷಕನೇ, ಫಲಿತಾಂಶಗಳ ಬಗ್ಗೆ ಚಿಂತಿಸದೆ ಕರ್ತವ್ಯದ ಮೇಲೆ ಗಮನ ಹರಿಸಿ. ನಿಮ್ಮ ಚಿಂತೆಗಳನ್ನು ಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿಸಿ ಮತ್ತು ಶಾಂತಿಯನ್ನು ಪಡೆದುಕೊಳ್ಳಿ.",
    krishnaAdviceEn: "O seeker of truth, focus on your duties, not the fruits. Detach from outcomes, surrender your worries to Me, and find absolute inner peace.",
    verses: [
      { chapter: 2, verse: 47, desc: "Action without concern for results.", descKn: "ಕರ್ಮದ ಮೇಲಷ್ಟೇ ನಿನ್ನ ಅಧಿಕಾರ, ಫಲಗಳ ಮೇಲಲ್ಲ." },
      { chapter: 18, verse: 66, desc: "Absolute surrender to the Divine.", descKn: "ಎಲ್ಲಾ ಧರ್ಮಗಳನ್ನು ತೊರೆದು ನನ್ನೊಬ್ಬನಿಗೆ ಶರಣಾಗು." }
    ]
  },
  anger: {
    titleKn: "ಕೋಪ ಮತ್ತು ಅಶಾಂತಿಗಿರುವ ಪರಿಹಾರ",
    titleEn: "Remedy for Anger & Frustration",
    krishnaAdviceKn: "ಕೋಪವು ಅತಿಯಾದ ಆಸಕ್ತಿ ಮತ್ತು ನೆರವೇರದ ಆಸೆಗಳಿಂದ ಹುಟ್ಟುತ್ತದೆ. ಇದರಿಂದ ಬುದ್ಧಿಶಕ್ತಿ ನಾಶವಾಗುತ್ತದೆ. ಆಸೆಗಳನ್ನು ನಿಯಂತ್ರಿಸುವುದೇ ಕೋಪವನ್ನು ಗೆಲ್ಲುವ ಮಾರ್ಗ.",
    krishnaAdviceEn: "Anger arises from attachment and unfulfilled desire. It clouds discrimination, leading to loss of memory and ruin of intellect. Control desires to conquer anger.",
    verses: [
      { chapter: 2, verse: 62, desc: "Attachment breeds desire, desire breeds anger.", descKn: "ವಿಷಯಗಳ ಚಿಂತನೆಯಿಂದ ಅತಿಯಾದ ಆಸಕ್ತಿ, ಆಸಕ್ತಿಯಿಂದ ಕೋಪ ಹುಟ್ಟುತ್ತದೆ." },
      { chapter: 2, verse: 63, desc: "Anger leads to delusion and destruction.", descKn: "ಕೋಪದಿಂದ ಗೊಂದಲ, ಗೊಂದಲದಿಂದ ಬುದ್ಧಿನಾಶ, ಕೊನೆಗೆ ಮನುಷ್ಯನ ಸರ್ವನಾಶ." }
    ]
  },
  fear: {
    titleKn: "ಭಯ ನಿವಾರಣೆಗೆ ಪರಿಹಾರ",
    titleEn: "Remedy for Overcoming Fear",
    krishnaAdviceKn: "ಭಯವು ಅಜ್ಞಾನದಿಂದ ಹುಟ್ಟುವ ಭ್ರಮೆಯಾಗಿದೆ. ನಿಮ್ಮ ಆತ್ಮವು ಅಮರ ಹಾಗೂ ಅಳಿಸಲಾಗದ್ದು ಎಂಬುದನ್ನು ಅರಿತುಕೊಳ್ಳಿ. ಭಯವಿಲ್ಲದೆ ನಿಮ್ಮ ಕರ್ತವ್ಯವನ್ನು ಮಾಡಿ.",
    krishnaAdviceEn: "Fear is an illusion born of ignorance. Recognize that your true self (Atman) is eternal, indestructible, and divine. Stand firm in your duty without fear.",
    verses: [
      { chapter: 4, verse: 10, desc: "Freedom from attachment, fear, and anger.", descKn: "ರಾಗ, ಭಯ, ಕ್ರೋಧಗಳಿಂದ ಮುಕ್ತರಾದವರು ನನ್ನನ್ನು ಸೇರುತ್ತಾರೆ." },
      { chapter: 18, verse: 30, desc: "Understanding what is to be feared and what is not.", descKn: "ಯಾವುದಕ್ಕೆ ಹೆದರಬೇಕು ಮತ್ತು ಯಾವುದಕ್ಕೆ ಹೆದರಬಾರದು ಎಂದು ತಿಳಿಯುವುದೇ ಸಾತ್ವಿಕ ಬುದ್ಧಿ." }
    ]
  },
  confusion: {
    titleKn: "ಗೊಂದಲ ಮತ್ತು ಅನಿಶ್ಚಿತತೆಗೆ ಪರಿಹಾರ",
    titleEn: "Remedy for Confusion & Doubt",
    krishnaAdviceKn: "ನಿಮ್ಮ ಮನಸ್ಸು ಗೊಂದಲದಲ್ಲಿದ್ದಾಗ, ನಿಷ್ಕಾಮ ಕರ್ಮದ ಮೂಲಕ ಸತ್ಯವನ್ನು ಹುಡುಕಿ. ಪರಮಾತ್ಮನಲ್ಲಿ ಶರಣಾಗುವುದರಿಂದ ಮಾತ್ರ ನಿಜವಾದ ಮಾರ್ಗ ಗೋಚರಿಸುತ್ತದೆ.",
    krishnaAdviceEn: "When your mind is bewildered by conflicting opinions, seek shelter in true spiritual wisdom. Perform your duty selflessly and clear all doubts.",
    verses: [
      { chapter: 2, verse: 7, desc: "Arjuna's surrender for guidance.", descKn: "ಗೊಂದಲಕ್ಕೊಳಗಾದ ನಾನು ನಿನಗೆ ಶರಣಾಗುತ್ತಿದ್ದೇನೆ, ನನಗೆ ಯಾವುದು ಒಳಿತೋ ಅದನ್ನು ಬೋಧಿಸು." },
      { chapter: 3, verse: 2, desc: "Resolving confusing choices.", descKn: "ವ್ಯಾಕುಲಗೊಳಿಸುವ ಮಾತುಗಳಿಂದ ಗೊಂದಲಕ್ಕೊಳಗಾದ ನನ್ನ ಬುದ್ಧಿಯನ್ನು ಸರಿಪಡಿಸು." }
    ]
  },
  grief: {
    titleKn: "ದುಃಖ ಮತ್ತು ಶೋಕ ನಿವಾರಣೆಗೆ ಪರಿಹಾರ",
    titleEn: "Remedy for Grief & Sorrow",
    krishnaAdviceKn: "ಆತ್ಮವು ನಿತ್ಯವಾದದ್ದು, ಅದು ಎಂದೂ ಹುಟ್ಟುವುದಿಲ್ಲ ಮತ್ತು ಸಾಯುವುದಿಲ್ಲ. ಅಶಾಶ್ವತವಾದ ದೇಹಕ್ಕಾಗಿ ದುಃಖಿಸಬೇಡಿ. ಸತ್ಯದ ಬೆಳಕಿನಲ್ಲಿ ಆನಂದವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    krishnaAdviceEn: "The soul is eternal; it is neither born nor does it ever die. Grieve not for the physical body, which is transient. Find solace in the eternal spiritual truth.",
    verses: [
      { chapter: 2, verse: 11, desc: "The wise do not grieve for the living or dead.", descKn: "ಜ್ಞಾನಿಗಳು ಬದುಕಿರುವವರಿಗಾಗಲೀ ಅಥವಾ ಮೃತರಾದವರಿಗಾಗಲೀ ಶೋಕಿಸುವುದಿಲ್ಲ." },
      { chapter: 2, verse: 27, desc: "Death is certain for the born.", descKn: "ಹುಟ್ಟಿದವನಿಗೆ ಸಾವು ನಿಶ್ಚಿತ, ಸತ್ತವನಿಗೆ ಮರುಹುಟ್ಟು ನಿಶ್ಚಿತ. ಇದಕ್ಕಾಗಿ ಶೋಕಿಸಬೇಡ." }
    ]
  }
};

// Main Home Page Component
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState("all");
  const [guidanceVerse, setGuidanceVerse] = useState<any>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const { activeTextId, speak, stop } = useSpeech();
  
  // Sadhana & Emotional Remedies State
  const [sadhana, setSadhana] = useState<SadhanaStats>({ streakCount: 0, lastReadDate: null, completedVerses: [] });
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  useEffect(() => {
    setSadhana(getSadhanaStats());
  }, []);

  const getKrishnaGuidance = () => {
    setIsRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomChapter = bhagavadGitaData[Math.floor(Math.random() * bhagavadGitaData.length)];
      const randomVerse = randomChapter.verses[Math.floor(Math.random() * randomChapter.verses.length)];
      setGuidanceVerse({
        chapterId: randomChapter.id,
        chapterTitle: randomChapter.title,
        chapterKTitle: randomChapter.kannadaTitle,
        ...randomVerse
      });
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 80);
  };

  const getQuizOptions = (step: number) => {
    if (step === 1) {
      return [
        { label: "Perform tasks immediately with dedication to duty, letting go of outcomes.", value: "karma" },
        { label: "Dedicate tasks as an offering of love and devotion to the Divine.", value: "bhakti" },
        { label: "Analyze, reflect, and seek the absolute truth and reason behind actions.", value: "jnana" },
        { label: "Focus with calm concentration, self-discipline, and deep mindfulness.", value: "raja" }
      ];
    }
    if (step === 2) {
      return [
        { label: "Remain calm and seek absolute clarity and logical truth.", value: "jnana" },
        { label: "Pray for divine guidance and surrender to a higher will.", value: "bhakti" },
        { label: "Engage immediately in doing my duty without hesitation.", value: "karma" },
        { label: "Retreat to silent reflection and meditation to compose my mind.", value: "raja" }
      ];
    }
    return [
      { label: "Gaining ultimate wisdom and logical self-realization.", value: "jnana" },
      { label: "Experiencing pure unconditional love and surrender to the Lord.", value: "bhakti" },
      { label: "Serving the world selflessly, protecting and spreading Dharma.", value: "karma" },
      { label: "Attaining complete self-mastery, mental peace, and stillness.", value: "raja" }
    ];
  };

  const handleAnswerSelect = (val: string) => {
    const nextAnswers = [...answers, val];
    setAnswers(nextAnswers);
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(4);
    }
  };

  const getQuizResult = () => {
    const counts: { [key: string]: number } = { karma: 0, bhakti: 0, jnana: 0, raja: 0 };
    answers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
    
    let dominant = "karma";
    let max = 0;
    for (const key in counts) {
      if (counts[key] > max) {
        max = counts[key];
        dominant = key;
      }
    }

    if (dominant === "bhakti") {
      return {
        pathName: "Bhakti Yogi • ಭಕ್ತಿ ಯೋಗಿ",
        description: "Your dominant path is devotion, surrender, and absolute love. You connect to the cosmos through the heart, seeing the Divine in all beings.",
        verseLoc: "Chapter 12, Verse 8",
        verseText: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय । निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ॥",
        verseMeaning: "Fix your mind on Me alone and let your intellect dwell in Me. You will hereafter abide in Me alone, without a doubt."
      };
    }
    if (dominant === "jnana") {
      return {
        pathName: "Jnana Yogi • ಜ್ಞಾನ ಯೋಗಿ",
        description: "Your dominant path is analytical wisdom, logic, and self-realization. You seek truth through discrimination of the eternal and transient.",
        verseLoc: "Chapter 4, Verse 38",
        verseText: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते । तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥",
        verseMeaning: "In this world, there is indeed no purifier like spiritual knowledge. He who becomes perfected in Yoga finds it within himself in course of time."
      };
    }
    if (dominant === "raja") {
      return {
        pathName: "Raja Yogi (Dhyana Yoga) • ಧ್ಯಾನ ಯೋಗಿ",
        description: "Your dominant path is self-mastery, deep meditation, mindfulness, and silent contemplation. You conquer the modifications of the mind.",
        verseLoc: "Chapter 6, Verse 5",
        verseText: "ಉದ್ಧರೇದಾತ್ಮನಾತ್ಮಾನಂ ನಾತ್ಮಾನಮವಸಾದಯೇತ್ । ಆತ್ಮೈವ ಹ್ಯಾತ್ಮನೋ ಬಂಧುರಾತ್ಮೈವ ರಿಪುರಾತ್ಮನಃ ॥",
        verseMeaning: "Elevate yourself by your own mind, and do not degrade yourself. For the mind is the friend of the soul, and the mind is also the enemy of the soul."
      };
    }
    return {
      pathName: "Karma Yogi • ಕರ್ಮ ಯೋಗಿ",
      description: "Your dominant path is selfless action, work, and dedicated service. You perform your prescribed duties with absolute focus, letting go of outcomes.",
      verseLoc: "Chapter 2, Verse 47",
      verseText: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
      verseMeaning: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of results, nor be attached to inactivity."
    };
  };

  useEffect(() => {
    updateMetaTags(
      "Srimad Bhagavad Gita | Kannada & English Translation",
      "Explore the 18 chapters and 700 verses of Srimad Bhagavad Gita with full translations, slokas, and meanings in Kannada and English. Speak with Lord Krishna AI.",
      "Bhagavad Gita, Bhagavad Gita Kannada, Krishna AI chatbot, Arjuna, chapters, verses, student gita, devotee gita, yogi gita, leader gita"
    );
  }, []);

  const paths = [
    { id: "student", label: "Student", icon: GraduationCap, description: "Learn fundamental concepts of duty, focus, and knowledge.", chapters: [2, 3, 4] },
    { id: "devotee", label: "Devotee", icon: Heart, description: "Explore the path of love, surrender, and devotion (Bhakti).", chapters: [9, 10, 12] },
    { id: "yogi", label: "Yogi", icon: Flame, description: "Understand meditation, self-control, and mindfulness.", chapters: [6, 8, 14] },
    { id: "leader", label: "Leader", icon: Crown, description: "Gain wisdom on decision-making, leadership, and action.", chapters: [1, 2, 3, 18] },
  ];

  const filteredChapters = selectedPath === "all"
    ? bhagavadGitaData
    : bhagavadGitaData.filter(ch => 
        paths.find(p => p.id === selectedPath)?.chapters.includes(ch.id)
      );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden">
      <ProgressBar />
      <ParticlesBackdrop />
      <AudioWidget />

      {/* Floating Circles for ambiance */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-md font-bold font-serif text-lg logo-glow">
              ॐ
            </span>
            <span className="font-bold text-lg tracking-wide hidden sm:inline-block text-gradient-gold">
              Bhagavad Gita
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="nav-link active text-primary font-semibold">Home</Link>
            <Link href="/chapters" className="nav-link text-muted-foreground hover:text-primary">Chapters</Link>
            <Link href="/verses" className="nav-link text-muted-foreground hover:text-primary">Verses</Link>
            <Link href="/bookmarks" className="nav-link text-muted-foreground hover:text-primary">Bookmarks</Link>
            <Link href="/chat" className="nav-link text-muted-foreground hover:text-primary">Ask Krishna</Link>
            <Link href="/pravachana" className="nav-link text-muted-foreground hover:text-primary">Listen Gita</Link>
            <Link href="/storybook" className="nav-link text-muted-foreground hover:text-primary">Gita Storybook</Link>
            <Link href="/about" className="nav-link text-muted-foreground hover:text-primary">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Hero Banner Section */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Divine Om Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full divine-badge mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-base">🕉️</span>
            <span>ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ · Srimad Bhagavad Gita</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-3 tracking-tight hero-title-animated overflow-visible"
            style={{ WebkitBoxDecorationBreak: "clone" }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground font-serif mb-5 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Eternal Song of the Divine
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Explore the divine dialogue between Lord Krishna and Arjuna — 18 chapters, 700 verses of eternal wisdom on life, duty, and devotion.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/chat" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg btn-shimmer btn-glow divine-ripple cursor-pointer">
              <span>🙏</span> Ask Krishna
            </Link>
            <Link href="/pravachana" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-primary/40 text-primary font-bold text-sm shadow-md hover:bg-primary/20 transition-all divine-ripple cursor-pointer">
              <Music className="h-4 w-4 animate-pulse text-amber-500" /> Listen Gita (Audio)
            </Link>
            <Link href="/chapters" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 bg-card/70 text-primary font-bold text-sm shadow-sm hover:bg-primary/10 transition-all divine-ripple cursor-pointer">
              <BookOpen className="h-4 w-4" /> Read Chapters
            </Link>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div 
          className="grid grid-cols-3 gap-3 md:gap-5 max-w-sm mx-auto mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center p-4 rounded-2xl stat-badge shadow-md cursor-default">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">18</div>
            <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5 font-sans uppercase tracking-wide">Chapters</div>
          </div>
          <div className="text-center p-4 rounded-2xl stat-badge shadow-md cursor-default">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <BookOpenCheck className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">700</div>
            <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5 font-sans uppercase tracking-wide">Verses</div>
          </div>
          <div className="text-center p-4 rounded-2xl stat-badge shadow-md cursor-default">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">∞</div>
            <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5 font-sans uppercase tracking-wide">Wisdom</div>
          </div>
        </motion.div>

        {/* Listen Gita Spotlight Banner */}
        <motion.div
          className="max-w-2xl mx-auto px-4 mt-8 mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/pravachana" className="block group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-purple-500/5 border border-primary/30 p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5 hover:-translate-y-1 text-left">
              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />

              <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
                {/* Left: Interactive Playing Disc Graphic */}
                <div className="relative shrink-0 flex items-center justify-center select-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-amber-500/30 p-1 flex items-center justify-center bg-card shadow-md">
                    <motion.div 
                      className="w-full h-full rounded-full bg-gradient-to-tr from-amber-950 to-amber-900 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="text-[9px] text-white font-serif font-bold">ॐ</span>
                      </div>
                    </motion.div>
                  </div>
                  {/* Play Circle Overlay */}
                  <div className="absolute inset-0 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-4.5 w-4.5 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Right: Content details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="divine-badge inline-flex items-center gap-1 mb-1.5">
                    <Sparkles className="h-2.5 w-2.5" /> Devotional Feature
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gradient-gold mb-0.5 leading-tight">
                    Listen to Bhagavad Gita Kannada Pravachana
                  </h3>
                  <h4 className="text-[11px] font-serif font-bold text-foreground/80 mb-2">
                    ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ ಪೂರ್ಣ ಆಡಿಯೋ ಶ್ರವಣ
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    Listen to the complete 18 chapters and 700 verses of the Bhagavad Gita in pure Kannada recitation. Experience the divine vibration of Yatharth Geeta.
                  </p>
                </div>
              </div>

              {/* Soundwave Animation */}
              <div className="absolute bottom-3 right-5 flex gap-0.5 h-5 items-end pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity">
                <span className="w-0.5 bg-primary rounded-full transition-all duration-300 h-2 group-hover:h-3 group-hover:animate-pulse" style={{ animationDelay: "0s" }} />
                <span className="w-0.5 bg-primary rounded-full transition-all duration-300 h-4 group-hover:h-5 group-hover:animate-pulse" style={{ animationDelay: "0.2s" }} />
                <span className="w-0.5 bg-primary rounded-full transition-all duration-300 h-1.5 group-hover:h-3 group-hover:animate-pulse" style={{ animationDelay: "0.4s" }} />
                <span className="w-0.5 bg-primary rounded-full transition-all duration-300 h-3 group-hover:h-4 group-hover:animate-pulse" style={{ animationDelay: "0.1s" }} />
              </div>
            </div>
          </Link>
        {/* Sadhana & Reading Streak Tracker Widget */}
        <motion.div
          className="max-w-2xl mx-auto px-4 mt-6 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <div className="rounded-3xl bg-card border border-primary/20 p-5 shadow-xl backdrop-blur-md text-left relative overflow-hidden">
            {/* Saffron background glow */}
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                  <Flame className={`h-5.5 w-5.5 text-white ${sadhana.streakCount > 0 ? "animate-bounce" : ""}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">Daily Reading Sadhana</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-muted-foreground font-sans">Current Streak:</span>
                    <span className="text-xs font-extrabold text-orange-500 font-sans flex items-center gap-0.5">
                      {sadhana.streakCount} Days {sadhana.streakCount > 0 ? "🔥" : "🌱"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Detail */}
              <div className="w-full sm:w-auto shrink-0 flex flex-col sm:items-end gap-1 font-sans">
                <div className="flex justify-between sm:justify-start items-center gap-2">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Rank:</span>
                  <span className="text-xs font-bold text-primary inline-flex items-center gap-1">
                    <Trophy className="h-3.5 w-3.5 text-amber-500" />
                    {sadhana.completedVerses.length >= 100 
                      ? "Yogi • ಯೋಗಿ 🧘" 
                      : sadhana.completedVerses.length >= 20 
                      ? "Disciple • ಶಿಷ್ಯ 📖" 
                      : sadhana.completedVerses.length >= 1 
                      ? "Seeker • ಜಿಜ್ಞಾಸು 🪔" 
                      : "Beginner • ಆರಂಭಿಕ 🌱"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-full sm:w-28 bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.max(0, (sadhana.completedVerses.length / 700) * 100))}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-foreground whitespace-nowrap leading-none">
                    {sadhana.completedVerses.length}/700 Verses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gita Remedies Emotional Grid */}
        <motion.div
          className="max-w-2xl mx-auto px-4 mt-6 mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-center mb-5">
            <h3 className="text-lg font-bold text-foreground font-serif inline-flex items-center gap-1.5">
              <Compass className="h-4.5 w-4.5 text-primary" />
              Gita Remedies • ಗೀತಾ ಪರಿಹಾರಗಳು
            </h3>
            <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5">
              What emotional challenge are you facing? Tap to receive Lord Krishna's guidance.
            </p>
            <span className="block text-[10px] text-muted-foreground italic mt-0.5">
              ನಿಮಗಾಗುತ್ತಿರುವ ಅನುಭವವೇನು? ಶ್ರೀ ಕೃಷ್ಣನ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಕ್ಲಿಕ್ ಮಾಡಿ.
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {EMOTIONS.map(emotion => {
              const Icon = emotion.icon;
              return (
                <button
                  key={emotion.id}
                  onClick={() => setSelectedEmotion(emotion.id)}
                  className={`p-3.5 rounded-2xl bg-gradient-to-br ${emotion.color} border hover:border-primary/50 hover:scale-105 active:scale-95 transition-all shadow-sm flex flex-col items-center justify-center text-center cursor-pointer min-h-24`}
                >
                  <Icon className="h-5 w-5 text-primary mb-2 shrink-0" />
                  <span className="text-[10px] font-bold text-foreground leading-tight tracking-tight">
                    {emotion.labelEn}
                  </span>
                  <span className="text-[9px] text-muted-foreground font-semibold leading-none mt-1">
                    {emotion.labelKn}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>

      {/* Dynamic Search */}
      <SearchSection />

      {/* Path Selector Filter */}
      <div className="space-y-4 mb-6 mt-8 px-4 relative z-20 max-w-3xl mx-auto text-center font-sans">
        <div className="flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => setSelectedPath("all")}
            className={`path-pill px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer font-sans ${
              selectedPath === "all" 
                ? "active text-white" 
                : "bg-primary/10 text-foreground/75 hover:bg-primary/20"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            All Chapters
          </button>
          {paths.map(path => {
            const Icon = path.icon;
            return (
              <button 
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`path-pill px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer font-sans ${
                  selectedPath === path.id 
                    ? "active text-white" 
                    : "bg-primary/10 text-foreground/75 hover:bg-primary/20"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {path.label}
              </button>
            );
          })}
        </div>
        
        <AnimatePresence mode="wait">
          {selectedPath !== "all" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <div className="text-xs text-muted-foreground max-w-md mx-auto bg-card/45 border border-primary/10 p-3.5 rounded-xl backdrop-blur-sm shadow-sm">
                Recommended chapters for <strong className="text-primary font-bold">{paths.find(p => p.id === selectedPath)?.label}</strong>:{" "}
                <span className="font-semibold text-primary">{paths.find(p => p.id === selectedPath)?.chapters.join(", ")}</span>
                <span className="block mt-1 italic text-[11px]">"{paths.find(p => p.id === selectedPath)?.description}"</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Verse of the Day */}
      <VerseOfTheDay />

      {/* What You'll Discover */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-6 relative z-10 text-center font-sans">
        <h3 className="text-2xl font-bold mb-8">
          What You'll <span className="text-primary">Discover</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card flex flex-col items-center text-center cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white shadow-md">
              <Globe className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-base mb-2">Universal Truths</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Timeless principles for all aspects of life, duty, and spiritual action.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card flex flex-col items-center text-center cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 text-white shadow-md">
              <Heart className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-base mb-2">Spiritual Guidance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Pathways to inner peace, devotion, self-realization, and devotion.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card flex flex-col items-center text-center cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 text-white shadow-md">
              <Flame className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-base mb-2">Eternal Wisdom</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Ancient spiritual knowledge structured for application in modern living.</p>
          </div>
        </div>
      </section>

      {/* Chapters Grid Section */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-4">
          <h3 className="text-xl font-bold text-foreground/90 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary animate-pulse" />
            {selectedPath === "all" ? "Chapters of Srimad Bhagavad Gita" : `Recommended Chapters for ${paths.find(p => p.id === selectedPath)?.label}`}
          </h3>
          <span className="text-xs text-muted-foreground bg-primary/10 px-3 py-1 rounded-full font-bold">
            {filteredChapters.length} Chapters
          </span>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {filteredChapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="h-full"
            >
              <Link 
                href={`/chapter/${chapter.id}`}
                className="block h-full group cursor-pointer"
              >
                <Card className="h-full glass-card chapter-card border-border/50 bg-card/80 flex flex-col justify-between rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="divine-badge">
                        Ch. {chapter.id}
                      </span>
                      <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {chapter.kannadaTitle}
                    </CardTitle>
                    <CardDescription className="text-xs font-serif text-muted-foreground line-clamp-1">
                      {chapter.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-left">
                    <p className="text-xs text-foreground/75 line-clamp-3 mb-4 font-sans leading-relaxed">
                      {chapter.description}
                    </p>
                    <div className="text-[11px] text-muted-foreground font-sans flex items-center gap-1.5 border-t border-border/40 pt-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      {chapter.totalVerses} Verses
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Interactive Hub Section (Guidance & Quiz) */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 text-center font-sans grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Divine Guidance Widget (Shloka Roulette) */}
        <motion.div 
          className="p-6 md:p-8 rounded-3xl bg-card/75 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/45 shadow-2xl relative overflow-hidden text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Glowing Aura background */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-sans font-bold text-primary flex items-center justify-center gap-1.5 mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              Divine Guidance • ದೈವೀ ಮಾರ್ಗದರ್ಶನ
            </h3>
            
            {guidanceVerse ? (
              <AnimatePresence mode="wait">
                <motion.div 
                  key={guidanceVerse.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <p className="text-sm font-bold text-foreground leading-relaxed text-center font-sans line-clamp-4">
                    {guidanceVerse.kannada}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-serif italic text-center line-clamp-2">
                    {guidanceVerse.transliteration}
                  </p>
                  <div className="border-l-2 border-primary/40 pl-3 text-left bg-primary/5 py-2.5 pr-2.5 rounded-r-xl">
                    <h4 className="text-[9px] uppercase font-bold text-primary tracking-wider mb-0.5 font-sans">Meaning (ಕನ್ನಡ ಅರ್ಥ)</h4>
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans line-clamp-3">
                      {guidanceVerse.meaning}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2.5 border-t border-border/40 font-sans">
                    <span className="font-semibold">Ch {guidanceVerse.chapterId}, Verse {guidanceVerse.verse}</span>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(`"${guidanceVerse.kannada}"\nChapter ${guidanceVerse.chapterId}, Verse ${guidanceVerse.verse}\n\nMeaning: ${guidanceVerse.meaning}`);
                          alert("Guidance verse copied to clipboard!");
                        }}
                        className="px-2 py-1 bg-muted hover:bg-muted-foreground/15 rounded-lg text-[9px] transition-colors cursor-pointer font-bold border border-border/50"
                      >
                        Copy
                      </button>
                      <a 
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          `ॐ *Gita Divine Guidance* ॐ\n\n"${guidanceVerse.kannada}"\n\n- *Chapter ${guidanceVerse.chapterId}, Verse ${guidanceVerse.verse}*\n\n*Meaning:*\n${guidanceVerse.meaning}\n\nSeek your guidance today at: ${window.location.origin}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] transition-colors cursor-pointer font-bold flex items-center gap-1.5 shadow-sm"
                      >
                        Share
                      </a>
                      <Link href={`/chapter/${guidanceVerse.chapterId}/verse/${guidanceVerse.verse}`}>
                        <span className="px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-[9px] transition-colors cursor-pointer font-bold border border-primary/20">
                          Read
                        </span>
                      </Link>

                      <button 
                        type="button"
                        onClick={() => speak("guidance", guidanceVerse.meaning, "kn")}
                        className="px-2 py-1 bg-primary/15 hover:bg-primary/25 text-primary rounded-lg text-[9px] transition-colors cursor-pointer font-bold border border-primary/20 flex items-center gap-1"
                      >
                        {activeTextId === "guidance" ? (
                          <>
                            <VolumeX className="h-3 w-3 text-red-500 animate-pulse" />
                            <span>Stop</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="h-3 w-3" />
                            <span>Listen</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="py-6 text-center font-sans">
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed max-w-xs mx-auto">
                  Need guidance, clarity, or answers to a life crisis? Seek divine counsel by rolling a random verse from the Srimad Bhagavad Gita.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <Button
              onClick={getKrishnaGuidance}
              disabled={isRolling}
              className="w-full py-5 bg-gradient-to-r from-primary to-amber-600 font-extrabold hover:shadow-lg transition-all rounded-xl text-xs cursor-pointer flex items-center justify-center gap-1.5 text-white active:scale-95 shadow-md shadow-primary/10"
            >
              {isRolling ? (
                <>
                  <span className="animate-spin h-3.5 w-3.5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  <span>Seeking Advice...</span>
                </>
              ) : (
                <>
                  <Compass className="h-4 w-4" />
                  <span>{guidanceVerse ? "Seek Another Guidance" : "Seek Divine Guidance"}</span>
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Spiritual Path Assessment Widget (Quiz Card) */}
        <motion.div 
          className="p-6 md:p-8 rounded-3xl bg-card/75 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/45 shadow-2xl relative overflow-hidden text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Glowing Aura background */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-sans font-bold text-primary flex items-center justify-center gap-1.5 mb-4">
              <Compass className="h-4 w-4 text-primary animate-pulse" />
              Spiritual Path Assessment • ದೈವೀ ಮಾರ್ಗ
            </h3>

            <div className="py-2 text-center font-sans">
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed max-w-xs mx-auto">
                Discover your dominant spiritual path as defined by Lord Krishna in the Gita: Karma, Bhakti, Jnana, or Raja Yoga.
              </p>
              <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl mb-2 text-left space-y-1">
                <div className="text-[10px] text-muted-foreground uppercase font-bold">Why take this?</div>
                <div className="text-[11px] text-foreground/80 leading-relaxed">
                  Understand your inner nature, align with your spiritual duties, and share your path with family & friends!
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={() => {
                setQuizStep(1);
                setAnswers([]);
                setIsQuizOpen(true);
              }}
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 font-extrabold hover:shadow-lg transition-all rounded-xl text-xs cursor-pointer flex items-center justify-center gap-1.5 text-white active:scale-95 shadow-md shadow-purple-600/10"
            >
              <Sparkles className="h-4 w-4" />
              <span>Discover Your Path</span>
            </Button>
          </div>
        </motion.div>

      </section>

      {/* Quiz Modal Overlay */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuizOpen(false)}
            />

            {/* Modal Box */}
            <motion.div 
              className="relative w-full max-w-md bg-card border-2 border-primary/20 p-6 rounded-3xl shadow-2xl z-10 text-center font-sans overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Question Steps */}
              {quizStep >= 1 && quizStep <= 3 && (
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-border pb-2">
                    <span className="text-xs font-bold text-primary font-mono">Question {quizStep} of 3</span>
                    <button 
                      onClick={() => setIsQuizOpen(false)}
                      className="p-1 rounded-full hover:bg-muted text-muted-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <h3 className="text-base font-extrabold text-foreground text-left mb-6 leading-relaxed">
                    {quizStep === 1 && "1. How do you approach your daily tasks and responsibilities?"}
                    {quizStep === 2 && "2. When facing an unexpected crisis, what is your initial reaction?"}
                    {quizStep === 3 && "3. What represents your highest aspiration in life?"}
                  </h3>

                  <div className="space-y-3">
                    {getQuizOptions(quizStep).map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(opt.value)}
                        className="w-full text-left p-3.5 rounded-xl border border-primary/10 hover:border-primary/40 bg-card hover:bg-primary/5 transition-all text-xs font-semibold cursor-pointer active:scale-98 text-foreground/90 leading-relaxed shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quiz Results Step */}
              {quizStep === 4 && (
                <div className="space-y-5 text-center">
                  <div className="flex justify-between items-center mb-1 border-b border-border pb-2">
                    <span className="text-xs font-bold text-emerald-600 font-mono">Assessment Completed</span>
                    <button 
                      onClick={() => setIsQuizOpen(false)}
                      className="p-1 rounded-full hover:bg-muted text-muted-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mx-auto mb-2 text-emerald-600">
                    <BookOpenCheck className="h-8 w-8 animate-bounce" />
                  </div>

                  <h3 className="text-xs uppercase tracking-widest font-sans font-bold text-muted-foreground">Your Path Is</h3>
                  <h2 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                    {getQuizResult().pathName}
                  </h2>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed px-2">
                    {getQuizResult().description}
                  </p>

                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl text-left font-sans">
                    <h4 className="text-[10px] uppercase font-bold text-primary mb-1">Recommended Verse:</h4>
                    <p className="text-xs font-bold leading-relaxed mb-2">
                      {getQuizResult().verseText}
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {getQuizResult().verseMeaning}
                    </p>
                    <span className="block mt-2 text-[10px] font-bold text-primary">
                      {getQuizResult().verseLoc}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-3">
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `ॐ *Gita Spiritual Assessment Result* ॐ\n\nI just discovered my path is: *${getQuizResult().pathName}*!\n\n"${getQuizResult().description}"\n\nTake your assessment and ask Lord Krishna your doubts: ${window.location.origin}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.242-4.054c1.667.989 3.29 1.562 5.672 1.563 5.361 0 9.721-4.305 9.723-9.599.002-2.564-1.002-4.976-2.827-6.804C17.042 3.277 14.629 2.274 12.01 2.27c-5.368 0-9.73 4.306-9.733 9.601-.001 2.228.616 4.354 1.785 6.182L3.08 21.6l3.782-1.082l-.563-.572z"/>
                      </svg>
                      Share Result on WhatsApp
                    </a>
                    
                    <button 
                      onClick={() => setIsQuizOpen(false)}
                      className="w-full py-3 bg-muted hover:bg-muted-foreground/10 text-foreground text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Close Assessment
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Support / Donation Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 relative z-10 text-center font-sans">
        <motion.div 
          className="p-8 md:p-12 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/45 shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Saffron Glowing Aura */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-5 animate-pulse fill-rose-500/20" />
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight text-primary">
            Support the Preservation of Dharma
          </h3>
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
            Dharmarakshana Campaign • ಧರ್ಮ ರಕ್ಷಣೆ
          </h4>
          
          <div className="space-y-4 text-sm md:text-base text-foreground/85 max-w-2xl mx-auto leading-relaxed mb-8 text-left border-l-2 border-primary/30 pl-4 md:pl-6 bg-primary/5 py-4 pr-4 rounded-r-2xl">
            <p className="font-serif italic text-primary/95 font-bold">
              "O seeker of truth, there is no purifier in this world like spiritual knowledge (Jnana). Sharing this wisdom is the highest service."
            </p>
            <p>
              This platform is created with deep devotion to keep the eternal message of Lord Krishna accessible to everyone, completely free from ads and subscriptions. However, maintaining the domain name, hosting servers, advanced Gemini AI API queries, and continuous software development requires ongoing resources.
            </p>
            <p className="font-bold">
              Do not pass this opportunity to support this noble task of Jnana Yajna. Any amount you contribute is highly valuable and helps keep this sacred platform online for seekers worldwide.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <a 
              href="https://payments.cashfree.com/forms?code=GitaKannada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-extrabold text-base rounded-2xl shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center cursor-pointer inline-flex items-center justify-center gap-2.5"
            >
              <span>Contribute to Jnana Yajna (Dharmadan)</span>
              <Heart className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
            </a>
          </div>
          
          <p className="text-[11px] text-muted-foreground mt-5 italic tracking-wide">
            "Dharmo Rakshati Rakshitah" • Dharma protects those who protect it.
          </p>
        </motion.div>
      </section>

      {/* Floating Chat Shortcut */}
      <FloatingChatButton />

      {/* Gita Remedies Modal Dialog */}
      <AnimatePresence>
        {selectedEmotion && (() => {
          const remedy = EMOTION_REMEDIES[selectedEmotion];
          if (!remedy) return null;
          return (
            <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card border border-primary/45 p-6 shadow-2xl backdrop-blur-md max-h-[85vh] flex flex-col justify-between text-left font-sans"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEmotion(null)}
                  className="absolute right-4 top-4 p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer text-foreground z-10"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Saffron Aura Glow */}
                <div className="absolute -left-20 -top-20 w-44 h-44 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                <div className="overflow-y-auto pr-1 relative z-10 flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-extrabold text-gradient-gold">
                      {remedy.titleEn}
                    </h3>
                    <h4 className="text-sm font-bold text-foreground/80 mt-0.5">
                      {remedy.titleKn}
                    </h4>
                  </div>

                  {/* Divine Guidance Callout */}
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/25 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-extrabold uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      Krishna's Advice • ಕೃಷ್ಣನ ಕಿವಿಮಾತು
                    </div>
                    <p className="text-xs md:text-sm font-serif italic text-foreground/90 leading-relaxed font-bold">
                      "{remedy.krishnaAdviceEn}"
                    </p>
                    <p className="text-xs md:text-sm italic text-foreground/80 leading-relaxed">
                      "{remedy.krishnaAdviceKn}"
                    </p>
                  </div>

                  {/* Matching Verses */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      Remedy Verses • ಪರಿಹಾರ ಶ್ಲೋಕಗಳು
                    </h4>
                    <div className="space-y-2.5">
                      {remedy.verses.map((verse, idx) => {
                        return (
                          <div key={idx} className="p-3.5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-between gap-2.5">
                            <div>
                              <div className="flex justify-between items-center text-xs font-bold text-primary">
                                <span>Verse {verse.chapter}.{verse.verse}</span>
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-tight italic font-serif mt-1">
                                {verse.desc}
                              </p>
                              <p className="text-xs font-semibold text-foreground/90 leading-snug mt-1.5 font-sans">
                                {verse.descKn}
                              </p>
                            </div>
                            <Link 
                              href={`/chapter/${verse.chapter}/verse/${verse.verse}`}
                              onClick={() => setSelectedEmotion(null)}
                              className="px-3.5 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-[11px] rounded-lg text-center transition-all inline-flex items-center justify-center gap-1 self-start cursor-pointer font-sans"
                            >
                              <span>Read Full Meaning • ಶ್ಲೋಕ ಓದಿ</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 mt-4 relative z-10 flex gap-2">
                  <button
                    onClick={() => setSelectedEmotion(null)}
                    className="w-full py-2.5 bg-muted hover:bg-muted-foreground/10 text-foreground text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Close Remedies
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 text-center border-t border-border/50 mt-16 relative z-10">
        <p className="text-xs text-muted-foreground font-sans tracking-wide">
          Created with reverence for the timeless wisdom of the Gita. © {new Date().getFullYear()} Sanatana Gaurava.
        </p>
      </footer>
    </div>
  );
}

export function FloatingChatButton() {
  return (
    <Link href="/chat">
      <motion.button
        className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-gradient-to-r from-primary to-primary/95 text-primary-foreground rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 border border-primary/20 cursor-pointer shadow-primary/10"
        whileHover={{ y: -3 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Ask Lord Krishna"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
        <MessageSquareMore className="h-4.5 w-4.5 text-primary-foreground" />
        <span className="text-xs font-bold font-sans tracking-wide whitespace-nowrap">
          Ask Krishna
        </span>
      </motion.button>
    </Link>
  );
}
