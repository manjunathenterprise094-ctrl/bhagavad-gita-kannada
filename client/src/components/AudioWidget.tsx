import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  subscribeSpeechState, 
  stopAllGlobalAudio,
  globalActiveAudio,
  type SpeechState 
} from "@/lib/speech";

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export function AudioWidget() {
  const [state, setState] = useState<SpeechState>({
    activeTextId: null,
    isPlaying: false,
    isPaused: false,
    audioUrl: null,
    activeInfo: null,
    textToSpeak: "",
    lang: "en",
    playbackRate: 1.0,
  });

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [showNativePlayer, setShowNativePlayer] = useState(false);

  useEffect(() => {
    return subscribeSpeechState(setState);
  }, []);

  // Poll time updates from globalActiveAudio
  useEffect(() => {
    let timer: any = null;
    if (state.isPlaying) {
      timer = setInterval(() => {
        if (globalActiveAudio) {
          setCurrentTime(globalActiveAudio.currentTime || 0);
          setDuration(globalActiveAudio.duration || 0);
        }
      }, 250);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.isPlaying]);

  if (!state.activeTextId) return null;

  const togglePlayPause = () => {
    if (globalActiveAudio) {
      if (globalActiveAudio.paused) {
        globalActiveAudio.play().catch(() => {});
      } else {
        globalActiveAudio.pause();
      }
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
    }
  };

  const changeSpeed = (rate: number) => {
    setPlaybackSpeed(rate);
    if (globalActiveAudio) {
      globalActiveAudio.playbackRate = rate;
    }
  };

  const handleClose = () => {
    stopAllGlobalAudio();
  };

  return (
    <AnimatePresence>
      {state.activeTextId && (
        <motion.div
          initial={{ y: 90, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 90, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-xl bg-card/95 border-2 border-primary/40 shadow-2xl backdrop-blur-xl rounded-2xl p-3 sm:p-4 text-foreground font-sans"
        >
          {/* Default Browser Native Audio Element */}
          <audio
            ref={audioRef}
            onTimeUpdate={() => {
              if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
            }}
            onLoadedMetadata={() => {
              if (audioRef.current) setDuration(audioRef.current.duration || 0);
            }}
            onEnded={handleClose}
            onError={() => {
              console.warn("Audio stream error.");
            }}
            className={showNativePlayer ? "w-full mb-3 rounded-lg block" : "hidden"}
            controls={showNativePlayer}
          />

          {/* Header Info */}
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-border/40">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="p-2 rounded-xl bg-primary/10 text-primary animate-pulse shrink-0">
                <Volume2 className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">
                  {state.activeInfo?.title || "Srimad Bhagavad Gita"}
                </h4>
                <p className="text-[10px] text-muted-foreground font-medium truncate">
                  {state.activeInfo?.subtitle || "Playing Audio Recitation"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setShowNativePlayer(!showNativePlayer)}
                className="px-2 py-0.5 text-[9px] font-bold rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/15 transition-colors text-primary cursor-pointer"
                title="Toggle Default Browser Player"
              >
                {showNativePlayer ? "Hide Default" : "Default Player"}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                title="Close Player"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Player Controls */}
          <div className="flex items-center gap-3">
            {/* Big Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer shrink-0"
              aria-label={state.isPlaying ? "Pause audio" : "Play audio"}
            >
              {state.isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
            </button>

            {/* Time Scrubber */}
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setCurrentTime(val);
                  if (audioRef.current) audioRef.current.currentTime = val;
                }}
                className="flex-1 h-1.5 accent-primary bg-muted rounded-lg cursor-pointer"
              />
              <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                {formatTime(duration)}
              </span>
            </div>

            {/* Speed Options */}
            <div className="flex items-center gap-1 shrink-0">
              {[0.8, 1.0, 1.25].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => changeSpeed(rate)}
                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded transition-colors ${
                    playbackSpeed === rate
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
