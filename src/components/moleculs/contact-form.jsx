import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core"
import { LeaveYourEmail } from "../moleculs/one-input-form"

function ContactForm({ classes }) {
  return (
    <div className={classes.contactFormContainer}>
      <Typography
        variant='h3'
        className={classes.mainTitle}
      >
        Contacts us
      </Typography>
      <div className={classes.emailLinkContainer}>
        <a
          href="mailto:hello@astraload.com"
          className={classes.emailLink}
        >
          hello@astraload.com
        </a>
      </div>
      <Typography
        variant='h5'
        className={classes.phoneNumber}
      >
        +7 999 000 99 99
      </Typography>
      <Typography
        variant='h5'
        className={classes.address}
      >
        Russia, Kursk, st. Lenina 14, office 88
      </Typography>
      <Typography
        variant='h6'
        className={classes.contactMessage}
      >
        Leave your email and we’ll get in touch soon
      </Typography>
      <div className={classes.leaveYourEmailContainer}>
        <LeaveYourEmail
          inputPlaceHolder='Your email'
        />
      </div>
    </div>
  )
}


const styles = (theme) => {
  return {
    contactMessage: {
      paddingBottom: "0px",
    },
    leaveYourEmailContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    mainTitle: {
      paddingBottom: "40px",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "35px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    phoneNumber: {
      fontWeight: "400",
    },
    address: {
      fontWeight: "400",
      paddingBottom: "46px",
    },
    contactFormContainer: {
      ...theme.defaultHorizonContainer,
      [theme.breakpoints.down("sm")]: {
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
    },
    emailLink: {
      ...theme.typography.h5,
      fontWeight: "400",
      textDecoration: "underline",
    },
    emailLinkContainer: {
      paddingBottom: "18px",
    },
  }
}

// eslint-disable-next-line
ContactForm = withStyles(styles)(ContactForm)

export { ContactForm }