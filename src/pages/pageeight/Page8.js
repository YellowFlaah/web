import React from "react";
import "./Page8.css";
const Page8 = () => {
  return (
    <div>
      {/* <nav className="navBar">
        <img className="mainLogo" src="./images/mainlogo.png" />

        <div>
          <ul className="navList">
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
              <a href="/">SIGN IN / REGISTER</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <section className="mainSectiontwo">
        <div className="text">
          <h1>Our Amazing Customer Reviews!</h1>
        </div>
        <div className="reviewContainer">
          <div className="sideButtonDiv firstbutton">
            <button className="sideButton">
              <i class="fa fa-angle-left circleicon"></i>
            </button>
          </div>
          <div className="review">
            <img className="firstimage" src="./images/review.jpg" />
            <p className="name">Adam W</p>
            <small style={{ fontWeight: 500, fontSize: "14px", color: "#333" }}>
              2 months ago
            </small>
            <p className="ago">
              Wow! I can't believe how fast and easy it was to use! We received
              our embroidery file in less than a minute.
            </p>
            <div
              className="bottom twos"
              style={{
                textAlign: "center",
                margin: "0px",
                marginLeft: "0px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "50px", display: "flex" }}>
                {[...Array(5)].map((item) => {
                  return (
                    <>
                      <i style={{ color: "gold" }} class="fa fa-star"></i>
                    </>
                  );
                })}
              </div>
              <div>
                <img className="comma" src="./images/comma.png" />
              </div>
            </div>
          </div>

          <div className="review" style={{ position: "relative" }}>
            <img className="firstimage" src="./images/review.jpg" />
            <p className="name">Carly L.</p>
            <small style={{ fontWeight: 500, fontSize: "14px", color: "#333" }}>
              4 days ago
            </small>
            <p className="ago">
              It really was amazing. The quality was great and you can't beat
              the price!
            </p>
            <div
              className="bottom twos"
              style={{
                textAlign: "center",
                margin: "0px",
                marginLeft: "0px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "50px", display: "flex" }}>
                {[...Array(5)].map((item) => {
                  return (
                    <>
                      <i style={{ color: "gold" }} class="fa fa-star"></i>
                    </>
                  );
                })}
              </div>
              <div>
                <img className="comma" src="./images/comma.png" />
              </div>
            </div>
          </div>
          <div className="review" style={{ position: "relative" }}>
            <img className="firstimage" src="./images/review.jpg" />
            <p className="name">Steve M.</p>
            <small style={{ fontWeight: 500, fontSize: "14px", color: "#333" }}>
              2 months ago
            </small>
            <p className="ago">
              Service was great! We needed a few adjustment to the file and they
              made the changes no questions asked!
            </p>
            <div
              className="bottom twos"
              style={{
                textAlign: "center",
                margin: "0px",
                marginLeft: "0px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "50px", display: "flex" }}>
                {[...Array(5)].map((item) => {
                  return (
                    <>
                      <i style={{ color: "gold" }} class="fa fa-star"></i>
                    </>
                  );
                })}
              </div>
              <div>
                <img className="comma" src="./images/comma.png" />
              </div>
            </div>
          </div>
          <div className="review" style={{ position: "relative" }}>
            <img className="firstimage" src="./images/review.jpg" />
            <p className="name">Amy J.</p>
            <small style={{ fontWeight: 500, fontSize: "14px", color: "#333" }}>
              3 days ago
            </small>
            <p className="ago">
              This service has saved us a ton of time and money quoting jobs. We
              can get all the information including stitch count in less than a
              minute!
            </p>
            <div
              className="bottom twos"
              style={{
                textAlign: "center",
                margin: "0px",
                marginLeft: "0px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "50px", display: "flex" }}>
                {[...Array(5)].map((item) => {
                  return (
                    <>
                      <i style={{ color: "gold" }} class="fa fa-star"></i>
                    </>
                  );
                })}
              </div>
              <div>
                <img className="comma" src="./images/comma.png" />
              </div>
            </div>
          </div>

          <div className="sideButtonDiv secondbutton">
            <button className="sideButton">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page8;
