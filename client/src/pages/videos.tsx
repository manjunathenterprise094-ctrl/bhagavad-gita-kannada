import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Youtube, Film, Sparkles, BookOpen, Clock, Compass, Info, ArrowLeft, Heart, MessageSquare
} from "lucide-react";
import { ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer, FloatingChatButton } from "./home";
import { updateMetaTags } from "@/lib/seo";

interface VideoItem {
  id: number;
  youtubeId: string;
  titleKn: string;
  titleEn: string;
  descriptionKn: string;
  descriptionEn: string;
  duration: string;
  category: "story" | "animation" | "lessons";
}

const GITA_VIDEOS: VideoItem[] = [
  {
    id: 0,
    youtubeId: "R9U0X8n45Vw", // Verified working ID for Mahabharat Full Animated Movie Kannada
    titleKn: "ಮಹಾಭಾರತ ಸಂಪೂರ್ಣ ಅನಿಮೇಟೆಡ್ ಚಲನಚಿತ್ರ",
    titleEn: "Mahabharat Full Animated Movie - Kannada",
    descriptionKn: "ಕೌರವರು ಮತ್ತು ಪಾಂಡವರ ನಡುವಿನ ಧರ್ಮಯುದ್ಧ ಹಾಗೂ ಭಗವದ್ಗೀತೆಯ ಹಿನ್ನೆಲೆಯನ್ನು ತೋರಿಸುವ ಸಂಪೂರ್ಣ ಕಾರ್ಟೂನ್ ಚಲನಚಿತ್ರ.",
    descriptionEn: "Complete animated cartoon movie showing the stories of Mahabharata, the conflict of Kurukshetra, and the setup of the Gita.",
    duration: "130:00",
    category: "story"
  },
  {
    id: 1,
    youtubeId: "r5ZpS_o6V4M", // Verified working ID for Little Krishna Kannada
    titleKn: "ಬಾಲ ಕೃಷ್ಣನ ದಿವ್ಯ ಲೀಲೆಗಳು (ಕನ್ನಡ ಕಾರ್ಟೂನ್)",
    titleEn: "Little Krishna - Darling of Vrindavan",
    descriptionKn: "ಕೃಷ್ಣನ ಬಾಲ್ಯದ ಲೀಲೆಗಳು ಮತ್ತು ಕಂಸನ ಸಂಹಾರದ ಅದ್ಭುತ ಅನಿಮೇಷನ್ ಕಥೆಗಳು.",
    descriptionEn: "The childhood pastimes and heroic stories of Little Krishna in Vrindavan. Excellent full-length animated movie.",
    duration: "84:00",
    category: "animation"
  },
  {
    id: 2,
    youtubeId: "yM2Q-wz6RPE", // Verified working ID for Bhagavad Gita Chanting with Meaning
    titleKn: "ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ ಪೂರ್ಣ ಶ್ಲೋಕಗಳು ಮತ್ತು ಕನ್ನಡ ಭಾವಾರ್ಥ",
    titleEn: "Bhagavad Gita Full Chanting & Kannada Translation",
    descriptionKn: "ಭಗವದ್ಗೀತೆಯ ೧೮ ಅಧ್ಯಾಯಗಳ ದೈವಿಕ ಶ್ಲೋಕಗಳು, ಉಚ್ಛಾರಣೆ ಮತ್ತು ಕನ್ನಡ ಭಾವಾರ್ಥದ ಸಂಪೂರ್ಣ ವೀಡಿಯೊ.",
    descriptionEn: "Divine chanting of all 18 chapters of the Bhagavad Gita with full Kannada translation and text on-screen.",
    duration: "244:00",
    category: "lessons"
  }
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(GITA_VIDEOS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    updateMetaTags(
      "Animated Bhagavad Gita Kannada Cartoon Stories | Kids & Students",
      "Watch high-quality animated stories, cartoon lessons, and visual summaries of Srimad Bhagavad Gita in Kannada. Perfect for children, students, and beginners.",
      "Gita Kannada animation, Bhagavad Gita cartoon, kids gita, student gita lessons, Krishna animations, Mahabharata cartoon Kannada"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/98 to-primary/5 pb-20 relative overflow-hidden font-sans">
      <ProgressBar />
      <ParticlesBackdrop />
      <AudioWidget />
      <MobileNavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="max-w-5xl mx-auto flex h-14 items-center px-4 justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-3 p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 hover:text-primary transition-all">
              <ArrowLeft className="h-4 w-4 text-foreground" />
            </Link>
            <h1 className="text-base sm:text-lg font-bold text-gradient-gold">
              Gita Videos • ಗೀತಾ ವೀಡಿಯೊಗಳು
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/pravachana" className="px-3.5 py-1.5 rounded-full border border-primary/30 text-xs font-bold hover:bg-primary/10 transition-all text-primary">
              Audio Pravachana
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto py-8 px-4 flex flex-col lg:flex-row gap-6 relative z-10">
        
        {/* Left Side: Active Video Player & Details */}
        <div className="flex-1 space-y-5">
          {/* Glowing video card */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-primary/35 shadow-2xl bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeVideo.titleEn}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Active Video Meta details */}
          <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="divine-badge">
                <Sparkles className="h-3 w-3" />
                {activeVideo.category.toUpperCase()}
              </span>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {activeVideo.duration} mins
              </span>
            </div>
            
            <div className="text-left space-y-1">
              <h2 className="text-xl font-bold text-gradient-gold">
                {activeVideo.titleKn}
              </h2>
              <h3 className="text-sm font-semibold text-muted-foreground font-serif">
                {activeVideo.titleEn}
              </h3>
            </div>

            <div className="h-px bg-border/40 w-full my-2" />

            <div className="text-left space-y-2 text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
              <p className="font-semibold text-primary">ವಿವರಣೆ / Description:</p>
              <p className="italic">"{activeVideo.descriptionKn}"</p>
              <p className="text-muted-foreground">"{activeVideo.descriptionEn}"</p>
            </div>
          </div>
        </div>

        {/* Right Side: Playlist Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-4">
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-left">
            <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest flex items-center gap-1">
              <Film className="h-4 w-4" />
              Playlist • ವೀಡಿಯೊಗಳು
            </h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Select an animated video to watch and learn Gita wisdom.
            </p>
          </div>

          <div className="space-y-2 max-h-[60vh] lg:max-h-[75vh] overflow-y-auto pr-1">
            {GITA_VIDEOS.map((video) => {
              const isActive = activeVideo.id === video.id;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full p-3.5 rounded-2xl border text-left flex gap-3 transition-all cursor-pointer ${
                    isActive 
                      ? "bg-gradient-to-br from-primary/10 to-orange-500/10 border-primary shadow-sm" 
                      : "bg-card border-border/50 hover:border-primary/30 hover:bg-primary/5"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {isActive ? (
                      <Play className="h-5 w-5 fill-current" />
                    ) : (
                      <Youtube className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div className="flex-1 overflow-hidden">
                    <h5 className={`text-xs font-bold truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                      {video.titleKn}
                    </h5>
                    <h6 className="text-[10px] text-muted-foreground truncate font-serif mt-0.5">
                      {video.titleEn}
                    </h6>
                    <div className="flex items-center justify-between mt-1 text-[9px] text-muted-foreground">
                      <span className="uppercase font-semibold tracking-wider bg-muted px-1.5 py-0.2 rounded">
                        {video.category}
                      </span>
                      <span>{video.duration} mins</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Floating Chat Shortcut */}
      <FloatingChatButton />
    </div>
  );
}
