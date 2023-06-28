import React from "react";
import "./Aboutus.scss";
import Banner from "../../Assets/Images/Banner.png";
import Middle from "./Middle";
// import company from "../../Assets/Images/Company logo.svg";
// import company1 from "../../Assets/Images/Company logo (1).svg";
import Faq from "./Faq";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-us-page">
        <div className="left-side">
          <h1>About Us</h1>
          <p>
            CodeFeast is an innovative educational technology platform that
            provides comprehensive training in industry relevant fields which
            also helps Non-IT background professionals to switch to this
            cutting-edge IT profession.
          </p>
          <ul>
            <li>
              At CodeFeast, we go beyond traditional online courses by providing
              live one-to-one sessions with experienced instructors along with
              the convenience of your time, you can book your session day or
              night.
            </li>
            <li>
              Our instructors are industry professionals who bring their
              expertise and insights into the sessions, ensuring that students
              receive top-quality instruction and practical insights.
            </li>
          </ul>
          <button>Get your free guide now</button>
        </div>
        <div className="right-side">
          <img src={Banner} alt="About Us" />
        </div>
      </div>
      {/* <section className="company-logos-section">
        <h2 className="centered-heading">
          From startups to the world’s largest companies
        </h2>
        <div className="company-logos">
          <img src={company} alt="Company Logo 1" />
          <img src={company1} alt="Company Logo 2" />
          <img src={company} alt="Company Logo 3" />
          <img src={company} alt="Company Logo 4" />
          <img src={company} alt="Company Logo 5" />
        </div>
      </section> */}
      <Middle />
      <Faq />
    </>
  );
};

export default AboutUsPage;
