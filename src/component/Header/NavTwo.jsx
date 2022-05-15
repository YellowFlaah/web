import classes from "./Nav.module.css";
function NavTwo() {
  return (
    <nav className={classes.navBars}>
      <img className={classes.mainLogo} src="./images/mainlogo.png" />
      <div>
        <img src="./images/bar.png" style={{ width: "1.2rem" }} alt="" />
      </div>
    </nav>
  );
}

export default NavTwo;
