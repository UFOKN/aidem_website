# AidEM website

AidEM is a research project building AI agents that predict how flood damage cascades across critical infrastructure such as power, water and transportation. U.S. Army Corps of Engineers (USACE) staff and emergency managers can ask questions in plain language and get impact timelines, failure sequences, risk assessments and mitigation options. This website introduces the project to partners and funders, presents the team and links to the interactive prototype, which will be demoed on December 8, 2026.

The site started as a copy of the data2action.tech site and keeps its design. Pages: home (`index.astro`), team and contact. The designs live in the AidEM Figma file on the "Website" page, in the frames "AidEM / Home", "AidEM / Team" and "AidEM / Contact". "AidEM / Home (previous header, Figma only)" is kept for reference and isn't built. Images, the favicon and the "Our Technology" section are still data2action's, and the AidEM wordmark is a text placeholder (`Wordmark.astro`).

## Commands

Requires Node 22.12 or newer. Run everything through the scripts in `script/`, not `npm`, `npx` or `astro` directly. Each script installs dependencies first.

| Command                 | What it does                                                    |
| :---------------------- | :-------------------------------------------------------------- |
| `script/update`         | Install dependencies                                            |
| `script/server`         | Dev server at http://localhost:4321 (also on the local network) |
| `script/build`          | Production build to `dist/`                                     |
| `script/preview`        | Serve the production build locally                              |
| `script/lint`           | Type-check `.astro`, `.svelte` and `.ts` files (`astro check`)  |
| `script/format [paths]` | Format with Prettier; all files when no paths are given         |

## Checking your work

Run `script/format` on changed files, then `script/lint` and `script/build`. Both must pass with no errors.

For visual changes, look at the page in a browser. `.claude/launch.json` defines `aidem-dev`, which starts `script/server` on port 4321 for the Claude Code browser preview. Other agents can run `script/server` and open http://localhost:4321.

## Docs

Astro 7, Tailwind CSS 4 and Svelte 5 are recent, and older APIs often show up in suggestions. Check the current docs before writing framework code:

- Astro: the `astro-docs` MCP server in `.mcp.json` (https://mcp.docs.astro.build/mcp) searches the official Astro docs. Fall back to https://docs.astro.build.
- Tailwind CSS 4: https://tailwindcss.com/docs. Configuration lives in CSS (`@theme`, `@utility`), not `tailwind.config.js`.
- Svelte 5: https://svelte.dev/docs/svelte. Components use runes (`$state`, `$props`).

## Folder layout

```text
src/
  pages/            One file per route (file-based routing)
  layouts/          Layout.astro: <head>, SEO tags, navigation, footer
  components/       Astro components; Svelte only where client-side interactivity is needed
  styles/global.css Tailwind and font imports, theme tokens, custom utilities, base element styles
  site.ts           Site name, tagline and prototype URL
  assets/
    content-images/ Page images, processed by astro:assets
    icons/          SVG icons
public/             Files served as-is (favicon)
script/             Shell scripts for install, dev, build, preview, lint, format
```

## Conventions

- Stack: Astro 7 (static output), Svelte 5, Tailwind CSS 4 through `@tailwindcss/vite`. There is no `tailwind.config.js`; theme tokens and custom utilities (`grid-area-*`, `text-preset-xl`, `dot-grid`) are defined in `src/styles/global.css` with `@theme` and `@utility`.
- Every page wraps its content in `Layout` and passes `title` and `description`. Optional props: `ogImage` (an imported image for social sharing) and `callToActionAfter` (selector of the last section; adds the "Schedule a demo" bar above the footer).
- Page layout uses named grid areas: `Section` spans `grid-area-full` with a subgrid, and content inside it uses `grid-area-main` or `grid-area-text`.
- Component `<style>` blocks start with `@reference "../styles/global.css";` so they can use `@apply` with the theme.
- Put images in `src/assets` and render them with `Picture` or `Image` from `astro:assets` so they're resized and converted. Use `public/` only for files that must keep a fixed URL.
- Svelte components are hydrated with `client:visible`. Anything that doesn't need client-side state stays an Astro component.
- Redirects live in `astro.config.mjs`, which also sets `site` for the sitemap.
- The contact form uses Netlify Forms (`data-netlify` attribute), so it only submits on a Netlify deploy.
- The font is Hanken Grotesk (variable), self-hosted through `@fontsource-variable/hanken-grotesk`.
- Links to the AidEM prototype use `PROTOTYPE_URL` from `src/site.ts`.
- Format with `script/format` before committing. `.prettierrc` loads the Astro and Svelte plugins.
