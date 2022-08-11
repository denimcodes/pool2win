/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#0D0D11",
				accent: "#A84108",
			},
		},
		fontFamily: {
			DMSans: ["DM Sans", "sans-serif"],
		},
	},
	plugins: [],
};
