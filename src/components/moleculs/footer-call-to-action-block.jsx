import React from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { TitleWithDescriptionBlock } from "../moleculs/title-with-description-block"
import { Constants } from "../../constants"
import { useInView } from "react-intersection-observer"

function FooterCallToActionBlock({ classes, callToActionBlockInfo }) {
  const { calendarUrl } = Constants

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div className={classes.sectionContainer}>
      <TitleWithDescriptionBlock
        {...callToActionBlockInfo}
        titleClassName={classes.titleClassName}
        descriptionClassName={classes.descriptionClassName}
      />
      {renderScheduleMeetingBlock()}
      {renderOrLine()}
      {renderLinks()}
    </div>
  )

  function renderScheduleMeetingBlock() {
    const scheduleMeetingAnimation = inView
      ? `${classes.scheduleMeetingContainer} ${classes.scheduleMeetingAnimation}`
      : classes.scheduleMeetingContainer

    return (
      <div ref={ref} className={scheduleMeetingAnimation}>
        <Typography variant="h5" className={classes.scheduleMeetingTitle}>
          Schedule a meeting with our CEO - Evgeny Lukianchikov
        </Typography>
        <Button
          disabled={true}
          classes={{
            root: classes.scheduleMeetingButton,
            text: classes.buttonPadding,
          }}
          onClick={() =>
            global.Calendly.initPopupWidget({
              url: calendarUrl,
            })
          }
        >
          Schedule a meeting
        </Button>
      </div>
    )
  }


  function renderOrLine() {
    const orLineAnimationClasses = inView
      ? `${classes.orLineContainer} ${classes.orLineAndLinksAnimation}`
      : classes.orLineContainer

    return (
      <div className={orLineAnimationClasses}>
        <div className={classes.separator} />
        <Typography variant="h4" className={classes.orText}>
          or
        </Typography>
        <div className={classes.separator} />
      </div>
    )
  }

  function renderLinks() {
    const linkAnimationClasses = inView
      ? `${classes.actionLinksContainer} ${classes.orLineAndLinksAnimation}`
      : classes.actionLinksContainer

    return (
      <div className={linkAnimationClasses}>
        <a
          href="https://forms.gle/g8VJm1ctihJrWydF6"
          className={classes.actionLinkStyle}
          target="__blank"
        >
          Leave your email
        </a>
        <a
          href="https://t.me/joinchat/DQIDQU7Naz7doknz7u8meQ"
          className={classes.actionLinkStyle}
          target="__blank"
        >
          Join our Telegram group
        </a>
      </div>
    )
  }
}

const styles = theme => ({
  ...theme.animations.fadeInUp,
  actionLinksContainer: {
    opacity: 0,
    display: "flex",
    paddingBottom: "5px",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "19px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "22px",
      flexDirection: "column",
    },
  },
  buttonPadding: {
    paddingRight: "40px",
    paddingLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "60px",
      paddingLeft: "60px",
    },
  },
  descriptionClassName: {
    paddingTop: "0px",
    color: theme.palette.text.white,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "18px",
    },
  },
  titleClassName: {
    color: theme.palette.text.white,
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.2",
    },
  },
  actionLinkStyle: {
    lineHeight: "1.58",
    letterSpacing: "-0.5px",
    marginLeft: "77px",
    marginRight: "4px",
    color: theme.palette.text.white,
    textDecoration: "underline",
    fontSize: "24px",
    fontWeight: "400",
    cursor: "pointer",
    "-webkit-font-smoothing": "antialiased",
    "&:hover": {
      color: theme.palette.text.linkHover,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "79px",
      marginRight: "6px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
      marginRight: "0",
      padding: "5px 0 25px",
      textAlign: "center",
    },
  },
  separator: {
    display: "flex",
    flex: 1,
    border: "none",
    height: "1px",
    background: theme.palette.text.grey,
  },
  scheduleMeetingButton: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "29px",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  orText: {
    fontSize: "24px",
    color: theme.palette.text.white,
    fontWeight: "600",
    fontStyle: "italic",
    padding: "0 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 17px",
      fontSize: "18px",
    },
  },
  orLineContainer: {
    opacity: 0,
    display: "flex",
    marginTop: "30px",
    marginBottom: "45px",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "47px",
      marginBottom: "64px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "36px",
      marginBottom: "50px",
    },
  },
  scheduleMeetingContainer: {
    opacity: 0,
    display: "flex",
    alignItems: "center",
    paddingBottom: "37px",
    paddingTop: "88px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingTop: "57px",
      paddingBottom: "20px",
      justifyContent: "center",
      ...theme.animations.noAnimation,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "32px",
      paddingBottom: "20px",
      flexDirection: "column",
    },
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    ...theme.defaultHorizonContainer,
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "58px 21px 0",
    },
  },
  sectionTitle: {
    color: theme.palette.text.secondary,
    textAlign: "center",
    whiteSpace: "pre-line",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "600",
      width: "100%",
      marginBottom: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  scheduleMeetingTitle: {
    fontSize: "18px",
    lineHeight: "1.56",
    letterSpacing: "-0.5px",
    fontWeight: "600",
    color: theme.palette.text.white,
    marginTop: "4px",
    marginRight: "32px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
      marginRight: "22px",
      width: "279px",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
      marginRight: "0",
      textAlign: "center",
    },
  },
  sectionDescription: {
    width: "970px",
    color: theme.palette.text.primary,
    whiteSpace: "pre-line",
    textAlign: "center",
    marginBottom: "50px",
    lineHeight: "28px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
      width: "100%",
    },
  },
  scheduleMeetingAnimation: {
    ...theme.animations.itemFadeInUp,
    animationDelay: ".35s",
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
  orLineAndLinksAnimation: {
    ...theme.animations.itemFadeInUp,
    animationDelay: ".7s",
    [theme.breakpoints.down("sm")]: {
      ...theme.animations.noAnimation,
    },
  },
})

// eslint-disable-next-line
FooterCallToActionBlock = withStyles(styles)(FooterCallToActionBlock)

export { FooterCallToActionBlock }
