import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  first: {
    width: "25%",
  },
  headcontent: {
    height: "15rem",
    borderTop: "0.5px solid #d1cac4",
    borderBottom: "0.5px solid #d1cac4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
  },
  head: {
    borderTop: "0.5px solid #d1cac4",
    borderBottom: "0.5px solid #d1cac4",
    marginBottom: "1rem !important",
    fontWeight: "600 !important",
  },
  headTwo: {
    borderBottom: "0.5px solid #d1cac4",
    padding: "0.4rem 0",
    fontSize: "19px !important",
    // fontWeight: "600 !important",
  },
  subhead: {
    borderBottom: "0.5px solid #d1cac4",
    padding: "0.4rem 0",
  },
  small: {
    fontSize: "0.7rem !important",
    color: "#5a5651 ",
    marginLeft: "0.8rem !important",
  },
  bottom: {
    height: "5.6rem",
    borderBottom: "0.5px solid #d1cac4",
  },
  space: {
    height: "5rem",
  },
  head: {
    textTransform: "capitalize",
  },
  redsubhead: {
    marginTop: "0.8rem !important",
    fontSize: "1rem !important",
    color: "#be123c",
  },
});
function FirstBox() {
  const classes = useStyles();
  return (
    <div className={classes.first}>
      <div className={classes.headcontent}>
        <Typography variant="h6" component="h6" className={classes.head}>
          Select Your Token Conversion Quantity
        </Typography>
        <Typography variant="h6" component="h6" className={classes.headTwo}>
          The More You Buy The More You Save!
        </Typography>
        <Typography variant="h6" component="h6" className={classes.redsubhead}>
          Sign Up Today To Recieve Free Tokens With Purchase.
        </Typography>
      </div>
      <div>
        <Typography className={classes.subhead} variant="subtitle1">
          DST File
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          EMB File
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          RUN Sheet
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Satisfaction Guaranteed
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Tokens Don't Expire*
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Free File Storage
        </Typography>
        <Typography className={` ${classes.subhead}`} variant="subtitle1">
          After Service <span style={{ color: "#09c6fb" }}>Support</span>
        </Typography>
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
}

export default FirstBox;
