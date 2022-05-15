import React from "react";
import "./Page1.css";
import Nav from "../../component/Header/Nav";
const Page1 = () => {
  return (
    <div>
      <div>
        {/* <Nav /> */}
        <section className="mainSection mainfirst">
          <div className="leftAside">
            <div className="dogImg">
              <div>
                <img src="./images/Bulldog.png" />
                <button className="btntwo">BEFORE</button>
              </div>
              <div>
                <img src="./images/dogtwo.png" />
                <button className="btntwo">AFTER</button>
              </div>
            </div>

            <div className="dogImg">
              <div>
                <img src="./images/Bulldog.png" />
                <button className="btntwo">BEFORE</button>
              </div>
              <div>
                <img src="./images/dogtwo.png" />
                <button className="btntwo">AFTER</button>
              </div>
            </div>

            <div className="viking">
              <div>
                <img src="./images/Viking.png" />
                <button className="btntwo">BEFORE</button>
              </div>
              <div>
                <img src="./images/vikingtwo.png" />
                <button className="btntwo">AFTER</button>
              </div>
            </div>
          </div>

          <div className="aside">
            <h1 className="headline">
              <h1 className="headlineTwo">WE CONVERT THE SIMPLEST</h1>
              <h1 className="headlineTwo">TO THE MOST COMPLEX</h1>
              <h1 className="headlineTwo">LOGO, DESIGN, OR IMAGE IN</h1>
              <h1 className="headlineTwo">AN INSTANT</h1>
            </h1>
            <p className="description">
              Our proprietary algorithm is an evolution in the Embroidery,
              Industry. The platform converting your files will continue to get
              better and smarter the more it is used. Instant DST is
              transforming how embroidery will be digitized.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page1;
