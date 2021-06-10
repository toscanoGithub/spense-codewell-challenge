import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 20,
    left: 20,
    width: "200px",
    height: "180px",
    backgroundColor: "white",
    padding: "20px 10px 5px 10px",
    borderRadius: 8,
    display: "grid",
    placeItems: "space-evenly",
    "&>h3": {
      fontSize: "1.1rem",
      fontWeight: 300,
    },

    "&>h5": {
      fontSize: "1.1rem",
      fontWeight: 600,
    },

    "&>button": {
      backgroundColor: "black",
      color: "white",
      height: 40,
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        opacity: 0.9,
      },
    },
  },
}));

function EarningsBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h3">
        April Earnings
      </Typography>
      <Divider light />
      <Typography className={classes.amount} variant="h5">
        $272.21
      </Typography>
      <Button disableElevation variant="contained">
        Withdraw
      </Button>
    </div>
  );
}

export default EarningsBox;
