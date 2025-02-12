import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
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
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		icon(),
	],
});
