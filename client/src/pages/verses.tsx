import { useState, useEffect } from "react";
import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Search, X, Volume2, VolumeX, Menu, Compass, BookOpenCheck, 
  Info, Bookmark, ArrowRight, Sparkles, Heart, ChevronDown, Share2, CheckCircle2, Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton 
} from "./home";
import { updateMetaTags } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { getSadhanaStats, markVerseCompleted, unmarkVerseCompleted, type SadhanaStats } from "@/lib/sadhana";
import { useSpeech } from "@/lib/speech";
import { TileAudioPlayer } from "@/components/TileAudioPlayer";

export default function Verses() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const { activeTextId, speak, stop } = useSpeech();
  
  // Sadhana & WhatsApp Card States
  const [sadhana, setSadhana] = useState<SadhanaStats>({ streakCount: 0, lastReadDate: null, completedVerses: [] });
  const [sharingVerse, setSharingVerse] = useState<any>(null);
  const [cardBg, setCardBg] = useState<string>("saffron");

  // Load stats on mount
  useEffect(() => {
    setSadhana(getSadhanaStats());
  }, []);

  const toggleVerseCompleted = (chapterNum: number, verseNumber: number) => {
    const verseKey = `${chapterNum}_${verseNumber}`;
    let nextStats;
    if (sadhana.completedVerses.includes(verseKey)) {
      nextStats = unmarkVerseCompleted(chapterNum, verseNumber);
    } else {
      nextStats = markVerseCompleted(chapterNum, verseNumber);
    }
    setSadhana(nextStats);
  };

  const downloadStatusCard = () => {
    if (!sharingVerse) return;

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Draw Background
    if (cardBg === "saffron") {
      const grad = ctx.createLinearGradient(0, 0, 0, 1920);
      grad.addColorStop(0, "#ffedd5"); // light saffron
      grad.addColorStop(0.5, "#f97316"); // orange
      grad.addColorStop(1, "#c2410c"); // deep orange-red
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1920);
    } else if (cardBg === "indigo") {
      const grad = ctx.createLinearGradient(0, 0, 0, 1920);
      grad.addColorStop(0, "#020617"); // very dark slate
      grad.addColorStop(0.5, "#0f172a"); // slate-900
      grad.addColorStop(1, "#1e1b4b"); // deep indigo
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1920);
    } else {
      // temple (golden Saffron)
      const grad = ctx.createLinearGradient(0, 0, 1080, 1920);
      grad.addColorStop(0, "#fef3c7"); // amber-100
      grad.addColorStop(0.5, "#fbbf24"); // amber-400
      grad.addColorStop(1, "#b45309"); // amber-700
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1920);
    }

    // 2. Draw Decorative Border
    ctx.strokeStyle = "rgba(251, 191, 36, 0.5)"; // golden amber
    ctx.lineWidth = 15;
    ctx.strokeRect(30, 30, 1020, 1860);
    ctx.strokeRect(45, 45, 990, 1830);

    // 3. Draw Background Om Watermark
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    if (cardBg === "indigo") ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.font = "bold 500px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("ॐ", 540, 960);

    // 4. Header Text
    ctx.fillStyle = cardBg === "indigo" ? "#fbbf24" : "#ffffff";
    ctx.font = "bold 42px sans-serif";
    ctx.fillText("Srimad Bhagavad Gita", 540, 180);
    ctx.font = "bold 32px sans-serif";
    ctx.fillText("ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ", 540, 240);

    // Divider
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(340, 280);
    ctx.lineTo(740, 280);
    ctx.stroke();

    // Verse Title
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 46px serif";
    ctx.fillText(`Chapter ${selectedChapterId}, Verse ${sharingVerse.verse}`, 540, 360);

    // 5. Draw Sanskrit Sloka
    ctx.fillStyle = cardBg === "indigo" ? "#ffffff" : "#fef3c7";
    ctx.font = "bold 44px serif";
    
    // Function to wrap and draw text
    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
      const words = text.split(" ");
      let line = "";
      let currentY = y;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + " ";
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      return currentY + lineHeight;
    };

    let nextY = wrapText(sharingVerse.kannada, 540, 480, 880, 65);

    // 6. Draw English/Transliteration
    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.font = "italic 32px serif";
    nextY = wrapText(sharingVerse.transliteration, 540, nextY + 30, 880, 50);

    // 7. Draw Kannada Translation/Meaning
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 34px sans-serif";
    ctx.fillText("ಕನ್ನಡ ಅನುವಾದ / Kannada Meaning:", 540, nextY + 50);
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.font = "32px sans-serif";
    nextY = wrapText(sharingVerse.meaning, 540, nextY + 120, 880, 50);

    // 8. Footer Branding
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("Read & Listen on: gita.sanatana360.com", 540, 1780);
    ctx.font = "italic 24px sans-serif";
    ctx.fillText("Free Spiritual Wisdom App", 540, 1820);

    // Trigger Download
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    const link = document.createElement("a");
    link.download = `Gita_Verse_${selectedChapterId}_${sharingVerse.verse}.jpg`;
    link.href = dataUrl;
    link.click();
  };

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gita_bookmarks");
      if (saved) {
        setBookmarks(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load bookmarks:", e);
    }
  }, []);

  // Update dynamic page meta details for Google SEO
  useEffect(() => {
    updateMetaTags(
      "Search Srimad Bhagavad Gita Verses | 700 Slokas & Translations",
      "Browse and search all 700 verses of Bhagavad Gita. Filter by chapter, read Kannada translations and Sanskrit slokas, and bookmark your favorites.",
      "Gita verses, Bhagavad Gita slokas, 700 slokas, Kannada Gita translation, search verses, bookmark verses"
    );
  }, []);

  const toggleBookmark = (id: string) => {
    const nextBookmarks = bookmarks.includes(id)
      ? bookmarks.filter(bId => bId !== id)
      : [...bookmarks, id];
    setBookmarks(nextBookmarks);
    localStorage.setItem("gita_bookmarks", JSON.stringify(nextBookmarks));
  };

  const selectedChapter = bhagavadGitaData.find(c => c.id === selectedChapterId) || bhagavadGitaData[0];

  // Filter verses of selected chapter by query keyword search
  const filteredVerses = selectedChapter.verses.filter(verse => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    const matchText = `${verse.verse} ${verse.kannada} ${verse.transliteration} ${verse.meaning}`.toLowerCase();
    return matchText.includes(q);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden flex flex-col justify-between">
      <ProgressBar />
      <ParticlesBackdrop />
      <AudioWidget />
      <Navbar />

      {/* Floating Circles for ambiance */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      </div>



      {/* Hero Header */}
      <section className="relative pt-12 pb-4 px-4 text-center z-10 font-sans">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
          Explore the Verses
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
          "Search and study the 700 slokas of Bhagavad Gita. Select a chapter to get started."
        </p>
      </section>

      {/* Chapter Selection & Search Container */}
      <div className="max-w-4xl w-full mx-auto px-4 z-20 relative mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Dropdown Selector */}
        <div className="relative">
          <select 
            value={selectedChapterId} 
            onChange={(e) => {
              setSelectedChapterId(parseInt(e.target.value));
              setQuery("");
            }}
            className="w-full h-10 px-3 bg-card border border-primary/20 rounded-xl font-semibold text-xs focus-visible:ring-primary shadow-sm appearance-none cursor-pointer text-foreground"
          >
            {bhagavadGitaData.map(ch => (
              <option key={ch.id} value={ch.id}>
                Chapter {ch.id}: {ch.title}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
        </div>

        {/* Keyword Search Input */}
        <div className="relative md:col-span-2">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search verses in this chapter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-4.5 rounded-xl border border-primary/10 bg-card/70 focus-visible:ring-primary shadow-inner text-xs"
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-muted"
            >
              <X className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Verses Container */}
      <main className="max-w-4xl w-full mx-auto py-4 px-4 sm:px-6 relative z-10 flex-1 space-y-6">
        <div className="flex items-center justify-between border-b border-primary/10 pb-4">
          <h2 className="text-sm font-bold text-foreground/90 flex items-center gap-1.5 font-serif">
            <BookOpenCheck className="h-5 w-5 text-primary" />
            Chapter {selectedChapter.id}: {selectedChapter.kannadaTitle} ({selectedChapter.title})
          </h2>
          <span className="text-[10px] text-muted-foreground bg-primary/10 px-2.5 py-1 rounded-full font-bold">
            {filteredVerses.length} Verses
          </span>
        </div>

        {filteredVerses.map(verse => (
          <div 
            key={verse.id}
            className="bg-card rounded-xl border border-border/50 p-6 md:p-8 hover:shadow-md transition-shadow relative"
          >
            {/* Verse Card Header */}
            <div className="flex items-center justify-between mb-4 border-b border-border/30 pb-2 font-sans">
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded font-bold">
                {selectedChapter.id}.{verse.verse}
              </span>
              <div className="flex items-center gap-1.5">
                {/* Mark Completed (Sadhana) */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleVerseCompleted(selectedChapter.id, verse.verse)}
                  className="h-8 w-8 hover:text-green-500 transition-colors cursor-pointer text-muted-foreground"
                  aria-label={sadhana.completedVerses.includes(`${selectedChapter.id}_${verse.verse}`) ? "Completed" : "Mark Completed"}
                >
                  <CheckCircle2 className={cn("h-4.5 w-4.5", sadhana.completedVerses.includes(`${selectedChapter.id}_${verse.verse}`) && "fill-green-500 text-green-500")} />
                </Button>

                {/* Share as WhatsApp Status Card */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSharingVerse(verse)}
                  className="h-8 w-8 hover:text-amber-500 transition-colors cursor-pointer text-muted-foreground"
                  aria-label="Share as Status Card"
                >
                  <Share2 className="h-4.5 w-4.5" />
                </Button>

                {/* Bookmark Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleBookmark(verse.id)}
                  className="h-8 w-8 hover:text-primary transition-colors cursor-pointer text-muted-foreground"
                  aria-label={bookmarks.includes(verse.id) ? "Remove bookmark" : "Add bookmark"}
                >
                  <Bookmark className={cn("h-4.5 w-4.5", bookmarks.includes(verse.id) && "fill-primary text-primary")} />
                </Button>
              </div>
            </div>

            {/* Sloka */}
            <div className="mb-4 text-center">
              <p className="font-bold text-foreground leading-relaxed text-base md:text-lg">
                {verse.kannada}
              </p>
            </div>

            {/* Transliteration */}
            <div className="mb-4 p-3.5 bg-muted/30 rounded-lg border border-border/30 text-center font-serif italic text-xs md:text-sm text-muted-foreground">
              {verse.transliteration}
            </div>

            {/* Meaning */}
            <div className="relative border-l-2 border-primary/30 pl-4">
              <h4 className="text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Meaning</h4>
              <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                {verse.meaning}
              </p>
            </div>

            {/* Embedded Hardcoded Audio Player Tile */}
            <TileAudioPlayer
              id={verse.id}
              verseNum={verse.verse}
              chapterNum={selectedChapterId}
              slokaText={verse.transliteration}
              meaningText={verse.meaning}
              kannadaSlokaText={verse.kannada}
            />
          </div>
        ))}

        {filteredVerses.length === 0 && (
          <div className="text-center py-16 bg-card/30 rounded-2xl border border-dashed border-primary/15 max-w-md mx-auto">
            <BookOpenCheck className="h-8 w-8 text-muted-foreground/60 mx-auto mb-3" />
            <h3 className="font-bold text-sm">No Verses Found</h3>
            <p className="text-xs text-muted-foreground mt-1">Try modifying your keyword search query.</p>
          </div>
        )}
      </main>

      {/* Support / Donation Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl w-full mx-auto mb-16 relative z-10 text-center font-sans">
        <motion.div 
          className="p-8 md:p-10 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/45 shadow-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="h-10 w-10 text-rose-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl md:text-2xl font-bold mb-3">Support the Preservation of Dharma</h3>
          <p className="text-xs text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6">
            100% of contributions cover domain names, servers, Gemini AI API fees, and development costs to keep Lord Krishna's wisdom accessible to all, completely ad-free.
          </p>
          <a 
            href="https://payments.cashfree.com/forms?code=GitaKannada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Contribute to Dharma</span>
            <Heart className="h-3.5 w-3.5 fill-primary-foreground" />
          </a>
        </motion.div>
      </section>

      {/* Floating Chat Shortcut */}
      <FloatingChatButton />

      {/* WhatsApp Status Card Generator Modal */}
      {sharingVerse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-card border border-primary/45 p-5 shadow-2xl backdrop-blur-md max-h-[90vh] flex flex-col justify-between text-left font-sans">
            {/* Close button */}
            <button
              onClick={() => setSharingVerse(null)}
              className="absolute right-4 top-4 p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer text-foreground z-10"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Saffron Glow */}
            <div className="absolute -left-20 -top-20 w-44 h-44 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="overflow-y-auto pr-1 relative z-10 flex-1 space-y-4">
              <div>
                <h3 className="text-md font-bold text-gradient-gold">
                  WhatsApp Status Card Generator
                </h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  Download this high-resolution image to share Lord Krishna's wisdom on your status!
                </p>
              </div>

              {/* CARD PREVIEW CONTAINER */}
              <div className="flex justify-center">
                <div 
                  className={cn(
                    "w-48 h-80 rounded-xl border-4 p-4 flex flex-col justify-between text-center select-none shadow-md overflow-hidden relative font-sans",
                    cardBg === "saffron" && "bg-gradient-to-b from-orange-100 via-orange-500 to-orange-800 text-white border-orange-400/40",
                    cardBg === "indigo" && "bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white border-indigo-400/30",
                    cardBg === "temple" && "bg-gradient-to-br from-amber-100 via-amber-400 to-amber-700 text-white border-amber-500/40"
                  )}
                >
                  {/* Decorative corner borders */}
                  <div className="absolute inset-1.5 border border-white/20 pointer-events-none rounded-lg" />
                  <div className="absolute inset-2.5 border border-white/10 pointer-events-none rounded-lg" />
                  
                  {/* Om symbol in back */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white/5 font-serif text-[140px]">
                    ॐ
                  </div>

                  <div className="relative z-10 flex flex-col gap-1 items-center">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-white/80">Srimad Bhagavad Gita</span>
                    <div className="w-10 h-px bg-white/30" />
                    <span className="text-[10px] font-bold mt-1 text-amber-300">Verse {selectedChapterId}.{sharingVerse.verse}</span>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-2 px-1">
                    <p className="text-[11px] font-bold leading-relaxed line-clamp-4 font-serif text-amber-100">
                      {sharingVerse.kannada}
                    </p>
                    <p className="text-[8px] italic leading-tight text-white/70 line-clamp-3 mt-1.5 font-serif">
                      {sharingVerse.transliteration}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col gap-0.5 items-center">
                    <div className="w-16 h-px bg-white/20" />
                    <span className="text-[8px] text-white/60 font-semibold tracking-wide mt-1">Read & Listen on</span>
                    <span className="text-[9px] font-extrabold text-white">gita.sanatana360.com</span>
                  </div>
                </div>
              </div>

              {/* CARD STYLE CONFIGURATION */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-foreground">Select Background Template</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCardBg("saffron")}
                    className={cn(
                      "py-2 rounded-xl border text-[11px] font-bold transition-all cursor-pointer",
                      cardBg === "saffron" ? "bg-orange-500 text-white border-orange-500" : "bg-muted hover:bg-muted-foreground/10 text-foreground"
                    )}
                  >
                    Saffron Glow
                  </button>
                  <button
                    onClick={() => setCardBg("indigo")}
                    className={cn(
                      "py-2 rounded-xl border text-[11px] font-bold transition-all cursor-pointer",
                      cardBg === "indigo" ? "bg-slate-900 text-white border-slate-900" : "bg-muted hover:bg-muted-foreground/10 text-foreground"
                    )}
                  >
                    Deep Indigo
                  </button>
                  <button
                    onClick={() => setCardBg("temple")}
                    className={cn(
                      "py-2 rounded-xl border text-[11px] font-bold transition-all cursor-pointer",
                      cardBg === "temple" ? "bg-amber-600 text-white border-amber-600" : "bg-muted hover:bg-muted-foreground/10 text-foreground"
                    )}
                  >
                    Golden Gate
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 mt-4 relative z-10 flex gap-2">
              <button
                onClick={() => setSharingVerse(null)}
                className="w-1/2 py-2.5 bg-muted hover:bg-muted-foreground/10 text-foreground text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={downloadStatusCard}
                className="w-1/2 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 shadow-md cursor-pointer font-sans"
              >
                <Download className="h-4 w-4" />
                Download Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 text-center border-t border-border/50 relative z-10 w-full">
        <p className="text-xs text-muted-foreground font-sans tracking-wide">
          Created with reverence for the timeless wisdom of the Gita. © {new Date().getFullYear()} Sanatana Gaurava.
        </p>
      </footer>
    </div>
  );
}
