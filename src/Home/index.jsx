import React, { useEffect, useState, useRef } from 'react'
import './index.css'
import ExpertiseSection from '../components/ExpertiseSection';

const Index = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const bannerRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAboutVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        const handleScroll = (e) => {
            if (e.target.hash === '#services') {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleScroll);
        };
    }, []);

    const getParticleRadius = (baseRadius, variation) => {
        if (windowWidth <= 768) {
            return (baseRadius * 0.6) + (Math.random() * variation * 0.6);
        } else if (windowWidth <= 1024) {
            return (baseRadius * 0.8) + (Math.random() * variation * 0.8);
        }
        return baseRadius + (Math.random() * variation);
    };

    const words = ["Innovation", "Excellence", "Technology", "Solutions"];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-main">
            <div ref={bannerRef} className="banner-main min-h-screen w-full">
                <div className="animated-background">
                    <div className="particle-container">
                        <div className="sprinkled-particles">
                            {[...Array(30)].map((_, i) => {
                                const startX = Math.random() * 100;
                                const startY = Math.random() * 100;
                                const floatX = (Math.random() - 0.5) * 200;
                                const floatY = (Math.random() - 0.5) * 200;
                                const endX = floatX + (Math.random() - 0.5) * 100;
                                const endY = floatY + (Math.random() - 0.5) * 100;
                                const duration = 10 + Math.random() * 15;
                                const delay = Math.random() * 10;
                                
                                return (
                                    <div
                                        key={`sprinkle-${i}`}
                                        className="sprinkled-particle"
                                        style={{
                                            left: `${startX}%`,
                                            top: `${startY}%`,
                                            '--float-x': `${floatX}px`,
                                            '--float-y': `${floatY}px`,
                                            '--float-end-x': `${endX}px`,
                                            '--float-end-y': `${endY}px`,
                                            '--float-duration': `${duration}s`,
                                            '--float-delay': `${delay}s`
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div className="rotating-layer">
                            {[...Array(60)].map((_, i) => {
                                const angle = (i * (360 / 60));
                                const radius = getParticleRadius(250, 50);
                                return (
                                    <div key={i} className="particle" style={{
                                        transform: `rotate(${angle}deg) translateX(${radius}px)`
                                    }}></div>
                                );
                            })}
                        </div>
                        <div className="rotating-layer rotating-layer-reverse">
                            {[...Array(60)].map((_, i) => {
                                const angle = (i * (360 / 60));
                                const radius = getParticleRadius(300, 50);
                                return (
                                    <div key={i} className="particle" style={{
                                        transform: `rotate(${angle}deg) translateX(${radius}px)`
                                    }}></div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={`banner-content ${isVisible ? 'fade-in' : ''}`}>
                    <h1 className="text-white text-3xl md:text-5xl flex flex-col items-center justify-center animate-title">
                        <span className="">Transforming Business</span>
                        <span className="text-blue-300 font-bold text-3xl md:text-5xl">Through Digital Innovation</span>
                    </h1>
                    <div className="word-animation-container">
                        <span className="text-2xl md:text-3xl text-blue-300">Delivering </span>
                        <span className="changing-text text-2xl md:text-3xl font-semibold text-blue-200">
                            {words[currentWord]}
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Partner with us to drive your digital transformation journey and unlock new possibilities for your business.
                    </p>
                    <div className="mt-10 flex gap-4 justify-center">
                        <a href="#services" className="primary-btn">
                            Get Started
                            <span className="btn-shine"></span>
                        </a>
                        <a href="#about" className="secondary-btn">
                            Learn More
                            <span className="btn-shine"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div ref={aboutRef} id="about" className={`about-section min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden ${isAboutVisible ? 'about-visible' : ''}`}>
                <div className="about-background">
                    <div className="about-particles">
                        {[...Array(100)].map((_, i) => (
                            <div key={i} className="about-particle" style={{
                                '--delay': `${Math.random() * 10}s`,
                                '--position': `${Math.random() * 100}%`,
                                '--size': `${Math.random() * 6 + 2}px`,
                                '--duration': `${Math.random() * 10 + 10}s`
                            }}></div>
                        ))}
                    </div>
                    <div className="about-gradient-orb orb-1"></div>
                    <div className="about-gradient-orb orb-2"></div>
                    <div className="about-gradient-orb orb-3"></div>
                    <div className="about-gradient-orb orb-4"></div>
                </div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10 rounded-3xl py-16">
                    <div className={`text-center mb-6 md:mb-16 opacity-0 ${isAboutVisible ? 'animate-fade-in' : ''}`}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isAboutVisible ? 'animate-text-reveal' : ''}`}>
                            <span>Empowering Digital Evolution</span>
                        </h2>
                        <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${isAboutVisible ? 'animate-text-reveal' : ''}`}>
                            At ThemeSoft, we're more than just a technology company. We're your partner in digital transformation, combining innovative solutions with deep industry expertise to help businesses
                        </p>
                    </div>
                    
                    <div className="main-grid-container w-full md:w-3/4">
                        <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-16 max-w-5xl mx-auto">
                            <div className={`feature-card p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0A1C3B] mb-2">Our Mission</h3>
                                        <p className="text-gray-600 text-lg">Deliver cutting-edge solutions that drive business growth and innovation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`feature-card p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0A1C3B] mb-2">Our Vision</h3>
                                        <p className="text-gray-600 text-lg">Lead the leading force in digital transformation across industries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 max-w-5xl mx-auto">
                            <div className={`stat-card bg-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 ${isAboutVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
                                <span className={`text-4xl font-bold ${isAboutVisible ? 'animate-text-reveal' : ''}`}>20+</span>
                                <p className={`text-gray-600 mt-2 ${isAboutVisible ? 'animate-text-reveal' : ''}`}>Years Experience</p>
                            </div>
                            <div className={`stat-card bg-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 ${isAboutVisible ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
                                <span className={`text-4xl font-bold ${isAboutVisible ? 'animate-text-reveal' : ''}`}>200+</span>
                                <p className={`text-gray-600 mt-2 ${isAboutVisible ? 'animate-text-reveal' : ''}`}>Projects Delivered</p>
                            </div>
                            <div className={`stat-card bg-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 ${isAboutVisible ? 'animate-slide-up delay-700' : 'opacity-0'}`}>
                                <span className={`text-4xl font-bold ${isAboutVisible ? 'animate-text-reveal' : ''}`}>50+</span>
                                <p className={`text-gray-600 mt-2 ${isAboutVisible ? 'animate-text-reveal' : ''}`}>Expert Team</p>
                            </div>
                            <div className={`stat-card bg-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 ${isAboutVisible ? 'animate-slide-up delay-800' : 'opacity-0'}`}>
                                <span className={`text-4xl font-bold ${isAboutVisible ? 'animate-text-reveal' : ''}`}>98%</span>
                                <p className={`text-gray-600 mt-2 ${isAboutVisible ? 'animate-text-reveal' : ''}`}>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expertise-section" id="services">
                <ExpertiseSection />
            </div>
        </div>
    )
}

export default Index