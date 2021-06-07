import { makeStyles, Typography } from "@material-ui/core";

import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
    padding: 10,
    backgroundColor: "black",
  },
  bannerText: {
    fontSize: "0.9rem",
    color: "white",
    fontWeight: 700,
    "&>a": {
      color: "white",
    },
  },
  bannerIcon: {
    color: "gold",
    fontSize: "1rem",
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.bannerText}>
        <GiPartyPopper className={classes.bannerIcon} />
        &nbsp;To celebrate Spense's launch, we will be waiving all fees for the
        entire month of April.
        <Link to="/promo"> You will be receiving 100% of the earnings.</Link>
        &nbsp;
        <GiPartyPopper className={classes.bannerIcon} />
      </Typography>
    </div>
  );
}

export default Banner;
