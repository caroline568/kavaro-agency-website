/**
 * Post-build script for Cloudflare Pages deployment.
 *
 * Cloudflare Pages Advanced Mode: if a `_worker.js` file exists in the
 * static assets directory, Pages runs it as a Worker for every request
 * instead of serving files statically. This is how we get SSR working.
 *
 * Steps:
 *  1. Bundle dist/server/index.js (and all its imports) into a single file
 *  2. Write it to dist/client/_worker.js
 *  3. Write dist/client/_routes.json so Pages knows to send ALL requests
 *     through the Worker (not just unknown paths)
 */

import { build } from "esbuild";
import { writeFileSync } from "fs";
import { join } from "path";

const serverEntry = join(import.meta.dirname, "dist/server/index.js");
const outFile = join(import.meta.dirname, "dist/client/_worker.js");
const routesFile = join(import.meta.dirname, "dist/client/_routes.json");

console.log("Bundling Worker for Cloudflare Pages...");

await build({
  entryPoints: [serverEntry],
  bundle: true,
  outfile: outFile,
  format: "esm",
  platform: "browser", // Cloudflare Workers use the browser-like environment
  target: "es2022",
  conditions: ["worker", "browser"],
  // Mark Node built-ins as external — Workers runtime provides these via
  // the nodejs_compat compatibility flag set in wrangler.jsonc
  external: ["node:*", "__STATIC_CONTENT_MANIFEST"],
  minify: true,
  logLevel: "info",
});

// Tell Pages to route everything through the Worker.
// Without this, Pages would only invoke the Worker for paths that don't
// match a static asset — which would break SSR for routes like /admin.
writeFileSync(
  routesFile,
  JSON.stringify({
    version: 1,
    include: ["/*"],
    exclude: [],
  }),
);

console.log("✓ dist/client/_worker.js written");
console.log("✓ dist/client/_routes.json written");
