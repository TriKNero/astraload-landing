import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core"

function FooterForms({ classes }) {
  return (
    <Grid
      container
      className={classes.formsContainer}
    >
      <Grid
        item
        sm={6}
        xs={12}
        className={classes.leftForm}
      >
        <Typography
          variant='h3'
          className={classes.title}
        >
          Are you a development company rep?
        </Typography>

        <Typography
          variant='h5'
          className={classes.description}
        >
          Get access to Astraload private beta or check out our partnership programs
        </Typography>
        <div className={classes.buttonContainer}>
          <div>
            <Button
              className={classes.button}
            >
              Get access
            </Button>
          </div>
          <div>
            <Button
              className={classes.outlinedButton}
              variant="outlined"
            >
              Check our programs
            </Button>
          </div>
        </div>
        <hr className={classes.separator}/>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        className={classes.rightForm}
      >
        <Typography
          variant='h3'
          className={classes.title}
        >
          Want to study more about our competences and approaches?
        </Typography>

        <Typography
          variant='h5'
          className={classes.description}
        >
          See how we nail the problems
        </Typography>
        <div className={classes.buttonContainer}>

          <div>
            <Button
              className={classes.button}
            >
              See how
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}


const buttonStyle = (theme) => {
  return {
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  }
}

const styles = (theme) => {
  return {
    separator: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
        width: "100%",
        marginTop: "40px",
        border: "none",
        height: "1px",
        background: "#cccccc",
      },
    },
    title: {
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        textAlign: "center",
      },
    },
    description: {
      marginTop: "30px",
      color: theme.palette.text.primary,
      opacity: "0.7",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
    leftForm: {
      paddingRight: "104px",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        paddingRight: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        paddingRight: "0",
        marginBottom: "40px",
      },
    },
    rightForm: {
      paddingLeft: "104px",
      borderLeft: `1px solid ${theme.palette.text.grey}`,
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "10px",
        borderLeft: "none",
      },
      [theme.breakpoints.down("xs")]: {
        borderLeft: "none",
        paddingLeft: "0",
      },
    },
    formsContainer: {
      ...theme.defaultHorizonContainer,
    },
    buttonContainer: {
      display: "flex",
      paddingTop: "50px",
      marginTop: "auto",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        marginTop: "inherit",
      },
    },
    button: {
      ...buttonStyle(theme),
    },
    outlinedButton: {
      ...buttonStyle(theme),
      marginLeft: "30px",
      [theme.breakpoints.down("md")]: {
        marginTop: "24px",
        marginLeft: "0",
      },
    },
  }
}

// eslint-disable-next-line
FooterForms = withStyles(styles)(FooterForms)

export { FooterForms }