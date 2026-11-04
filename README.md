# Data2Action Website

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

The website uses the [Lektorat](https://www.type-together.com/lektorat-font) typeface by TypeTogether.

The D2A logo is set in _Lektorat Variable_.

The website uses _Lektorat Text_ through a dedicaged license exclusive to this website (ie. does not extend to use on other domains or print assets, etc.)

```
License owner: Lilit Yeghiazarian, Data2Action Inc
License: Up to 10,000 pageviews / month
```

See `documentation/TT-EULA_Webfont_2022.pdf` for the general license terms.
