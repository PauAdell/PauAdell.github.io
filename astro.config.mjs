import { defineConfig } from "astro/config";

// Deployed as a GitHub user site (repo named "<user>.github.io"), so no `base`.
// When you get your own domain, change `site` to it and add public/CNAME.
export default defineConfig({
  site: "https://pauadell.github.io",
});
