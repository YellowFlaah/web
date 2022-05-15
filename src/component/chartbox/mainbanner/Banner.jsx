import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ServiceTwo from "../Banner/ServiceTwo";
import Service from "../Banner/Service";
import Header from "../../Header/Header";
const useStyles = makeStyles({
  head: {
    marginTop: "-0.8rem",
  },
  mainhead: {
    textAlign: "center",
    color: "#9b938b",
    textTransform: "uppercase",
  },
});
function Banner() {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <div className={classes.head}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "500" }}
          className={classes.mainhead}
        >
          Simple pricing for everyone
        </Typography>
        <div>
          <Service />
        </div>
      </div>
    </Container>
  );
}

export default Banner;
