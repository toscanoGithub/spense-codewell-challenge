import { Container, makeStyles } from "@material-ui/core";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Promo from "./components/Promo";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import Socials from "./components/Socials";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Header1 } from "./components/Header1";

const useStyles = makeStyles((theme) => ({
  root: {},

  hero: {
    // height: "calc(100vh - 40px)",
    backgroundColor: "#F0EEEB",
    // paddingTop: 20,
  },
  container: {
    // backgroundColor: "#F0EEEB",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.5rem",
    },

    [theme.breakpoints.up("md")]: {
      margin: "0 3rem",
    },
  },
  banner: {
    width: "100%",
    backgroundColor: "black",
    padding: 10,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Banner />
        <div className={classes.hero}>
          <div className={classes.container}>
            <Header1 />
            <HeroContent />
          </div>
        </div>
          <Socials />

        <Main />
        <Footer />
        <Route path="/promo" component={Promo} />
      </Router>
    </div>
  );
}

export default App;
