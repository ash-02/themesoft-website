import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GoogleMapComponent from "./GoogleMap";
import "./index.css";
import Stamp from "../assets/stamp.png";
import WorldMap from "../assets/World Map.svg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 1 },
  },
};

const ContactUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayDelay = 6000000;

  useEffect(() => {
    let autoPlayTimer;
    
    if (isAutoPlaying) {
      autoPlayTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 4);
      }, autoPlayDelay);
    }

    return () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
      }
    };
  }, [isAutoPlaying]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const locationSections = [
    {
      title: "North America",
      offices: [
        {
          name: "Albany, NY",
          address: "90 State St, Suite 700<br />Albany, NY - 12207"
        },
        {
          name: "Colorado Springs, CO",
          address: "1155 Kelly Johnson Blvd, Suite 111<br />Colorado Springs, CO - 80920"
        },
        {
          name: "San Ramon, CA",
          address: "4000 Bishop Drive<br />San Ramon, CA - 94583"
        }
      ]
    },
    {
      title: "Canada",
      offices: [
        {
          name: "Mississauga, Ontario",
          address: "100 Traders Blvd E, Suite 200<br />Canada - L4Z 2H7"
        }
      ]
    },
    {
      title: "Asia",
      offices: [
        {
          name: "Chennai, India",
          isRegistered: true,
          address: "No.2008, Z Block, 2nd Street,<br />13th Main Road, Shanthi Colony,<br />Anna Nagar, Chennai 600 040"
        }
      ]
    },
    {
      title: "South America",
      offices: [
        {
          name: "Brazil",
          address: "Themesoft Inc. - Tecnologia Eireli<br />Avenida Paulista, 2028, Conj. 111<br />Consolação, Bela Vista<br />São Paulo, SP, CEP 01310-200"
        }
      ]
    }
  ];

  return (
    <>
      <div className="contact-map-section">
        <div className="contact-map-wrapper">
          <GoogleMapComponent />
        </div>

        <motion.div
          className="contact-address-card"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div className="contact-stamp-wrapper">
            <img src={Stamp} alt="Stamp" className="contact-stamp" />
          </motion.div>

          <motion.div className="contact-address-details">
            <h3 className="contact-hq-title">HEADQUARTERS</h3>
            <p>
              <strong>Address</strong><br />
              616 S Coppell RD Coppell, TX 75019
            </p>
            <p>
              <strong>Email</strong><br />
              info@amtexenterprises.com
            </p>
            <p>
              <strong>Phone</strong><br />
              +1 (972) 474-8787
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="contact-locations-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img src={WorldMap} alt="World Map" className="contact-world-map" />
        <h2 className="contact-locations-heading">Global Locations</h2>
        
        <div className="contact-location-tabs">
          <button 
            className={`contact-location-tab ${currentSlide === 0 ? 'active' : ''}`}
            onClick={() => handleManualNavigation(0)}
          >
            North America
          </button>
          <button 
            className={`contact-location-tab ${currentSlide === 1 ? 'active' : ''}`}
            onClick={() => handleManualNavigation(1)}
          >
            Canada
          </button>
          <button 
            className={`contact-location-tab ${currentSlide === 2 ? 'active' : ''}`}
            onClick={() => handleManualNavigation(2)}
          >
            Asia
          </button>
          <button 
            className={`contact-location-tab ${currentSlide === 3 ? 'active' : ''}`}
            onClick={() => handleManualNavigation(3)}
          >
            South America
          </button>
        </div>
        
        <div className="contact-locations-slider">
          <motion.div 
            className="contact-location-slide"
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="contact-location-content">
              <div className="contact-offices-grid">
                {currentSlide === 0 && (
                  <>
                    <div className="contact-office">
                      <h4>Albany, NY</h4>
                      <p>90 State St, Suite 700<br />Albany, NY - 12207</p>
                    </div>
                    <div className="contact-office">
                      <h4>Colorado Springs, CO</h4>
                      <p>1155 Kelly Johnson Blvd, Suite 111<br />Colorado Springs, CO - 80920</p>
                    </div>
                    <div className="contact-office">
                      <h4>San Ramon, CA</h4>
                      <p>4000 Bishop Drive<br />San Ramon, CA - 94583</p>
                    </div>
                  </>
                )}
                {currentSlide === 1 && (
                  <div className="contact-office">
                    <h4>Mississauga, Ontario</h4>
                    <p>100 Traders Blvd E, Suite 200<br />Canada - L4Z 2H7</p>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="contact-office">
                    <h4>Chennai, India</h4>
                    <p className="contact-registered">Registered Office</p>
                    <p>No.2008, Z Block, 2nd Street,<br />13th Main Road, Shanthi Colony,<br />Anna Nagar, Chennai 600 040</p>
                  </div>
                )}
                {currentSlide === 3 && (
                  <div className="contact-office">
                    <h4>Brazil</h4>
                    <p>Themesoft Inc. - Tecnologia Eireli<br />Avenida Paulista, 2028, Conj. 111<br />Consolação, Bela Vista<br />São Paulo, SP, CEP 01310-200</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="contact-slider-dots">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`contact-slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleManualNavigation(index)}
            />
          ))}
        </div>
      </motion.div>

      <motion.div className="contact-form-section">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="contact-form-wrapper">
          <div className="contact-form-left">
            <h1 className="contact-form-title">Let's <br /> Connect</h1>
            <p className="contact-form-subtitle">
              Tell us more about your business and how we can help.
            </p>
          </div>

          <div className="contact-form-right">
            <form className="contact-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="company" placeholder="Company" />
              <textarea name="message" placeholder="Message" required></textarea>

              <motion.button whileHover={{ scale: 1.05 }} className="contact-form-submit">
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;