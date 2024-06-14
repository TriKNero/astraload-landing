import React from "react"
import { withStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"

function LeaveYourEmail({ classes }) {
  return (
    <div className={classes.container}>
      <Button
        className={classes.buttonStyle}
        href="https://forms.gle/g8VJm1ctihJrWydF6"
        target="__blank"
      >
        Leave your email
      </Button>
    </div>
  )
}

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  inputStyle: {
    height: "20px",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "19px",
  },
  textFieldStyle: {
    backgroundColor: theme.palette.text.white,
    borderRadius: "10px",
    width: "calc(100% - 134px)",
    height: "50px",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 94px)",
    },
  },
  buttonStyle: {
    marginTop: "20px",
  },
})

// eslint-disable-next-line
LeaveYourEmail = withStyles(styles)(LeaveYourEmail)

export { LeaveYourEmail }
