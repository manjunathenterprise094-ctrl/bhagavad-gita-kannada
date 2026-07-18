import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Search for the client build directory containing index.html dynamically
  const possiblePaths = [
    path.resolve(__dirname, "dist"),
    path.resolve(__dirname, "public"),
    path.resolve(__dirname, "..", "dist"),
    path.resolve(__dirname, "..", "dist", "public"),
    path.resolve(process.cwd(), "dist"),
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "hostinger-nodejs-upload", "dist", "public"),
    path.resolve(__dirname, "dist", "public"),
  ];

  let distPath = "";
  for (const p of possiblePaths) {
    if (fs.existsSync(path.join(p, "index.html"))) {
      distPath = p;
      break;
    }
  }

  if (!distPath) {
    throw new Error(
      `Could not find the build directory containing index.html in any of the search paths:\n` +
      possiblePaths.map(p => `  - ${p}`).join("\n") +
      `\nPlease build the client first using 'npm run build'.`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist (SPA routing fallback)
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
