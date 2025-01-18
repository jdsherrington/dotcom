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
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
            "6xl": "3.75rem",
		},
		lineHeight: {
			"3xs": "0.7rem",
			"2xs": "0.75rem",
			xs: "1rem",
			sm: "1.25rem",
			base: "1.5rem",
			lg: "1.75rem",
			xl: "1.85rem",
			"2xl": "2rem",
			"3xl": "2.25rem",
			"4xl": "2.5rem",
			1: "1",
			none: "0",
			normal: "1.5",
		},
		letterSpacing: {
			extratight: "-0.15rem",
			tightest: "-0.1rem",
			tighter: "-0.05rem",
			tight: "-0.025rem",
			base: "0rem",
			wide: "0.05rem",
			wider: "0.1rem",
			widest: "0.15rem",
			extrawide: "0.2rem",
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
					primary: {
						DEFAULT: "oklch(var(--accent-primary) / <alpha-value>)",
						foreground:
							"oklch(var(--accent-primary-foreground) / <alpha-value>)",
						background:
							"oklch(var(--accent-primary-background) / <alpha-value>)",
					},
					secondary: {
						DEFAULT:
							"oklch(var(--accent-secondary) / <alpha-value>)",
						foreground:
							"oklch(var(--accent-secondary-foreground) / <alpha-value>)",
						background:
							"oklch(var(--accent-secondary-background) / <alpha-value>)",
					},
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
				DEFAULT: "var(--radius)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Fluent"],
				mono: ["DisketMono"],
				code: ["JetBrainsMono"],
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
