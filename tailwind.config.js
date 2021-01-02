module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		rotate: {
			'24': '24deg',
			'36': '36deg',
			'48': '48deg',
			'60': '60deg',
		},
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
