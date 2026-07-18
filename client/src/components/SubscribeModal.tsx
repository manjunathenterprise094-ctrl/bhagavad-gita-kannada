import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Sparkles, Check, Heart } from "lucide-react";
import { useLocation } from "wouter";

const STORAGE_KEY = "gita_subscribed";

export default function SubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    // Do not show if user already subscribed or dismissed this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY + "_dismissed");
    const subscribed = localStorage.getItem(STORAGE_KEY);
    if (dismissed || subscribed) return;

    // Show after 30 seconds
    const timer = setTimeout(() => setIsOpen(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY + "_dismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), page: location }),
      });

      let data;
      try {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          throw new Error("Invalid response format.");
        }
      } catch (e) {
        throw new Error("Unable to contact the subscription service. The server may be offline.");
      }

      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      if (data.message === "already_subscribed") {
        setStatus("duplicate");
      } else {
        setStatus("success");
        localStorage.setItem(STORAGE_KEY, "1");
      }
    } catch (err: any) {
      setStatus("error");
      let friendlyMessage = err.message || "Could not subscribe. Please try again.";
      if (friendlyMessage.includes("Unexpected token '<'") || friendlyMessage.includes("DOCTYPE")) {
        friendlyMessage = "The subscription service returned an invalid response. The backend server might be offline.";
      }
      setErrorMsg(friendlyMessage);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div className="relative w-full max-w-md bg-card border border-border/60 rounded-3xl shadow-2xl overflow-hidden">

              {/* Glowing top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

              {/* Ambient glow blobs */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all z-10 cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-8 relative">
                {status === "success" || status === "duplicate" ? (
                  /* ── Success State ── */
                  <motion.div
                    className="text-center py-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Check className="h-8 w-8 text-white" strokeWidth={3} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {status === "duplicate" ? "Already Subscribed! 🙏" : "Jai Shri Krishna! 🙏"}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {status === "duplicate"
                        ? "You're already part of our divine community. May Lord Krishna guide your path."
                        : "You have been blessed with daily wisdom from the Bhagavad Gita. May your journey be filled with light and dharma."}
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-5 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm btn-shimmer btn-glow cursor-pointer"
                    >
                      Continue Reading
                    </button>
                  </motion.div>
                ) : (
                  /* ── Subscribe Form ── */
                  <>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg mb-4 logo-glow">
                        <span className="text-2xl text-white font-serif font-bold">ॐ</span>
                      </div>
                      <div className="divine-badge inline-flex items-center gap-1.5 mb-3">
                        <Sparkles className="h-3 w-3" /> Daily Divine Wisdom
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-2 text-gradient-gold">
                        Receive Krishna's Wisdom
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Join seekers receiving daily verses, spiritual insights, and updates from the Bhagavad Gita.
                        <span className="block mt-1 text-xs opacity-70 font-sans">
                          🔒 No spam. Unsubscribe anytime. Your data is safe.
                        </span>
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Name */}
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Your name (optional)"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/60 bg-muted/30 text-sm font-sans focus:outline-none divine-input placeholder:text-muted-foreground/60"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        <input
                          type="email"
                          placeholder="Your email address *"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/60 bg-muted/30 text-sm font-sans focus:outline-none divine-input placeholder:text-muted-foreground/60"
                        />
                      </div>

                      {/* Error */}
                      {status === "error" && (
                        <p className="text-xs text-red-500 font-sans px-1">{errorMsg}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg btn-shimmer btn-glow divine-ripple cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? (
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        ) : (
                          <>
                            <Heart className="h-4 w-4 fill-white" />
                            Subscribe to Daily Wisdom
                          </>
                        )}
                      </button>

                      <p className="text-center text-[10px] text-muted-foreground font-sans mt-1">
                        By subscribing, you agree to receive spiritual content from Bhagavad Gita.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
