import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// On Netlify (NETLIFY=true during their builds) use the Netlify adapter.
// Everywhere else (Lovable preview/publish) keep the default Cloudflare build.
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  ...(isNetlify ? { nitro: false, plugins: [netlify()] } : {}),
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "client" },
  },
});
