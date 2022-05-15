import React from "react";
import Nav from "../../component/Header/Nav";
import classes from "./Page6.module.css";
const Page6 = () => {
  return (
    <div>
      <div>
        {/* <Nav /> */}
        <div className={classes.mainSectionthree}>
          <div className={classes.leftAside}>
            To revolutionize the Embroidery Industry by converting designs into
            machine files faster and cheaper than anyone else on the planet.
          </div>
          <div className={classes.rightside}>
            <div className={classes.container}>
              <div className={classes.pane}>
                <div className={classes.paneicon}>
                  <i class="fa fa-book"></i>
                </div>
                <p>Mission</p>
              </div>
              <div className={`${classes.pane} ${classes.paneTwo}`}>
                <p>Vision</p>
                <div className={classes.paneicon}>
                  <i class="fa fa-book"></i>
                </div>
              </div>
              <div className={classes.pane}>
                <div className={classes.paneicon}>
                  <i class="fa fa-comments"></i>
                </div>
                <p>Service</p>
              </div>
              <div className={`${classes.pane} ${classes.paneTwo}`}>
                <p>Customers</p>
                <div className={classes.paneicon}>
                  <i class="fa fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomsection}>
          <ul>
            <li className={classes.navitem}>
              <a class={`${classes.navlink} ${classes.active}`}>
                <img src="./images/book.svg" alt="" />
              </a>
              <div class={`${classes.gradborder} ${classes.active}`}></div>
              <span> MISSION </span>
            </li>
            <li className={classes.navitem}>
              <a class={classes.navlink}>
                <img src="./images/badge.svg" alt="" />
              </a>
              <div class={classes.gradborder}></div>
              <span> VISION</span>
            </li>
            <li className={classes.navitem}>
              <a class={classes.navlink}>
                <i style={{ fontSize: "3rem" }} class="fa fa-comments"></i>
              </a>
              <div class={classes.gradborder}></div>
              <span>SERVICE</span>
            </li>
            <li className={classes.navitem}>
              <a class={classes.navlink}>
                <i style={{ fontSize: "3rem" }} class="fa fa-user"></i>
              </a>
              <div class={classes.gradborder}></div>
              <span>CUSTOMERS</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page6;
