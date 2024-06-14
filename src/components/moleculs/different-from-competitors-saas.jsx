import React, { useEffect, useState } from "react"
import { withStyles } from "@material-ui/core"
import { GatsbyImage } from "../images"
import withWidth from "@material-ui/core/withWidth"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { useInView } from "react-intersection-observer"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function DifferentFromCompetitorsSaas(props) {
  const { classes, width } = props

  const [topPictureName, setTopPictureName] = useState("saasDesktop2")
  const [bottomFirstPictureName, setBottomFirstPictureName] = useState(
    "saasDesktop0"
  )
  const [bottomLastPictureName, setBottomLastPictureName] = useState(
    "saasDesktop1"
  )

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500,
  })

  const scrollPosition = useScrollPosition()
  const sectionRef = React.useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  useEffect(() => {
    if (width === "xs") {
      setBottomFirstPictureName("saasMobile0")
      setBottomLastPictureName("saasMobile1")
      setTopPictureName("saasMobile2")
      return
    }

    if (width === "sm") {
      setBottomFirstPictureName("saasTablet0")
      setBottomLastPictureName("saasTablet1")
      setTopPictureName("saasTablet2")
      return
    }

    setBottomFirstPictureName("saasDesktop0")
    setBottomLastPictureName("saasDesktop1")
    setTopPictureName("saasDesktop2")
  }, [width])

  return (
    <div ref={sectionRef} className={classes.sectionContainer}>
      <Grid container justify="center" className={classes.saasImage}>
        <GatsbyImage
          name={topPictureName}
          customClassName={classes.imageStyles}
        />
      </Grid>
      <div className={classes.wrapper}>
        <div ref={ref} className={classes.triangle}>
          <div className={classes.paddingContainer}>
            {renderTitle()}
            {infoBlocks()}
          </div>
          <div className={classes.bottomImage}>
            <GatsbyImage
              name={bottomFirstPictureName}
              customClassName={classes.imageStyles}
            />
            <GatsbyImage
              name={bottomLastPictureName}
              customClassName={classes.imageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  )

  function infoBlocks() {
    const animationClasses = prepareAnimationClasses(classes.infoWrapper)

    return (
      <div className={animationClasses}>
        <Typography variant="h5" className={`${classes.infoBlock}`}>
          Traditional load testing tools just generate API load and present very
          general data like API response time or page load time. And they miss
          tremendous amount of information about user experience that can be
          extracted and analyzed.
        </Typography>

        <Typography variant="h5" className={`${classes.infoBlock}`}>
          Astraload’s goal is to squash every single bit of info on every
          emulated user so that we can better understand how real users would
          perceive the UX when the website is under load.
        </Typography>
      </div>
    )
  }

  function renderTitle() {
    const animationClasses = prepareAnimationClasses(classes.title)

    return (
      <Typography variant="h2" className={animationClasses}>
        How it’s different from competitors
      </Typography>
    )
  }

  function prepareAnimationClasses(className) {
    if (!shouldAnimate) return `${className} ${classes.visible}`
    if (inView) return `${className} ${classes.itemAnimation}`
    return className
  }
}

const styles = theme => {
  return {
    ...theme.animations.fadeInUp,
    sectionContainer: {
      position: "relative",
      backgroundColor: theme.palette.background.lightGray,
    },
    saasImage: {
      position: "absolute",
      top: "-341px",
      left: 0,
      right: 0,
      zIndex: 9,
      [theme.breakpoints.down("sm")]: {
        top: "-184px",
      },
      [theme.breakpoints.down("xs")]: {
        top: "-113px",
      },
    },
    wrapper: {
      position: "relative",
      height: "1311px",
      backgroundColor: theme.palette.text.dark,

      [theme.breakpoints.down("sm")]: {
        height: "1160px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "1079px",
      },
    },
    triangle: {
      position: "absolute",
      paddingBottom: "350px",
      width: "100%",
      top: "-344px",
      background: "linear-gradient(180deg, #701F93 1.03%, #4A166B 109.59%)",
      clipPath: "polygon(0 20.4%, 100% 0, 100% 79.5%, 0% 100%);",
      "-webkit-clip-path": "polygon(0 20.4%, 100% 0, 100% 79.5%, 0% 100%);",
      [theme.breakpoints.down("md")]: {
        top: "-350px",
      },
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "218px",
        top: "-185px",
        clipPath: "polygon(0 14.2%, 100% 0, 100% 86%, 0% 100%)",
        "-webkit-clip-path": "polygon(0 14.2%, 100% 0, 100% 86%, 0% 100%)",
      },
      [theme.breakpoints.down("xs")]: {
        paddingBottom: "132px",
        top: "-75px",
        clipPath: "polygon(0 6.3%, 100% 0, 100% 93.2%, 0% 100%)",
        "-webkit-clip-path": "polygon(0 6.3%, 100% 0, 100% 93.2%, 0% 100%)",
      },
    },
    paddingContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "558px",
      justifyContent: "space-between",
      ...theme.defaultHorizonContainer,

      [theme.breakpoints.down("md")]: {
        paddingTop: "460px",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: "338px",
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: "177px",
      },
    },
    title: {
      opacity: 0,
      maxWidth: "435px",
      fontSize: "64px",
      fontWeight: "700",
      textAlign: "left",
      letterSpacing: "-1px",
      animationDelay: theme.animations.delays.general,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "579px",
        textAlign: "center",

        ...theme.animations.noAnimationTop,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "42px",
        lineHeight: "1.2",
      },
    },
    infoWrapper: {
      opacity: 0,
      marginTop: "-10px",
      animationDelay: theme.animations.delays.general,
      [theme.breakpoints.down("sm")]: {
        marginTop: "-1px",
        ...theme.animations.noAnimationTop,
      },
    },
    infoBlock: {
      maxWidth: "670px",
      color: theme.palette.text.gray95,
      fontSize: "20px",
      lineHeight: "1.5",
      letterSpacing: "-0.5px",
      fontWeight: "400",

      "&:first-child": {
        marginBottom: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
        maxWidth: "580px",
        textAlign: "center",

        "&:first-child": {
          marginBottom: "-10px",
        },
      },
      [theme.breakpoints.down("xs")]: {
        "&:first-child": {
          marginBottom: "0px",
        },
      },
    },
    bottomImage: {
      display: "grid",
      gridGap: "47px",
      marginTop: "99px",
      marginLeft: "4px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        marginTop: "79px",
        marginLeft: "-1px",
        gridGap: "29px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "56px",
        gridGap: "15px",
        marginLeft: "4px",
      },
    },
    imageStyles: {
      ...theme.defaultImageWidth,
      ...theme.defaultImageBorders,
      ...theme.defaultImageShadow,
    },
    itemAnimation: {
      ...theme.animations.itemFadeInUp,
    },
    visible: {
      opacity: 1,
    },
  }
}

// eslint-disable-next-line
DifferentFromCompetitorsSaas = withWidth()(
  withStyles(styles)(DifferentFromCompetitorsSaas)
)

export { DifferentFromCompetitorsSaas }
