import React, { useEffect, useRef } from 'react'
import './index.css'
import companyLogo from "../assets/LogoMain/Company_Logo_Cropped.png"

const About = () => {
  const obs = useRef()

  useEffect(() => {
    obs.current = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('animate'))
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => obs.current.observe(el))
    return () => obs.current.disconnect()
  }, [])

  return (
    <div className="about-container">
      <section className="top">
        <div className="bg">
          {/* <div className="overlay" /> */}
          <div className="img" />
        </div>
        <div className="main fade-in">
          <h1>
            <span className="grad-txt">Transforming</span>
            <br />
            Digital Future
          </h1>
          <p>Empowering businesses through innovative technology solutions</p>
          <div className="nums">
            <div className="num-box">
              <span className="big-num">20+</span>
              <span className="num-txt">Years Experience</span>
            </div>
            <div className="num-box">
              <span className="big-num">1000+</span>
              <span className="num-txt">Team Members</span>
            </div>
            <div className="num-box">
              <span className="big-num">9</span>
              <span className="num-txt">Global Offices</span>
            </div>
          </div>
        </div>
      </section>

      <section className="abt">
        <div className="card fade-in">
          <h2 data-text="Who We Are">Who We Are</h2>
          <p>
            ThemeSoft is a Dallas-based Woman Owned Minority Business Enterprise with global reach.
            Our journey of digital transformation spans across the United States, Canada, India, and Brazil,
            delivering cutting-edge solutions in banking, healthcare, manufacturing, and more.
          </p>
        </div>
        <div className="blobs">
          <div className="b1" />
          <div className="b2" />
          <div className="b3" />
        </div>
      </section>

      <section className="vals">
        <div className="vals-background">
          <div className="gradient-sphere"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="vals-container">
          {[
            {
              title: "People First",
              description: "Building trust through transparency and ethical practices. We prioritize relationships and personal growth.",
              color: "var(--coral)",
              delay: 100
            },
            {
              title: "Client Success",
              description: "Your success is our success - we grow together. We're committed to delivering exceptional results",
              color: "var(--coral-light)",
              delay: 200
            },
            {
              title: "Integrity",
              description: "Upholding unwavering commitment to trust and excellence in everything we do",
              color: "var(--gold)",
              delay: 300
            },
            {
              title: "Innovation",
              description: "Pushing boundaries and redefining possibilities through creative thinking and cutting-edge solutions",
              color: "var(--purple)",
              delay: 400
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="vals-card"
              style={{ 
                '--delay': `${value.delay}ms`,
                '--accent-color': value.color
              }}
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
          <div className="center-circle">
            <h2>Our Core Values</h2>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="meteor-container">
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
          <div className="meteor from-left"></div>
        </div>
        <div className="map-content fade-in">
          <h2 data-text="Global Presence">Global Presence</h2>
          <div className="globe-wrap">
            <div className="globe" />
            <div className="places">
              <div className="place" style={{'--delay': '0s'}}>United States</div>
              <div className="place" style={{'--delay': '0.2s'}}>Canada</div>
              <div className="place" style={{'--delay': '0.4s'}}>India</div>
              <div className="place" style={{'--delay': '0.6s'}}>Brazil</div>
              <div className="place" style={{'--delay': '0.8s'}}>
                <img src={companyLogo} style={{
                  width: 'auto',
                  maxWidth: '100px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  opacity: '0.9'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote fade-in">
        <div className="quote-box">
          <blockquote>
            "People ask the difference between a leader and a boss. The leader leads, and the boss drives."
            <cite>— Theodore Roosevelt</cite>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default About