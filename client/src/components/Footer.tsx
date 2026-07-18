import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-border/50 bg-background/80 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Share Wisdom Card Banner */}
        <div className="mb-8 p-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-purple-500/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-5 text-left relative overflow-hidden group">
          {/* Subtle decoration background */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-1 relative z-10">
            <h4 className="text-sm font-bold text-gradient-gold flex items-center gap-1.5 font-kannada">
              <span className="text-primary font-serif">ॐ</span>
              ಭಗವದ್ಗೀತೆ ಜ್ಞಾನ ಪ್ರಸಾರ ಮಾಡಿ · Share the Wisdom of Lord Krishna
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl font-kannada">
              ಭಗವಾನ್ ಶ್ರೀ ಕೃಷ್ಣನ ದೈವಿಕ ಸಂದೇಶವನ್ನು ಜಗತ್ತಿಗೆ ಹಂಚಿ, ಧರ್ಮ ಮಾರ್ಗದಲ್ಲಿ ನೆರವಿರಲು ಮತ್ತು ಎಲ್ಲರಿಗೂ ಕೃಷ್ಣನ ಕೃಪೆ ದೊರೆಯುವಂತೆ ಮಾಡಲು ಇದನ್ನು ನಿಮ್ಮ ಸ್ನೇಹಿತರು ಮತ್ತು ಕುಟುಂಬದೊಂದಿಗೆ ವಾಟ್ಸಾಪ್ ಹಾಗೂ ಇತರ ಜಾಲತಾಣಗಳಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ!
              <span className="block mt-1 font-sans italic opacity-75 text-[10px]">
                Share this treasure of spiritual knowledge with your friends and family to help them align with Lord Krishna's divine light.
              </span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2.5 shrink-0 relative z-10">
            {/* WhatsApp Share Button */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                "ॐ ಪಾರ್ಥಾಯ ಪ್ರತಿಬೋಧಿತಾಂ ಭಗವತಾ ನಾರಾಯಣೇನ ಸ್ವಯಮ್ ॐ\n\nಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆಯ ೭೦೦ ಶ್ಲೋಕಗಳು, ಭಾವಾರ್ಥ ಮತ್ತು ಭಗವಾನ್ ಶ್ರೀ ಕೃಷ್ಣನೊಂದಿಗಿನ AI ದೈವಿಕ ಸಂವಾದವನ್ನು ಉಚಿತವಾಗಿ ಪಡೆಯಲು ಈ ಲಿಂಕ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಇದನ್ನು ಹಂಚಿಕೊಂಡು ಪುಣ್ಯ ಸಂಪಾದಿಸಿ:\n\n👉 https://gita.sanatana360.com/"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.242-4.054c1.667.989 3.29 1.562 5.672 1.563 5.361 0 9.721-4.305 9.723-9.599.002-2.564-1.002-4.976-2.827-6.804C17.042 3.277 14.629 2.274 12.01 2.27c-5.368 0-9.73 4.306-9.733 9.601-.001 2.228.616 4.354 1.785 6.182L3.08 21.6l3.782-1.082l-.563-.572z"/>
              </svg>
              Share on WhatsApp
            </a>

            {/* General Share API (Mobile Web Native Share) */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Srimad Bhagavad Gita",
                    text: "Explore the Srimad Bhagavad Gita in Kannada & English with AI Krishna dialogue!",
                    url: "https://gita.sanatana360.com/"
                  }).catch(e => console.log(e));
                } else {
                  navigator.clipboard.writeText("https://gita.sanatana360.com/").then(() => {
                    alert("Website link copied to clipboard! Share it with your friends.");
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 bg-background/50 hover:bg-primary/5 text-primary font-sans font-bold text-xs shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
              </svg>
              Share Link
            </button>
          </div>
        </div>

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
