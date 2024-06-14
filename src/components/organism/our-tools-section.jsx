import PropTypes from "prop-types"
import React, { useRef } from "react"
import { withStyles, withWidth } from "@material-ui/core"
import { Constants } from "../../constants"
import { TitleWithDescriptionBlock } from "../moleculs/title-with-description-block"
import { GatsbyImage } from "../images"
import { useInView } from "react-intersection-observer"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function OurToolsSection({ classes }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const scrollPosition = useScrollPosition()
  const sectionRef = useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  const gridClassNames =
    inView && shouldAnimate
      ? `${classes.grid} ${classes.fadeInUp}`
      : classes.grid

  return (
    <div ref={sectionRef} className={classes.wrapper}>
      <div className={classes.sectionContainer}>
        <div className={classes.titleAndDescriptionContainer}>
          <TitleWithDescriptionBlock
            {...Constants.ourTools}
            shouldAnimate={shouldAnimate}
          />
        </div>
        <div ref={ref} className={gridClassNames}>
          {renderTools()}
        </div>
      </div>
    </div>
  )

  function renderTools() {
    const { tools = [] } = Constants
    return tools.map(renderToolItem)
  }

  function renderToolItem(name, index) {
    return (
      <div className={classes.item} key={index}>
        <GatsbyImage className={classes.toolColumnContainer} name={name} />
      </div>
    )
  }
}

OurToolsSection.propTypes = {
  classes: PropTypes.object,
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  titleAndDescriptionContainer: {
    paddingBottom: "101px",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "27px",
    },
  },
  toolItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    color: theme.palette.text.white,
    zIndex: 1000,
  },
  sectionContainer: {
    height: "1682px",
    position: "relative",
    display: "flex",
    top: "-334px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.text.gray95,
    clipPath: "polygon(0 19.5%, 100% 0, 100% 80%, 0% 100%)",
    "-webkit-clip-path": "polygon(0 19.5%, 100% 0, 100% 80%, 0% 100%)",
    ...theme.defaultHorizonContainer,
    [theme.breakpoints.down("sm")]: {
      height: "1395px",
      top: "-335px",
      clipPath: "polygon(0 13%, 100% 0, 100% 87.2%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 13%, 100% 0, 100% 87.2%, 0% 100%)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1163px",
      clipPath: "polygon(0 6.4%, 100% 0, 100% 93.2%, 0% 100%)",
      "-webkit-clip-path": "polygon(0 6.4%, 100% 0, 100% 93.2%, 0% 100%)",
    },
  },
  grid: {
    display: "grid",
    gridGap: "30px",
    "grid-template-columns": "repeat(4, 1fr)",
    [theme.breakpoints.down("md")]: {
      "grid-template-columns": "repeat(3, 1fr)",
      gridGap: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      "grid-template-columns": "repeat(2, 1fr)",
      gridGap: "10px",
    },
  },
  item: {
    width: "270px",
    height: "150px",
    [theme.breakpoints.down("md")]: {
      width: "220px",
      height: "122px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "135px",
      height: "75px",
    },
  },
  fadeInUp: {
    ...theme.animations.itemFadeInUp,
    animationDelay: ".35s",

    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
})

// eslint-disable-next-line
OurToolsSection = withWidth()(withStyles(styles)(OurToolsSection))

export { OurToolsSection }
