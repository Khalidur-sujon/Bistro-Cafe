/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: "Playfair Display",
			secondary: "Lato",
		},
		container: {
			padding: {
				DEFAULT: "10px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
		},
		extend: {
			colors: {
				body: "#e5e5e5",
				dark: "#0a0909",
				grey: {
					DEFAULT: "#777876",
					100: "#e4e4e3",
				},
				accent: {
					DEFAULT: "#fe7634",
					hover: "#F55304",
				},
			},
			backgroundImage: {
				pattern: "url('./src/assets/img/body-bg-pattern.png')",
				hero: "url('./src/assets/img/hero/bg.png')",
				menu: "url('./src/assets/img/menu/bg.png')",
				testimonial: "url('./src/assets/img/testimonial/bg.png')",
				newsletter: "url('./src/assets/img/newsletter/bg.png')",
				footer: "url('./src/assets/img/footer/bg.png')",
			},
		},
	},
	plugins: [],
};
