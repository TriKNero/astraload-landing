import React, { useState } from "react"
import { TelegramLink } from "../svg/telegram-link"

import { CustomLink } from "../atoms/custom-link"
import { Constants } from "../../constants"
import { withStyles } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import { HeaderDrawer } from "../moleculs/header-drawer"
import { LogoMobile } from "../svg/logo-mobile"
import { Logo } from "../svg/logo"
import { Link } from "gatsby"

function Navigation({ linkColor, classes, isHeader }) {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false)

  const containerClasses = isHeader
    ? classes.navigationContainer
    : `${classes.navigationContainer} ${classes.footer}`

  return (
    <div className={containerClasses}>
      <div>{renderLogo()}</div>
      {renderNavigation()}
      {renderDrawer()}
    </div>
  )

  function renderLogo() {
    if (!isHeader) return
    return (
      <Link to="/">
        <Logo className={classes.desktopLogo} />
        <LogoMobile className={classes.mobileLogo} />
      </Link>
    )
  }

  function renderDrawer() {
    return (
      <HeaderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerIsOpen(false)}
        onOpen={() => setDrawerIsOpen(true)}
      />
    )
  }

  function renderMobileMenu() {
    if (!isHeader) return
    return (
      <MenuIcon
        onClick={() => setDrawerIsOpen(true)}
        className={classes.mobileMenu}
      />
    )
  }

  function renderMobileUpButton() {
    if (isHeader) return
    return (
      <ArrowUpwardIcon
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={classes.mobileUp}
      />
    )
  }

  function renderNavigation() {
    return (
      <>
        {renderMobileMenu()}
        {renderMobileUpButton()}
        <div className={classes.linkContainer}>
          {renderNavigationLinks()}
          <TelegramLink className={classes.telegramIcon} color={linkColor} />
        </div>
      </>
    )
  }

  function renderNavigationLinks() {
    const { navigationLinks } = Constants
    return navigationLinks.map((linkItem, index) => (
      <CustomLink key={index} {...linkItem} linkColor={linkColor} />
    ))
  }
}

const styles = theme => {
  const linkContainer = {
    display: "flex",
  }
  return {
    linkContainerFooter: {
      ...linkContainer,
    },
    linkContainer: {
      ...linkContainer,
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    mobileMenu: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    mobileUp: {
      display: "none",
      fontSize: "24px",
      color: theme.palette.text.blue,
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    desktopMenu: {
      display: "block",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    mobileLogo: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    desktopLogo: {
      display: "block",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    telegramIcon: {
      position: "relative",
      left: "18px",
      cursor: "pointer",
      marginRight: "20px",
      opacity: "0.8",
      "&:hover": {
        opacity: "1",
      },
    },
    navigationContainer: {
      padding: "32px 375px 50px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...theme.defaultHorizonContainer,
      [theme.breakpoints.down("sm")]: {
        padding: "35px 33px 52px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "20px 20px 0px",
        alignItems: "flex-start",
      },
    },
    footer: {
      padding: "46px 375px",
      alignItems: "flex-start",
      ...theme.defaultHorizonContainer,
    },
  }
}

// eslint-disable-next-line
Navigation = withStyles(styles)(Navigation)

export { Navigation }
