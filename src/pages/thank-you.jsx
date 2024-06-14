import React from "react"
import Seo from "../components/seo"
import { Header } from "../components/organism/header"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { HeaderTitleAndDescription } from "../components/moleculs/header-title-and-description"
import { navigate } from "gatsby"
import Typography from "@material-ui/core/Typography"

function ThankYouPage({ classes }) {
  return (
    <>
      <Seo title="Booking is complete!" />
      <Header
        background="spaceBackgroundImage"
        onlyBackground={true}
        customHeaderContent={notFoundContent()}
      />
    </>
  )

  function notFoundContent() {
    return (
      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.titleAndDescriptionContainer}
      >
        <HeaderTitleAndDescription
          title="Booking is complete!"
          descriptionComponent={description()}
        />

        {renderGoToMainPageButton()}
      </Grid>
    )

    function description() {
      return (
        <Typography variant="h5" className={classes.description}>
          Looking forward to seeing you in person! -{" "}
          <span className={classes.signature}>Evgeny Lukianchikov</span>
        </Typography>
      )
    }

    function renderGoToMainPageButton() {
      return (
        <Button className={classes.buttonStyle} onClick={() => navigate("/")}>
          Return to main page
        </Button>
      )
    }
  }
}

const styles = theme => ({
  ...theme.animations.fadeIn,
  buttonStyle: {
    minWidth: "186px",
    animation: "$fadein 3000ms normal forwards",
    [theme.breakpoints.down("xs")]: {
      margin: "0 20px",
      width: "100%",
      maxWidth: "280px",
    },
  },
  titleAndDescriptionContainer: {
    paddingTop: "50px",
  },
  signature: {
    fontStyle: "italic",
  },
  description: {
    marginTop: "30px",
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "1.58",
    letterSpacing: "-0.5px",
    textAlign: "center",
    whiteSpace: "pre-line",
    animation: "$fadein 5000ms normal forwards",
    [theme.breakpoints.down("sm")]: {
      marginTop: "24px",
      marginBottom: "24px",
      whiteSpace: "inherit",
      maxWidth: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "1.64",
    },
  },
})

export default withStyles(styles)(ThankYouPage)
