import React from "react";
import NavTwo from "../../component/Header/NavTwo";
import classes from "./Page2.module.css";
import Image from "./Image";
const data = [
  {
    title: "Technology",
    image: "./images/first.jpg",
    description:
      "A transformational platform disrupting the Embroidery IndustryOur proprietary platform manages both customer and backend operations providing a scalable eCommerce solution. Our patent pending algorythim converts massive order intake conversions. All relavent data is visible to our customers via API integration with a live web portal feeding instant information.",
  },
  {
    title: "Innovation",
    image: "./images/second.jpg",
    description:
      "Instant DST (IDST) is creating a new Industry category, EOD - Embroidery On Demand. IDST provides the ability for large scaledecorators to manage Direct To Garment Embroidery one design at a time. Innovative, integrated, automated embroidery digitization",
  },
  {
    title: "Experience",
    image: "./images/third.jpg",
    description:
      " Over 25 years of industry experience providing the highest level of service to a variety of customers. Understanding the requirements to execute effeciently in a timely manner. IDST has the experience necessary to execute on our services.",
  },
  {
    title: "Partnership",
    image: "./images/fourth.jpg",
    description:
      "    The relationship Instant DST has with its clients is a true partnership. Taking the time to fully understand the individual needs and requirements of our clients creates a true partnership enviornment. We are firm believers one size does not fit all.",
  },
];
const Page3 = () => {
  return (
    <div>
      {/* <NavTwo /> */}
      <section className={classes.mainSection}>
        <div className={classes.text}>
          <h1>TRANSFORMING THE EMBROIDERY INDUSTRY</h1>
          <h1>ONE FILE AT A TIME</h1>
        </div>
      </section>
      <div className={classes.containers}>
        {data.map((item) => (
          <Image
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
