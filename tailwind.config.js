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
        grey: '#666666',
        fSelect: '#0DCE71',
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
