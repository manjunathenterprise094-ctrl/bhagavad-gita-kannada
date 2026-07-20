import { useState } from "react";
import { Play, Pause, Volume2, Music, Mic, VolumeX, Sparkles } from "lucide-react";
import { useSpeech } from "@/lib/speech";

interface TileAudioPlayerProps {
  id: string;
  verseNum: number | string;
  chapterNum: number | string;
  slokaText: string;
  meaningText: string;
  kannadaSlokaText?: string;
}

export function TileAudioPlayer({
  id,
  verseNum,
  chapterNum,
  slokaText,
  meaningText,
  kannadaSlokaText,
}: TileAudioPlayerProps) {
  const { speak, stop, activeTextId, isPaused, pauseSpeech, resumeSpeech } = useSpeech();
  const [activeTab, setActiveTab] = useState<"sloka" | "meaning">("sloka");

  const slokaId = id + "-sloka";
  const meaningId = id;

  const isSlokaActive = activeTextId === slokaId;
  const isMeaningActive = activeTextId === meaningId;
  const isCurrentActive = activeTab === "sloka" ? isSlokaActive : isMeaningActive;

  const handlePlaySloka = () => {
    if (isSlokaActive) {
      if (isPaused) {
        resumeSpeech();
      } else {
        pauseSpeech();
      }
    } else {
      speak(
        slokaId,
        slokaText,
        "sloka",
        {
          title: `Chapter ${chapterNum} • Verse ${verseNum}`,
          subtitle: "Sanskrit Sloka Recitation (ಶ್ಲೋಕ ಶ್ರವಣ)",
        },
        kannadaSlokaText
      );
    }
  };

  const handlePlayMeaning = () => {
    if (isMeaningActive) {
      if (isPaused) {
        resumeSpeech();
      } else {
        pauseSpeech();
      }
    } else {
      speak(meaningId, meaningText, "kn", {
        title: `Chapter ${chapterNum} • Verse ${verseNum}`,
        subtitle: "Kannada Meaning Narration (ಅರ್ಥ ಶ್ರವಣ)",
      });
    }
  };

  const handleCurrentPlay = () => {
    if (activeTab === "sloka") {
      handlePlaySloka();
    } else {
      handlePlayMeaning();
    }
  };

  return (
    <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-primary/5 to-amber-500/10 border-2 border-primary/25 shadow-md text-foreground font-sans">
      {/* Header bar inside tile */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/15 text-primary animate-pulse">
            <Volume2 className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">
              Verse {chapterNum}.{verseNum} Audio Recitation
            </h4>
            <p className="text-[10px] text-muted-foreground font-medium">
              Local Indian Voice Narration (ಶ್ರವಣ)
            </p>
          </div>
        </div>

        {/* Tab switcher: Sloka / Meaning */}
        <div className="flex items-center bg-card p-1 rounded-xl border border-primary/20 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("sloka")}
            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "sloka"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sloka (ಶ್ಲೋಕ)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("meaning")}
            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "meaning"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Meaning (ಅರ್ಥ)
          </button>
        </div>
      </div>

      {/* Main Interactive Player Controls */}
      <div className="flex items-center gap-3 bg-card/90 p-3 rounded-xl border border-border/50 shadow-inner">
        {/* Big Play / Pause Button */}
        <button
          type="button"
          onClick={handleCurrentPlay}
          className={`p-3.5 rounded-full text-white transition-all shadow-md cursor-pointer shrink-0 flex items-center justify-center ${
            isCurrentActive && !isPaused
              ? "bg-amber-500 hover:bg-amber-600 scale-105"
              : "bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95"
          }`}
          title={isCurrentActive && !isPaused ? "Pause Narration" : "Play Narration"}
        >
          {isCurrentActive && !isPaused ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Title & Animated Equalizer Indicator */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold truncate">
              {activeTab === "sloka" ? "Sanskrit Sloka (ಶ್ಲೋಕ)" : "Kannada Meaning (ಅರ್ಥ)"}
            </span>
            {isCurrentActive && !isPaused && (
              <span className="flex gap-1 items-end h-3 px-2">
                <span className="w-1 h-3 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0s" }} />
                <span className="w-1 h-4 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.15s" }} />
                <span className="w-1 h-2.5 bg-amber-500 animate-bounce rounded-full" style={{ animationDelay: "0.3s" }} />
              </span>
            )}
          </div>

          <p className="text-[11px] text-muted-foreground truncate">
            {isCurrentActive
              ? isPaused
                ? "Paused • Tap to resume"
                : "Playing with local Indian voice..."
              : "Tap Play button to listen to narration"}
          </p>
        </div>

        {/* Action Button: Direct Speak or Stop */}
        {isCurrentActive ? (
          <button
            type="button"
            onClick={() => stop()}
            className="px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shrink-0"
            title="Stop Audio"
          >
            <VolumeX className="h-3.5 w-3.5" />
            <span>Stop</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCurrentPlay}
            className="px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shrink-0"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Listen</span>
          </button>
        )}
      </div>
    </div>
  );
}
