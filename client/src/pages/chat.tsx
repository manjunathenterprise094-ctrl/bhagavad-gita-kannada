import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, Send, Sparkles, Loader2, Compass, 
  BookOpen, BookOpenCheck, Bookmark, Info, Menu, Volume2, VolumeX
} from "lucide-react";
import { 
  ProgressBar, ParticlesBackdrop, AudioWidget, MobileNavDrawer 
} from "./home";
import { updateMetaTags } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { useSpeech } from "@/lib/speech";
import { bhagavadGitaData } from "@/lib/gita-data";

interface Message {
  role: "user" | "model";
  content: string;
}

function generateLocalKrishnaResponse(query: string, lang: "en" | "kn"): string {
  if (!query) return "";

  const cleanQuery = query.toLowerCase().trim();
  const searchTerms = cleanQuery.split(/\s+/).filter(t => t.length > 2);
  
  if (searchTerms.length === 0) {
    return lang === "en"
      ? "My dear friend, please ask a clear question so I can guide you on your spiritual path."
      : "ನನ್ನ ಪ್ರೀತಿಯ ಸ್ನೇಹಿತನೇ, ನಿನ್ನ ಆಧ್ಯಾತ್ಮಿಕ ಪಥದಲ್ಲಿ ನಿನಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳು.";
  }

  interface ScoredVerse {
    chapterId: number;
    verseNumber: number;
    kannada: string;
    transliteration: string;
    meaning: string;
    score: number;
  }

  const scored: ScoredVerse[] = [];

  for (const chapter of bhagavadGitaData) {
    for (const verse of chapter.verses) {
      let score = 0;
      const textToSearch = `${chapter.title} ${chapter.kannadaTitle} ${verse.kannada} ${verse.transliteration} ${verse.meaning}`.toLowerCase();

      for (const term of searchTerms) {
        if (textToSearch.includes(term)) {
          score += 1;
          if (verse.meaning.toLowerCase().includes(term)) score += 2;
        }
      }

      if (score > 0) {
        scored.push({
          chapterId: chapter.id,
          verseNumber: verse.verse,
          kannada: verse.kannada,
          transliteration: verse.transliteration,
          meaning: verse.meaning,
          score
        });
      }
    }
  }

  const topVerses = scored.sort((a, b) => b.score - a.score).slice(0, 2);

  if (topVerses.length === 0) {
    if (lang === "kn") {
      return `ನನ್ನ ಪ್ರೀತಿಯ ಅರ್ಜುನನೇ, ನಿನ್ನ ಪ್ರಶ್ನೆಯು ಯೋಚಿಸಬೇಕಾದದ್ದಾಗಿದೆ. ಜೀವನದ ಎಲ್ಲಾ ಗೊಂದಲಗಳು ಮತ್ತು ಚಿಂತೆಗಳಿಗೆ ನಿನ್ನ ಕರ್ತವ್ಯವನ್ನು ಅರಿತು ಫಲದ ಆಸೆಯಿಲ್ಲದೆ ಕೆಲಸ ಮಾಡುವುದೇ ಸರಿಯಾದ ಪರಿಹಾರವಾಗಿದೆ. 

ನಿನ್ನ ಮನಸ್ಸನ್ನು ನನ್ನಲ್ಲಿ ನೆಲೆಗೊಳಿಸು, ಯೋಗಾಭ್ಯಾಸ ಮಾಡು ಮತ್ತು ಆತ್ಮದ ಅಮರತ್ವವನ್ನು ನಂಬು. ನೀನು ಎಂದಿಗೂ ನಾಶವಾಗದ ಚೇತನವಾಗಿದ್ದೀಯೆ, ಶರೀರವಲ್ಲ. 

ಚಿಂತಿಸಬೇಡ, ನನ್ನನ್ನು ಶರಣು ಹೊಂದು. ನಾನು ನಿನ್ನನ್ನು ಎಲ್ಲಾ ತೊಂದರೆಗಳಿಂದ ಮುನ್ನಡೆಸುತ್ತೇನೆ.`;
    } else {
      return `My dear friend, your heart seeks clarity. Remember that the ultimate peace is found within. Do not be troubled by temporary joys or sorrows, as they are like passing seasons. 

Focus on performing your prescribed duties (Dharma) with a pure intent, without being attached to the results. Withdraw your senses from distractions, cultivate a calm mind through meditation, and surrender all doubts to Me. I am always seated in your heart, guiding you.`;
    }
  }

  const primary = topVerses[0];
  
  if (lang === "kn") {
    let response = `ನನ್ನ ಪ್ರೀತಿಯ ಸತ್ಯಾನ್ವೇಷಿಯೇ, ನಿನ್ನ ಸಂದೇಹಕ್ಕೆ ಭಗವದ್ಗೀತೆಯ ${primary.chapterId}ನೇ ಅಧ್ಯಾಯದ ${primary.verseNumber}ನೇ ಶ್ಲೋಕದಲ್ಲಿ ಉತ್ತರವಿದೆ:

ಶ್ಲೋಕ (ಸಂಸ್ಕೃತ):
"${primary.kannada}"

ಭಾವಾರ್ಥ:
"${primary.meaning}"

`;

    if (cleanQuery.includes("ಚಿಂತೆ") || cleanQuery.includes("ಭಯ") || cleanQuery.includes("ದುಃಖ") || cleanQuery.includes("worry") || cleanQuery.includes("fear")) {
      response += `ಇದರಿಂದ ತಿಳಿಯುವುದೇನೆಂದರೆ, ಮನುಷ್ಯನು ಹಗಲಿರುಳು ಚಿಂತಿಸುವುದರಿಂದ ಯಾವುದೇ ಪ್ರಯೋಜನವಿಲ್ಲ. ನಶ್ವರವಾದ ದೇಹಕ್ಕಾಗಿ ಶೋಕಿಸಬೇಡ. ಆತ್ಮನಿಗೆ ಎಂದಿಗೂ ಸಾವಿಲ್ಲ. ನಿನ್ನ ಎಲ್ಲಾ ಕರ್ತವ್ಯಗಳನ್ನು ಭಗವಂತನಿಗೆ ಸಮರ್ಪಿಸಿ ಭಯರಹಿತನಾಗಿ ಧರ್ಮಮಾರ್ಗದಲ್ಲಿ ಮುನ್ನಡೆ.`;
    } else if (cleanQuery.includes("ಮನಸ್ಸು") || cleanQuery.includes("ಧ್ಯಾನ") || cleanQuery.includes("mind") || cleanQuery.includes("control")) {
      response += `ಇದರಿಂದ ತಿಳಿಯುವುದೇನೆಂದರೆ, ಚಂಚಲವಾದ ಮನಸ್ಸನ್ನು ಅಭ್ಯಾಸ ಮತ್ತು ವೈರಾಗ್ಯದಿಂದ ಮಾತ್ರ ಹತೋಟಿಗೆ ತರಲು ಸಾಧ್ಯ. ಮನಸ್ಸೇ ಮನುಷ್ಯನಿಗೆ ಮಿತ್ರನೂ ಹೌದು, ವೈರಿಯೂ ಹೌದು. ಸದಾ ನಿನ್ನ ಮನಸ್ಸನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸು.`;
    } else if (cleanQuery.includes("ಕೆಲಸ") || cleanQuery.includes("ಕರ್ತವ್ಯ") || cleanQuery.includes("duty") || cleanQuery.includes("work")) {
      response += `ಇದರಿಂದ ತಿಳಿಯುವುದೇನೆಂದರೆ, ನಿನ್ನ ಕೆಲಸವನ್ನು ಫಲದ ಅಪೇಕ್ಷೆಯಿಲ್ಲದೆ ಶ್ರದ್ಧೆಯಿಂದ ಮಾಡು. ಕರ್ಮವನ್ನು ತ್ಯಜಿಸುವುದು ಯೋಗಾಭ್ಯಾಸವಲ್ಲ, ಕರ್ಮಫಲದ ಆಸೆಯನ್ನು ತ್ಯಜಿಸುವುದೇ ನಿಜವಾದ ಯೋಗವಾಗಿದೆ.`;
    } else {
      response += `ಈ ಪರಮ ಜ್ಞಾನವನ್ನು ಅರಿತು, ಚಂಚಲತೆಯನ್ನು ಬಿಟ್ಟು ನಿನ್ನ ನಿತ್ಯ ಕರ್ತವ್ಯಗಳನ್ನು ಶ್ರದ್ಧೆಯಿಂದ ನಿರ್ವಹಿಸು. ಯಾವಾಗಲೂ ನನ್ನಲ್ಲಿ ಭಕ್ತಿ ಹೊಂದಿದ್ದರೆ ನೀನು ಪರಮ ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತೀಯೆ.`;
    }
    
    return response;
  } else {
    let response = `My dear friend, to resolve your doubt, let us reflect on the divine wisdom I spoke to Arjuna in Chapter ${primary.chapterId}, Verse ${primary.verseNumber}:

Sloka (Sanskrit):
"${primary.transliteration}"

Translation:
"${primary.meaning}"

`;

    if (cleanQuery.includes("worry") || cleanQuery.includes("fear") || cleanQuery.includes("anxiety") || cleanQuery.includes("sad")) {
      response += `This teaches us that you should not lament for the temporary. The soul is immortal; it cannot be cut by weapons or burned by fire. Cast away your anxieties, perform your duty, and find refuge in Me. I shall guide you through all distress.`;
    } else if (cleanQuery.includes("mind") || cleanQuery.includes("control") || cleanQuery.includes("focus") || cleanQuery.includes("thoughts")) {
      response += `This teaches us that although the mind is restless and difficult to curb, it can be conquered by constant spiritual practice (abhyasa) and detachment (vairagya). Train your mind to seek the divinity within.`;
    } else if (cleanQuery.includes("work") || cleanQuery.includes("duty") || cleanQuery.includes("result") || cleanQuery.includes("career")) {
      response += `This teaches us that you have a right to action, but not to the fruits of your action. Work with dedication but let go of the attachment to success or failure. This selfless dedication is the secret to true peace (Karma Yoga).`;
    } else {
      response += `Contemplate this eternal wisdom, free your heart from attachments, and walk steadily on the path of Dharma. By surrendering your doubts and actions to Me, you will reach the state of pure consciousness.`;
    }

    return response;
  }
}

