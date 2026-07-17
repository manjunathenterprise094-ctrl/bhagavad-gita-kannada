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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Google Play App Link */}
            <a 
              href="https://play.google.com/store/apps/details?id=co.median.android.mbbopqr&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-border/40 hover:bg-zinc-900 text-white font-sans transition-all btn-glow shadow-md"
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

            {/* Contact Developer */}
            <a
              href="mailto:service.weforyou@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl border border-primary/25 bg-primary/5 hover:bg-primary/12 text-primary font-sans font-semibold text-xs transition-all btn-glow group h-9"
              aria-label="Contact the developer via email"
            >
              <Mail className="h-3.5 w-3.5 group-hover:animate-bounce" />
              Contact Developer
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </div>
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
