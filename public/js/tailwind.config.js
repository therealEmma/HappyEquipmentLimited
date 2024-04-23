/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			fontFamily: {
				sans: ['"Open Sans"', "sans-serif"],
				heading: ['"Montserrat"', "sans-serif"],
			},
			colors: {
				primary: "#FFB400",
			},
		},
	},
	plugins: [],
};
