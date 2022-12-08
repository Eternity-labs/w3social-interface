/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#main',
  theme: {
    extend: {
      inset: {
        toast: '50%',
      },
      caretColor: {
        main: '#72F9B8',
      },
      boxShadow: {
        buttonUnlock: '2px 3px 0px 2px #72F9B8',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        6: '6 6 0%',
      },
      colors: {
        gary: 'rgba(0, 0, 0, 0.7)',
        slimGray: 'rgba(0, 0, 0, 0.5)',
        grey: '#666666',
        fSelect: '#0DCE71',
        oMainColor: 'rgba(114, 249, 184, 0.2)',
        opacityButton: 'rgba(114, 249, 184, 0.8)',
        labelBg: 'rgba(114, 249, 184, 0.4)',
        mainBgColor: 'linear-gradient(180deg, #72F9B8 0%, #DAFFC3 173.8%)',
      },
      backgroundImage: {
        logoBg: 'linear-gradient(180deg, #72F9B8 0%, #DAFFC3 173.8%)',
      },
      height: {
        headerHeight: '56px',
      },
      animation: {
        pingSlow: 'pingSlow 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
      },
      keyframes: {
        pingSlow: {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: 0.5,
          },
        },
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
