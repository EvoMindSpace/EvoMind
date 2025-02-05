/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				// background: "hsl(var(--background))",
				// foreground: "hsl(var(--foreground))",
				// primary: {
				// 	DEFAULT: "hsl(var(--primary))",
				// 	foreground: "hsl(var(--primary-foreground))",
				// },
				// secondary: {
				// 	DEFAULT: "hsl(var(--secondary))",
				// 	foreground: "hsl(var(--secondary-foreground))",
				// },
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				// card: {
				// 	DEFAULT: "hsl(var(--card))",
				// 	foreground: "hsl(var(--card-foreground))",
				// },
				primary: {
					DEFAULT: "#722ED1",
					light: "#F9F0FF",
					dark: "#4A0E91",
					100: "#F3E8FF",
					200: "#E9D5FF",
					300: "#D8B4FE",
					400: "#C084FC",
					500: "#A855F7",
					600: "#9333EA",
					700: "#7E22CE",
					800: "#6B21A8",
					900: "#581C87",
				},
				secondary: {
					DEFAULT: "#18191F",
					100: "#C7C9D9",
					200: "#8F90A6",
					300: "#555770",
					400: "#28293D",
				},
				background: "#1E1E2E",
				card: "#252538",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
