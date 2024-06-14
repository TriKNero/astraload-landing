import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core"
import { useInView } from "react-intersection-observer"

function TitleWithDescriptionBlock(props) {
  const {
    classes,
    title = "",
    description = "",
    titleClassName,
    descriptionClassName = "",
    shouldAnimate = true,
  } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500,
  })

  function getTextAnimationClasses() {
    if (!shouldAnimate)
      return `${classes.titleAndDescriptionContainer} ${classes.visible}`
    if (inView)
      return `${classes.titleAndDescriptionContainer} ${classes.titleAnimation}`
    return classes.titleAndDescriptionContainer
  }

  const textAnimationClasses = getTextAnimationClasses()

  return (
    <div ref={ref} className={textAnimationClasses}>
      <Typography variant="h2" className={`${classes.title} ${titleClassName}`}>
        {title}
      </Typography>
      {simpleDescription()}
    </div>
  )

  function simpleDescription() {
    return (
      <Typography
        variant="h4"
        className={`${classes.description} ${descriptionClassName}`}
      >
        {description}
      </Typography>
    )
  }
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  titleAndDescriptionContainer: {
    opacity: 0,
    display: "flex",
    alignItems: ({ left }) => (left ? "flex-start" : "center"),
    flexDirection: "column",
    animationDelay: ({ animationDelay = "0s" }) => animationDelay,

    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
  title: {
    textAlign: ({ left }) => (left ? "left" : "center"),
    fontSize: "54px",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.02",
    letterSpacing: "-1px",
    color: theme.palette.text.secondary,
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      textAlign: "center !important",
      whiteSpace: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.19",
      fontSize: "42px",
      letterSpacing: "-0.5px",
    },
  },
  description: {
    marginTop: "30px",
    fontWeight: "300",
    lineHeight: "1.58",
    letterSpacing: "-0.5px",
    textAlign: ({ left }) => (left ? "left" : "center"),
    whiteSpace: "pre-line",
    fontSize: "24px",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      marginTop: "28px",
      marginBottom: "24px",
      maxWidth: "100%",
      fontSize: "24px",
      textAlign: "center !important",
      whiteSpace: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "1.5",
    },
  },
  titleAnimation: {
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
TitleWithDescriptionBlock = withStyles(styles)(TitleWithDescriptionBlock)

TitleWithDescriptionBlock.defaultProps = {
  titleColor: ``,
  descriptionColor: ``,
  classes: {},
  title: ``,
  description: ``,
  descriptionClassName: ``,
}

export { TitleWithDescriptionBlock }
