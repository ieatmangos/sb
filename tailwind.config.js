module.exports = {
  theme: {
    cursor:{
      contextMenu: 'context-menu',
    },
    fontFamily: {
      // font stack for fallbacks
      // when putting new font families dont forget to add the link from google fonts
      // to the index.html in the public folder
      sans: ["Roboto", "system-ui"],
      lato: ["Lato", "system-ui"],

      // Starting Block Colors
      sbHeading:['Oswald', 'system-ui'],
      sbBody:['Roboto', 'system-ui']
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "88": "22rem",
      "96": "24rem",
      "104": "26rem",
      "112": "28rem",
      "120": "30rem",
      "128": "32rem",
      "136": "34rem",
      "144": "36rem",
      "152": "38rem",
      "160": "40rem"
    },

    minHeight: theme => ({
      "0": "0",
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),

    extend: {
      colors: {
        sb: {
          gray: '#595B69',
          black: '#1B202B',
          green:'#00818A',
          blue: '#8591C6',
          teal: '#00818A',
          textColor: '#11oe17'
        },
        primary: {
          lighter: "#363B45", // 06A7E2
          default: "#bbd5d8", //ecc94b
          dark: "#080D15"
        },
        secondary: {
          lighter: "#EBD480",
          default: "#ecc94b", //1a202c
          dark: "#D0AD2E"
        },
        tertiary: {
          lighter: "#7BC9E4",
          default: "#00A7E0", //1a202c
          dark: "#1388B0"
        },

        dark: {
          lighter: "#363B45", // 06A7E2
          default: "#1a202c", //ecc94b
          dark: "#080D15"
        },

        highlight: {
          lighter: "#f6e05e",
          default: "#ecc94b", //1a202c
          dark: "#d69e2e"
        }
      },

      spacing: {
        xl: "10rem",
        lg: "6.25rem",
        md: "4rem",
        sm: "1.5rem",
        xs: ".75rem",
        "2/3": "66.666667%",
        "3/4": "75%",
        "1/2": "50%"
      }
    }
  },
  variants: {
    opacity: ['group-hover', 'hover'],
    backgroundColor: ['group-hover']
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes

    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html"
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    }
  }
};
