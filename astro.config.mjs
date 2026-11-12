// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// GitHub Pages project site: https://ufokn.github.io/aidem_website/
const base = "/aidem_website";

// https://astro.build/config
export default defineConfig({
  site: "https://ufokn.github.io",
  base,
  redirects: {
    // Redirect targets aren't prefixed with `base` automatically
    "/solutions": `${base}/`,
    "/company": `${base}/about`,
    "/team": `${base}/about`,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [svelte(), sitemap()],
});
