/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			orange: '0px 20px 20px -15px rgba(245,56,56,0.81) ',
			'orange-md': '0px 20px 40px -15px rgba(245,56,56,0.81) ',
			none: 'none',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			lightgrey: '#444245',
			grey: 'rgba(0, 0, 0, 0.55)',
			lightpink: '#F8F7F7',
			pink: '#DF6751',
			bgpink: 'rgba(223, 103, 81, 0.15)',
			darkpink: '#FEEDEA',
			lightblack: '#333333',
			textbl: '#363636',
			footerlinks: 'rgba(54, 54, 54, 0.9)',
			bordertop: 'rgba(105, 120, 131, 0.16)',
			darkgrey: 'rgba(44, 9, 11, 0.8)',
			error: '#ff3333',
			orange: {
				100: '#FFECEC',
				500: '#F53855',
			},
			green: {
				500: '#2FAB73',
			},
			gray: {
				100: '#EEEFF2',
				400: '#AFB5C0',
				500: '#DDDDDD',
			},
			red: {
				300: '#ff4d4d',
				500: '#e60000',
			},
		},
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '4.25rem' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '6.75rem' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		extend: {
			backgroundImage: {
				'banner-img': "url('/images/Banner/mui-ganh.png')",
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['active', 'hover'],
		},
	},
	plugins: [],
};
