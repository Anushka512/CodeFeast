import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Logo from "../../Assets/Images/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <Link to="/">Home</Link>
        </li>

        <li className="app__flex p-text">
          <div />
          <Link to="/about">About</Link>
        </li>

        <li className="app__flex p-text">
          <div />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="app__navbar-btn__section">
        <Link to="/" className="btn">
          Become a Mentor
        </Link>
        <Link to="/" className="btn">
          Book a Session
        </Link>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "contact", "work", "skills"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
              <Link style={{ marginTop: "1.2rem" }} to="/" className="btn">
                Become a Mentor
              </Link>
              <Link style={{ marginTop: "1.2rem" }} to="/" className="btn">
                Book a Session
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
