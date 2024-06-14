import PropTypes from "prop-types"
import React from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { Constants } from "../../constants"
import { GatsbyImageFixed } from "../images"

function OurClients({ classes }) {
  return (
    <div className={classes.sectionContainer}>
      <Typography
        variant='h3'
        className={classes.sectionTitle}
      >
        Our clients
      </Typography>
      <Typography
        variant='h5'
        className={classes.sectionDescription}
      >
        Join a good company of our clients!
      </Typography>

      <div className={classes.clientItemsContainer}>
        {renderClients()}
      </div>
    </div>
  )

  function renderClients() {
    const { companies = [] } = Constants
    return companies.map(renderClientsItem)
  }

  function renderClientsItem(name, index) {
    return (
      <div
        key={index}
        className={classes.clientItemContainer}
      >
        <div className={classes.clientColumnContainer}>
          {imageBlock(name)}
        </div>
      </div>
    )
  }

  function imageBlock(name) {
    return GatsbyImageFixed({ name })
  }
}

OurClients.propTypes = {
  classes: PropTypes.object,
}

const styles = (theme) => ({
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "140px 135px",
    [theme.breakpoints.down("sm")]: {
      padding: "80px 34px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "60px 20px",
    },
  },
  sectionDescription: {
    width: "680px",
    color: theme.palette.text.primary,
    whiteSpace: "pre-line",
    textAlign: "center",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
      width: "100%",
    },
  },
  clientItemsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    marginTop: "15px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  clientItemContainer: {
    width: "270px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "36px 0",
    [theme.breakpoints.down("lg")]: {
      width: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "24px 0",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      marginBottom: "10px",
      padding: "19px 0",
    },
  },
  clientColumnContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  sectionTitle: {
    color: theme.palette.text.secondary,
    textAlign: "center",
    whiteSpace: "pre-line",
    marginBottom: "18px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "600",
      width: "100%",
      marginBottom: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
})

// eslint-disable-next-line
OurClients = withStyles(styles)(OurClients)

export { OurClients }
