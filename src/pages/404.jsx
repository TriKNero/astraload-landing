import React from "react"
import Seo from "../components/seo"
import { Header } from "../components/organism/header"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { HeaderTitleAndDescription } from "../components/moleculs/header-title-and-description"
import { usePublicUrl } from "../components/images"
import { navigate } from "gatsby"

function NotFoundPage({ classes }) {
  const earthUrl = usePublicUrl("earthSvg")
  const moonUrl = usePublicUrl("moonSvg")
  const astronautUrl = usePublicUrl("astronaut")

  const title = `Page not found`
  return (
    <>
      <Seo title="Not Found" />
      <Header
        background="spaceBackgroundImage"
        onlyBackground={true}
        customHeaderContent={notFoundContent()}
      />
    </>
  )

  function notFoundContent() {
    return (
      <div className="stars">
        <Grid
          container
          alignItems="center"
          direction="column"
          className={classes.titleAndDescriptionContainer}
        >
          <HeaderTitleAndDescription title={title} />
          {renderGoToMainPageButton()}
        </Grid>
        <div className="objects">
          {/*<img*/}
          {/*className="object_rocket"*/}
          {/*src="http://salehriaz.com/404Page/img/rocket.svg"*/}
          {/*width="40px"*/}
          {/*alt=''*/}
          {/*/>*/}
          <div className="earth-moon">
            <img className="object_earth" src={earthUrl} width="100px" alt="" />
            <img className="object_moon" src={moonUrl} width="80px" alt="" />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src={astronautUrl}
              width="140px"
              alt=""
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    )

    function renderGoToMainPageButton() {
      return (
        <Button className={classes.buttonStyle} onClick={() => navigate("/")}>
          Go to main page
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
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "200px",
    },
  },
})

export default withStyles(styles)(NotFoundPage)
