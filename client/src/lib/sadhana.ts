/**
 * LocalStorage Sadhana and Reading Streak Tracker Utility
 */

export interface SadhanaStats {
  streakCount: number;
  lastReadDate: string | null; // ISO Date String (YYYY-MM-DD)
  completedVerses: string[];   // Array of "chapter_verse" strings (e.g., "1_47")
}

const STORAGE_KEY = "gita_sadhana_stats";

const getTodayDateString = (): string => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const getYesterdayDateString = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export function getSadhanaStats(): SadhanaStats {
  if (typeof window === "undefined") {
    return { streakCount: 0, lastReadDate: null, completedVerses: [] };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial: SadhanaStats = { streakCount: 0, lastReadDate: null, completedVerses: [] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }

    const stats: SadhanaStats = JSON.parse(raw);
    
    // Check if streak is broken (more than 1 day missed)
    if (stats.lastReadDate) {
      const today = getTodayDateString();
      const yesterday = getYesterdayDateString();
      
      if (stats.lastReadDate !== today && stats.lastReadDate !== yesterday) {
        // Over a day missed, reset streak to 0
        stats.streakCount = 0;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
      }
    }

    return stats;
  } catch (e) {
    console.error("Error reading sadhana stats:", e);
    return { streakCount: 0, lastReadDate: null, completedVerses: [] };
  }
}

export function saveSadhanaStats(stats: SadhanaStats) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("Error saving sadhana stats:", e);
  }
}

export function markVerseCompleted(chapterId: number, verseId: number): SadhanaStats {
  const stats = getSadhanaStats();
  const verseKey = `${chapterId}_${verseId}`;

  // Add to completed list if not already there
  if (!stats.completedVerses.includes(verseKey)) {
    stats.completedVerses.push(verseKey);
  }

  // Update streak
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  if (stats.lastReadDate === null) {
    // First time reading
    stats.streakCount = 1;
    stats.lastReadDate = today;
  } else if (stats.lastReadDate === yesterday) {
    // Read yesterday, increment streak!
    stats.streakCount += 1;
    stats.lastReadDate = today;
  } else if (stats.lastReadDate !== today) {
    // Did not read yesterday but read today (streak was broken and reset, start fresh at 1)
    stats.streakCount = 1;
    stats.lastReadDate = today;
  }
  // If stats.lastReadDate === today, they already read today, streak count stays the same.

  saveSadhanaStats(stats);
  return stats;
}

export function unmarkVerseCompleted(chapterId: number, verseId: number): SadhanaStats {
  const stats = getSadhanaStats();
  const verseKey = `${chapterId}_${verseId}`;

  stats.completedVerses = stats.completedVerses.filter(key => key !== verseKey);
  saveSadhanaStats(stats);
  return stats;
}
