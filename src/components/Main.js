import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  container: {

    backgroundColor: "#F0EEEB",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "40px 0 0 70px",

    [theme.breakpoints.down("md")]: {
      rowGap: 20,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0.5rem",
      padding: "20px 10px 0 10px",
    },

    [theme.breakpoints.up("md")]: {
      margin: "0 3rem",
    },
  },

  heroText: {
    "&>h1": {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
    },
  },

  heroImage: {
    backgroundColor: "green",
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
      objectFit: "cover",
    },
  },

  learnMore: {
    color: "black",
    display: "flex",
    alignItems: "center",
    columnGap: 2,
    fontSize: 20,
    fontWeight: 400,
  },

  reversedContainer: {
    backgroundColor: "transparent",
    [theme.breakpoints.down("md")]: {
      rowGap: 20,
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "flex-start",
      margin: "2rem 0.5rem",
      padding: "20px 10px 0 10px",
    },
    heroImage: {
      backgroundColor: "green",
      width: "100%",
      height: "60vh",
      [theme.breakpoints.down("sm")]: {
        height: "60vh",
        objectFit: "cover",
      },
    },
  },
}));
function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.heroText}>
          <Typography variant="h1">Secure your money with Escrow.</Typography>
          <Typography variant="subtitle2">
            Spense uses Escrow to secure all payments. We believe Escrow offers
            the highest level of security for your payments, so you never need
            to worry about scams.
          </Typography>

          <Link>
            <Typography className={classes.learnMore} variant="subtitle2">
              learn more about Escrow <BsArrowRight />
            </Typography>
          </Link>
        </div>
        <div
          style={{
            background: `url(../images/Phone_Mockup.png) center center / contain  no-repeat`,
          }}
          className={classes.heroImage}
        ></div>
      </div>

      {/* MAIN BOTTOM */}
      <div className={`${classes.container} ${classes.reversedContainer}` }>
        <div
          style={{
            background: `url(../images/Text_Editor.png) center center / contain  no-repeat`,
          }}
          className={classes.heroImage}
              ></div>
              
        <div className={classes.heroText}>
          <Typography variant="h1">A text editor like no other.</Typography>
          <Typography variant="subtitle2">
            Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings.
          </Typography>

          <Link>
            <Typography className={classes.learnMore} variant="subtitle2">
              Text Editor Live Demo <BsArrowRight />
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Main;
