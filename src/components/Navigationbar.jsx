import React, { useEffect, useRef, useState } from 'react'
import "./../assets/css/navigationbar.css";
import { mindfull } from '../assets/img/logos';

const wordArray = ['uiux', 'branding', 'digital marketing'];

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currWord, setCurrWord] = useState(wordArray[0]);
    const index = useRef(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % wordArray.length;
            setCurrWord(wordArray[index.current]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleNavigation = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close mobile menu if open
        }
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <span className="logo-text">
                    <img src={mindfull} alt="Logo" width={50} />  
                    <span className="word-cycler">.  {currWord}</span>
                </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="navbar-links">
                <a 
                    href="#home" 
                    className="nav-link" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('home');
                    }}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('about');
                    }}
                >
                    About Us
                </a>
                <a 
                    href="#services" 
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('services');
                    }}
                >
                    Services
                </a>
                <a 
                    href="https://forms.gle/qXoQAAMGpcKFcieB9" 
                    className="nav-link"
                    // onClick={(e) => {
                    // e.preventDefault();
                    // handleNavigation('contact');
                    // }}
                >
                    Careers
                </a>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('contact');
                    }}
                >
                    <span className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2  px-6 border border-blue-500 hover:border-transparent rounded-md inline-block">
                        Contact Us
                    </span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="navbar-mobile-menu">
                <button 
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-nav-links">
                    <a 
                        href="#home" 
                        className="mobile-nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('home');
                        }}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className="mobile-nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('about');
                        }}
                    >
                        About Us
                    </a>
                    <a 
                        href="#services" 
                        className="mobile-nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('services');
                        }}
                    >
                        Services
                    </a>
                    <a 
                        href="#contact" 
                        className="mobile-nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('contact');
                        }}
                    >
                        Careers
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigationbar;