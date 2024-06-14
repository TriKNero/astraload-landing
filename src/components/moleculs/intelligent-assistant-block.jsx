import React from "react"
import { TitleWithDescriptionBlock } from "./title-with-description-block"
import { withStyles, withWidth } from "@material-ui/core"
import { GatsbyImage } from "../images"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function IntelligentAssistantBlock({ classes, title, description, width }) {
  const topImageName = width === "xs" ? "saasMobile5" : "saasDesktop5"
  const bottomImageName = width === "xs" ? "saasMobile3" : "saasDesktop3"

  const scrollPosition = useScrollPosition()
  const sectionRef = React.useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  return (
    <div ref={sectionRef} className={classes.container}>
      <div className={classes.topImageWrapper}>
        <GatsbyImage
          name={topImageName}
          customClassName={classes.topImageStyle}
        />
      </div>
      <div className={classes.titleContainer}>
        <TitleWithDescriptionBlock
          title={title}
          description={description}
          titleClassName={classes.title}
          shouldAnimate={shouldAnimate}
          animationDelay=".35s"
        />
      </div>
      <div className={classes.bottomImageWrapper}>
        <GatsbyImage
          name={bottomImageName}
          customClassName={classes.bottomImageStyle}
        />
      </div>
    </div>
  )
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  container: {
    position: "relative",
    display: "flex",
    height: "637px",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "583px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "584px",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.27",
    },
  },
  titleContainer: {
    paddingBottom: "95px",
    ...theme.defaultHorizonContainer,
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      paddingBottom: "74px",
      maxWidth: "620px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0",
    },
  },
  topImageWrapper: {
    position: "absolute",
    display: "flex",
    width: "100%",
    left: "2px",
    top: "-345px",
    justifyContent: "center",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
      top: "-196px",
      left: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-79px",
      left: "1px",
    },
  },
  topImageStyle: {
    ...theme.defaultImageWidth,
    ...theme.defaultImageBorders,
    ...theme.defaultImageShadow,
  },
  bottomImageWrapper: {
    position: "absolute",
    left: "50%",
    bottom: "-224px",
    transform: "translateX(-50%);",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
      bottom: "-72px",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "-50px",
    },
  },
  bottomImageStyle: {
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "11px",
    ...theme.defaultImageWidth,
    ...theme.defaultImageBorders,
    ...theme.defaultImageShadow,
  },
})

// eslint-disable-next-line
IntelligentAssistantBlock = withWidth()(
  withStyles(styles)(IntelligentAssistantBlock)
)

export { IntelligentAssistantBlock }
