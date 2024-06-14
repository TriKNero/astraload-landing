import React from "react"
import { withStyles, withWidth } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import { GatsbyImage } from "../images"
import { useInView } from "react-intersection-observer"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function SinglePageApplicationSupport(props) {
  const { classes, title, description, description2, width } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500,
  })

  const scrollPosition = useScrollPosition()
  const sectionRef = React.useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  const titleClasses = prepareAnimationClasses(classes.title)

  return (
    <div ref={sectionRef} className={classes.container}>
      <div className={classes.triangle}>
        <Typography ref={ref} variant="h2" className={titleClasses}>
          {title}
        </Typography>
        {renderDescription()}
        {renderImage()}
      </div>
    </div>
  )

  function renderDescription() {
    const animationClasses = prepareAnimationClasses(
      classes.descriptionContainer
    )
    return (
      <Grid container justify="center" className={animationClasses}>
        {renderTwoBlockDescription()}
        {renderOneBlockDescription()}
      </Grid>
    )
  }

  function renderImage() {
    const imageName = width === "xs" ? "saasMobile4" : "saasDesktop4"
    return (
      <div className={classes.imageWrapper}>
        <GatsbyImage name={imageName} customClassName={classes.imageStyles} />
      </div>
    )
  }

  function renderTwoBlockDescription() {
    return (
      <Hidden smUp>
        <Grid item sm={6} xs={12}>
          <Typography
            variant="h4"
            className={`${classes.description} ${classes.rightPadding}`}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography
            variant="h4"
            className={`${classes.description} ${classes.leftPadding}`}
          >
            {description2}
          </Typography>
        </Grid>
      </Hidden>
    )
  }

  function renderOneBlockDescription() {
    const fullDescription = `${description} ${description2}`
    return (
      <Hidden xsDown>
        <Grid item xs={12}>
          <Typography variant="h4" className={`${classes.description}`}>
            {fullDescription}
          </Typography>
        </Grid>
      </Hidden>
    )
  }

  function prepareAnimationClasses(className) {
    if (!shouldAnimate) return `${className} ${classes.visible}`
    if (inView) return `${className} ${classes.itemAnimation}`
    return className
  }
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  container: {
    position: "relative",
    backgroundColor: theme.palette.text.dark,
    overflowX: "hidden",
    ...theme.defaultHorizonContainer,

    clipPath: "polygon(0 0, 100% 0, 100% 72%, 0% 100%);",
    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 72%, 0% 100%);",

    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 81.7%, 0% 100%);",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 81.7%, 0% 100%);",
    },
    [theme.breakpoints.down("xs")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 92%, 0% 100%);",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 92%, 0% 100%);",
    },
  },
  triangle: {
    paddingTop: "51px",
    height: "1149px",

    [theme.breakpoints.down("sm")]: {
      height: "926px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "903px",
    },
  },
  title: {
    opacity: 0,
    margin: "0 auto",
    maxWidth: "685px",
    textAlign: "center",
    fontSize: "54px",
    lineHeight: "1.02",
    letterSpacing: "-1px",
    whiteSpace: "inherit",
    color: theme.palette.text.white,
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.2",
      fontSize: "42px",
    },
  },
  descriptionContainer: {
    opacity: 0,
    marginTop: "30px",
    paddingBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "28px",
      paddingBottom: "77px",

      ...theme.animations.noAnimation,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "31px",
      paddingBottom: "0",
    },
  },
  description: {
    margin: "0 auto",
    maxWidth: "870px",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "1.58",
    letterSpacing: "-0.6px",
    textAlign: "center",
    whiteSpace: "inherit",
    color: theme.palette.text.grey,
    [theme.breakpoints.down("md")]: {
      maxWidth: "620px",
      textAlign: "center",
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      fontWeight: "300",
      lineHeight: "1.5",
      textAlign: "center",
      paddingBottom: "30px",
    },
  },
  leftPadding: {
    paddingRight: 0,
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
    },
  },
  rightPadding: {
    paddingRight: "15px",
    paddingLeft: 0,
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
    },
  },
  imageWrapper: {
    display: "flex",
    marginTop: "2px",
    marginLeft: "4px",
    justifyContent: "center",
    animationDelay: theme.animations.delays.general,

    [theme.breakpoints.down("sm")]: {
      marginTop: "23px",
      marginLeft: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "29px",
      marginLeft: "1px",
    },
  },
  imageStyles: {
    ...theme.defaultImageWidth,
    ...theme.defaultImageBorders,
    ...theme.defaultImageShadow,
  },
  itemAnimation: {
    ...theme.animations.itemFadeInUp,
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimationTop,
    },
  },
  visible: {
    opacity: 1,
  },
})

// eslint-disable-next-line
SinglePageApplicationSupport = withWidth()(
  withStyles(styles)(SinglePageApplicationSupport)
)

export { SinglePageApplicationSupport }
