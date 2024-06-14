import React from "react"
import { withStyles } from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { Apostrophe } from "../svg/apostrophe"

function UsersFeedbackBlock(props) {
  const {
    classes,
    avatar,
    name,
    company,
    description,
  } = props


  return (
    <div className={classes.mainContainer}>
      <Apostrophe className={classes.apostropheIcon}/>
      <div className={classes.flexColumnContainer}>
        {renderUsersInfo(name, company)}
        <Typography
          variant='h5'
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </div>
  )


  function renderUsersInfo(name, company) {
    return (
      <div>
        <div className={classes.paddingContainer}>
          <Avatar
            alt=""
            src={avatar}
            className={classes.avatar}
          />
          <div className={classes.flexColumnContainer}>
            <Typography
              variant='h5'
              className={classes.name}
            >
              {name}
            </Typography>
            <Typography
              variant='body1'
              className={classes.company}
            >
              {company}
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

const styles = (theme) => ({
  mainContainer: {
    height: "330px",
    backgroundColor: theme.palette.text.gray95,
    maxWidth: "550px",
    width: "100%",
    marginTop: "20px",
    marginLeft: "15px",
    marginRight: "15px",
    position: "relative",
    padding: "0 40px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "330px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      width: "100%",
      maxWidth: "100%",
      height: "279px",
      marginLeft: "0",
      marginRight: "0",
    },
  },
  paddingContainer: {
    paddingTop: "60px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  avatar: {
    width: "60px",
    height: "60px",
    marginRight: "20px",
    marginBottom: "30px",
  },
  flexColumnContainer: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: theme.palette.text.primary,
  },
  description: {
    fontStyle: "italic",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  apostropheIcon: {
    position: "absolute",
    left: "40px",
    top: "-20px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "40px",
      maxHeight: "40px",
      left: "20px",
    },
  },
})

// eslint-disable-next-line
UsersFeedbackBlock = withStyles(styles)(UsersFeedbackBlock)

export { UsersFeedbackBlock }
