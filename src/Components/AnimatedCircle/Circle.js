import React from "react";
import "./Circle.css";
import SASS from "../../Assets/Images/SASS.png";
import HTML from "../../Assets/Images/HTML.png";
import JS from "../../Assets/Images/Js.png";
import react from "../../Assets/Images/react.png";
import nodejs from "../../Assets/Images/node.png";

import { GiPodiumWinner } from "react-icons/gi";

function Circle() {
  return (
    <div className="mainContainer">
      <div id="container" style={{ "--n": "5", "--d": "20s" }}>
        <div class="item">
          <img src={react} alt="react" />
        </div>
        <div class="item">
          <img src={JS} alt="JS" />
        </div>
        <div class="item">
          <img src={SASS} alt="SASS" />
        </div>
        <div class="item">
          <img src={HTML} alt="HTML" />
        </div>
        <div class="item">
          <img src={nodejs} alt="Node" />
        </div>

        <div className="inner__container">
          <div className="inner__circle">
            <div className="rotate anim1">
              <div className="counterrotate">
                <div className="inner">
                  <GiPodiumWinner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
