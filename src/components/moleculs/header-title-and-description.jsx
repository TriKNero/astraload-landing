import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core"

function HeaderTitleAndDescription({
  classes,
  title,
  description,
  descriptionComponent,
  customAnimationClass = null,
}) {
  return (
    <div className={`${classes.titleAndDescriptionContainer} ${customAnimationClass}`}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      {renderDescription()}
    </div>
  )

  function renderDescription() {
    if (descriptionComponent) return descriptionComponent
    return (
      <Typography variant="h5" className={classes.description}>
        {description}
      </Typography>
    )
  }
}

const styles = theme => {
  return {
    title: {
      textAlign: "center",
      fontSize: "54px",
      lineHeight: "1.02",
      letterSpacing: "-1px",
      [theme.breakpoints.down("xs")]: {
        lineHeight: "1.3",
        fontSize: "42px",
        paddingTop: "27px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
    description: {
      marginTop: "30px",
      fontSize: "24px",
      fontWeight: "300",
      lineHeight: "1.58",
      letterSpacing: "-0.5px",
      textAlign: "center",
      whiteSpace: "pre-line",
      [theme.breakpoints.down("sm")]: {
        marginTop: "29px",
        marginBottom: "29px",
        whiteSpace: "inherit",
        maxWidth: "81%",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "24px",
        maxWidth: "100%",
        fontSize: "20px",
        lineHeight: "1.5",
      },
    },
    titleAndDescriptionContainer: {
      opacity: 0,
      paddingTop: "23px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      ...theme.defaultContainer,
      [theme.breakpoints.down("xs")]: {
        padding: "0px 20px 5px",
      },
    },
  }
}

// eslint-disable-next-line
HeaderTitleAndDescription = withStyles(styles)(HeaderTitleAndDescription)

export { HeaderTitleAndDescription }
