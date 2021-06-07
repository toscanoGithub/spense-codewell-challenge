import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Flip from "react-reveal/Flip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  brand: {
    "&>a": {
      textDecoration: "none",
      color: "black",
    },
  },

  menu: {
    flex: 0.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  left: {
    "&>a": {
      textDecoration: "none",
      marginRight: 20,
    },
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "150px",
    "&>a": {
      textDecoration: "none",
      marginRight: 10,
    },
  },

  headerLink: {
    color: "black",
    fontSize: "0.8rem",
  },

  getStartedBtn: {
    transition: "opacity 700ms ease",
    backgroundColor: "black",
    color: "white",
    fontSize: "0.7rem",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      opacity: 0.8,
    },
  },

  menuTogglerIcon: {
    cursor: "pointer",
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toggledMenu: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    position: "absolute",
    height: "100vh",
    width: "100%",
    top: 50,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "&>a": {
      width: "100%",
      textDecoration: "none",
      padding: 10,
      marginBottom: 3,
      backgroundColor: "rgba(0,23,160, 0.04)",
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
}));
function Header() {
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuClicked = () => {
    setToggleMenu((previous) => !previous);
  };
  return (
    <div className={classes.root}>
      <div className={classes.brand}>
        <Typography component={Link} to="/">
          Spence.
        </Typography>
      </div>
      <div className={classes.menu}>
        <div className={classes.left}>
          <Typography className={classes.headerLink} component={Link} to="#">
            Business
          </Typography>
          <Typography className={classes.headerLink} component={Link} to="#">
            Pricing
          </Typography>
          <Typography className={classes.headerLink} component={Link} to="#">
            Features
          </Typography>
        </div>
        <div className={classes.right}>
          <Typography className={classes.headerLink} component={Link} to="#">
            Login
          </Typography>
          <Button className={classes.getStartedBtn} variant="contained">
            Get Started
          </Button>
        </div>
      </div>
      {!toggleMenu ? (
        <HiOutlineMenu
          onClick={toggleMenuClicked}
          className={classes.menuTogglerIcon}
        />
      ) : (
        <Flip>
          <GrClose
            onClick={toggleMenuClicked}
            className={classes.menuTogglerIcon}
          />
        </Flip>
      )}
      {toggleMenu && (
        <div className={classes.toggledMenu}>
          <Typography className={classes.headerLink} component={Link} to="#">
            Business
          </Typography>
          <Typography className={classes.headerLink} component={Link} to="#">
            Pricing
          </Typography>
          <Typography className={classes.headerLink} component={Link} to="#">
            Features
          </Typography>
          <Typography className={classes.headerLink} component={Link} to="#">
            Login
          </Typography>
          <Button fullWidth color="primary" variant="outlined">
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
}
export default Header;