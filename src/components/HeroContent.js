import {
  Button,
  List,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
// import heroImage from "../images/Hero_Image.png";
// import checkmark from "../images/Checkmark.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    paddingBottom: 40,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },

  heroImage: {
    // backgroundColor: "green",
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
      objectFit: "cover",
    },
  },

  heroText: {
    "&>h1": {
      fontSize: "1.5rem",
          fontWeight: 700,
      marginTop:"0.5rem",
      marginBottom: "0.5rem",
    },
  },

  checkmarkImage: {
    height: 20,
    objectFit: "contain",
  },
  heroListItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
    margin: "0.5rem auto",
  },

  heroInput: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
  },

  textInput: {
    padding: "8px 5px",
    outline: "none",
  },

  getStartedBtn: {
    transition: "opacity 700ms ease",
    backgroundColor: "black",
    color: "white",
    fontSize: "0.7rem",
    padding: 8,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      opacity: 0.8,
    },
  },
}));
function HeroContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heroText}>
        <Typography variant="h1">
          Share your unfiltered thoughts. Get paid.
        </Typography>
        <Typography variant="subtitle2">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing just
          that.
        </Typography>

        <List>
          <div className={classes.heroListItem}>
            <img
              className={classes.checkmarkImage}
              src="../images/Checkmark.svg"
              alt="checkmark"
            />
            <Typography>Receive 99% off the earnings.</Typography>
          </div>
          <div className={classes.heroListItem}>
            <img
              className={classes.checkmarkImage}
              src="../images/Checkmark.svg"
              alt="checkmark"
            />
            <Typography>Get paid via Debit Card, ACH, or PayPal.</Typography>
          </div>
          <div className={classes.heroListItem}>
            <img
              className={classes.checkmarkImage}
              src="../images/Checkmark.svg"
              alt="checkmark"
            />
            <Typography>Withdraw your earnings anytime.</Typography>
          </div>
        </List>

        <div className={classes.heroInput}>
          <input className={classes.textInput} placeholder="john@example.com" />
          <Button className={classes.getStartedBtn}>get Started</Button>
        </div>
      </div>
      <div
        style={{
          background: `url(../images/Hero_Image.png) center center / cover  no-repeat`,
        }}
        className={classes.heroImage}
      >
        {/* <img className={classes.heroImage} src={heroImage} alt="her image" /> */}
      </div>
    </div>
  );
}
export default HeroContent;
