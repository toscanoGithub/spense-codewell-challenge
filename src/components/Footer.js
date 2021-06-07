import { makeStyles, Typography } from "@material-ui/core";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
    
  },

  footerHeader: {
    fontWeight: 700,
    fontSize: "0.9rem",
  },

  footerLink: {
    color: "white",
      textDecoration: "none",
      "&:hover": {
        opacity: 0.8,
    }
    },
    spense: {
        maxWidth: 300,
        padding: 20,
        display: "flex", flexDirection: "column", justifyContent:"flex-start", alignItems:"flex-start"
        
  }
}));
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* SPENCE */}
      <div className={classes.spense}>
        <Typography className={classes.footerHeader} variant="h5">
          Spense
        </Typography>
        <Typography variant="subtitle2">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing just
          that.
        </Typography>
      </div>

      {/* SITE MAP */}
      <div className={classes.spense}>
        <Typography className={classes.footerHeader} variant="h5">
          Sitemap
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Homepage
        </Typography>
      </div>

      {/* RESOURCES */}
      <div className={classes.spense}>
        <Typography className={classes.footerHeader} variant="h5">
          Resources
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Support
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Contact
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          FAQ
        </Typography>
      </div>

      {/* COMPANY */}
      <div className={classes.spense}>
        <Typography className={classes.footerHeader} variant="h5">
          Company
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          About
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Customers
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Blog
        </Typography>
      </div>

      {/* OPPORTUNITIES */}
      <div className={classes.spense}>
        <Typography className={classes.footerHeader} variant="h5">
          Opportunities
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Jobs
        </Typography>
      </div>
    </div>
  );
}
export default Footer;
