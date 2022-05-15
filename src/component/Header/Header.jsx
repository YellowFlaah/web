import { AppBar, Container, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();
const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1rem",
    },
  },
  img: {
    width: "15rem",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
    },
  },
  list: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
function Header() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "white", color: "black" }}
    >
      <Toolbar className={classes.container}>
        <div>
          <img
            className={classes.img}
            src="./images/instantdstlogo.jpg"
            alt=""
          />
        </div>
        {/* <ul className={classes.list}>
          <li className={classes.li}>
            <a href="#">Home</a>
          </li>
          <li className={classes.li}>
            <a href="#">Pricing</a>
          </li>
          <li className={classes.li}>
            <a href="#">About us</a>
          </li>
          <li className={classes.li}>
            <a href="#">sign in/register</a>
          </li>
        </ul> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
