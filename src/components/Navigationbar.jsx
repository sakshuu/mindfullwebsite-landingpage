import React, { useEffect, useRef, useState } from 'react'
import "./../assets/css/navigationbar.css";
import { mindfull } from '../assets/img/logos';
const wordArray = ['uiux', 'branding', 'digital marketing'];

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const [currWord, setCurrWord] = useState(wordArray[0]);
    const index = useRef(0);
      useEffect(() => {
          const interval = setInterval(() => {
        index.current = (index.current + 1) % wordArray.length;
        setCurrWord(wordArray[index.current]);
  
              }, 1000);
          return () => clearInterval(interval);
    }, []);
  return <>
   <nav className="navbar-container">
      <div className="navbar-logo">
        <span className="logo-text">
          <img src={mindfull} alt="Logo" width={50} />  <span className="word-cycler">.  {currWord}</span>
        </span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="navbar-links ">
        <a 
          href="/"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`} >  Home </a>
        <a 
          href="/about" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          About Us
        </a>
        <a 
          href="/services" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Services
        </a>
        <a 
          href="/contactu" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Careers
        </a>
        <a
         href="/contactus">
        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 -mt-9 px-6 border border-blue-500 hover:border-transparent rounded-md">
  Get Started
</button>
</a>
      </div>
      <div className="navbar-mobile-menu">
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
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
          <a href="/"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Home</a>
          <a href="/about"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>About Us</a>
          <a href="/services"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Services</a>
          <a href="/contactu"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Careers</a>
        </div>
      )}
    </nav>
  </>
}

export default Navigationbar