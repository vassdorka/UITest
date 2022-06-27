module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blueish-dark': '#096f8a',
      'blueish-light': '#89cbc0',
      'blueish-dark-focus': '#1c6477',
      'gray-dark-text': '#4a4a49',
      'gray-light-text': '#a5a5a5',
      'gray-dark-button': '#878787',
      'gray-light-button': '#e0e0e0',
      'gray-search': '#f0f0f0',
      'salmon': '#f49d96',
    },
    fontFamily: {
      iBold: ['iBold', 'Inter-Bold'],
      iSBold: ['iSBold', 'Inter-SemiBold'],
      iRegular: ['iRegular', 'Inter-Regular'],
      iLight: ['iLight', 'Inter-Light'],
      iELight: ['iELight', 'Inter-ExtraLight'],
      iThin: ['iThin', 'Inter-Thin'],
    },
    extend: {
    },
    screens: {
      'xs': {'max': '599px'},
      'sm': {'min': '600px','max': '799px'},
      'md': {'min': '800px','max': '999px'},
      'lg': {'min': '1000px', 'max': '1120px'},
      'xl': {'min': '1121px', 'max': '1300px'}
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
