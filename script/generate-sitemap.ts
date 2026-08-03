import { writeFileSync } from "fs";
import { bhagavadGitaData } from "../client/src/lib/gita-data";
import path from "path";

const BASE_URL = "https://gita.sanatana360.com";

export function generateSitemap() {
  console.log("Generating sitemap.xml dynamically...");

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Pages
  const staticPages = [
    { path: "", priority: "1.0", freq: "weekly" },
    { path: "/chapters", priority: "0.9", freq: "monthly" },
    { path: "/verses", priority: "0.8", freq: "monthly" },
    { path: "/chat", priority: "0.9", freq: "weekly" },
    { path: "/pravachana", priority: "0.8", freq: "monthly" },
    { path: "/storybook", priority: "0.8", freq: "monthly" },
    { path: "/bookmarks", priority: "0.4", freq: "monthly" },
    { path: "/about", priority: "0.5", freq: "monthly" }
  ];

  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.freq}</changefreq>
  </url>`;
  }

  // 2. Chapter Detail Pages & Verse Detail Pages
  for (const chapter of bhagavadGitaData) {
    // Add Chapter Page
    xml += `
  <url>
    <loc>${BASE_URL}/chapter/${chapter.id}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`;

    // Add individual Verse Pages
    for (const verse of chapter.verses) {
      xml += `
  <url>
    <loc>${BASE_URL}/chapter/${chapter.id}/verse/${verse.verse}</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>`;
    }
  }

  xml += `\n</urlset>\n`;

  const sitemapPath = path.resolve(process.cwd(), "client", "public", "sitemap.xml");
  writeFileSync(sitemapPath, xml, "utf-8");
  console.log(`Successfully generated sitemap.xml with 700+ URLs at: ${sitemapPath}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("generate-sitemap.ts")) {
  generateSitemap();
}
