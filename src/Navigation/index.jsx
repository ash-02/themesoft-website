import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tsLogo from '../assets/ts_logo.png'
import './Navigation.css'

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLightNavbar = location.pathname === '/workforce-solutions' || location.pathname === '/industries';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const navLinks = [
    { title: 'Expertise', path: '/' },
    { title: 'Workforce Solutions', path: '/workforce-solutions' },
    { title: 'Industries', path: '/industries' },
    { title: 'Supplier Diversity', path: '/supplier-diversity' },
    { title: 'About', path: '/about' },
    { title: 'Careers', path: '/careers' },
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
              <li key={index} className="nav-item">
                <Link 
                  to={link.path} 
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;