import React from "react";
import classes from "./Page4.module.css";
import Parrot from "./Parrot";
import NavTwo from "../../component/Header/NavTwo";
const Page4 = () => {
  return (
    <div>
      {/* <NavTwo /> */}
      <section className={classes.mainSection}>
        <div className={classes.text}>
          <h1>WORKING TOGETHER TO PRODUCE THE BEST POSSIBLE RESULTS</h1>
          <h1 className={classes.secondText}>
            OUR TOP 7 TIPS TO PRODUCE YOUR BEST EMBROIDERY FILE CONVERSIONS
          </h1>
        </div>
      </section>
      <section className={classes.parrotSection}>
        <div className={classes.list}>
          <ul>
            <li>
              <a className={classes.a} style={{ color: "#ffff" }}>
                Use Real Object Images
              </a>
              <span style={{ color: "#ffff" }}>
                <i class="fa fa-info-circle"></i>
              </span>
            </li>
            <li>
              <a className={classes.a}>
                Avoid Too Small Text Or too Thin Lines
              </a>
              <span>
                {" "}
                <i class="fa fa-info-circle"></i>
                {/* <FontAwesomeIcon icon="fa-thin fa-circle-info" /> */}
              </span>
            </li>
            <li>
              <a className={classes.a}>Follow Side Embroidery Guidines</a>
              <span>
                {" "}
                <i class="fa fa-info-circle"></i>
                {/* <FontAwesomeIcon icon="fa-thin fa-circle-info" /> */}
              </span>
            </li>
            <li>
              <a className={classes.a}>Avoid Gradients And Use Solid Color</a>
              <span>
                <i class="fa fa-info-circle"></i>
                {/* <FontAwesomeIcon icon="fa-thin fa-circle-info" /> */}
              </span>
            </li>
            <li>
              <a className={classes.a}>Avoid Negative Void Objects</a>
              <span>
                <i class="fa fa-info-circle"></i>
                {/* <FontAwesomeIcon icon="fa-thin fa-circle-info" /> */}
              </span>
            </li>
            <li>
              <a className={classes.a}>Better To Use Transparent Background</a>
              <span>
                <i class="fa fa-info-circle"></i>
              </span>
            </li>
            <li>
              <a className={classes.a}>
                Avoid Too Small Text Or too Thin Lines
              </a>
              <span>
                <i class="fa fa-info-circle"></i>
              </span>
            </li>
            <li>
              <a className={classes.a}>Avoid Distorted Graphics</a>
              <span>
                <i class="fa fa-info-circle"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.parrotImg}>
          <Parrot image="./images/parrot1.jpg" icon="fa fa-check" two={false} />
          <Parrot image="./images/parrot2.jpg" icon="fa fa-times" two={true} />
        </div>
      </section>
    </div>
  );
};

export default Page4;
