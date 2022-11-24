/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#main',
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        6: '6 6 0%',
      },
      colors: {
        gary: 'rgba(0, 0, 0, 0.7)',
        slimgray: 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        logobg: 'linear-gradient(180deg, #72F9B8 0%, #DAFFC3 173.8%)',
        fNormal: '#494949',
        fSelect: '#0DCE71',
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
