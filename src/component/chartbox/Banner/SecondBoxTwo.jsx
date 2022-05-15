import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  first: {
    textTransform: "capitalize",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    border: "0.5px solid #d1cac4",
    position: "relative",
  },
  headcontent: {
    height: "15rem",
    borderTop: "0.5px solid #d1cac4",
    borderBottom: "0.5px solid #d1cac4",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "#efefef",
  },
  main: {
    fontWeight: "600 !important",
    padding: "0.3rem",
    fontSize: "1.5rem !important",
  },
  subhead: {
    textTransform: "capitalize",
    borderBottom: "0.5px solid #d1cac4",
    padding: "0.4rem 0",
    textAlign: "center",
    color: "#36b36e",
    fontWeight: "600 !important",
  },
  subhicon: {
    borderBottom: "0.5px solid #d1cac4",
    padding: "0.4rem 0",
    textAlign: "center",
    color: "white",
    fontWeight: "600 !important",
  },
  small: {
    fontSize: "0.7rem !important",
    color: "#5a5651 ",
    marginLeft: "0.8rem !important",
  },
  bottom: {
    height: "5.6rem",
    borderBottom: "0.5px solid #d1cac4",
    background: "#efefef",
  },
  color: {
    width: "100%",
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    position: "relative",
    textTransform: "uppercase",
  },
  label: {
    position: "absolute",
    right: "-41px",
    top: "-0.5rem",
  },
  para: {
    margin: "0.4rem 0 !important",
    lineHeight: "1.4rem !important",
  },
  button: {
    margin: "0.6rem 0 !important",
  },
  space: {
    height: "5rem",
  },
  bottomText: {
    color: "#09c6fb",
    fontSize: "0.8rem !important",
  },
  support: {
    background: "#6e6969",
    color: "white",
    borderRadius: " 0.3rem",
    filter: " brightness(1) invert(1)",
    padding: "0.3rem",
  },
  supportMargin: {
    marginLeft: "0.4rem",
  },
  labelImage: {
    height: "6.5rem",
    objectFit: "cover",
  },
});
function SecondBoxTwo({
  title,
  up,
  upf,
  amount,
  user,
  maincolor,
  review,
  width,
  index,
  image,
  label,
}) {
  const classes = useStyles();
  return (
    <div
      className={classes.first}
      style={{
        width: width,
        zIndex: index,
        marginRight: `${title === "Silver" ? "0.8rem" : ""}`,
      }}
    >
      <div className={classes.headcontent}>
        <div className={classes.color} style={{ background: maincolor }}>
          <Typography variant="h4" className={classes.main}>
            {title}
          </Typography>
          <div className={classes.label}>
            <img src={label} className={classes.labelImage} alt="label" />
          </div>
        </div>
        <Typography
          className={classes.para}
          sx={{ textAlign: "center", color: "#5180ad", fontWeight: "600" }}
          variant="subtitle1"
        >
          {upf} <br /> {up}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          style={{ backgroundColor: "#09c7fb" }}
        >
          {" "}
          Sign Up
        </Button>
        <Typography
          variant="subtitle2"
          component="h6"
          sx={{ color: "#713140", fontWeight: "600", fontSize: "1.25rem" }}
        >
          {user}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 400 }} component="h6">
          {amount}
        </Typography>
      </div>
      <div>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          ✔
        </Typography>
        <Typography
          className={`${classes.subhead} ${classes.space}`}
          variant="subtitle1"
        >
          ✔
        </Typography>
        <Typography className={classes.subhicon} variant="subtitle1">
          {image.map((item) => {
            return (
              <>
                <span className={classes.supportMargin}>
                  <img
                    src={item}
                    width="30"
                    alt=""
                    className={classes.support}
                  />
                </span>
              </>
            );
          })}
        </Typography>
      </div>
      <div className={classes.bottom} style={{ textAlign: "center" }}>
        <div>
          {[...Array(5)].map((item) => {
            return <>⭐</>;
          })}
        </div>
        <Typography className={classes.bottomText} variant="subtitle1">
          ({review} reviews)
        </Typography>
        <Typography
          className={classes.bottomText}
          sx={{ textTransform: "uppercase" }}
          variant="subtitle1"
        >
          Faq
        </Typography>
      </div>
    </div>
  );
}

export default SecondBoxTwo;
