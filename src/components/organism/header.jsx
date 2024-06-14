import React from "react"
import { withStyles } from "@material-ui/core"
import { Navigation } from "./navigation"
import { HeaderTitleAndDescription } from "../moleculs/header-title-and-description"
import Button from "@material-ui/core/Button"
import { GatsbyImageBackground } from "../images"
import { scroller } from "react-scroll"

function Header(props) {
  const {
    classes,
    background,
    callToActionButton,
    title,
    description,
    onlyBackground,
    customHeaderContent,
    saas,
  } = props

  const backgroundClassName = onlyBackground
    ? classes.rectangle
    : classes.triangle

  const disabledAnimationClassNames = saas
    ? `${backgroundClassName} ${classes.saasDisableAnimation}`
    : backgroundClassName

  return (
    <header className={classes.header}>
      <GatsbyImageBackground
        className={disabledAnimationClassNames}
        name={background}
      >
        <div className={classes.navigationContainer}>
          <Navigation isHeader />
        </div>
        {renderHeaderContent()}
      </GatsbyImageBackground>
    </header>
  )

  function renderHeaderContent() {
    if (customHeaderContent) return customHeaderContent
    return (
      <>
        <HeaderTitleAndDescription
          title={title}
          description={description}
          customAnimationClass={classes.titleAnimation}
        />
        <div className={classes.buttonContainer}>{renderButton()}</div>
      </>
    )
  }

  function renderButton() {
    if (!callToActionButton) return null
    return (
      <Button
        className={classes.buttonStyle}
        onClick={scrollToCallToActionBlock}
      >
        {renderTextForButton()}
      </Button>
    )
  }

  function renderTextForButton() {
    return (
      <>
        <span className={classes.desktopButtonText}>
          Let’s optimize your webapp now
        </span>
        <span className={classes.mobileButtonText}>
          Let’s optimize your webapp
        </span>
      </>
    )
  }

  function scrollToCallToActionBlock() {
    scroller.scrollTo("footerCallToActionBlock", {
      duration: 400,
      delay: 100,
      smooth: true,
      offset: 0,
    })
  }
}

const styles = theme => {
  return {
    ...theme.animations.fadeIn,
    ...theme.animations.zoomIn,
    header: {
      backgroundColor: theme.palette.background.lightGray,
    },
    navigationContainer: {
      opacity: 0,
      paddingBottom: "68px",
      paddingTop: "0",
      animationDelay: ".4s",
      animation: "$fadein .4s ease-in-out forwards",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "34px",
      },
      [theme.breakpoints.down("xs")]: {
        opacity: 1,
        animation: "none",
        paddingBottom: "0px !important",
      },
    },
    rectangle: {
      height: "100vh",
      width: "100%",
    },
    triangle: {
      width: "100%",
      height: "950px",
      position: "relative",
      clipPath: "polygon(100% 0, 100% 65%, 0 100%, 0 100%, 0 0)",
      "-webkit-clip-path": "polygon(100% 0, 100% 65%, 0 100%, 0 100%, 0 0)",
      "&:before": {
        animation: "$zoomin 5s ease-in-out forwards",
      },
      [theme.breakpoints.down("md")]: {
        height: "850px",
        clipPath: "polygon(100% 0, 100% 65%, 0 100%, 0 100%, 0 0)",
        "-webkit-clip-path": "polygon(100% 0, 100% 65%, 0 100%, 0 100%, 0 0)",
      },
      [theme.breakpoints.down("sm")]: {
        height: "786px",
        clipPath: "polygon(100% 0, 100% 77.5%, 0 100%, 0 100%, 0 0)",
        "-webkit-clip-path": "polygon(100% 0, 100% 78%, 0 100%, 0 100%, 0 0)",
      },
      [theme.breakpoints.down("xs")]: {
        height: "564px",
        clipPath: "polygon(100% 0, 100% 87%, 0 100%, 0 100%, 0 0)",
        "-webkit-clip-path": "polygon(100% 0, 100% 87%, 0 100%, 0 100%, 0 0)",
      },
    },
    titleAnimation: {
      opacity: 0,
      animationDelay: ".6s",
      animation: "$fadein .4s ease-in-out forwards",
    },
    buttonStyle: {
      opacity: 0,
      minWidth: "186px",
      animationDelay: ".95s",
      animation: "$fadein .35s ease-in-out forwards",
      letterSpacing: 0,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    buttonContainer: {
      ...theme.defaultContainer,
      display: "flex",
      justifyContent: "center",
      marginTop: "19px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "53px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "8px",
      },
    },
    mobileButtonText: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    desktopButtonText: {
      display: "block",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    saasDisableAnimation: {
      "&:before": {
        animation: "none",
      },
    },
  }
}

// eslint-disable-next-line
Header = withStyles(styles)(Header)

export { Header }
