module.exports = {
  purge: ['./index.html', './src/scripts/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: '#00FFFF',
        hotPink: '#FF1744',
        electricGreen: '#00FF41',
        deepPurple: '#1A0033',
        electricPink: '#FF0080'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}