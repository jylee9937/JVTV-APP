const { mauve, violet, blackA } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],  theme: {
		extend: {
			colors: {
				...blackA,
				...mauve,
				...violet,
			},
			keyframes: {
				slideDown: {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
			},
		},
  },
  plugins: [
	  require("tailwindcss-radix")(),
  ],
}

