import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import tsLogo from "../assets/ts_logo.png";

const Footer = () => {
  return (
    <footer className="footer-all">
      <div className="footer-gradient"></div>
      <div className="footer-main">
        <div className="footer-logo-section">
          <img src={tsLogo} alt="ThemeSoft" className="responsive-logo" />
          <p className="company-description">
            Empowering businesses through innovative digital solutions and transformative technology services.
          </p>
          <div className="social-media-buttons">
            <a href="https://www.linkedin.com/company/themesoft-inc./" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://x.com/themesoftinc" aria-label="X (Twitter)" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/workforce-solutions">Workforce Solutions</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/expertise/artificial-intelligence">Artificial Intelligence</Link></li>
              <li><Link to="/expertise/cyber-security">Cyber Security</Link></li>
              <li><Link to="/expertise/cloud-and-data-services">Cloud Services</Link></li>
              <li><Link to="/expertise/software-consulting">Software Consulting</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/supplier-diversity">Supplier Diversity</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/compliance">Compliance</Link></li>
            </ul>
          </div> */}

          <div className="footer-section contact-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <p className="address">
                <i className="fas fa-map-marker-alt"></i>
                616 S Coppell RD Coppell, TX 75019
              </p>
              <p className="phone">
                <i className="fas fa-phone"></i>
                (972) 474-8787
              </p>
              <p className="email">
                <i className="fas fa-envelope"></i>
                info@themesoft.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} ThemeSoft Inc. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy</Link>
            <Link to="#">Terms</Link>
            <Link to="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;