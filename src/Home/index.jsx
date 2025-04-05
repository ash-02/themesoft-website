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

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
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
            {/* <div id="services" className="services-section min-h-screen w-full relative overflow-hidden">
                <div className="animated-gradient-bg absolute inset-0 z-0"></div>
                <div className="services-background absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 max-w-6xl relative z-20 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                            Our Expertise
                        </h2>
                        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                            Discover how our comprehensive range of services can transform your business
                        </p>
                    </div>

                    <div className="services-wheel relative">
                        <div className="services-list space-y-6">
                            <div className="service-item group" data-service="ai">
                                <div className="flex items-start space-x-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:bg-white">
                                    <div className="service-icon flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-0.5">
                                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-500">
                                                <svg className="w-10 h-10 text-violet-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-content flex-grow">
                                        <h3 className="text-2xl font-bold text-violet-600 mb-3 group-hover:text-violet-700">
                                            Artificial Intelligence
                                            <div className="h-1 w-0 group-hover:w-full bg-violet-500 mt-1 transition-all duration-500"></div>
                                        </h3>
                                        <p className="text-gray-600">
                                            Is your business built on work that is repetitive and somehow quality assessment doesn't follow a predictable trend? Automation and Focused AI will save you money and precious time.
                                        </p>
                                        <button className="mt-4 px-6 py-2 bg-transparent text-violet-600 border-2 border-violet-600 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="service-item group" data-service="security">
                                <div className="flex items-start space-x-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:bg-white">
                                    <div className="service-icon flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-0.5">
                                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-500">
                                                <svg className="w-10 h-10 text-violet-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-content flex-grow">
                                        <h3 className="text-2xl font-bold text-violet-600 mb-3 group-hover:text-violet-700">
                                            Cyber Security
                                            <div className="h-1 w-0 group-hover:w-full bg-violet-500 mt-1 transition-all duration-500"></div>
                                        </h3>
                                        <p className="text-gray-600">
                                            Make your product's security as bulletproof as the amazing project you're working on. Prevention beats cure time after time and we understand the responsibility our clients place in our hands.
                                        </p>
                                        <button className="mt-4 px-6 py-2 bg-transparent text-violet-600 border-2 border-violet-600 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="service-item group" data-service="cloud">
                                <div className="flex items-start space-x-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:bg-white">
                                    <div className="service-icon flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-0.5">
                                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-500">
                                                <svg className="w-10 h-10 text-violet-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-content flex-grow">
                                        <h3 className="text-2xl font-bold text-violet-600 mb-3 group-hover:text-violet-700">
                                            Cloud And Data Services
                                            <div className="h-1 w-0 group-hover:w-full bg-violet-500 mt-1 transition-all duration-500"></div>
                                        </h3>
                                        <p className="text-gray-600">
                                            Access your entire infrastructure comfortably through your own personal computer. Lightweight and reliable migration from us can help you advance your present cloud database or introduce you to some of it's advantages.
                                        </p>
                                        <button className="mt-4 px-6 py-2 bg-transparent text-violet-600 border-2 border-violet-600 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="service-item group" data-service="consulting">
                                <div className="flex items-start space-x-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:bg-white">
                                    <div className="service-icon flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-0.5">
                                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-500">
                                                <svg className="w-10 h-10 text-violet-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-content flex-grow">
                                        <h3 className="text-2xl font-bold text-violet-600 mb-3 group-hover:text-violet-700">
                                            Software Consulting
                                            <div className="h-1 w-0 group-hover:w-full bg-violet-500 mt-1 transition-all duration-500"></div>
                                        </h3>
                                        <p className="text-gray-600">
                                            Have a dream of revolutionizing the future? A truly disruptive idea that could change life as we know it? Work with a team of dedicated professionals that can meet those expectations.
                                        </p>
                                        <button className="mt-4 px-6 py-2 bg-transparent text-violet-600 border-2 border-violet-600 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .services-wheel {
                        perspective: 1000px;
                    }
                    .service-item {
                        transform: translateZ(0);
                        transition: transform 0.5s ease;
                    }
                    .service-item:hover {
                        transform: translateZ(20px);
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    .service-icon {
                        animation: float 6s ease-in-out infinite;
                    }
                    .animated-gradient-bg {
                        background: linear-gradient(180deg, 
                            rgba(76, 29, 149, 0.95) 0%,
                            rgba(91, 33, 182, 0.9) 20%,
                            rgba(124, 58, 237, 0.85) 40%,
                            rgba(139, 92, 246, 0.8) 60%,
                            rgba(167, 139, 250, 0.75) 80%,
                            rgba(196, 181, 253, 0.7) 100%);
                        background-size: 200% 200%;
                        animation: gradientFlow 15s ease infinite;
                    }
                    @keyframes gradientFlow {
                        0% {
                            background-position: 50% 0%;
                        }
                        50% {
                            background-position: 50% 100%;
                        }
                        100% {
                            background-position: 50% 0%;
                        }
                    }
                `}</style>
            </div> */}
            <ExpertiseSection />
        </div>
    )
}

export default Index