import { createMuiTheme } from "@material-ui/core/styles"

const resolutions = {
  lg: 1280,
  md: 960,
  sm: 600,
  xl: 1920,
  xs: 0,
}

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#4d4d4d",
      secondary: "#1a1a1a",
      grey: "#ccc",
      link: "#6805a6",
      linkHover: "#8807D9",
      dark: "#100a23",
      gray95: "#f2f2f2",
      white: "#fff",
      black: "#000",
      blue: "#8C40FF",
    },
    background: {
      saas: "#4a166b",
      lightGray: "#ECF2F7",
    },
  },
  animations: {
    fadeIn: {
      "@keyframes fadein": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    zoomIn: {
      "@keyframes zoomin": {
        from: { transform: "scale(1)" },
        to: { transform: "scale(1.1)" },
      },
    },
    fadeInUp: {
      "@keyframes fadeinup": {
        from: { opacity: 0, top: "40px" },
        to: { opacity: 1, top: "0px" },
      },
    },
    fadeInShadow: {
      "@keyframes fadeinshadow": {
        from: { boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)" },
        to: { boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.3)" },
      },
    },
    itemFadeInUp: {
      position: "relative",
      opacity: 0,
      animation: "$fadeinup .7s ease-in-out forwards",
    },
    delays: {
      short: "0.35s !important",
      general: "0.7s !important",
      long: "1.05s !important",
    },
    noAnimation: {
      opacity: "1 !important",
      animation: "none !important",
      transition: "none !important",
    },
    noAnimationTop: {
      opacity: "1 !important",
      top: "0px !important",
      animation: "none !important",
      transition: "none !important",
    },
  },
  customBreakpoints: {
    lg: 1536,
    mobileL: 426,
    mobileM: 376,
    mobileS: 340,
  },
  defaultContainer: {
    padding: "40px 135px",
    [`@media (max-width: ${resolutions.lg}px)`]: {
      padding: "10px 33px",
    },
    [`@media (max-width: ${resolutions.sm}px)`]: {
      padding: "10px 20px",
    },
    [`@media (max-width: ${resolutions.xs}px)`]: {
      padding: "20px",
    },
  },
  defaultHorizonContainer: {
    paddingLeft: "375px",
    paddingRight: "375px",
    [`@media (max-width: 1919px)`]: {
      paddingLeft: "183px",
      paddingRight: "183px",
    },
    [`@media (max-width: 1535px)`]: {
      paddingLeft: "135px",
      paddingRight: "135px",
    },
    [`@media (max-width: ${resolutions.lg}px)`]: {
      paddingLeft: "33px",
      paddingRight: "33px",
    },
    [`@media (max-width: ${resolutions.sm}px)`]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  defaultImageBorders: {
    borderRadius: "10px",
    [`@media (max-width: ${resolutions.md}px)`]: {
      borderRadius: "7px",
    },
    [`@media (max-width: ${resolutions.sm}px)`]: {
      borderRadius: "3px",
    },
  },
  defaultImageShadow: {
    boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.3)",
  },
  defaultImageWidth: {
    width: "900px",
    [`@media screen and (max-width: ${resolutions.lg}px)`]: {
      width: "800px",
    },
    [`@media screen and (max-width: ${resolutions.md}px)`]: {
      width: "538px",
    },
    [`@media screen and (max-width: ${resolutions.sm}px)`]: {
      width: "480px",
    },
    [`@media screen and (max-width: 520px)`]: {
      width: "380px",
    },
    [`@media screen and (max-width: 420px)`]: {
      width: "280px",
    },
  },
  typography: {
    useNextVariants: true,
    "-webkit-font-smoothing": "antialiased",
    h1: {
      color: "#fff",
      fontSize: "54px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "800",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    h2: {
      color: "#fff",
      fontSize: "54px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "800",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    h3: {
      color: "#fff",
      fontSize: "40px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "800",
      lineHeight: "1.2",
      letterSpacing: "0em",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    h4: {
      color: "#fff",
      fontSize: "24px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "400",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    h5: {
      color: "#fff",
      fontSize: "20px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "400",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    h6: {
      color: "#fff",
      fontSize: "15px",
      fontFamily: "Europa, sans-serif",
      textDecoration: "none",
      fontWeight: "400",
      backgroundColor: "transparent",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
    body1: {
      fontFamily: "Europa, sans-serif",
      fontSize: "15px",
      color: "#4d4d4d",
      wordBreak: "break-word",
      "-webkit-font-smoothing": "antialiased",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        fontFamily: "Europa, sans-serif",
      },
      text: {
        padding: "0 40px",
        color: "#fff",
        fontFamily: "Europa, sans-serif",
        textTransform: "none",
        height: 50,
        fontSize: "18px",
        letterSpacing: "-0.1px",
        fontWeight: 600,
        borderRadius: "10px",
        cursor: "pointer",
        outline: "none",
        lineHeight: "1",
        backgroundImage: "linear-gradient(to bottom, #ffb533, #ffa600)",
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
        "-webkit-transition": "all 250ms linear",
        "&:hover": {
          backgroundImage: "linear-gradient(to bottom, #FFC533, #FFBB00)",
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
        },
        [`@media (max-width: ${resolutions.sm}px)`]: {
          padding: "0 26px",
        },
      },
      outlined: {
        padding: "0 40px",
        color: "#4d4d4d",
        fontFamily: "Europa, sans-serif",
        textTransform: "none",
        height: 50,
        fontSize: "18px",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1",
        fontWeight: 600,
        borderRadius: "10px",
        border: "solid 2px #ff9a2e",
        cursor: "pointer",
        outline: "none",
        background: "#f2f2f2",
        transition: "0.3s",
        [`@media (max-width: ${resolutions.sm}px)`]: {
          padding: "0 26px",
        },
      },
    },
  },
})

export { theme as default }
