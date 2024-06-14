import React from "react"
import { DrawerLink } from "../atoms/drawer-link"

import { Constants } from "../../constants"
import { withStyles } from "@material-ui/core"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { TextLogo } from "../svg/text-logo"
import ArrowForward from "@material-ui/icons/ArrowForward"
import withWidth from "@material-ui/core/withWidth/withWidth"

function HeaderDrawer(props) {
  const { classes, isOpen, onClose, onOpen, width, className } = props

  const drawerClasses = { paper: classes.drawerContainer, root: className }
  const isNotMobile = width !== "xs"
  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      classes={drawerClasses}
      disableSwipeToOpen={isNotMobile}
    >
      <div className={classes.contentContainer}>
        <div className={classes.logoContainer}>
          <TextLogo />
          <div onClick={onClose} aria-hidden="true">
            <ArrowForward className={classes.arrowForward} />
          </div>
        </div>

        <div className={classes.linksContainer}>{renderNavigationLinks()}</div>
      </div>
    </SwipeableDrawer>
  )

  function renderNavigationLinks() {
    const { navigationLinks } = Constants
    return navigationLinks.map((linkItem, index) => (
      <DrawerLink key={index} {...linkItem} />
    ))
  }
}

const styles = theme => ({
  drawerContainer: {
    width: "70vw",
    backgroundImage: "linear-gradient(to bottom, #c223da, #434ab4)",
    padding: "30px 24px",
  },
  contentContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "38px",
  },
  copyright: {
    position: "absolute",
    bottom: "46px",
    color: theme.palette.text.white,
  },
  arrowForward: {
    color: theme.palette.text.white,
    cursor: "pointer",
  },
})

// eslint-disable-next-line
HeaderDrawer = withWidth()(withStyles(styles)(HeaderDrawer))

export { HeaderDrawer }
