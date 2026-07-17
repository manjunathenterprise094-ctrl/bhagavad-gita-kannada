import { useState, useEffect } from "react";
import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Search, X, Volume2, VolumeX, Menu, Compass, BookOpenCheck, 
  Info, Bookmark, ArrowRight, Sparkles, GraduationCap, Heart, Flame, Crown, Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton 
} from "./home";
import { updateMetaTags } from "@/lib/seo";

export default function Chapters() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState("all");
  const [query, setQuery] = useState("");

  const paths = [
    { id: "student", label: "Student", icon: GraduationCap, description: "Learn fundamental concepts of duty, focus, and knowledge.", chapters: [2, 3, 4] },
    { id: "devotee", label: "Devotee", icon: Heart, description: "Explore the path of love, surrender, and devotion (Bhakti).", chapters: [9, 10, 12] },
    { id: "yogi", label: "Yogi", icon: Flame, description: "Understand meditation, self-control, and mindfulness.", chapters: [6, 8, 14] },
    { id: "leader", label: "Leader", icon: Crown, description: "Gain wisdom on decision-making, leadership, and action.", chapters: [1, 2, 3, 18] },
  ];

  // Dynamic SEO meta tags
  useEffect(() => {
    updateMetaTags(
      "18 Chapters of Srimad Bhagavad Gita | Kannada & English",
      "Read all 18 chapters of Srimad Bhagavad Gita with slokas and meanings in Kannada and English. Search chapters and filter by interest paths.",
      "Gita chapters, 18 chapters, Arjuna, Lord Krishna, Srimad Bhagavad Gita chapters list, Kannada translations"
    );
  }, []);

  // Filter based on path AND keyword search
  const filteredChapters = bhagavadGitaData.filter(chapter => {
    // 1. Path match
    if (selectedPath !== "all") {
      const path = paths.find(p => p.id === selectedPath);
      if (path && !path.chapters.includes(chapter.id)) return false;
    }
    // 2. Keyword search match
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      const matchText = `${chapter.id} ${chapter.title} ${chapter.kannadaTitle} ${chapter.description}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
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
            <Link href="/chapters" className="text-primary hover:text-primary transition-all">Chapters</Link>
            <Link href="/verses" className="text-muted-foreground hover:text-primary transition-all">Verses</Link>
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
          Explore the Chapters
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
          "Each chapter reveals a unique aspect of spiritual wisdom. Filter by interest or search using keywords."
        </p>
      </section>

      {/* Search Input */}
      <div className="max-w-md w-full mx-auto px-4 z-20 relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search chapters by name or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-4.5 rounded-xl border border-primary/10 bg-card/70 focus-visible:ring-primary shadow-inner"
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

      {/* Path Selector Filter */}
      <div className="space-y-4 mb-10 px-4 relative z-20 max-w-3xl mx-auto text-center font-sans">
        <div className="flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => setSelectedPath("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer ${
              selectedPath === "all" 
                ? "bg-primary text-primary-foreground scale-105 shadow-md" 
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer ${
                  selectedPath === path.id 
                    ? "bg-primary text-primary-foreground scale-105 shadow-md" 
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

      {/* Chapters Grid Section */}
      <main className="max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-8 relative z-10 flex-1">
        <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-4">
          <h2 className="text-lg font-bold text-foreground/90 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary animate-pulse" />
            {selectedPath === "all" ? "Chapters of Srimad Bhagavad Gita" : `Recommended Chapters for ${paths.find(p => p.id === selectedPath)?.label}`}
          </h2>
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
                <Card className="h-full border border-border/50 bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <CardHeader className="pb-3 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                        Chapter {chapter.id}
                      </span>
                      <BookOpen className="h-4.5 w-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {chapter.kannadaTitle}
                    </CardTitle>
                    <CardDescription className="text-sm font-serif text-muted-foreground">
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

        {filteredChapters.length === 0 && (
          <div className="text-center py-16 bg-card/30 rounded-2xl border border-dashed border-primary/15 max-w-md mx-auto">
            <BookOpen className="h-8 w-8 text-muted-foreground/60 mx-auto mb-3" />
            <h3 className="font-bold text-sm">No Chapters Found</h3>
            <p className="text-xs text-muted-foreground mt-1">Try modifying your search query or path filters.</p>
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
