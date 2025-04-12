import React, { useEffect, useRef } from 'react';
import './index.css';

const Industries = () => {
  const industries = [
    {
      title: 'Banking, Insurance and Financial Services',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10V17H20V10M4 10H20M4 10L12 3L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 21H17M7 17V21M17 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Transforming financial services with cutting-edge digital solutions.',
    },
    {
      title: 'Healthcare and Life Sciences',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Advancing healthcare through innovative technology and data analytics.',
    },
    {
      title: 'Manufacturing and Logistics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7H21M13 12H21M3 17H21M3 7.5L7 9.5L11 7.5M7 9.5V15M7 9.5L3 11.5L7 13.5L11 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Optimizing operations with smart manufacturing and supply chain solutions.',
    },
    {
      title: 'Retail & Consumer Goods',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Creating seamless omnichannel experiences for modern retail.',
    },
    {
      title: 'Telecom',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7519 11.1679C15.7432 12.1592 15.7432 13.7592 14.7519 14.7505C13.7606 15.7418 12.1606 15.7418 11.1693 14.7505M17.2929 8.62687C19.2929 10.6269 19.2929 13.8579 17.2929 15.8579C15.2929 17.8579 12.0619 17.8579 10.0619 15.8579M19.834 6.08579C22.7553 9.00711 22.7553 13.5777 19.834 16.499C16.9127 19.4203 12.3421 19.4203 9.42075 16.499M5 12H5.01M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Enabling digital transformation in telecommunications.',
    },
    {
      title: 'Startups',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Empowering startups with scalable technology solutions.',
    },
    {
      title: 'Technology',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4H6V20M6 16L18 16M14 20H18V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Driving innovation through emerging technologies.',
    },
    {
      title: 'Aviation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H19L13 18V12L16 9H22M22 12L16 9M22 12L16 15M11 9V18M11 12L8 9H2L8 15H2L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Revolutionizing aviation with smart digital solutions.',
    },
    {
      title: 'Energy & Utilities',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Modernizing energy infrastructure with sustainable solutions.',
    },
  ];

  const IndustryCard = ({ title, description, icon }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (window.innerWidth <= 768) {
              const rect = entry.target.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              const viewportCenter = viewportHeight / 2;
              const elementCenter = rect.top + (rect.height / 2);
              
              const isInCenter = Math.abs(elementCenter - viewportCenter) < 100;
              
              if (isInCenter) {
                entry.target.classList.add('in-view');
              } else {
                entry.target.classList.remove('in-view');
              }
            } else {
              entry.target.classList.remove('in-view');
            }
          } else {
            entry.target.classList.remove('in-view');
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '-5% 0px'
        }
      );

      const currentCard = cardRef.current;
      if (currentCard) {
        observer.observe(currentCard);
        
        let ticking = false;
        const handleScroll = () => {
          if (!ticking && window.innerWidth <= 768) {
            window.requestAnimationFrame(() => {
              const rect = currentCard.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              const viewportCenter = viewportHeight / 2;
              const elementCenter = rect.top + (rect.height / 2);
              const isInCenter = Math.abs(elementCenter - viewportCenter) < 100;
              
              if (isInCenter) {
                currentCard.classList.add('in-view');
              } else {
                currentCard.classList.remove('in-view');
              }
              ticking = false;
            });
            ticking = true;
          }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        const handleResize = () => {
          if (window.innerWidth > 768) {
            currentCard.classList.remove('in-view');
          } else {
            handleScroll();
          }
        };
        
        window.addEventListener('resize', handleResize, { passive: true });
        
        return () => {
          observer.unobserve(currentCard);
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

    return (
      <div ref={cardRef} className="industry-card">
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="industry-icon">
          {icon}
        </div>
        <h3 className="industry-title">{title}</h3>
        <p className="industry-description">{description}</p>
      </div>
    );
  };

  return (
    <div className="industries-container">
      <div className="digital-wave"></div>
      <div className="digital-lines"></div>
      <div className="digital-dots"></div>
      <div className="industries-wrapper">
        <div className="industries-intro">
          <h1 className="industries-title">Industries we are working with</h1>
          <p className="industries-description">
            At Themesoft, we deliver innovative digital solutions across diverse industries, 
            helping organizations navigate their digital transformation journey. Our deep industry 
            expertise combined with cutting-edge technology enables us to create tailored solutions 
            that drive growth, efficiency, and competitive advantage.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              title={industry.title} 
              description={industry.description} 
              icon={industry.icon} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries; 