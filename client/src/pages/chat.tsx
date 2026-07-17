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
import { useSpeech } from "@/lib/speech";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function Chat() {
  const [language, setLanguage] = useState<"en" | "kn">("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        const errorData = await response.json();
        throw new Error(errorData.error || "Communication failure.");
      }

      const data = await response.json();
      const krishnaResponse = data.response;
      const newMessages = [...updatedMessages, { role: "model" as const, content: krishnaResponse }];
      setMessages(newMessages);
      // Auto-read response aloud if the user has enabled Auto Listen
      if (autoListen) {
        const idx = newMessages.length - 1;
        setTimeout(() => speak(idx.toString(), krishnaResponse, language), 400);
      }
    } catch (err: any) {
      console.error("Chat Error:", err);
      setMessages([
        ...updatedMessages,
        { 
          role: "model", 
          content: `My dear friend, my connection to the cosmos was interrupted: ${err.message || "Please try asking again."}` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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
            <Link 
              href="/" 
              className="mr-1 p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center border border-border/50 bg-background/30"
              aria-label="Return home"
            >
              <ArrowLeft className="h-4.5 w-4.5 text-foreground" />
            </Link>
            <span className="font-bold text-lg text-primary tracking-wide">
              Ask Lord Krishna
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-all">Home</Link>
            <Link href="/chapters" className="text-muted-foreground hover:text-primary transition-all">Chapters</Link>
            <Link href="/verses" className="text-muted-foreground hover:text-primary transition-all">Verses</Link>
            <Link href="/bookmarks" className="text-muted-foreground hover:text-primary transition-all">Bookmarks</Link>
            <Link href="/chat" className="text-primary hover:text-primary transition-all">Ask Krishna</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 border border-primary/20 bg-background/50 rounded-xl p-0.5 font-sans text-[11px]">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  language === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  language === "kn" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* Auto Listen Toggle */}
            <button
              type="button"
              onClick={() => {
                if (autoListen) stop();
                setAutoListen(!autoListen);
              }}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-[11px] font-sans font-bold transition-all cursor-pointer ${
                autoListen 
                  ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20" 
                  : "border-primary/20 bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
              aria-label="Toggle auto listen mode"
              title={autoListen ? "Auto Listen ON — Krishna's answers will be read aloud" : "Auto Listen OFF — Enable to hear Krishna's voice automatically"}
            >
              {autoListen ? (
                <Volume2 className="h-3.5 w-3.5 animate-pulse" />
              ) : (
                <VolumeX className="h-3.5 w-3.5" />
              )}
              <span>{autoListen ? "Auto Listen ON" : "Auto Listen"}</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

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
