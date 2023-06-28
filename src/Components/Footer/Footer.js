import React from "react";
import "./Footer.scss";
import LOGO from "../../Assets/Images/Logo.png";
// import FooterImg from "../../Assets/Images/FooterImg.png";

import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__wrapper">
        <div className="f__lt">
          <img src={LOGO} alt="Logo" />
          <div className="socials">
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          {/* <div className="footer_copyright">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCopyright} className="iconnnnn" />{" "}
            </span>
            Copy Right 2023 <br></br>
            <span style={{ marginLeft: "12px" }}>
              &nbsp; All rights reserved
            </span>
          </div> */}
        </div>
        <div className="ft-rtt">
          <div className="f__md">
            <h4>Services</h4>
            <ul>
              <li className="f-links">
                <a href="/">Design</a>
              </li>
              <li className="f-links">
                <a href="/">Coding</a>
              </li>
              <li className="f-links">
                <a href="/">Development</a>
              </li>
              <li className="f-links">
                <a href="/">Marketing</a>
              </li>
              <li className="f-links">
                <a href="/">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div className="f__md">
            <h4>Product</h4>
            <ul>
              <li className="f-links">
                <a href="/">Hotel Marnagement</a>
              </li>
              <li className="f-links">
                <a href="/">Rent Management</a>
              </li>
              <li className="f-links">
                <a href="/">Micro-Finance</a>
              </li>
              <li className="f-links">
                <a href="/">Industry</a>
              </li>
              <li className="f-links">
                <a href="/">Dhoko</a>
              </li>
            </ul>
          </div>
          <div className="f__md">
            <h4>Company</h4>
            <ul>
              <li className="f-links">
                <a href="/">Las Vegas</a>
              </li>
              <li className="f-links">
                <a href="/">New York</a>
              </li>
              <li className="f-links">
                <a href="/">Tokyo</a>
              </li>
              <li className="f-links">
                <a href="/">Office Login</a>
              </li>
              <li className="f-links">
                <Link to="/admin">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-top-1686824330">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      {/* <div className="footer__img">
        <div class="custom-shape-divider-top-1686824157">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
