// Shared site settings
export const SITE_NAME = "AidEM";
export const TAGLINE = "Deep AI Agents for Disaster and Emergency Mitigation";
// Current AidEM prototype (same link as "Explore the Tool" on aid-em.org)
export const PROTOTYPE_URL = "https://wenokn-web-3qadwea7va-uc.a.run.app/";

// The site is served from a subpath on GitHub Pages (see `base` in
// astro.config.mjs). Prefix internal links with it: url("/about").
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
