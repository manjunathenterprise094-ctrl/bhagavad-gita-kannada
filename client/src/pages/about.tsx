import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Menu, Compass, BookOpenCheck, Bookmark, 
  Info, Sparkles, Heart, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton 
} from "./home";
import { updateMetaTags } from "@/lib/seo";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update dynamic page meta details for Google SEO
  useEffect(() => {
    updateMetaTags(
      "About Srimad Bhagavad Gita Platform | Kannada & English",
      "Learn about our Bhagavad Gita digital platform. Dedicated to sharing Lord Krishna's eternal wisdom with translations, bookmarks, and Ask Krishna AI.",
      "About Gita, Bhagavad Gita platform, Sanatana Dharma project, Krishna AI platform, Kannada Gita Project"
    );
  }, []);

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
            <Link href="/verses" className="text-muted-foreground hover:text-primary transition-all">Verses</Link>
            <Link href="/bookmarks" className="text-muted-foreground hover:text-primary transition-all">Bookmarks</Link>
            <Link href="/about" className="text-primary hover:text-primary transition-all">About</Link>
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
          About the Platform
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
          "Dedicated to preserving, translating, and spreading the eternal dialog between Sri Krishna and Arjuna."
        </p>
      </section>

      {/* Content Section */}
      <main className="max-w-4xl w-full mx-auto py-8 px-4 sm:px-6 relative z-10 flex-1 space-y-8 font-sans">
        {/* Gita Overview Card */}
        <Card className="border border-border/50 bg-card shadow-lg">
          <CardHeader className="text-left pb-3">
            <CardTitle className="text-lg md:text-xl font-bold text-primary">Srimad Bhagavad Gita (ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ)</CardTitle>
            <CardDescription className="text-xs md:text-sm">The Song of the Divine</CardDescription>
          </CardHeader>
          <CardContent className="text-left text-sm text-foreground/80 space-y-4 leading-relaxed">
            <p>
              The **Srimad Bhagavad Gita** is a 700-verse Hindu scripture that is part of the epic Mahabharata (chapters 23–40 of Bhishma Parva). It is structured as a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra.
            </p>
            <p>
              Facing the duty to fight a righteous war against his own relatives, Arjuna is filled with moral dilemma and despair. Lord Krishna counsels him, explaining his duties as a warrior and prince, expounding on different yogic philosophies, self-realization, and devotion. It remains one of the world's greatest guides to duty (Dharma), self-control, and selfless action (Karma Yoga).
            </p>
          </CardContent>
        </Card>

        {/* Platform Features Card */}
        <Card className="border border-border/50 bg-card shadow-lg">
          <CardHeader className="text-left pb-3">
            <CardTitle className="text-lg md:text-xl font-bold text-primary">Platform Features</CardTitle>
          </CardHeader>
          <CardContent className="text-left text-sm text-foreground/80 space-y-4 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 border border-border/30 rounded-xl">
                <h4 className="font-bold text-sm text-primary mb-1.5 flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Dual Translation
                </h4>
                <p className="text-xs">Sanskrit slokas are coupled with Kannada translations, English transliterations, and detailed meanings.</p>
              </div>
              <div className="p-4 bg-muted/30 border border-border/30 rounded-xl">
                <h4 className="font-bold text-sm text-primary mb-1.5 flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Ask Lord Krishna AI
                </h4>
                <p className="text-xs">Converse with our AI chatbot trained strictly on the Gita to answer doubts about life, duty, and yoga in English and Kannada.</p>
              </div>
              <div className="p-4 bg-muted/30 border border-border/30 rounded-xl">
                <h4 className="font-bold text-sm text-primary mb-1.5 flex items-center gap-1">
                  <Bookmark className="h-4 w-4" />
                  Personal Bookmarks
                </h4>
                <p className="text-xs">Save important slokas and retrieve them instantly using local browser storage synchronization.</p>
              </div>
              <div className="p-4 bg-muted/30 border border-border/30 rounded-xl">
                <h4 className="font-bold text-sm text-primary mb-1.5 flex items-center gap-1">
                  <Compass className="h-4 w-4" />
                  Persona Paths
                </h4>
                <p className="text-xs">Explore recommended chapters curated for specific roles: Student, Yogi, Devotee, or Leader.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Support / Donation Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl w-full mx-auto mb-16 relative z-10 text-center font-sans">
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
              Do not pass this opportunity to support this noble task of Jnana Yajna. Even a tiny contribution of ₹10, ₹50, or ₹100 helps keep this sacred platform online for seekers worldwide.
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

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 text-center border-t border-border/50 relative z-10 w-full">
        <p className="text-xs text-muted-foreground font-sans tracking-wide">
          Created with reverence for the timeless wisdom of the Gita. © {new Date().getFullYear()} Sanatana Gaurava.
        </p>
      </footer>
    </div>
  );
}
