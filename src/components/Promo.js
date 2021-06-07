import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
function Promo() {
  const classes = useStyles();
    return <div className={classes.root}>
      <Typography variant="h4">Promo page</Typography>
  </div>;
}
export default Promo;
