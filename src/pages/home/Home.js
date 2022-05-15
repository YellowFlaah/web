import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/bg.png)" }}
      className={classes.bgimage}
    >
      <nav className={classes.navBar}>
        <img className={classes.mainLogo} src="./images/logo.png" />
        <div className={classes.listDiv}>
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
          </ul>
        </div>
      </nav>
      <section className={classes.mainSection}>
        <div className={classes.texts}>
          <p>THE FASTEST</p>
          <p>EMBROIDERY CONVERSONS</p>
          <p>ON THE PLANET</p>
        </div>
        <button className={classes.button}>- How We Do It</button>
      </section>
    </div>
  );
};

export default Home;
