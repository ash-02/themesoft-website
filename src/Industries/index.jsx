import React, { useEffect, useRef } from 'react';
import './index.css';
import bankIcon from '../assets/IndustriesIcons/bank.png';
import hospitalIcon from '../assets/IndustriesIcons/hospital.png';
import deliveryBoxIcon from '../assets/IndustriesIcons/delivery-box.png';
import marketExpansionIcon from '../assets/IndustriesIcons/market-expansion.png';
import telecommunicationIcon from '../assets/IndustriesIcons/telecommunication.png';
import startupIcon from '../assets/IndustriesIcons/start-up.png';
import dataManagementIcon from '../assets/IndustriesIcons/data-management.png';
import flightIcon from '../assets/IndustriesIcons/flight.png';
import lightingIcon from '../assets/IndustriesIcons/lighting.png';

const Industries = () => {
  const industries = [
    {
      title: 'Banking, Insurance and Financial Services',
      icon: <img src={bankIcon} alt="Banking" className="industry-icon-img" />,
      description: 'Transforming financial services with cutting-edge digital solutions.',
    },
    {
      title: 'Healthcare and Life Sciences',
      icon: <img src={hospitalIcon} alt="Healthcare" className="industry-icon-img" />,
      description: 'Advancing healthcare through innovative technology and data analytics.',
    },
    {
      title: 'Manufacturing and Logistics',
      icon: <img src={deliveryBoxIcon} alt="Manufacturing" className="industry-icon-img" />,
      description: 'Optimizing operations with smart manufacturing and supply chain solutions.',
    },
    {
      title: 'Retail & Consumer Goods',
      icon: <img src={marketExpansionIcon} alt="Retail" className="industry-icon-img" />,
      description: 'Creating seamless omnichannel experiences for modern retail.',
    },
    {
      title: 'Telecom',
      icon: <img src={telecommunicationIcon} alt="Telecom" className="industry-icon-img" />,
      description: 'Enabling digital transformation in telecommunications.',
    },
    {
      title: 'Startups',
      icon: <img src={startupIcon} alt="Startups" className="industry-icon-img" />,
      description: 'Empowering startups with scalable technology solutions.',
    },
    {
      title: 'Technology',
      icon: <img src={dataManagementIcon} alt="Technology" className="industry-icon-img" />,
      description: 'Driving innovation through emerging technologies.',
    },
    {
      title: 'Aviation',
      icon: <img src={flightIcon} alt="Aviation" className="industry-icon-img" />,
      description: 'Revolutionizing aviation with smart digital solutions.',
    },
    {
      title: 'Energy & Utilities',
      icon: <img src={lightingIcon} alt="Energy" className="industry-icon-img" />,
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