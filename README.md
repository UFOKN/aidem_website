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

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `./script/update`   | Installs dependencies                            |
| `./script/server`   | Starts local dev server at `localhost:4321`      |
| `./script/build`    | Build production site to `./dist/`               |
| `./script/preview`  | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## Deployment

The site is deployed through Netlify. Commits to the `main` branch are deployed to production. Pull requests against `main` trigger a deploy preview (ie. staging URL) that can be accessed in Netlify.

## Typography

The website uses [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (SIL Open Font License), installed from npm as `@fontsource-variable/hanken-grotesk`.
