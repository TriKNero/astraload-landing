import React, { useRef } from "react"
import { withStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { TitleWithDescriptionBlock } from "../moleculs/title-with-description-block"
import { Constants } from "../../constants"
import { navigate } from "gatsby"
import { useInView } from "react-intersection-observer"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function Advantages(props) {
  const { classes } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const scrollPosition = useScrollPosition()
  const sectionRef = useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  function getButtonClassesClasses() {
    if (!shouldAnimate) return `${classes.button} ${classes.visible}`
    if (inView) return `${classes.button} ${classes.buttonAnimation}`
    return classes.button
  }

  const buttonClasses = getButtonClassesClasses()

  return (
    <div ref={sectionRef} className={classes.wrapper}>
      <div className={classes.container}>
        <div ref={ref} />
        <TitleWithDescriptionBlock
          {...Constants.advantages}
          titleClassName={classes.textClassName}
          descriptionClassName={classes.textClassName}
          shouldAnimate={shouldAnimate}
          left
        />

        <Button
          classes={{ root: buttonClasses, text: classes.customButtonText }}
          onClick={() => navigate("/astraload-saas/")}
        >
          Learn more
        </Button>
      </div>
    </div>
  )
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  wrapper: {
    backgroundColor: theme.palette.background.lightGray,
  },
  container: {
    display: "flex",
    height: "747px",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.palette.text.dark,
    ...theme.defaultHorizonContainer,
    "& > div": {
      paddingTop: "51px",
      maxWidth: "370px",
    },

    [theme.breakpoints.down("md")]: {
      height: "820px",
      alignItems: "center",
      "& > div": {
        paddingTop: "65px",
        position: "relative",
        maxWidth: "100%",
        alignItems: "center",
        zIndex: 1000,
      },
    },

    [theme.breakpoints.down("xs")]: {
      height: "916px",
    },
  },
  textClassName: {
    color: theme.palette.text.white,
  },
  button: {
    opacity: 0,
    position: "relative",
    marginTop: "45px",
    marginLeft: "1px",
    zIndex: 2000,
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      ...theme.animations.noAnimation,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
      marginBottom: "0px",
    },
  },
  buttonAnimation: {
    ...theme.animations.itemFadeInUp,
    animationDelay: ".35s",
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
  customButtonText: {
    padding: "0 40px",
  },
  visible: {
    opacity: 1,
  },
})

// eslint-disable-next-line
Advantages = withStyles(styles)(Advantages)

export { Advantages }
