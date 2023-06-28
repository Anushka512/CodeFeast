import React from "react";
import "./Home.scss";
import person from "../../Assets/Images/person.png";
import btn1 from "../../Assets/Images/Button1.png";
import btn2 from "../../Assets/Images/button2.png";

const HeroSection = () => {
  return (
    <div className="page-container">
      <div className="content">
        <div className="left-side">
          <h1>Learn at Your Own Pace</h1>
          <p >
            Experience the results of our one on one live session with a free
            trial today and unlock unlimited potential for your career growth
          </p>
          <button className="btn" >Book A Free Trial</button>
        </div>
        <div className="right-side">
          <img src={btn1} alt="Image 2" className="btn1" />
          <img src={person} alt="Image 1" className="person" />
          <img src={btn2} alt="Image 3" className="btn2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
