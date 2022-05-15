import React from "react";
import classes from "./Page3.module.css";
import NavTwo from "../../component/Header/NavTwo";
const Page3 = () => {
  return (
    <div>
      {/* <NavTwo /> */}
      <section className={classes.mainSectionone} style={{ display: "flex" }}>
        <div className={classes.box}>
          <div className={classes.one}>
            <p>GLOBAL FULLY INTEGRATED EOD - EMBROIDERY ON DEMAND PLATFORM.</p>
          </div>
          <div className={classes.two}>
            <p>
              YOUR CUSTOMER'S IMAGE INSTANTLY CONVERTED INTO AN EMBROIDERY DST
              FILE.
            </p>
          </div>
          <div className={classes.three}>
            <p>AUTOMATICALLY SIZED AND SEW READY FOR THE ITEM SELECTED.</p>
          </div>
          <div className={classes.four}>
            <p>
              EXPORTED DIRECTLY TO YOUR MACHINE WITH STITCH COUNT AND BOBIN
              THREAD COLOR MATCH.
            </p>
          </div>
        </div>
        <div className={classes.secondcontainer}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img className={classes.mainimage} src="./images/sloth.png" />
            </div>

            <div
              className={classes.aside}
              style={{
                display: "flex",
                flexDirection: "column",
                margintTop: "3rem",
              }}
            >
              <div className={classes.order}>Order Details</div>
              <hr style={{ color: "#e5d7d7" }} />
              <div className={classes.border}>
                <p style={{ color: "#1e40af" }}>
                  Artwork Title:{" "}
                  <span className={classes.blackText}>Sloth Tree</span>
                </p>
                <p style={{ color: "#1e40af" }}>
                  Reference POS:{" "}
                  <span className={classes.blackText}>Your Order #</span>
                </p>
                <p style={{ color: "#ea580c" }}>
                  Width: <span className={classes.blackText}>2.48 in X </span>
                  Height: <span className={classes.blackText}>2.25 in</span>
                </p>
                <p style={{ color: "#1e40af" }}>
                  Remove Background:{" "}
                  <span className={classes.blackText}>Yes</span>
                </p>
              </div>
              <div className={classes.lastdiv}>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src="./images/square.png"
                  alt="/"
                />
                <div className={classes.left}>
                  <p style={{ color: "#ea580c" }}>Type:</p>
                  <p className={classes.blackText}>Tw9. DenmyNylon</p>
                  <p style={{ color: "#ea580c" }}>Description</p>
                  <p className={classes.blackText}>Tight weave</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classes.bottomimages}
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "center",
            // }}
          >
            <div className={classes.contain}>
              <div className={classes.bar}>
                <div className={classes.firsts}>
                  <p>Stitches</p>
                  <p>Colors</p>
                  <p>Color Changes</p>
                  <p>Stops</p>
                  <p>Machine</p>
                  <p>Trim</p>
                </div>
                <div className={classes.seconds}>
                  <p>7171</p>
                  <p>7</p>
                  <p>6</p>
                  <p>6</p>
                  <p>Tajima TBF</p>
                  <p>15</p>
                </div>
              </div>
              <div className={classes.chart}>
                <img
                  style={{ height: "150px" }}
                  src="./images/colorBox.png"
                  alt="/"
                />
              </div>
            </div>

            <div className={classes.sideimage}>
              <div className={classes.imageleft} style={{ margin: "0 1rem" }}>
                <div>
                  <img
                    className={classes.slothimage}
                    src="./images/sloth.png"
                    alt="/"
                  />
                </div>
                <p style={{ color: "blue" }}>Uploaded Artwork</p>
              </div>
              <div className={classes.imageleft}>
                <div>
                  <img
                    className={classes.slothimage}
                    src="./images/sloth.png"
                    alt="/"
                  />
                </div>
                <p style={{ color: "red" }}>True View</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page3;
