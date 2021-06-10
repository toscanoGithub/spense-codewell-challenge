import React, { useEffect, useState } from "react";
import {
  AppBar,
    Button,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

import Slide from "react-reveal/Slide";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // height: 64,
    backgroundColor: "transparent",
    // position: "absolute",
    zIndex: 1,
    width: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // minHeight: "60px",
  },
  brand: {
    textDecoration: "none",
  },

  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    columnGap: 25,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  linkTitle: {
    fontSize: 16,
    fontWeight: 400,
    cursor: "pointer",
      transition: "all 1s ease ",
    color:"black",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 20,
  },

  loginBtn: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    "&>button": {},
  },

  burgerMenu: {
    paddingTop: 70,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: -10,
    top: 0,
    width: 300,
    height: "100vh",
    backgroundColor: "white",
    zIndex: 100,
    overflow: "scroll",
    transition: "all 0.7s ease-in-ease-out",
    "&>a": {
      width: "100%",
      padding: 10,
      textDecoration: "none",
      color: "black",
    },

    "&>a:hover": {
      backgroundColor: "#F0EEEB",
    },
  },

  bergerMenuToggler: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    },
  
    controls: {
        "&>button": {
            marginLeft: 10,
            
      }
  }
}));
export const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar elevation={0} position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.brand} to="/">
          <Typography
            color="textSecondary"
            variant="h4"
            className={classes.linkTitle}
          >
            Spense
          </Typography>
        </Link>
        <div className={classes.menu}>
          <div className={classes.menuLink}>
            <Typography
              color="textSecondary"
              variant="h4"
              className={classes.linkTitle}
            >
              Business
            </Typography>
          </div>

          <div className={classes.menuLink}>
            <Typography
              color="textSecondary"
              variant="h4"
              className={classes.linkTitle}
            >
              Pricing
            </Typography>
          </div>

          <div className={classes.menuLink}>
            <Typography
              color="textSecondary"
              variant="h4"
              className={classes.linkTitle}
            >
              Features
            </Typography>
          </div>

          <div className={classes.controls}>
            <Button color="primary" variant="contained">
              Login
            </Button>

            <Button color="primary" disableElevation variant="outlined">
              Get Started
            </Button>
          </div>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.bergerMenuToggler}>
            <IconButton onClick={toggleMenu} style={{ zIndex: 1000 }}>
              {menuOpen ? <GrClose /> : <GiHamburgerMenu color="#1D2338" />}
            </IconButton>
          </div>
        </div>
        <Slide duration={200} right when={menuOpen}>
          <div
            style={{ visibility: `${menuOpen ? "visible" : "hidden"}` }}
            className={classes.burgerMenu}
          >
            <Link onClick={() => setMenuOpen(false)}>
              <Typography>Business</Typography>
            </Link>
            <Divider light />
            <Link onClick={() => setMenuOpen(false)}>
              <Typography>Pricing</Typography>
            </Link>
            <Divider light />
            <Link onClick={() => setMenuOpen(false)}>
              <Typography>Features</Typography>
            </Link>
            <Divider light />
            <Link onClick={() => setMenuOpen(false)}>
              <Typography>Login</Typography>
            </Link>
            <Divider light />
            <Link onClick={() => setMenuOpen(false)}>
              <Typography>Get Started</Typography>
            </Link>
            <Divider light />
          </div>
        </Slide>
      </Toolbar>
    </AppBar>
  );
};
