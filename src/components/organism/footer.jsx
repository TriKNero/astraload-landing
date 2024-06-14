import React from "react"
import { withStyles } from "@material-ui/core"
import { Navigation } from "./navigation"
import { GatsbyImageBackground } from "../images"
import { FooterCallToActionBlock } from "../moleculs/footer-call-to-action-block"
import { Element } from "react-scroll"
import { useTheme } from "@material-ui/core/styles"

function Footer({ classes, callToActionBlockInfo, background }) {
  const theme = useTheme()

  return (
    <footer className={classes.wrapper}>
      <GatsbyImageBackground
        className={classes.container}
        name="spaceBackgroundImage"
      >
        <Element name="footerCallToActionBlock">
          <FooterCallToActionBlock
            callToActionBlockInfo={callToActionBlockInfo}
          />
        </Element>
      </GatsbyImageBackground>
      <div className={classes.navigationWrapper}>
        <div className={classes.navigationAndContactsContainer}>
          <Navigation linkColor={theme.palette.text.black} isHeader={false} />
        </div>
      </div>
    </footer>
  )
}

const styles = theme => {
  return {
    wrapper: {
      backgroundColor: theme.palette.text.white,
    },
    container: {
      display: "flex",
      paddingBottom: "10px",
      height: "1475px",
      flexDirection: "column",
      justifyContent: "center",
      clipPath: "polygon(0 23.3%, 100% 0, 100% 77.8%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 23.3%, 100% 0, 100% 77.8%, 0% 100%)",
      [theme.breakpoints.down("sm")]: {
        height: "1155px",
        top: "-47px",
        paddingTop: "10px",
        paddingBottom: "0px",
        clipPath: "polygon(0 15.6%, 100% 0, 100% 85%, 0% 100%)",
        "-webkit-clip-path": "polygon(0 15.6%, 100% 0, 100% 85%, 0% 100%)",
      },
      [theme.breakpoints.down("xs")]: {
        top: "0",
        height: "1163px",
        clipPath: "polygon(0 6.5%, 100% 0, 100% 93.9%, 0% 100%)",
        "-webkit-clip-path": "polygon(0 6.5%, 100% 0, 100% 93.9%, 0% 100%)",
      },
    },
    navigationWrapper: {
      position: "relative",
    },
    navigationAndContactsContainer: {
      position: "absolute",
      minWidth: "100%",
      top: "-165px",
      left: 0,
      right: 0,
      [theme.breakpoints.down("sm")]: {
        top: "-106px",
      },
      [theme.breakpoints.down("xs")]: {
        top: "-88px",
      },
    },
    logoContainer: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        marginTop: "auto",
        paddingBottom: "26px",
        paddingLeft: "0px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    navigationContainer: {
      marginTop: "auto",
      padding: "0 135px",
      display: "flex",
      ...theme.defaultHorizonContainer,
      [theme.breakpoints.down("md")]: {
        padding: "0 20px",
        width: "100%",
      },
    },
  }
}

// eslint-disable-next-line
Footer = withStyles(styles)(Footer)

export { Footer }
