import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Type, Menu, Bookmark, Volume2, VolumeX, Share2, CheckCircle2, Download, X, Sparkles, Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton } from "./home";
import Navbar from "@/components/Navbar";
import { updateMetaTags, updateSchemaOrg } from "@/lib/seo";
import { useSpeech } from "@/lib/speech";
import { getSadhanaStats, markVerseCompleted, unmarkVerseCompleted, type SadhanaStats } from "@/lib/sadhana";

export default function Chapter() {
  const { activeTextId, speak, stop, pauseSpeech, resumeSpeech, isPaused, activeInfo, hasKannadaVoice } = useSpeech();
  const [matchId, paramsId] = useRoute("/chapter/:id");
  const [matchVerse, paramsVerse] = useRoute("/chapter/:id/verse/:verseId");

  const chapterId = paramsId ? parseInt(paramsId.id) : (paramsVerse ? parseInt(paramsVerse.id) : 1);
  const verseId = paramsVerse ? parseInt(paramsVerse.verseId) : null;

  const chapter = bhagavadGitaData.find((c) => c.id === chapterId);
  const [fontSize, setFontSize] = useState(18);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<"kn" | "en">("kn");
  
  // Sadhana & WhatsApp Card States
  const [sadhana, setSadhana] = useState<SadhanaStats>({ streakCount: 0, lastReadDate: null, completedVerses: [] });
  const [sharingVerse, setSharingVerse] = useState<any>(null);
  const [cardBg, setCardBg] = useState<string>("saffron");

  // Load stats on mount
  useEffect(() => {
    setSadhana(getSadhanaStats());
  }, []);

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
  const toggleVerseCompleted = (verseNumber: number) => {
    const verseKey = `${chapterId}_${verseNumber}`;
    let nextStats;
    if (sadhana.completedVerses.includes(verseKey)) {
      nextStats = unmarkVerseCompleted(chapterId, verseNumber);
    } else {
      nextStats = markVerseCompleted(chapterId, verseNumber);
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
    ctx.fillText(`Chapter ${chapterId}, Verse ${sharingVerse.verse}`, 540, 360);

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
    link.download = `Gita_Verse_${chapterId}_${sharingVerse.verse}.jpg`;
    link.href = dataUrl;
    link.click();
  };
  const toggleBookmark = (id: string) => {
    const nextBookmarks = bookmarks.includes(id)
      ? bookmarks.filter(bId => bId !== id)
      : [...bookmarks, id];
    setBookmarks(nextBookmarks);
    localStorage.setItem("gita_bookmarks", JSON.stringify(nextBookmarks));
  };

  // Dynamically update meta tags for search engines (SEO)
  useEffect(() => {
    if (chapter) {
      updateMetaTags(
        `${chapter.id}. ${chapter.kannadaTitle} (${chapter.title}) | Srimad Bhagavad Gita`,
        `Read Srimad Bhagavad Gita Chapter ${chapter.id} (${chapter.title}) with full Kannada translations, Sanskrit slokas, and transliteration: ${chapter.description}`,
        `Chapter ${chapter.id}, ${chapter.title}, ${chapter.kannadaTitle}, Srimad Bhagavad Gita, Kannada translation, Slokas, Verses`
      );
      updateSchemaOrg({
        "@context": "https://schema.org",
        "@type": "Chapter",
        "name": `Chapter ${chapter.id}: ${chapter.title} - ${chapter.kannadaTitle}`,
        "description": chapter.description,
        "position": chapter.id,
        "isPartOf": {
          "@type": "Book",
          "name": "Srimad Bhagavad Gita",
          "author": {
            "@type": "Person",
            "name": "Lord Krishna"
          }
        }
      });
    }
  }, [chapter]);

  // Auto-scroll to selected verse if requested
  useEffect(() => {
    if (verseId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`verse-${verseId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.classList.add("border-primary", "ring-2", "ring-primary/20");
          const removeTimer = setTimeout(() => {
            element.classList.remove("border-primary", "ring-2", "ring-primary/20");
          }, 3000);
          return () => clearTimeout(removeTimer);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [verseId, chapterId]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextChapter = bhagavadGitaData.find((c) => c.id === chapterId + 1);
  const prevChapter = bhagavadGitaData.find((c) => c.id === chapterId - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/98 to-primary/5 pb-20 relative overflow-hidden">
      <ProgressBar />
      <ParticlesBackdrop />
      <AudioWidget />
      <Navbar />



      {/* Chapter Intro */}
      <div className="bg-muted/30 border-b border-border/50">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <span className="inline-block mb-4 text-sm font-sans font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Chapter {chapter.id}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {chapter.kannadaTitle}
          </h2>
          <h3 className="text-xl md:text-2xl text-muted-foreground font-serif mb-6">
            {chapter.title}
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {chapter.description}
          </p>
        </div>
      </div>

      {/* Font Size & Translation Controls */}
      <div className="max-w-4xl mx-auto px-4 mt-6 flex justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary gap-1.5 font-sans font-semibold rounded-xl text-xs cursor-pointer" aria-label="Text settings">
              <Type className="h-4 w-4" />
              Adjust Font Size
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4 mr-4">
            <div className="space-y-4">
              <h4 className="font-medium leading-none text-left">Text Size</h4>
              <div className="flex items-center gap-4">
                <span className="text-sm">A</span>
                <Slider 
                  value={[fontSize]} 
                  min={14} 
                  max={28} 
                  step={1} 
                  onValueChange={(vals) => setFontSize(vals[0])}
                  className="flex-1"
                />
                <span className="text-xl">A</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Verses List */}
      <main className="max-w-4xl mx-auto py-4 px-4 space-y-8">
        {chapter.verses.map((verse) => (
          <div 
            key={verse.id} 
            id={`verse-${verse.verse}`}
            className="group relative bg-card rounded-xl border border-border/50 p-6 md:p-8 hover:shadow-md transition-shadow scroll-mt-20"
          >
            <div className="flex items-center justify-between mb-4 border-b border-border/30 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded font-bold">
                  {chapter.id}.{verse.verse}
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  {activeTextId === verse.id ? (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 rounded-full px-3 py-1 shadow-sm transition-all duration-300">
                      <span className="flex gap-0.5 items-end justify-center h-3 w-3 shrink-0 pb-0.5">
                        <span className="w-0.5 h-2 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0s" }} />
                        <span className="w-0.5 h-3 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.15s" }} />
                        <span className="w-0.5 h-1.5 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.3s" }} />
                      </span>
                      <span className="text-[10px] font-sans font-bold text-amber-600 dark:text-amber-400">Playing Meaning</span>
                      <button
                        type="button"
                        onClick={() => stop()}
                        className="p-0.5 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors cursor-pointer flex items-center justify-center shadow"
                        title="Stop Narration"
                      >
                        <VolumeX className="h-2.5 w-2.5 fill-white text-white" />
                      </button>
                    </div>
                  ) : activeTextId === verse.id + "-sloka" ? (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 rounded-full px-3 py-1 shadow-sm transition-all duration-300">
                      <span className="flex gap-0.5 items-end justify-center h-3 w-3 shrink-0 pb-0.5">
                        <span className="w-0.5 h-2 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0s" }} />
                        <span className="w-0.5 h-3 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.15s" }} />
                        <span className="w-0.5 h-1.5 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.3s" }} />
                      </span>
                      <span className="text-[10px] font-sans font-bold text-amber-600 dark:text-amber-400">Playing Sloka</span>
                      <button
                        type="button"
                        onClick={() => stop()}
                        className="p-0.5 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors cursor-pointer flex items-center justify-center shadow"
                        title="Stop Narration"
                      >
                        <VolumeX className="h-2.5 w-2.5 fill-white text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          speak(verse.id, verse.meaning, "kn", {
                            title: `Chapter ${chapter.id} • Verse ${verse.verse}`,
                            subtitle: "Kannada Meaning (ಅರ್ಥ)"
                          });
                        }}
                        className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-200 cursor-pointer flex items-center gap-1 text-[10px] font-sans font-bold shadow-sm hover:scale-105 active:scale-95"
                        title="Listen to Kannada meaning"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>Listen Meaning</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (!hasKannadaVoice()) {
                            speak(verse.id + "-sloka", verse.transliteration, "en", {
                              title: `Chapter ${chapter.id} • Verse ${verse.verse}`,
                              subtitle: "Sanskrit Sloka Recitation"
                            });
                          } else {
                            speak(verse.id + "-sloka", verse.kannada, "kn", {
                              title: `Chapter ${chapter.id} • Verse ${verse.verse}`,
                              subtitle: "Sanskrit Sloka Recitation"
                            });
                          }
                        }}
                        className="px-3 py-1 rounded-full border border-primary/20 bg-background/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200 cursor-pointer flex items-center gap-1 text-[10px] font-sans font-bold shadow-sm hover:scale-105 active:scale-95"
                        title="Listen to Sanskrit sloka"
                      >
                        <Volume2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                        <span>Listen Sloka</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Mark Completed (Sadhana) */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleVerseCompleted(verse.verse)}
                  className="h-8 w-8 hover:text-green-500 transition-colors cursor-pointer text-muted-foreground"
                  aria-label={sadhana.completedVerses.includes(`${chapterId}_${verse.verse}`) ? "Completed" : "Mark Completed"}
                >
                  <CheckCircle2 className={cn("h-4.5 w-4.5", sadhana.completedVerses.includes(`${chapterId}_${verse.verse}`) && "fill-green-500 text-green-500")} />
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

            {/* Sanskrit/Kannada Verse */}
            <div className="mb-6 text-center">
              <p 
                className="font-bold text-foreground leading-relaxed mb-4"
                style={{ fontSize: `${fontSize}px` }}
              >
                {verse.kannada}
              </p>
            </div>

            {/* Transliteration */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border/30">
              <p 
                className="text-muted-foreground font-serif italic text-center"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                {verse.transliteration}
              </p>
            </div>

            {/* Meaning */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 rounded-full"></div>
              <div className="pl-6">
                <h4 className="text-sm font-sans font-bold text-primary uppercase tracking-wider mb-2">Meaning</h4>
                <p 
                  className="text-foreground/90 font-sans leading-relaxed"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  {verse.meaning}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Navigation Footer */}
      <div className="max-w-5xl mx-auto px-4 py-8 flex justify-between items-center border-t border-border/50">
        {prevChapter ? (
          <Link 
            href={`/chapter/${prevChapter.id}`}
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <ArrowLeft className="h-4 w-4" />
            <div className="text-left hidden sm:block">
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-bold">{prevChapter.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextChapter ? (
          <Link 
            href={`/chapter/${nextChapter.id}`}
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <div className="text-right hidden sm:block">
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-bold">{nextChapter.title}</div>
            </div>
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
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
                    <span className="text-[10px] font-bold mt-1 text-amber-300">Verse {chapter.id}.{sharingVerse.verse}</span>
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

      {/* Floating Bottom Audio Player Bar */}
      <AnimatePresence>
        {activeTextId && activeInfo && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 animate-fade-in"
          >
            <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-3 font-sans select-none shadow-primary/5">
              {/* Progress Line */}
              <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
                  animate={{ 
                    width: isPaused ? "50%" : ["0%", "100%"] 
                  }}
                  transition={{ 
                    duration: isPaused ? 0.5 : 12, 
                    repeat: isPaused ? 0 : Infinity, 
                    ease: "linear" 
                  }}
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                {/* Title info */}
                <div className="text-left">
                  <h4 className="text-[10px] font-extrabold text-primary uppercase tracking-wider">{activeInfo.title}</h4>
                  <p className="text-xs font-bold text-foreground/90 line-clamp-1 mt-0.5">{activeInfo.subtitle}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  {/* Pause / Play Toggle */}
                  <button
                    onClick={() => {
                      if (isPaused) {
                        resumeSpeech();
                      } else {
                        pauseSpeech();
                      }
                    }}
                    className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary cursor-pointer transition-colors flex items-center justify-center h-8 w-8"
                    aria-label={isPaused ? "Play" : "Pause"}
                  >
                    {isPaused ? <Play className="h-3.5 w-3.5 fill-primary" /> : <Pause className="h-3.5 w-3.5 fill-primary" />}
                  </button>

                  {/* Stop */}
                  <button
                    onClick={() => stop()}
                    className="p-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white cursor-pointer transition-colors flex items-center justify-center shadow h-8 w-8"
                    title="Stop Narration"
                  >
                    <VolumeX className="h-3.5 w-3.5 fill-white text-white" />
                  </button>
                </div>
              </div>

              {/* Equalizer Visualizer */}
              {!isPaused && (
                <div className="flex justify-center items-end gap-1 h-3 mt-1 pb-0.5">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-amber-500 rounded-full"
                      animate={{ height: ["4px", "12px", "4px"] }}
                      transition={{ 
                        duration: 0.5 + Math.random() * 0.5, 
                        repeat: Infinity,
                        delay: i * 0.08
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
