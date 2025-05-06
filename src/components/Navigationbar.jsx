// import React, { useEffect, useRef, useState } from 'react'
// import "./../assets/css/navigationbar.css";
// import { mindfull } from '../assets/img/logos';

// const wordArray = ['uiux', 'branding', 'digital marketing'];

// const Navigationbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [currWord, setCurrWord] = useState(wordArray[0]);
//     const index = useRef(0);

    
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             index.current = (index.current + 1) % wordArray.length;
//             setCurrWord(wordArray[index.current]);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleNavigation = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//             setIsMenuOpen(false); // Close mobile menu if open
//         }
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="navbar-logo">
//                 <span className="logo-text" style={{cursor:'pointer'}}>
//                     <a   href="#home" 
//                     className="nav-link" >
//                     <img src={mindfull} alt="Logo" width={50} />  
//                     </a>
//                     <span className="word-cycler">.  {currWord}</span>
//                 </span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="navbar-links">
//                 <a 
//                     href="#home" 
//                     className="nav-link" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleNavigation('home');
//                     }}
//                 >
//                     Home
//                 </a>
//                 <a 
//                     href="#about" 
//                     className="nav-link"
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleNavigation('about');
//                     }}
//                 >
//                     About Us
//                 </a>
//                 <a 
//                     href="#services" 
//                     className="nav-link"
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleNavigation('services');
//                     }}
//                 >
//                     Services
//                 </a>
//                 <a 
//                 target="_blank" rel="noreferrer"
//                     href="https://forms.gle/qXoQAAMGpcKFcieB9" 
//                     className="nav-link"
//                     // onClick={(e) => {
//                     // e.preventDefault();
//                     // handleNavigation('contact');
//                     // }}
//                 >
//                     Careers
//                 </a>
//                 <a
//                     href="#contact"
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleNavigation('contact');
//                     }}
//                 >
//                     <span className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2  px-6 border border-blue-500 hover:border-transparent rounded-md inline-block">
//                         Contact Us
//                     </span>
//                 </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="navbar-mobile-menu">
//                 <button 
//                     className="mobile-menu-btn"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                     </svg>
//                 </button>
//             </div>
            
//             {/* Mobile Navigation */}
//             {isMenuOpen && (
//                 <div className="mobile-nav-links">
//                     <a 
//                         href="#home" 
//                         className="mobile-nav-link"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             handleNavigation('home');
//                         }}
//                     >
//                         Home
//                     </a>
//                     <a 
//                         href="#about" 
//                         className="mobile-nav-link"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             handleNavigation('about');
//                         }}
//                     >
//                         About Us
//                     </a>
//                     <a 
//                         href="#services" 
//                         className="mobile-nav-link"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             handleNavigation('services');
//                         }}
//                     >
//                         Services
//                     </a>
//                     <a target="_blank" rel="noreferrer"
//                         href="https://forms.gle/qXoQAAMGpcKFcieB9" 
//                         className="mobile-nav-link"
                    
//                     >
//                     Career  </a>
//                     <a 
//                         href="#contact" 
//                         className="mobile-nav-link"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             handleNavigation('contact');
//                         }}> Contact Us  </a>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navigationbar;


import React, { useState, useRef, useEffect } from 'react';
import "./../assets/css/navigationbar.css";
import { mindfull } from '../assets/img/logos';

const wordArray = ['uiux', 'branding', 'digital marketing'];

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currWord, setCurrWord] = useState(wordArray[0]);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isMouseNearTop, setIsMouseNearTop] = useState(false);
    const index = useRef(0);
    const lastScrollY = useRef(0);
    const timeoutId = useRef(null);
    const [isInHomeSection, setIsInHomeSection] = useState(true);

    // Add this useEffect for home section detection
    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (!homeSection) return;

            const homeRect = homeSection.getBoundingClientRect();
            const isInHome = window.scrollY < homeRect.height;
            setIsInHomeSection(isInHome);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Modify the existing scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (isInHomeSection) {
                setIsNavbarVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            if (currentScrollY === 0) {
                setIsNavbarVisible(true);
                return;
            }

            if (currentScrollY > lastScrollY.current) {
                if (!isMouseNearTop) setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMouseNearTop, isInHomeSection]); // Add isInHomeSection to dependencies




    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const y = e.clientY;
            if (y < 100) { // Adjust this value based on desired top area height
                setIsMouseNearTop(true);
                setIsNavbarVisible(true);
                if (timeoutId.current) {
                    clearTimeout(timeoutId.current);
                    timeoutId.current = null;
                }
            } else {
                setIsMouseNearTop(false);
                if (!timeoutId.current) {
                    timeoutId.current = setTimeout(() => {
                        setIsNavbarVisible(false);
                        timeoutId.current = null;
                    }, 1000); // Adjust delay before hiding after leaving top area
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    const handleNavigation = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar-container ${!isNavbarVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-logo">
                    <a href="#home" className="nav-link logo-text" style={{ cursor: 'pointer' }}>
                        <img src={mindfull} alt="Logo" width={50} />
                    <div className="word-cycler">.  {currWord}</div>
                    </a>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-links">
                <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
                    Home
                </a>
                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>
                    About Us
                </a>
                <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('services'); }}>
                    Services
                </a>
                <a target="_blank" rel="noreferrer" href="https://forms.gle/qXoQAAMGpcKFcieB9" className="nav-link">
                    Careers
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>
                    <span className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-md inline-block">
                        Contact Us
                    </span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="navbar-mobile-menu">
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
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
                    <a target="_blank" rel="noreferrer"
                        href="https://forms.gle/qXoQAAMGpcKFcieB9" 
                        className="mobile-nav-link"
                    
                    >
                    Career  </a>
                    <a 
                        href="#contact" 
                        className="mobile-nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('contact');
                        }}> Contact Us  </a>
                    {/* Mobile links remain unchanged */}
                </div>
            )}
        </nav>
    );
};

export default Navigationbar;