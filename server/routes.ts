import type { Express } from "express";
import { type Server } from "http";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { bhagavadGitaData } from "../client/src/lib/gita-data";

// RAG: Query local Gita dataset for matching verses to ground AI answers
function retrieveGitaContext(query: string): string {
  if (!query) return "";

  const cleanQuery = query.toLowerCase().trim();
  const searchTerms = cleanQuery.split(/\s+/).filter(t => t.length > 2);
  
  if (searchTerms.length === 0) return "";

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

  const topVerses = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (topVerses.length === 0) return "";

  return topVerses.map(v => 
    `[Relevant Verse: Chapter ${v.chapterId}, Verse ${v.verseNumber}]
- Sloka (Kannada): ${v.kannada}
- Sanskrit Transliteration: ${v.transliteration}
- Local Kannada Meaning: ${v.meaning}`
  ).join("\n\n");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, language } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Use GEMINI_API_KEY from environment variables
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server. Please check your environment variables." });
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const targetLanguage = language === "kn" ? "Kannada" : "English";
      const systemInstructionText = `You are Lord Krishna, the supreme speaker of the Srimad Bhagavad Gita. You are speaking to an earnest seeker of truth.
Your task is to answer the user's questions, doubts, and queries exclusively using the wisdom, teachings, chapters (1 to 18), and verses (700) of the Srimad Bhagavad Gita.
Guidelines:
1. Speak in a compassionate, calm, divine, and authoritative yet gentle tone. Address the user with terms like "O seeker of truth", "My dear friend", "O seeker", or similar respectful spiritual addresses.
2. Under no circumstances should you answer questions that are completely unrelated to the Bhagavad Gita or spiritual/moral/ethical wisdom. If a user asks about coding, modern pop culture, math, or other secular technical questions, politely decline and steer the conversation back to their spiritual journey, life duty (Dharma), or self-realization as taught in the Gita.
3. Whenever relevant, cite specific chapters and verses (e.g., "As I explained in Chapter 2, Verse 47...") to back up your guidance.
4. IMPORTANT: Answer strictly and fully in the ${targetLanguage} language. If the target language is Kannada, you must construct the entire response in Kannada script (ಕನ್ನಡ ಲಿಪಿಯಲ್ಲಿ ಬರೆಯಿರಿ). You can write the Sanskrit slokas in Kannada transliteration or Sanskrit, but all explanations, greetings, and advice must be in clean, elegant Kannada. If the target language is English, answer in English.`;

      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: systemInstructionText,
      });

      let formattedHistory = Array.isArray(history) 
        ? history.map((msg: any) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }]
          }))
        : [];

      // Clean history: Gemini API startChat history MUST start with role 'user'
      while (formattedHistory.length > 0 && formattedHistory[0].role !== "user") {
        formattedHistory.shift();
      }

      const chat = model.startChat({
        history: formattedHistory,
      });

      // Retrieve relevant local verses context for RAG grounding
      const localContext = retrieveGitaContext(message);
      let promptMessage = message;
      if (localContext) {
        promptMessage = `[Local Gita Database Context for Reference - Do not read this note to user]:
Here are matching verses from the local database:
${localContext}

Please use this context as the primary source for explanations. Address the seeker's query: ${message}`;
      }

      const result = await chat.sendMessage(promptMessage);
      const responseText = result.response.text();

      res.json({ response: responseText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Failed to communicate with Lord Krishna." });
    }
  });

  // ─── Subscriber / Lead Capture ──────────────────────────────────────────────
  const fs = await import("fs");
  const path = await import("path");
  const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

  // Load or initialize subscribers store
  function loadSubscribers(): any[] {
    try {
      if (fs.existsSync(SUBSCRIBERS_FILE)) {
        return JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, "utf-8"));
      }
    } catch {}
    return [];
  }

  function saveSubscribers(list: any[]) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(list, null, 2), "utf-8");
  }

  // POST /api/subscribe — visitor submits their name + email
  app.post("/api/subscribe", (req, res) => {
    try {
      const { name, email, page } = req.body as { name?: string; email?: string; page?: string };
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "A valid email address is required." });
      }

      const subscribers = loadSubscribers();

      // Prevent duplicates
      const alreadyExists = subscribers.some(
        (s: any) => s.email.toLowerCase() === email.toLowerCase()
      );
      if (alreadyExists) {
        return res.json({ success: true, message: "already_subscribed" });
      }

      const newEntry = {
        id: Date.now(),
        name: (name || "").trim() || "Anonymous Seeker",
        email: email.trim().toLowerCase(),
        page: page || "/",
        subscribedAt: new Date().toISOString(),
      };

      subscribers.push(newEntry);
      saveSubscribers(subscribers);

      console.log(`[Subscriber] New: ${newEntry.name} <${newEntry.email}>`);
      res.json({ success: true, message: "subscribed", subscriber: newEntry });
    } catch (err: any) {
      console.error("Subscribe error:", err);
      res.status(500).json({ error: "Could not save subscription." });
    }
  });

  // GET /api/subscribers?key=YOUR_SECRET — admin view all subscribers
  // Replace ADMIN_SECRET_KEY below with your own password to protect this endpoint
  const ADMIN_SECRET = "#Dar9035442904";
  app.get("/api/subscribers", (req, res) => {
    const { key } = req.query;
    if (key !== ADMIN_SECRET) {
      return res.status(403).json({ error: "Forbidden. Provide correct admin key." });
    }
    const subscribers = loadSubscribers();
    res.json({
      total: subscribers.length,
      subscribers,
    });
  });

  return httpServer;
}

