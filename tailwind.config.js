module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: "Playfair Display",
			body: "Work Sans",
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				lg: "3rem",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/src/assets/img/hero-pattern.png')",
			},
			content: {
				about: 'url("/src/assets/img/outline-text/about.svg")',
				portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
				contact: 'url("/src/assets/img/outline-text/contact.svg")',
			},
			colors: {
				primary: "#050402",
				secondary: "#1C1D24",
				tertiary: "#131419",
				accent: {
					DEFAULT: "#ac6b34",
					hover: "#925a2b",
				},
				paragraph: "#878e99",
			},
		},
	},
	plugins: [],
};
