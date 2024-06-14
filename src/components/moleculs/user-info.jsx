import React from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

function UserInfo(props) {
  const { classes, name, company } = props

  return (
    <div className={classes.flexContainer}>
      <div className={classes.flexColumnContainer}>
        <Typography variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="h5" className={classes.company}>
          {company}
        </Typography>
      </div>
    </div>
  )
}

const styles = theme => ({
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-3px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  avatar: {
    width: "60px",
    height: "60px",
    marginRight: "20px",
  },
  flexColumnContainer: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    marginBottom: "2px",
    color: theme.palette.text.dark,
    fontWeight: 600,
    fontSize: "24px",
    letterSpacing: "-0.5px",
  },
  company: {
    color: theme.palette.text.dark,
    lineHeight: "1.555",
    letterSpacing: "0",
    fontSize: "18px",
  },
})

// eslint-disable-next-line
UserInfo = withStyles(styles)(UserInfo)

export { UserInfo }
