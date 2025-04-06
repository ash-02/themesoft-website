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
                threshold: 0.2,
                rootMargin: '50px'
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        if (aboutRef.current && aboutRef.current.getBoundingClientRect().top < window.innerHeight) {
            setIsAboutVisible(true);
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
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-title">
                        Transforming Business
                        <br />
                        Through Digital Innovation
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
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className={`text-center mb-16 opacity-0 ${isAboutVisible ? 'animate-fade-in' : ''}`}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-violet-600 ${isAboutVisible ? 'animate-slide-up' : ''}`}>
                            Empowering Digital Evolution
                        </h2>
                        <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${isAboutVisible ? 'animate-fade-in delay-200' : ''}`}>
                            At ThemeSoft, we're more than just a technology company. We're your partner in digital transformation, combining innovative solutions with deep industry expertise to help businesses thrive in the digital age.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="about-content">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className={`feature-card bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
                                    <h3 className="text-xl font-semibold text-violet-500 mb-3">Our Mission</h3>
                                    <p className="text-gray-600">To deliver cutting-edge solutions that drive business growth and innovation.</p>
                                </div>
                                <div className={`feature-card bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
                                    <h3 className="text-xl font-semibold text-violet-500 mb-3">Our Vision</h3>
                                    <p className="text-gray-600">To be the leading force in digital transformation across industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats grid grid-cols-2 gap-6">
                            <div className={`stat-card bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
                                <span className="text-4xl font-bold text-violet-600 animate-count-up" data-target="10">20+</span>
                                <p className="text-gray-600 mt-2">Years Experience</p>
                            </div>
                            <div className={`stat-card bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
                                <span className="text-4xl font-bold text-violet-600 animate-count-up" data-target="200">200+</span>
                                <p className="text-gray-600 mt-2">Projects Delivered</p>
                            </div>
                            <div className={`stat-card bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-700' : 'opacity-0'}`}>
                                <span className="text-4xl font-bold text-violet-600 animate-count-up" data-target="50">50+</span>
                                <p className="text-gray-600 mt-2">Expert Team</p>
                            </div>
                            <div className={`stat-card bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isAboutVisible ? 'animate-slide-up delay-800' : 'opacity-0'}`}>
                                <span className="text-4xl font-bold text-violet-600 animate-count-up" data-target="98">98%</span>
                                <p className="text-gray-600 mt-2">Client Satisfaction</p>
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