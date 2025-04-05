import React, { useEffect, useState, useRef } from 'react';
import './index.css';

const ScrambleText = ({ finalText, isVisible }) => {
  const [text, setText] = useState('');
  const characters = '0123456789+-$%#@&';
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = false;
    let interval;
    
    const scramble = () => {
      const randomText = finalText
        .split('')
        .map((char) => {
          if (char === ' ' || char === '+' || char === '%') return char;
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');
      setText(randomText);
    };

    interval = setInterval(scramble, 50);

    setTimeout(() => {
      clearInterval(interval);
      start = true;
      let currentIndex = 0;
      
      interval = setInterval(() => {
        if (currentIndex <= finalText.length) {
          setText(
            finalText.slice(0, currentIndex) +
            Array(finalText.length - currentIndex)
              .fill(0)
              .map(() => characters[Math.floor(Math.random() * characters.length)])
              .join('')
          );
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [finalText, isVisible]);

  return <span className={`scramble-text ${isVisible ? 'visible' : ''}`}>{text || finalText[0]}</span>;
};

const WorkforceSolutions = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const solutions = [
    {
      title: 'Contingent Workforce Solutions',
      description: 'In the rapidly changing industry, many clients seek temporary/contingent staff to manage costs and meet urgent needs. Navigating temporary recruitment complexities is crucial for success.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#7c3aed"/>
        </svg>
      )
    },
    {
      title: 'Permanent (Full time) Hires',
      description: 'Themesoft gives clients a single, end-to-end platform to directly fulfill their hiring needs. Through an integrated approach combining technology, data, and services.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="#7c3aed"/>
        </svg>
      )
    },
    {
      title: 'Employer of Record Solutions',
      description: 'Our Employer of Record Service provides a premium talent experience to help you attract and retain the strongest freelance workforce. Managing the employment relationship end-to-end.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#7c3aed"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animateElements = () => {
      document.querySelectorAll('.animate-on-load').forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 200);
      });

      const titleWrapper = document.querySelector('.title-wrapper');
      if (titleWrapper) {
        setTimeout(() => {
          titleWrapper.classList.add('animate-in');
        }, 600);
      }
    };

    animateElements();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="workforce-container workforce-solutions">
      <div className="animated-bg">
        <div className="floating-circle"></div>
        <div className="floating-square"></div>
        <div className="floating-dots"></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="workforce-wrapper">
        <div className="hero-section animate-on-load">
          <h1 className="hero-title">
            <span className="title-wrapper">
              <span className="title-normal">Workforce </span>
              <span className="title-gradient">Solutions</span>
            </span>
            <span className="highlight-text">Unleashing Potential, Constructing Futures: Your Preferred Talent Ally</span>
          </h1>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card animate-on-load">
              <div className="solution-icon">
                {solution.icon}
                <div className="icon-glow"></div>
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <div className="solution-hover-effect"></div>
            </div>
          ))}
        </div>

        <div ref={statsRef} className={`stats-section ${isStatsVisible ? 'animate-in' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">
              <ScrambleText finalText="500+" isVisible={isStatsVisible} />
            </div>
            <div className={`stat-label ${isStatsVisible ? 'visible' : ''}`}>Successful Placements</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <ScrambleText finalText="95%" isVisible={isStatsVisible} />
            </div>
            <div className={`stat-label ${isStatsVisible ? 'visible' : ''}`}>Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <ScrambleText finalText="50+" isVisible={isStatsVisible} />
            </div>
            <div className={`stat-label ${isStatsVisible ? 'visible' : ''}`}>Global Partners</div>
          </div>
        </div>
        <div className="gradient-animation">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
          <div className="gradient-blob blob-4"></div>
          <div className="gradient-blob blob-5"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceSolutions; 