import React, { useRef } from "react"
import { withStyles } from "@material-ui/core"
import { UserInfo } from "../moleculs/user-info"
import { Constants } from "../../constants"
import Typography from "@material-ui/core/Typography"
import { GatsbyImageFixed } from "../images"
import { useInView } from "react-intersection-observer"
import useScrollPosition from "../../hooks/useScrollPosition"
import useShouldAnimate from "../../hooks/useShouldAnimate"

function OneFeedbackBlock(props) {
  const { classes } = props
  const { feedBackBlock } = Constants

  const { title } = feedBackBlock

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const scrollPosition = useScrollPosition()
  const sectionRef = useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  function renderFeedbacks() {
    const { feedbacks } = feedBackBlock

    return feedbacks.map(renderFeedback)
  }

  function renderFeedback({ logoName, link, clientData, feedback }) {
    const { name, company } = clientData
    const feedbackAnimationClass =
      inView && shouldAnimate
        ? `${classes.feedBackContainer} ${classes.feedBackAnimation}`
        : classes.feedBackContainer

    return (
      <div className={feedbackAnimationClass} key={logoName}>
        <GatsbyImageFixed name={logoName} className={classes.companyLogo} />
        <a className={classes.userInfoWrapper} href={link} target="blank">
          <UserInfo name={name} company={company} />
        </a>
        <div className={classes.responseContainer}>{feedback}</div>
      </div>
    )
  }

  function getTitleAnimationClasses() {
    if (!shouldAnimate) return `${classes.title} ${classes.visible}`
    if (inView) return `${classes.title} ${classes.titleAnimation}`
    return classes.title
  }

  const titleAnimationClasses = getTitleAnimationClasses()

  return (
    <div ref={sectionRef} className={classes.sectionContainer}>
      <div className={classes.wrapper}>
        <Typography variant="h2" className={titleAnimationClasses}>
          {title}
        </Typography>
        <div ref={ref} className={classes.items}>
          {renderFeedbacks()}
        </div>
      </div>
    </div>
  )
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  sectionContainer: {
    position: "relative",
    height: "457px",
    [theme.breakpoints.down("md")]: {
      height: "1322px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "1369px",
    },
    [theme.breakpoints.down(theme.customBreakpoints.mobileM)]: {
      height: "1456px",
    },
    [theme.breakpoints.down(theme.customBreakpoints.mobileS)]: {
      height: "1621px",
    },
  },
  wrapper: {
    position: "absolute",
    top: "-282px",
    left: 0,
    right: 0,
    ...theme.defaultHorizonContainer,

    [theme.breakpoints.down("sm")]: {
      padding: "59px 34px 24px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "11px 20px 24px",
    },
  },
  title: {
    opacity: 0,
    margin: "0 auto",
    paddingBottom: "50px",
    maxWidth: "554px",
    fontSize: "54px",
    textAlign: "center",
    lineHeight: "1",
    letterSpacing: "-1px",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      paddingBottom: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1px",
      maxWidth: "554px",
      paddingBottom: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-7px",
      marginLeft: "-5px",
      paddingBottom: "76px",
      lineHeight: "1.25",
      fontSize: "42px",
    },
  },
  titleAnimation: {
    ...theme.animations.itemFadeInUp,
    [theme.breakpoints.down("sm")]: {
      opacity: "1",
      animation: "none",
    },
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  feedBackContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "&:first-child": {
      marginTop: "189px",
      animationDelay: "1.05s",
    },

    "&:not(:first-child):not(:last-child)": {
      marginTop: "95px",
      animationDelay: ".7s",
    },

    [theme.breakpoints.down("md")]: {
      "&:first-child": {
        marginTop: "0px",
      },
      "&:not(:first-child):not(:last-child)": {
        marginTop: "0px",
      },

      marginBottom: "66px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "47px",
    },
  },
  feedBackAnimation: {
    ...theme.animations.itemFadeInUp,
    animationDelay: ".35s",

    "&:first-child": {
      animationDelay: "1.05s",
    },

    "&:not(:first-child):not(:last-child)": {
      animationDelay: ".7s",
    },

    [theme.breakpoints.down("md")]: {
      "&:first-child": {
        animationDelay: "0.35s",
      },
      "&:not(:first-child):not(:last-child)": {
        animationDelay: "0.35s",
      },
      "&:last-child": {
        animationDelay: "0.35s",
      },
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
  companyLogo: {
    display: "block",
    marginBottom: "44px",
    width: "120px",
    height: "120px",
  },
  userInfoWrapper: {
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "20px",
    },
  },
  responseContainer: {
    maxWidth: "371px",
    color: theme.palette.text.primary,
    fontSize: "20px",
    fontWeight: "400",
    fontStyle: "italic",
    lineHeight: "1.5",
    letterSpacing: "-0.5px",
    textAlign: "center",
    marginBottom: "33px",

    [theme.breakpoints.down("md")]: {
      maxWidth: "580px",
    },
  },
  visible: {
    opacity: 1,
  },
})

// eslint-disable-next-line
OneFeedbackBlock = withStyles(styles)(OneFeedbackBlock)

export { OneFeedbackBlock }
