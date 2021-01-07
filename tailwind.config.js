module.exports = {
  purge: {
		  content:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
			
		  options: {
				safelist: [
							"from-yellow-400",
							"to-green-500",
							"from-blue-400",
							"to-indigo-600",
							"from-indigo-400",
							"to-pink-500",
							"from-pink-400",
							"to-red-500",	
						  ],
		  }
  },

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
