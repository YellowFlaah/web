import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <nav className={classes.navBars}>
        <img className={classes.mainLogo} src="./images/mainlogo.png" />

        <div>
          <ul className={classes.navList}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">PRICING</a>
            </li>
            <li>
              <a href="/">ABOUT US</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
            <div className={classes.mc}>MC</div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
