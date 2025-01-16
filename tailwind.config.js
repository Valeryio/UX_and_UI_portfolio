/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"]
      },
      fontSize: {
        "demi": '.5rem',
        base: '14px',
        h1: '3rem',
        h2: '1.2rem',
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
        "5r": "5rem",
        "6r": "6rem",
        "7r": "7rem",
        "8r": "8rem",
        "9r": "9rem"
      },
      spacing: {
        "lgo": "7.5rem",
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
        "5r": "5rem",
        "6r": "6rem",
        "32r": "32rem",
        "40r": "40rem",
        "48r": "48rem",
        "56r": "56rem"
      },
      borderRadius: {
        "c-32": "2rem"
      },
      colors: {
        "c-orange": {
          50: '#',
          100: '#FF9142',
        },
        "c-black": {
          25: "#696969",
          50: "#262A2C",
          100: "#1A1A1A"
        }
      },
      gridTemplateColumns: {
          // Simple 16 row grid
          "r-img-colgrid": "repeat(2, 1fr)",
          'main-col': '19rem 1fr',
          'main-row': '1fr',
          'c-3': 'repeat(3, 3fr)',

        },
        gridTemplateRows: {
          "r-img-rowgrid": "repeat(3, 1fr)",
          'r-3': 'repeat(3, 1fr)',
          'r-4': 'repeat(4, 1fr)'

        }
    },
  },
  plugins: [],
}

