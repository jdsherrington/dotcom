import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  markdown: {
      shikiConfig: {
          themes: {
              light: "one-light",
              dark: "one-dark-pro",
          },
      },
	},

  experimental: {
      contentIntellisense: true,
	},

  devToolbar: {
      enabled: false,
	},

  integrations: [
      react(),
      icon(),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
