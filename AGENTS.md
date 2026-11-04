# AidEM website

AidEM is a research project building AI agents that predict how flood damage cascades across critical infrastructure such as power, water and transportation. U.S. Army Corps of Engineers (USACE) staff and emergency managers can ask questions in plain language and get impact timelines, failure sequences, risk assessments and mitigation options. This website introduces the project to partners and funders, presents the team and links to the interactive prototype, which will be demoed on December 8, 2026.

The site started as a copy of the data2action.tech site. Pages, copy, images and branding are still data2action's and will be replaced.

## Commands

Requires Node 22.12 or newer.

| Command                       | What it does                                     |
| :---------------------------- | :----------------------------------------------- |
| `npm install`                 | Install dependencies                             |
| `npm run dev`                 | Dev server at http://localhost:4321              |
| `npm run build`               | Production build to `dist/`                      |
| `npm run preview`             | Serve the production build locally               |
| `npm run check`               | Type-check `.astro`, `.svelte` and `.ts` files   |
| `npx prettier --write <path>` | Format files (Astro and Svelte plugins included) |

`script/server`, `script/build` and `script/preview` run `npm install` first and then the matching command.

`npm run check` currently reports 10 type errors in the inline script of `src/components/Navigation.astro`. They come from the original site and don't block the build.

## Folder layout

```text
src/
  pages/            One file per route (file-based routing)
  layouts/          Layout.astro: <head>, SEO tags, navigation, footer
  components/       Astro components; Svelte only where client-side interactivity is needed
  styles/global.css Tailwind import, @font-face, theme tokens, custom utilities, base element styles
  assets/
    content-images/ Page images, processed by astro:assets
    icons/          SVG icons
public/             Files served as-is (favicon, fonts)
script/             Shell wrappers for install, dev, build, preview
documentation/      Font license
```

## Conventions

- Stack: Astro 7 (static output), Svelte 5, Tailwind CSS 4 through `@tailwindcss/vite`. There is no `tailwind.config.js`; theme tokens and custom utilities (`grid-area-*`, `text-preset-xl`, `dot-grid`) are defined in `src/styles/global.css` with `@theme` and `@utility`.
- Every page wraps its content in `Layout` and passes `title` and `description`. Optional props: `ogImage` (an imported image for social sharing) and `showUseOurData` (defaults to `true`).
- Page layout uses named grid areas: `Section` spans `grid-area-full` with a subgrid, and content inside it uses `grid-area-main` or `grid-area-text`.
- Component `<style>` blocks start with `@reference "../styles/global.css";` so they can use `@apply` with the theme.
- Put images in `src/assets` and render them with `Picture` or `Image` from `astro:assets` so they're resized and converted. Use `public/` only for files that must keep a fixed URL.
- Svelte components are hydrated with `client:visible`. Anything that doesn't need client-side state stays an Astro component.
- Redirects live in `astro.config.mjs`, which also sets `site` for the sitemap.
- The contact form uses Netlify Forms (`data-netlify` attribute), so it only submits on a Netlify deploy.
- Email addresses go through `ObfuscatedEmail` from `astro-obfuscate`, not plain `mailto:` links.
- Format with Prettier before committing.
