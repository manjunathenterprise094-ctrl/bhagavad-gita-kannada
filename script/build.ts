import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, cp } from "fs/promises";
import { existsSync } from "fs";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "esm",
    outfile: "app.js",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  // Sync to Hostinger directories if they exist
  const hostingerNodejsDir = "hostinger-nodejs-upload";
  if (existsSync(hostingerNodejsDir)) {
    console.log("building and syncing server for hostinger Node.js app...");
    await esbuild({
      entryPoints: ["server/index.ts"],
      platform: "node",
      bundle: true,
      format: "cjs", // hostinger bundle wrapper expects cjs
      outfile: `${hostingerNodejsDir}/dist/index.cjs`,
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      minify: true,
      external: externals,
      logLevel: "info",
    });

    console.log("syncing client to hostinger-nodejs-upload...");
    const hostingerNodejsPublic = `${hostingerNodejsDir}/dist/public`;
    await rm(hostingerNodejsPublic, { recursive: true, force: true });
    await cp("dist", hostingerNodejsPublic, { recursive: true });
  }

  const hostingerStaticDir = "hostinger-upload";
  if (existsSync(hostingerStaticDir)) {
    console.log("syncing client to hostinger-upload (static version)...");
    await cp("dist", hostingerStaticDir, { recursive: true });
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
