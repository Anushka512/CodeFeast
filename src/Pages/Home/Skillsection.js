import React from "react";
import AnimatedCircle from "../../Components/AnimatedCircle/Circle";
import "./Skillsection.scss";

function Skillsection() {
  return (
    <div className="skills__section">
      <div className="skills__section-info">
        <h4>PLACEMENTS</h4>

        <h2>
          Learn The <span>Right</span> <br /> <span>Skills</span> for Success
        </h2>

        <p>Our finest get offers from top-notch companies.</p>
      </div>

      <div className="skills__section-animation">
        <AnimatedCircle />
      </div>
    </div>
  );
}

export default Skillsection;
