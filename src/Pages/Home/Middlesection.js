import React from 'react';
import './Middlesection.scss';
import user from "../../Assets/Images/user.png";
import receipt from "../../Assets/Images/receipt.png";
import cash from "../../Assets/Images/cash.png";
import analytics from "../../Assets/Images/analytics.png";
import { FaBookReader } from "react-icons/fa";

const Middlesection = () => {
  return (
    <div className="page-containers">
      <div className="left-sides">
      <div className="upper-row">
        <div className="card">
          <div className="icon"><img src={user} alt="Icon 1" /></div>
          <h3 className="title">Fun Courses</h3>
          <p className="description">goodbye to textbooks and boring lectures</p>
        </div>
        <div className="card">
          <div className="icon"><img src={cash} alt="Icon 2" /></div>
          <h3 className="title">Affordable Mentorship</h3>
          <p className="description">Easily book personalized  sessions at affordable price</p>
        </div>
        </div>
        <div className="lower-row">
        <div className="card">
          <div className="icon"><img src={analytics} alt="Icon 3" /></div>
          <h3 className="title">Master the Coding</h3>
          <p className="description">designed for beginners to coding wizards</p>
        </div>
        <div className="card">
          <div className="icon"><img src={receipt} alt="Icon 4" /></div>
          <h3 className="title">Also for Non-IT</h3>
          <p className="description">personalized mentorship that ensures you never fall behind</p>
        </div>
       </div>
      </div>
      
     
   <div className="right-sides">
        <h2 className="title">Self-Paced Learning with one-on-one <span>Live Sessions </span>with Industry Experts</h2>
        <p className="description">"Unlock the Best: Our Courses Crafted and Taught by Tech Titans, Alumni of Success!"</p>
        <button className="button1">Learn more<FaBookReader style={{marginTop:"10px"}}/></button>
      </div>
     
    </div>
  );
};

export default Middlesection;
