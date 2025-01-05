/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	prefix: "",
	theme: {
		screens: {
			xl: "1440px", // 12 columns
			lg: "905px", // 12 columns
			md: "600px", // 8 columns
			sm: "0px", // 4 columns
		},
		fontSize: {
			"3xs": "calc(calc(calc(calc(var(--p-size) / var(--typescale-ratio)) / var(--typescale-ratio)) / var(--typescale-ratio)) / var(--typescale-ratio))",
			"2xs": "calc(calc(calc(var(--p-size) / var(--typescale-ratio)) / var(--typescale-ratio)) / var(--typescale-ratio))",
			xs: "calc(calc(var(--p-size) / var(--typescale-ratio)) / var(--typescale-ratio))",
			sm: "calc(var(--p-size) / var(--typescale-ratio))",
			base: "var(--p-size)",
			lg: "calc(var(--p-size) * var(--typescale-ratio))",
			xl: "calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio))",
			"2xl": "calc(calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio))",
			"3xl": "calc(calc(calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio))",
			"4xl": "calc(calc(calc(calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio))",
			"5xl": "calc(calc(calc(calc(calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio))",
			"6xl": "calc(calc(calc(calc(calc(calc(calc(var(--p-size) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio)) * var(--typescale-ratio))",
		},
		lineHeight: {
			"3xs": "0.7rem",
			"2xs": "0.75rem",
			xs: "1rem",
			sm: "1.25rem",
			base: "1.5rem",
			lg: "1.75rem",
			xl: "1.75rem",
			"2xl": "2rem",
			"3xl": "2.25rem",
			"4xl": "2.5rem",
			"5xl": "1",
			"6xl": "1",
			none: "0",
			normal: "1.5",
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				border: "oklch(var(--border) / <alpha-value>)",
				input: "oklch(var(--input) / <alpha-value>)",
				ring: "oklch(var(--ring) / <alpha-value>)",
				background: "oklch(var(--background) / <alpha-value>)",
				foreground: "oklch(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "oklch(var(--primary) / <alpha-value>)",
					foreground:
						"oklch(var(--primary-foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
					foreground:
						"oklch(var(--secondary-foreground) / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
					foreground:
						"oklch(var(--destructive-foreground) / <alpha-value>)",
				},
				muted: {
					DEFAULT: "oklch(var(--muted) / <alpha-value>)",
					foreground:
						"oklch(var(--muted-foreground) / <alpha-value>)",
				},
				accent: {
					DEFAULT: "oklch(var(--accent) / <alpha-value>)",
					foreground:
						"oklch(var(--accent-foreground) / <alpha-value>)",
				},
				popover: {
					DEFAULT: "oklch(var(--popover) / <alpha-value>)",
					foreground:
						"oklch(var(--popover-foreground) / <alpha-value>)",
				},
				card: {
					DEFAULT: "oklch(var(--card) / <alpha-value>)",
					foreground: "oklch(var(--card-foreground) / <alpha-value>)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Fluent"],
				mono: ["JetBrainsMono"],
				pixel: ["DepartureMono"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
