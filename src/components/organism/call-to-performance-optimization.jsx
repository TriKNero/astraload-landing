import React from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { LeaveYourEmail } from "../moleculs/one-input-form"


function CallToPerformanceOptimization({ classes }) {
  return (
    <div className={classes.sectionContainer}>
      <Grid container>
        <Grid
          item
          md={6}
          sm={6}
          className={classes.advantageImageContainer}
        >
          <Typography
            variant='h3'
            className={classes.title}
          >
            Interested in our performance optimization services?
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          sm={6}
          className={classes.advantagesDescriptionContainer}
        >

          <Typography
            variant='h5'
            className={classes.description}
          >
            {`Ping us in a chat, schedule a meeting or just leave your email and we’ll get in touch soon.`}
            <LeaveYourEmail
              buttonLabel='Send'
              inputPlaceHolder='Your email'
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}


const styles = (theme) => ({
  sectionContainer: {
    backgroundColor: theme.palette.background.saas,
    padding: "60px 135px",
    position: "relative",
    marginTop: "-1px",
    [theme.breakpoints.down("md")]: {
      padding: "40px 34px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "40px 20px",
    },
  },
  title: {
    paddingRight: "106px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "106px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
      paddingBottom: "20px",
    },
  },
  description: {
    paddingTop: "10px",
    lineHeight: "29px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0",
    },
  },
})

// eslint-disable-next-line
CallToPerformanceOptimization = withStyles(styles)(CallToPerformanceOptimization)

export { CallToPerformanceOptimization }
