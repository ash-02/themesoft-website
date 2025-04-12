import React, { useEffect, useRef } from 'react'
import './index.css'
import companyLogo from "../assets/LogoMain/Company_Logo_Cropped.png"

const About = () => {
  const intersectionObserver = useRef()

  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('animate'))
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => intersectionObserver.current.observe(el))
    return () => intersectionObserver.current.disconnect()
  }, [])

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-image" />
        </div>
        <div className="about-hero-content fade-in">
          <h1>
            <span className="gradient-text">Transforming</span>
            <br />
            Digital Future
          </h1>
          <p>Empowering businesses through innovative technology solutions</p>
          <div className="about-stats">
            <div className="about-stat-box">
              <span className="about-stat-number">20+</span>
              <span className="about-stat-text">Years Experience</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-number">1000+</span>
              <span className="about-stat-text">Team Members</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-number">9</span>
              <span className="about-stat-text">Global Offices</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-who">
        <div className="about-card fade-in">
          <h2 data-text="Who We Are">Who We Are</h2>
          <p>
            ThemeSoft is a Dallas-based Woman Owned Minority Business Enterprise with global reach.
            Our journey of digital transformation spans across the United States, Canada, India, and Brazil,
            delivering cutting-edge solutions in banking, healthcare, manufacturing, and more.
          </p>
        </div>
        <div className="about-blobs">
          <div className="about-blob-1" />
          <div className="about-blob-2" />
          <div className="about-blob-3" />
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-bg">
          <div className="about-values-sphere"></div>
          <div className="about-values-grid"></div>
        </div>

        <div className="about-values-container">
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
              className="about-value-card"
              style={{ 
                '--delay': `${value.delay}ms`,
                '--accent-color': value.color
              }}
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
          <div className="about-values-center">
            <h2>Our Core Values</h2>
          </div>
        </div>
      </section>

      <section className="about-global">
        {/* <div className="about-meteors">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`about-meteor ${i >= 8 ? 'from-left' : ''}`} />
          ))}
        </div> */}
        <div className="about-global-content fade-in">
          <h2 data-text="Global Presence">Global Presence</h2>
          <div className="about-globe-wrap">
            <div className="about-globe" />
            <div className="about-locations">
              <div className="about-location" style={{'--delay': '0s'}}>United States</div>
              <div className="about-location" style={{'--delay': '0.2s'}}>Canada</div>
              <div className="about-location" style={{'--delay': '0.4s'}}>India</div>
              <div className="about-location" style={{'--delay': '0.6s'}}>Brazil</div>
              <div className="about-location" style={{'--delay': '0.8s'}}>
                <img src={companyLogo} alt="ThemeSoft Logo" className="about-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-quote fade-in">
        <div className="about-quote-box">
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