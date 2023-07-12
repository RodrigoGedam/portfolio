/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans'],
			handwriting: ['Caveat'],
			headline: ['Poppins'],
		},
		extend: {
			colors: {
				vermelho: '#F65151',
				preto: '#171414',
				branco: '#FEF4F4',
				marrom: '#503A3A',
			},
		},
	},
	plugins: [],
};
