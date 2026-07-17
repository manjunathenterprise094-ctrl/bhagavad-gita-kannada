import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Type, Menu, Bookmark, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton } from "./home";
import { updateMetaTags } from "@/lib/seo";
import { useSpeech } from "@/lib/speech";

export default function Chapter() {
  const { activeTextId, speak, stop } = useSpeech();
  const [matchId, paramsId] = useRoute("/chapter/:id");
  const [matchVerse, paramsVerse] = useRoute("/chapter/:id/verse/:verseId");

  const chapterId = paramsId ? parseInt(paramsId.id) : (paramsVerse ? parseInt(paramsVerse.id) : 1);
  const verseId = paramsVerse ? parseInt(paramsVerse.verseId) : null;

  const chapter = bhagavadGitaData.find((c) => c.id === chapterId);
  const [fontSize, setFontSize] = useState(18);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <MobileNavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="max-w-5xl mx-auto flex h-14 items-center px-4">
          <Link 
            href="/" 
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "mr-2 hover:bg-primary/10 hover:text-primary")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex-1 overflow-hidden text-left">
            <h1 className="text-lg font-bold truncate">
              <span className="text-primary mr-2">{chapter.id}.</span>
              {chapter.kannadaTitle}
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" aria-label="Text settings">
                  <Type className="h-5 w-5" />
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

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(true)}
              className="hover:bg-primary/10 hover:text-primary md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

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

      {/* Verses List */}
      <main className="max-w-4xl mx-auto py-8 px-4 space-y-8">
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

                <button
                  type="button"
                  onClick={() => speak(verse.id, verse.meaning, "kn")}
                  className="p-1 rounded-lg border border-primary/20 bg-background/50 hover:bg-primary/5 transition-colors cursor-pointer text-muted-foreground hover:text-primary flex items-center gap-1 text-[10px] font-sans font-bold"
                  aria-label="Listen translation"
                >
                  {activeTextId === verse.id ? (
                    <>
                      <VolumeX className="h-3.5 w-3.5 text-red-500 animate-pulse" />
                      <span className="hidden sm:inline">Stop</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Listen</span>
                    </>
                  )}
                </button>
              </div>

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
    </div>
  );
}
