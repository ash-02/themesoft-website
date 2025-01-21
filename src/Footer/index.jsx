import React from "react";
import "./index.css";

import tsLogo from "../assets/ts_logo.png";

const index = () => {
  return (
    <div className="footer-all">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={tsLogo} alt="Tech Solutions" />
        </div>
        <div className="footer-content">
          <ul className="footer-column">
            <li className="heading">Services</li>
            <li>
              <a href="">Artificial Intelligence</a>
            </li>
            <li>
              <a href="">Cyber Security</a>
            </li>
            <li>
              <a href="">Cloud and Data Services</a>
            </li>
            <li>
              <a href="">Software Consulting</a>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="heading">Corporate Overview</li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="heading">Support</li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Fraud Alert</a>
            </li>
          </ul>
        </div>
        <div className="footer-branches">
          <ul className="footer-column">
            <div className="">
              <li
                className="heading"
                style={{
                  marginBottom: "1rem",
                }}
              >
                Home Branch
              </li>
              <li>
                616 S Coppell RD Coppell, TX 75019 <br /> (972) 474-8787
              </li>
            </div>
            <br />
            <ul className="">
              <li className="heading">Other Locations</li>
              <li>Albany, NY</li>
              <li>Colorado Springs, CO</li>
              <li>San Ramon, CA</li>
            </ul>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 Themesoft Inc. All rights reserved.</p>
        <div className="social-media-buttons">
            <a href="">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
      </div>
    </div>
  );
};

export default index;