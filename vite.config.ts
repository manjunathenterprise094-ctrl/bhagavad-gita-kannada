import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig(async () => {
  const plugins = [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
  ];

  if (process.env.NODE_ENV !== "production") {
    try {
      const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal").then(
        (m) => m.default || m
      );
      plugins.push(runtimeErrorOverlay());
    } catch (e) {
      console.warn("Could not load runtime error overlay plugin:", e);
    }

    if (process.env.REPL_ID !== undefined) {
      try {
        const cartographer = await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer);
        const devBanner = await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner);
        plugins.push(cartographer());
        plugins.push(devBanner());
      } catch (e) {
        console.warn("Could not load Replit workspace plugins:", e);
      }
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
