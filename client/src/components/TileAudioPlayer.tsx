import { useState } from "react";
import { Volume2, Music, Mic } from "lucide-react";
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
  const { speak, activeTextId, stop } = useSpeech();
  const [activeTab, setActiveTab] = useState<"sloka" | "meaning">("sloka");

  const cleanSloka = (kannadaSlokaText || slokaText)
    .replace(/\|\|/g, ",")
    .replace(/\|/g, ",")
    .replace(/ऽ/g, "")
    .slice(0, 180);

  const cleanMeaning = meaningText
    .replace(/\|\|/g, ",")
    .replace(/\|/g, ",")
    .slice(0, 180);

  const slokaAudioUrl = `/api/tts?text=${encodeURIComponent(cleanSloka)}&lang=kn`;
  const meaningAudioUrl = `/api/tts?text=${encodeURIComponent(cleanMeaning)}&lang=kn`;

  const isSlokaPlaying = activeTextId === id + "-sloka";
  const isMeaningPlaying = activeTextId === id;

  return (
    <div className="mt-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/5 via-muted/50 to-primary/5 border border-primary/20 shadow-sm text-foreground font-sans">
      {/* Header bar inside tile */}
      <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
            <Volume2 className="h-4 w-4" />
          </div>
          <span className="text-xs font-bold text-foreground">
            Audio Recitation • {chapterNum}.{verseNum}
          </span>
        </div>

        {/* Tab switcher: Sloka / Meaning */}
        <div className="flex items-center bg-muted p-0.5 rounded-lg border border-border/40">
          <button
            type="button"
            onClick={() => setActiveTab("sloka")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
              activeTab === "sloka"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sloka (ಶ್ಲೋಕ)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("meaning")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
              activeTab === "meaning"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Meaning (ಅರ್ಥ)
          </button>
        </div>
      </div>

      {/* Main Embedded HTML5 Default Player */}
      <div className="space-y-2">
        {activeTab === "sloka" ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                <Music className="h-3 w-3 text-primary" /> Sanskrit Sloka Player:
              </span>
              <button
                type="button"
                onClick={() => {
                  speak(
                    id + "-sloka",
                    slokaText,
                    "sloka",
                    {
                      title: `Chapter ${chapterNum} • Verse ${verseNum}`,
                      subtitle: "Sanskrit Sloka Recitation",
                    },
                    kannadaSlokaText
                  );
                }}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all cursor-pointer flex items-center gap-1 border ${
                  isSlokaPlaying
                    ? "bg-amber-500 text-white border-amber-600 animate-pulse"
                    : "bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
                }`}
              >
                <Mic className="h-3 w-3" />
                <span>{isSlokaPlaying ? "Stop Voice" : "Listen Sloka Voice"}</span>
              </button>
            </div>

            {/* Native Embedded Audio Element */}
            <audio
              controls
              preload="metadata"
              className="w-full h-9 rounded-lg"
              src={slokaAudioUrl}
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                <Music className="h-3 w-3 text-primary" /> Kannada Meaning Player:
              </span>
              <button
                type="button"
                onClick={() => {
                  speak(id, meaningText, "kn", {
                    title: `Chapter ${chapterNum} • Verse ${verseNum}`,
                    subtitle: "Kannada Meaning (ಅರ್ಥ)",
                  });
                }}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all cursor-pointer flex items-center gap-1 border ${
                  isMeaningPlaying
                    ? "bg-amber-500 text-white border-amber-600 animate-pulse"
                    : "bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
                }`}
              >
                <Mic className="h-3 w-3" />
                <span>{isMeaningPlaying ? "Stop Voice" : "Listen Meaning Voice"}</span>
              </button>
            </div>

            {/* Native Embedded Audio Element */}
            <audio
              controls
              preload="metadata"
              className="w-full h-9 rounded-lg"
              src={meaningAudioUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
}
