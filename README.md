# AidEM Website

## Project Structure

Site built with [Astro](https://astro.build). Relevant folders for content updates are:

```text
├── src
│   ├── assets
│   │   └── content-images <- Images
│   ├── components
│   └── pages              <- Individual pages
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                     |
| :------------------ | :--------------------------------------------------------- |
| `./script/update`   | Installs dependencies                                      |
| `./script/server`   | Starts local dev server at `localhost:4321/aidem_website/` |
| `./script/build`    | Build production site to `./dist/`                         |
| `./script/preview`  | Preview your build locally, before deploying               |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check`           |

## Deployment

The site is hosted on GitHub Pages at https://ufokn.github.io/aidem_website/. Every push to `main` builds and deploys it through `.github/workflows/deploy.yml`. In the repository settings, Pages must use "GitHub Actions" as its source.

Because the site lives under `/aidem_website`, the dev server runs at http://localhost:4321/aidem_website/.

## Typography

The website uses [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (SIL Open Font License), installed from npm as `@fontsource-variable/hanken-grotesk`.
