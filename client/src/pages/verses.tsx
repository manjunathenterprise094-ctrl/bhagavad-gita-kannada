import { useState, useEffect } from "react";
import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Search, X, Volume2, VolumeX, Menu, Compass, BookOpenCheck, 
  Info, Bookmark, ArrowRight, Sparkles, Heart, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton 
} from "./home";
import { updateMetaTags } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function Verses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);

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
      <MobileNavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Floating Circles for ambiance */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="h-8 w-8 bg-primary rounded-xl flex items-center justify-center text-white shadow-md font-bold font-serif cursor-pointer">
              ॐ
            </Link>
            <span className="font-bold text-lg text-primary tracking-wide">
              Bhagavad Gita
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-all">Home</Link>
            <Link href="/chapters" className="text-muted-foreground hover:text-primary transition-all">Chapters</Link>
            <Link href="/verses" className="text-primary hover:text-primary transition-all">Verses</Link>
            <Link href="/bookmarks" className="text-muted-foreground hover:text-primary transition-all">Bookmarks</Link>
            <Link href="/chat" className="text-muted-foreground hover:text-primary transition-all">Ask Krishna</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 text-center border-t border-border/50 relative z-10 w-full">
        <p className="text-xs text-muted-foreground font-sans tracking-wide">
          Created with reverence for the timeless wisdom of the Gita. © {new Date().getFullYear()} Sanatana Gaurava.
        </p>
      </footer>
    </div>
  );
}
