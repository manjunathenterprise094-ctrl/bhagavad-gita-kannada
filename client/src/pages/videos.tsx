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
    youtubeId: "0T_a8_Yt6P0", // Popular cartoon/animated storytelling video ID
    titleKn: "ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ ಅನಿಮೇಟೆಡ್ ಕಥೆ",
    titleEn: "Srimad Bhagavad Gita Animated Story",
    descriptionKn: "ಕುರುಕ್ಷೇತ್ರದ ಯುದ್ಧಭೂಮಿಯಲ್ಲಿ ಶ್ರೀ ಕೃಷ್ಣ ಮತ್ತು ಅರ್ಜುನನ ದಿವ್ಯ ಸಂಭಾಷಣೆಯ ಸುಂದರ ಕಾರ್ಟೂನ್ ನಿರೂಪಣೆ.",
    descriptionEn: "A beautiful animated depiction of the divine dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra.",
    duration: "18:45",
    category: "story"
  },
  {
    id: 1,
    youtubeId: "r5ZpS_o6V4M",
    titleKn: "ಬಾಲ ಕೃಷ್ಣನ ಗೀತಾ ಉಪದೇಶದ ಕಥೆಗಳು",
    titleEn: "Little Krishna - Gita Upadesha Lessons",
    descriptionKn: "ಮಕ್ಕಳಿಗಾಗಿ ಕಥೆಗಳ ಮೂಲಕ ಭಗವದ್ಗೀತೆಯ ಮುಖ್ಯ ತತ್ವಗಳ ಸರಳ ವಿವರಣೆ.",
    descriptionEn: "Simple explanation of core Bhagavad Gita values for children through animated stories of Little Krishna.",
    duration: "12:30",
    category: "animation"
  },
  {
    id: 2,
    youtubeId: "d6O8_7bO-kY",
    titleKn: "ಮಹಾಭಾರತ ಮತ್ತು ಕುರುಕ್ಷೇತ್ರ ಯುದ್ಧದ ಅನಿಮೇಷನ್",
    titleEn: "Mahabharata & Kurukshetra War Animation",
    descriptionKn: "ಧರ್ಮ ಮತ್ತು ಅಧರ್ಮದ ನಡುವಿನ ಮಹಾಯುದ್ಧ ಹಾಗೂ ಭಗವದ್ಗೀತೆಯ ಜನನದ ಕಥೆ.",
    descriptionEn: "The epic battle between Dharma and Adharma, showing the exact historical context behind the birth of the Bhagavad Gita.",
    duration: "15:10",
    category: "story"
  },
  {
    id: 3,
    youtubeId: "E2o7e7kO8oY",
    titleKn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶ್ರೀ ಕೃಷ್ಣನ ೫ ಮುಖ್ಯ ಕಿವಿಮಾತುಗಳು",
    titleEn: "Top 5 Gita Lessons for Students",
    descriptionKn: "ಏಕಾಗ್ರತೆ, ಅಧ್ಯಯನ ಮತ್ತು ಯಶಸ್ಸಿಗಾಗಿ ಭಗವದ್ಗೀತೆಯಿಂದ ಆಯ್ದ ಸೂತ್ರಗಳು.",
    descriptionEn: "Selected formulas and practical wisdom from the Bhagavad Gita for focus, studies, and personal success.",
    duration: "10:15",
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
