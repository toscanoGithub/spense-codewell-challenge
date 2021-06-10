import { makeStyles } from "@material-ui/core";
import Slide from "react-reveal/Slide";



const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "&>img": {
      width: 60,
      objectFit: "cover",

      [theme.breakpoints.down("sm")]: {
        width: 50,
        },
      
      [theme.breakpoints.down("xs")]: {
        width: 30,
      },
    },
  },
}));
function Socials() {
    const images = [
      "/images/Facebook Logo.png",
      "/images/Dribbble Logo.png",
      "/images/Youtube Logo.png",
      "/images/Pinterest Logo.png",
      "/images/Twitter Logo.png",
      "/images/Reddit Logo.png",
      "/images/Google Logo.png",
      "/images/Slack Logo.png",
    ];
  const classes = useStyles();
    return (
      <div className={classes.root}>
        {images.map((image) => (
          <Slide left>
            <img src={image} />
          </Slide>
        ))}
      </div>
    );
}
export default Socials;
