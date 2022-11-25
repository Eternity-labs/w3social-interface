/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#main',
  theme: {
    extend: {
      boxShadow: {
        buttonunlock: '2px 3px 0px 2px #72F9B8',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        6: '6 6 0%',
      },
      colors: {
        gary: 'rgba(0, 0, 0, 0.7)',
        slimgray: 'rgba(0, 0, 0, 0.5)',
        grey: '#666666',
        fSelect: '#0DCE71',
      },
      backgroundImage: {
        logobg: 'linear-gradient(180deg, #72F9B8 0%, #DAFFC3 173.8%)',
      },
      height: {
        headerHeight: '56px',
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
