import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-border/50 bg-background/80 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold font-serif text-base logo-glow">
              ॐ
            </span>
            <div>
              <div className="font-bold text-sm text-gradient-gold">Bhagavad Gita</div>
              <div className="text-[10px] text-muted-foreground font-sans">ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ · Srimad Bhagavad Gita</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-sans font-medium text-muted-foreground">
            <Link href="/" className="nav-link hover:text-primary transition-colors">Home</Link>
            <Link href="/chapters" className="nav-link hover:text-primary transition-colors">Chapters</Link>
            <Link href="/verses" className="nav-link hover:text-primary transition-colors">Verses</Link>
            <Link href="/bookmarks" className="nav-link hover:text-primary transition-colors">Bookmarks</Link>
            <Link href="/chat" className="nav-link hover:text-primary transition-colors">Ask Krishna</Link>
            <Link href="/pravachana" className="nav-link hover:text-primary transition-colors">Listen Gita (Audio)</Link>
            <Link href="/about" className="nav-link hover:text-primary transition-colors">About</Link>
          </nav>

          {/* Contact Developer */}
          <a
            href="mailto:service.weforyou@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/25 bg-primary/5 hover:bg-primary/12 text-primary font-sans font-semibold text-xs transition-all btn-glow group"
            aria-label="Contact the developer via email"
          >
            <Mail className="h-3.5 w-3.5 group-hover:animate-bounce" />
            Contact Developer
            <ExternalLink className="h-3 w-3 opacity-50" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-5" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-sans text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
            <span>and devotion for seekers of truth</span>
          </div>

          <div className="flex items-center gap-1 text-center">
            <span className="opacity-60">©</span>
            <span>{new Date().getFullYear()}</span>
            <span className="opacity-60 mx-1">·</span>
            <a
              href="mailto:service.weforyou@gmail.com"
              className="text-primary hover:underline underline-offset-2"
            >
              service.weforyou@gmail.com
            </a>
          </div>

          <div className="text-center opacity-60">
            ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ · May all beings be happy
          </div>
        </div>
      </div>
    </footer>
  );
}
