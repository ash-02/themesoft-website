import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tsLogo from '../assets/ts_logo.png'
import './Navigation.css'

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExpertiseDropdown, setShowExpertiseDropdown] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const isLightNavbar = location.pathname === '/workforce-solutions' ||
                        location.pathname === '/industries' ||
                        location.pathname === '/about' ||
                        location.pathname === '/careers' ||
                        location.pathname === '/contact' ||
                        location.pathname === '/supplier-diversity';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    setShowExpertiseDropdown(false);
    document.body.style.overflow = '';
    if (path && path !== '#') {
      window.location.href = path;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleDropdownClick = (e) => {
    if (isMobileView) {
      e.preventDefault();
      setShowExpertiseDropdown(!showExpertiseDropdown);
    }
  };

  const expertiseLinks = [
    { title: 'Artificial Intelligence', path: '/expertise/artificial-intelligence' },
    { title: 'Cyber Security', path: '/expertise/cyber-security' },
    { title: 'Cloud and Data Services', path: '/expertise/cloud-and-data-services' },
    { title: 'Software Consulting', path: '/expertise/software-consulting' },
  ];

  const navLinks = [
    { 
      title: 'Expertise', 
      path: '/',
      hasDropdown: true,
      dropdownItems: expertiseLinks
    },
    { title: 'Workforce Solutions', path: '/workforce-solutions' },
    { title: 'Industries', path: '/industries' },
    { title: 'About', path: '/about' },
    { title: 'Careers', path: '#' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLightNavbar ? 'light-navbar' : ''}`}>
      <div className="navbar-content">
        <div className="logo-container">
          <Link to="/">
            <img src={tsLogo} alt="Themesoft Logo" className="nav-logo" />
          </Link>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className='nav-links'>
            {navLinks.map((link, index) => (
              <li key={index} className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}>
                {link.hasDropdown ? (
                  <div 
                    className={`dropdown-trigger ${showExpertiseDropdown ? 'active' : ''}`}
                    onMouseEnter={() => !isMobileView && setShowExpertiseDropdown(true)}
                    onMouseLeave={(e) => {
                      if (!isMobileView) {
                        const relatedTarget = e.relatedTarget;
                        if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
                          setShowExpertiseDropdown(false);
                        }
                      }
                    }}
                    onClick={handleDropdownClick}
                  >
                    <span className="nav-link">
                      {link.title}
                      {isMobileView && (
                        <span className={`dropdown-arrow ${showExpertiseDropdown ? 'active' : ''}`}>
                          ▼
                        </span>
                      )}
                    </span>
                    <ul className={`dropdown-menu ${showExpertiseDropdown ? 'show' : ''}`}
                        onMouseEnter={() => !isMobileView && setShowExpertiseDropdown(true)}
                        onMouseLeave={() => !isMobileView && setShowExpertiseDropdown(false)}
                    >
                      {link.dropdownItems.map((item, idx) => (
                        <li key={idx}>
                          <Link 
                            to={item.path} 
                            className="dropdown-item"
                            onClick={() => handleLinkClick(item.path)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className="nav-link"
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;