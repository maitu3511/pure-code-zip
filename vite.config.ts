import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  // The Lovable wrapper enables Nitro/Cloudflare by default.
  // For Netlify, use the official TanStack Start Netlify Vite plugin instead.
  nitro: false,
  plugins: [netlify()],
  vite: {
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "client" },
  },
});