export default function Chat() {
  const [language, setLanguage] = useState<"en" | "kn">("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [autoListen, setAutoListen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { activeTextId, speak, stop } = useSpeech();

  // Sync welcome message on language change if thread has only the welcome message
  useEffect(() => {
    if (messages.length === 0 || (messages.length === 1 && messages[0].role === "model")) {
      setMessages([
        {
          role: "model",
          content: language === "en" 
            ? "Pranams, O seeker of truth. I am Krishna. Ask Me any question about life, duty, devotion, or wisdom. I shall resolve your doubts using the teachings of the Srimad Bhagavad Gita."
            : "ಪ್ರಣಾಮಗಳು ಸತ್ಯಾನ್ವೇಷಿ ಜಿಜ್ಞಾಸುವೇ. ನಾನು ಕೃಷ್ಣ. ಜೀವನ, ಧರ್ಮ ಮತ್ತು ಭಕ್ತಿ ಕುರಿತಾದ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ. ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆಯ ಬೋಧನೆಗಳ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಸಂಶಯಗಳನ್ನು ನಿವಾರಿಸುತ್ತೇನೆ."
        }
      ]);
    }
  }, [language]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  // Update dynamic page meta details for Google SEO
  useEffect(() => {
    updateMetaTags(
      "Ask Lord Krishna AI Chatbot | Srimad Bhagavad Gita Dialogue",
      "Speak directly with Lord Krishna AI chatbot to resolve your spiritual doubts, life problems, duty, and yoga. Get pure answers from the Srimad Bhagavad Gita.",
      "Krishna AI, Gita chatbot, ask Krishna, Bhagavad Gita questions, spiritual chatbot, Srimad Bhagavad Gita, Kannada translation"
    );
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to thread
    const updatedMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Send message thread history to express backend chat api
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: updatedMessages.slice(1, -1), // pass previous history starting from the first user message
          language,
        }),
      });

      if (!response.ok) {
        let errorMessage = "Communication failure.";
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
          } else {
            const textData = await response.text();
            errorMessage = textData.length < 150 ? textData : `Server error (Status ${response.status})`;
          }
        } catch (e) {
          errorMessage = `Server error (Status ${response.status})`;
        }
        throw new Error(errorMessage);
      }

      let data;
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
        } else {
          throw new Error("Response was not in JSON format.");
        }
      } catch (e) {
        throw new Error("Unable to parse cosmic response from server.");
      }

      const krishnaResponse = data.response;
      const newMessages = [...updatedMessages, { role: "model" as const, content: krishnaResponse }];
      setMessages(newMessages);
      // Auto-read response aloud if the user has enabled Auto Listen
      if (autoListen) {
        const idx = newMessages.length - 1;
        setTimeout(() => speak(idx.toString(), krishnaResponse, language), 400);
      }
    } catch (err: any) {
      console.warn("Backend API unavailable, falling back to offline Gita engine:", err);
      // Run local client-side RAG engine
      const krishnaResponse = generateLocalKrishnaResponse(userMessage, language);
      const newMessages = [...updatedMessages, { role: "model" as const, content: krishnaResponse }];
      setMessages(newMessages);
      
      // Auto-read response aloud if the user has enabled Auto Listen
      if (autoListen) {
        const idx = newMessages.length - 1;
        setTimeout(() => speak(idx.toString(), krishnaResponse, language), 400);
      }
    } finally {
      setIsLoading(false);
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



      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6 relative z-10 overflow-hidden">
        {/* Left Side: Animated Krishna Avatar */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full flex items-center justify-center bg-gradient-to-tr from-amber-500/10 to-purple-500/10 border border-primary/20 shadow-2xl overflow-hidden group">
            {/* Glowing Halo */}
            <div className="absolute inset-2 bg-gradient-to-tr from-amber-500/20 to-purple-500/25 rounded-full blur-xl animate-pulse" />
            {/* Animated avatar */}
            <motion.img 
              src="/krishna_flute.png" 
              alt="Lord Krishna with Flute" 
              className="w-full h-full object-cover relative z-10"
              animate={{ 
                scale: [1, 1.03, 1],
                y: [0, -3, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Ambient Sparkles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-300 rounded-full"
                  initial={{ 
                    x: Math.random() * 200, 
                    y: Math.random() * 200,
                    opacity: 0.1 
                  }}
                  animate={{ 
                    y: [null, Math.random() * -30],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-sm">
            <h2 className="font-bold text-lg text-primary flex items-center justify-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
              Srimad Bhagavad Gita AI
            </h2>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed px-4">
              "When doubts haunt me, when disappointments stare me in the face, I turn to the Bhagavad Gita and find a verse to comfort me."
            </p>
          </div>
        </div>

        {/* Right Side: Chat Window */}
        <div className="flex-1 w-full flex flex-col bg-card/65 backdrop-blur-sm border border-border/60 rounded-2xl shadow-xl overflow-hidden min-h-[450px] md:h-[600px] justify-between">
          {/* Devotional Chat Settings Bar */}
          <div className="p-3 border-b border-border/50 bg-background/30 flex items-center justify-between gap-3 flex-wrap relative z-20">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-sans text-muted-foreground font-semibold uppercase tracking-wider">Language:</span>
              <div className="flex items-center gap-0.5 border border-primary/20 bg-background/80 rounded-xl p-0.5 font-sans text-[10px]">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all cursor-pointer ${
                    language === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("kn")}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all cursor-pointer ${
                    language === "kn" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (autoListen) stop();
                setAutoListen(!autoListen);
              }}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-xl border text-[10px] font-sans font-bold transition-all cursor-pointer ${
                autoListen 
                  ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                  : "border-primary/20 bg-background/80 text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {autoListen ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
              {autoListen ? "Auto Listen: On" : "Auto Listen: Off"}
            </button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div 
                      className={`w-full rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed text-left ${
                        msg.role === "user" 
                          ? "bg-primary text-primary-foreground rounded-tr-none" 
                          : "bg-muted/70 text-foreground border border-border/50 rounded-tl-none font-serif"
                      }`}
                    >
                      {msg.content.split("\n").map((line, lIdx) => (
                        <p key={lIdx} className={lIdx > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                    {msg.role === "model" && (
                      <div className="flex items-center gap-3 mt-1 ml-2 font-sans text-[10px]">
                        <a 
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            `ॐ *Lord Krishna's Advice (Bhagavad Gita AI)* ॐ\n\n"${msg.content.slice(0, 600)}${msg.content.length > 600 ? "..." : ""}"\n\nAsk Krishna yourself at: ${window.location.origin}/chat`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.242-4.054c1.667.989 3.29 1.562 5.672 1.563 5.361 0 9.721-4.305 9.723-9.599.002-2.564-1.002-4.976-2.827-6.804C17.042 3.277 14.629 2.274 12.01 2.27c-5.368 0-9.73 4.306-9.733 9.601-.001 2.228.616 4.354 1.785 6.182L3.08 21.6l3.782-1.082l-.563-.572z"/>
                          </svg>
                          Share advice
                        </a>

                        <button
                          type="button"
                          onClick={() => speak(index.toString(), msg.content, language)}
                          className="text-primary hover:text-primary/80 font-bold flex items-center gap-1 cursor-pointer transition-colors border border-primary/20 hover:bg-primary/5 px-1.5 py-0.5 rounded-md text-[9px]"
                        >
                          {activeTextId === index.toString() ? (
                            <>
                              <VolumeX className="h-3 w-3 text-red-500 animate-pulse" />
                              <span>Stop Voice</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="h-3 w-3" />
                              <span>Listen Voice</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

               {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted/70 border border-border/50 rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center gap-2 text-muted-foreground shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span>{language === "en" ? "Krishna is composing answer..." : "ಕೃಷ್ಣನು ಉತ್ತರಿಸುತ್ತಿದ್ದಾನೆ..."}</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 border-t border-border/50 bg-background/40 backdrop-blur-sm flex items-center gap-3">
            <Input
              type="text"
              placeholder={language === "en" ? "Ask about duty (Dharma), confusion, fear, or self-realization..." : "ಕರ್ತವ್ಯ (ಧರ್ಮ), ಗೊಂದಲ, ಭಯ ಅಥವಾ ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರದ ಬಗ್ಗೆ ಕೇಳಿ..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 py-4.5 rounded-xl border border-primary/20 bg-card focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary shadow-inner"
              disabled={isLoading}
              maxLength={400}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="rounded-xl shadow-md cursor-pointer hover:shadow-lg active:scale-95 transition-all bg-primary text-primary-foreground"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-6 px-4 text-center border-t border-border/50 relative z-10">
        <p className="text-xs text-muted-foreground font-sans">
          This AI dialogue is guided solely by the eternal verses of the Bhagavad Gita.
        </p>
      </footer>
    </div>
  );
}
