import React, { useState, useEffect, useRef } from "react"
import { TitleWithDescriptionBlock } from "./title-with-description-block"
import { GatsbyImage } from "../images"
import { Constants } from "../../constants"
import { withStyles } from "@material-ui/core"
import withWidth from "@material-ui/core/withWidth"
import useShouldAnimate from "../../hooks/useShouldAnimate"
import useScrollPosition from "../../hooks/useScrollPosition"

function OurDifferents({ width, classes }) {
  const [imageWidth, setImageWidth] = useState(827)
  const [imageName, setImageName] = useState("dashboardDesktop")

  useEffect(() => {
    if (width === "xs") {
      setImageWidth(291)
      return setImageName("dashboardMobile")
    }

    if (width === "md" || width === "sm") {
      setImageWidth(615)
      return setImageName("dashboardTablet")
    }

    if (width === "lg" || width === "xl") {
      setImageWidth(827)
      return setImageName("dashboardDesktop")
    }
  }, [width])

  const scrollPosition = useScrollPosition()
  const sectionRef = useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  return (
    <div ref={sectionRef} className={classes.wrapper}>
      <div className={classes.dashboardImage}>
        <GatsbyImage name={imageName} width={imageWidth} />
      </div>
      <div className={classes.container}>
        <TitleWithDescriptionBlock
          {...Constants.howWeDifferent}
          shouldAnimate={shouldAnimate}
          left
        />
      </div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.text.dark,
    [theme.breakpoints.down("xs")]: {
      marginTop: "6px",
    },
  },
  container: {
    height: "650px",
    backgroundColor: "#fff",
    clipPath: "polygon(0 0, 100% 0, 100% 48.5%, 0% 100%)",
    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 48.5%, 0% 100%)",
    ...theme.defaultHorizonContainer,
    "& > div": {
      paddingTop: "100px",
      maxWidth: "370px",
    },
    [theme.breakpoints.down("md")]: {
      height: "818px",
      "& > div": {
        maxWidth: "100%",
        paddingTop: "74px",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 78.5%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 78.5%, 0% 100%)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "650px",
      clipPath: "polygon(0 0, 100% 0, 100% 89%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 89%, 0% 100%)",
      "& > div": {
        paddingTop: "60px",
      },
    },
  },
  dashboardImage: {
    position: "absolute",
    top: "47px",
    right: "-52px",
    zIndex: "10",
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",

    [theme.breakpoints.between(theme.customBreakpoints.lg, "xl")]: {
      left: "calc(50% - 50px)",
    },
    [theme.breakpoints.down("xl")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 96%)",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 80%, 0% 96%)",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "100%",
      top: "421px",
      right: "3px",
      justifyContent: "center",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    [theme.breakpoints.down("xs")]: {
      top: "446px",
      right: "5px",
    },
  },
})

// eslint-disable-next-line
OurDifferents = withWidth()(withStyles(styles)(OurDifferents))

export { OurDifferents }
