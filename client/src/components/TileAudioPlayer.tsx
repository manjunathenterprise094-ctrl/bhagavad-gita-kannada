import { useState, useRef } from "react";
import { Play, Pause, Volume2, Music, Mic, VolumeX, Sparkles, Radio } from "lucide-react";
import { useSpeech } from "@/lib/speech";
import { Link } from "wouter";

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
  const [isAudioStreamPlaying, setIsAudioStreamPlaying] = useState(false);
  const localAudioRef = useRef<HTMLAudioElement | null>(null);

  const slokaId = id + "-sloka";
  const meaningId = id;

  const isSlokaActive = activeTextId === slokaId;
  const isMeaningActive = activeTextId === meaningId;
  const isSpeechActive = activeTab === "sloka" ? isSlokaActive : isMeaningActive;

  // Clean text snippet for audio creation
  const cleanSloka = (kannadaSlokaText || slokaText).replace(/\|\|/g, ",").replace(/\|/g, ",").replace(/ऽ/g, "").slice(0, 150).trim();
  const cleanMeaning = meaningText.replace(/\|\|/g, ",").replace(/\|/g, ",").slice(0, 150).trim();

  const activeTextSnippet = activeTab === "sloka" ? cleanSloka : cleanMeaning;
  const encText = encodeURIComponent(activeTextSnippet);
  const audioProxyUrl = `/api/tts?text=${encText}&lang=kn`;
  const directGoogleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encText}&tl=kn&client=tw-ob`;

  const toggleStreamAudio = () => {
    // Stop speech synthesis if running
    stop();

    if (localAudioRef.current) {
      if (isAudioStreamPlaying) {
        localAudioRef.current.pause();
        setIsAudioStreamPlaying(false);
      } else {
        localAudioRef.current.volume = 1.0;
        localAudioRef.current.muted = false;
        localAudioRef.current
          .play()
          .then(() => setIsAudioStreamPlaying(true))
          .catch(() => {
            // If proxy fails, try direct Google URL
            if (localAudioRef.current) {
              localAudioRef.current.src = directGoogleUrl;
              localAudioRef.current.volume = 1.0;
              localAudioRef.current.muted = false;
              localAudioRef.current
                .play()
                .then(() => setIsAudioStreamPlaying(true))
                .catch(() => setIsAudioStreamPlaying(false));
            }
          });
      }
    }
  };

  const handleVoicePlay = () => {
    // Stop stream audio if playing
    if (localAudioRef.current && !localAudioRef.current.paused) {
      localAudioRef.current.pause();
      setIsAudioStreamPlaying(false);
    }

    if (activeTab === "sloka") {
      if (isSlokaActive) {
        if (isPaused) resumeSpeech();
        else pauseSpeech();
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
    } else {
      if (isMeaningActive) {
        if (isPaused) resumeSpeech();
        else pauseSpeech();
      } else {
        speak(meaningId, meaningText, "kn", {
          title: `Chapter ${chapterNum} • Verse ${verseNum}`,
          subtitle: "Kannada Meaning Narration (ಅರ್ಥ ಶ್ರವಣ)",
        });
      }
    }
  };

  return (
    <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-primary/5 to-amber-500/10 border-2 border-primary/25 shadow-md text-foreground font-sans">
      {/* Hidden HTML5 Audio Element for Direct Stream */}
      <audio
        ref={localAudioRef}
        src={audioProxyUrl}
        preload="none"
        onEnded={() => setIsAudioStreamPlaying(false)}
        onError={() => setIsAudioStreamPlaying(false)}
      />

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
              Audio Recitation (ಶ್ರವಣ)
            </p>
          </div>
        </div>

        {/* Tab switcher: Sloka / Meaning */}
        <div className="flex items-center bg-card p-1 rounded-xl border border-primary/20 shadow-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab("sloka");
              setIsAudioStreamPlaying(false);
            }}
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
            onClick={() => {
              setActiveTab("meaning");
              setIsAudioStreamPlaying(false);
            }}
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

      {/* Main Multi-Engine Player Controls */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5 bg-card/90 p-3 rounded-xl border border-border/50 shadow-inner">
          {/* 1. Primary Speech Synthesis Button */}
          <button
            type="button"
            onClick={handleVoicePlay}
            className={`flex-1 py-2.5 px-3 rounded-xl text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${
              isSpeechActive && !isPaused
                ? "bg-amber-500 hover:bg-amber-600 animate-pulse"
                : "bg-primary hover:bg-primary/90 active:scale-95"
            }`}
          >
            {isSpeechActive && !isPaused ? (
              <>
                <Pause className="h-4 w-4 fill-current" />
                <span>Pause Voice</span>
              </>
            ) : (
              <>
                <Mic className="h-4 w-4" />
                <span>Listen {activeTab === "sloka" ? "Sloka Voice" : "Meaning Voice"}</span>
              </>
            )}
          </button>

          {/* 2. Secondary Stream MP3 Button */}
          <button
            type="button"
            onClick={toggleStreamAudio}
            className={`py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
              isAudioStreamPlaying
                ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
                : "bg-card hover:bg-primary/10 text-foreground border-primary/30"
            }`}
            title="Stream MP3 Audio"
          >
            {isAudioStreamPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                <span>Stop MP3</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 text-emerald-600 fill-current" />
                <span>Stream MP3</span>
              </>
            )}
          </button>
        </div>

        {/* 3. Link to Full Chapter Audio Discourses */}
        <div className="flex items-center justify-between text-[11px] px-1 pt-1 text-muted-foreground">
          <span className="flex items-center gap-1">
            <Radio className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            <span>Full Chapter Pravachana Discourses Available</span>
          </span>
          <Link href="/pravachana">
            <span className="font-bold text-primary hover:underline cursor-pointer flex items-center gap-1">
              <span>Listen Chapter {chapterNum} Pravachana MP3 →</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
