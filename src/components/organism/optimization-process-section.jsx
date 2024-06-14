import React from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { ImageWithNumberBlock } from "../moleculs/image-with-number-block"

function OptimizationProcessSection({ classes }) {
  return (
    <div className={classes.sectionContainer}>
      <Typography
        variant='h3'
        className={classes.sectionTitle}
      >
        Our process
      </Typography>
      <ImageWithNumberBlock/>
    </div>
  )
}


const styles = (theme) => ({
  sectionTitle: {
    color: theme.palette.text.secondary,
    width: "680px",
    textAlign: "center",
    whiteSpace: "pre-line",
    marginBottom: "70px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "600",
      width: "100%",
      marginBottom: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    ...theme.defaultHorizonContainer,
    top: "-48px",
    marginBottom: "83px",
    [theme.breakpoints.down("sm")]: {
      top: "48px",
      marginBottom: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "60px",
    },
  },

})

// eslint-disable-next-line
OptimizationProcessSection = withStyles(styles)(OptimizationProcessSection)

export { OptimizationProcessSection }
