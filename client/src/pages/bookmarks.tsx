import { useState, useEffect } from "react";
import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Menu, Compass, BookOpenCheck, Bookmark as BookmarkIcon, 
  Info, BookmarkCheck, Heart, Trash2, Volume2, VolumeX
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton 
} from "./home";
import { updateMetaTags } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { useSpeech } from "@/lib/speech";

interface BookmarkedVerseDetail {
  id: string; // "chapter-verse" (e.g. "1-1")
  chapterId: number;
  chapterTitle: string;
  chapterKTitle: string;
  verseNumber: number;
  kannada: string;
  transliteration: string;
  meaning: string;
}

export default function Bookmarks() {
  const [bookmarkedVerses, setBookmarkedVerses] = useState<BookmarkedVerseDetail[]>([]);
  const { activeTextId, speak, stop } = useSpeech();

  useEffect(() => {
    loadBookmarks();
  }, []);

  // Update dynamic page meta details for Google SEO
  useEffect(() => {
    updateMetaTags(
      "My Bookmarks | Srimad Bhagavad Gita",
      "Read your bookmarked slokas and translations of Srimad Bhagavad Gita. Revise and contemplate your saved verses of spiritual wisdom.",
      "Gita bookmarks, saved verses, Bhagavad Gita bookmarks, Kannada Gita bookmarks"
    );
  }, []);

  const loadBookmarks = () => {
    try {
      const saved = localStorage.getItem("gita_bookmarks");
      if (!saved) {
        setBookmarkedVerses([]);
        return;
      }
      
      const bookmarkIds: string[] = JSON.parse(saved);
      const details: BookmarkedVerseDetail[] = [];

      for (const chapter of bhagavadGitaData) {
        for (const verse of chapter.verses) {
          if (bookmarkIds.includes(verse.id)) {
            details.push({
              id: verse.id,
              chapterId: chapter.id,
              chapterTitle: chapter.title,
              chapterKTitle: chapter.kannadaTitle,
              verseNumber: verse.verse,
              kannada: verse.kannada,
              transliteration: verse.transliteration,
              meaning: verse.meaning
            });
          }
        }
      }

      setBookmarkedVerses(details);
    } catch (e) {
      console.error("Failed to load bookmarks:", e);
    }
  };

  const removeBookmark = (id: string) => {
    try {
      const saved = localStorage.getItem("gita_bookmarks");
      if (!saved) return;
      
      const bookmarkIds: string[] = JSON.parse(saved);
      const nextIds = bookmarkIds.filter(bId => bId !== id);
      
      localStorage.setItem("gita_bookmarks", JSON.stringify(nextIds));
      loadBookmarks();
    } catch (e) {
      console.error("Failed to delete bookmark:", e);
    }
  };

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
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <BookmarkCheck className="h-8 w-8 text-primary animate-pulse" />
          My Bookmarks
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
          "Contemplate your saved verses and guidance from the Lord. Access them instantly anytime."
        </p>
      </section>

      {/* Bookmarks list */}
      <main className="max-w-4xl w-full mx-auto py-8 px-4 sm:px-6 relative z-10 flex-1 space-y-6">
        <AnimatePresence mode="popLayout">
          {bookmarkedVerses.map(v => (
            <motion.div 
              key={v.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl border border-border/50 p-6 md:p-8 hover:shadow-md transition-shadow relative"
            >
              {/* Verse Header */}
              <div className="flex items-center justify-between mb-4 border-b border-border/30 pb-2 font-sans">
                <Link href={`/chapter/${v.chapterId}/verse/${v.verseNumber}`} className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5 cursor-pointer">
                  <BookOpen className="h-3.5 w-3.5" />
                  Chapter {v.chapterId}.{v.verseNumber} • {v.chapterTitle}
                </Link>
                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    type="button"
                    onClick={() => {
                      speak(
                        v.id + "-meaning",
                        v.meaning,
                        "kn",
                        {
                          title: `Chapter ${v.chapterId} • Verse ${v.verseNumber}`,
                          subtitle: "Kannada Meaning (ಅರ್ಥ)"
                        }
                      );
                    }}
                    className="px-2 py-0.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-200 cursor-pointer flex items-center gap-1 text-[10px] font-sans font-bold shadow-sm"
                    title="Listen to Kannada meaning"
                  >
                    {activeTextId === v.id + "-meaning" ? (
                      <>
                        <VolumeX className="h-3 w-3 text-red-500 animate-pulse" />
                        <span>Stop</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3 w-3" />
                        <span>Meaning</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      speak(
                        v.id + "-sloka",
                        v.transliteration,
                        "sloka",
                        {
                          title: `Chapter ${v.chapterId} • Verse ${v.verseNumber}`,
                          subtitle: "Sanskrit Sloka Recitation"
                        },
                        v.kannada
                      );
                    }}
                    className="px-2 py-0.5 rounded-full border border-primary/20 bg-background/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200 cursor-pointer flex items-center gap-1 text-[10px] font-sans font-bold shadow-sm"
                    title="Listen to Sanskrit sloka"
                  >
                    {activeTextId === v.id + "-sloka" ? (
                      <>
                        <VolumeX className="h-3 w-3 text-amber-500 animate-pulse" />
                        <span>Stop Sloka</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3 w-3" strokeWidth={2.5} />
                        <span>Sloka</span>
                      </>
                    )}
                  </button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeBookmark(v.id)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                  aria-label="Remove bookmark"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </Button>
              </div>

              {/* Sloka */}
              <div className="mb-4 text-center">
                <p className="font-bold text-foreground leading-relaxed text-base md:text-lg">
                  {v.kannada}
                </p>
              </div>

              {/* Transliteration */}
              <div className="mb-4 p-3.5 bg-muted/30 rounded-lg border border-border/30 text-center font-serif italic text-xs md:text-sm text-muted-foreground">
                {v.transliteration}
              </div>

              {/* Meaning */}
              <div className="relative border-l-2 border-primary/30 pl-4 text-left">
                <h4 className="text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Meaning</h4>
                <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                  {v.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {bookmarkedVerses.length === 0 && (
          <div className="text-center py-16 bg-card/30 rounded-2xl border border-dashed border-primary/15 max-w-sm mx-auto font-sans">
            <BookmarkIcon className="h-10 w-10 text-muted-foreground/60 mx-auto mb-3 animate-bounce" />
            <h3 className="font-bold text-sm">No Bookmarks Saved</h3>
            <p className="text-xs text-muted-foreground mt-2 px-4 leading-relaxed">
              You haven't bookmarked any verses yet. Browse chapters and select the bookmark icon next to any verse to save it here.
            </p>
            <Link href="/chapters">
              <Button size="sm" className="mt-4 shadow-md font-semibold text-xs cursor-pointer">
                Browse Chapters
              </Button>
            </Link>
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
