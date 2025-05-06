import React, { useState } from 'react'
import { call, facebook, insta, linkdin, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'

const Myfooter = () => {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = '+917980009725';
  const displayNumber = '+917980009725';
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    // First try standard mailto approach
    window.location.href = 'mailto:marketing@mindfull.co.in';
    
    // Fallback for mobile devices or special cases
    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marketing@mindfull.co.in', '_blank');
      }
    }, 100);
  };

  const handleWhatsAppClick = () => {
    // First try opening WhatsApp directly
    window.open('https://wa.me/7980009725', '_blank');
    
    // Fallback for devices that might block popups
    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = 'https://web.whatsapp.com/send?phone=7980009725';
      }
    }, 100);
  };
 
  const handlePhoneClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile - open dialer immediately
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop - copy to clipboard
      e.preventDefault();
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 100);
      }).catch(() => {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 200);
      });
    }
  };

  return (<>

    <div className="content-desktop-view">

  
    <footer style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
      <div className="pt-14 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8 col-span-2 pl-20">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className='flex gap-10'>
                <div>
                  <img src={mindfulllogo} alt="" />
                </div>
                <div className='mt-10'>
                  <div className="flex space-x-6 pt-3">
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.linkedin.com/company/mindfull-creative-studio/" target="_blank" rel="noreferrer">
                        <img src={linkdin} alt="" />
                      </a>
                    </div>
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.facebook.com/share/1AAnudm6Fw/" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="" />
                      </a>
                    </div> 
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.instagram.com/mindfull.co.in/" target="_blank" rel="noreferrer">
                        <img src={insta} alt="" />
                      </a>
                    </div> 
                    <div className='w-8 h-8 mt-1 cursor-pointer' onClick={handleEmailClick}>
                      <a href="mailto:marketing@mindfull.co.in" >
                        <img src={mail2} alt="" />
                      </a>
                    </div> 
                  </div>
                </div>
              </div>
              <p className="text-sm" style={{color:'D9D9D9'}}>
                Mindfull is a creative design agency specializing in branding, web design,  <br /> UI/UX,performance marketing
                and marketing visuals businesses stand out.
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-around">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    // href="#blog" 
                    // onClick={(e) => {
                      // e.preventDefault();
                      // scrollToSection('blog');
                    // }}
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a 
                  target="_blank" rel="noreferrer"
                                      href="https://forms.gle/qXoQAAMGpcKFcieB9" 
                    // href="#career" 
                    // onClick={(e) => {
                      // e.preventDefault();
                      // scrollToSection('career');
                    // }}
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a 
                    // href="#testimonials" 
                    // onClick={(e) => {
                      // e.preventDefault();
                      // scrollToSection('testimonials');
                    // }}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Column - Contact Form */}
          <div >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className='text-xl'>Business / Sales Enquiry</span>
            </div>
<div className='className=" w-[71%]"'>


            <div className="flex flex-col md:flex-col xl:flex-row gap-4 mt-4">
              <a
                href="#"  target="_blank" rel="noreferrer"    onClick={handleWhatsAppClick}
                className="py-2 px-8 rounded flex items-center justify-center space-x-2" 
                style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
                <span className='text-black'>Chat With Us</span>
              </a>
              <div className="relative">
        <a
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick} target="_blank" rel="noreferrer"
          className="py-2 px-8 rounded flex items-center justify-center space-x-2 bg-blue-100"
        >
          <img src={call} alt="Call" className="w-5 h-5" />
          <span className="text-black">{displayNumber}</span>
        </a>
        {showCopied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs w-36 p-2 rounded">
            Copied to clipboard!
          </div>
        )}
      </div>

            

            </div>

            <a onClick={handleEmailClick} 
              href="mailto:marketing@mindfull.co.in"
              className="py-2 px-2 mt-3 w-auto rounded flex items-center justify-center space-x-2" 
              style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
            >
              <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
              <span className='text-black'>marketing@mindfull.co.in</span>
            </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center items-center">
          <div>© 2025 Mindfull Creative Studios LLP</div>
          <div className="flex space-x-4">
            <a href="#">
              Privacy policy
            </a>
            <a href="#">
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
    <div className="content-mobile-view">
    <footer style={{backgroundColor:'rgba(38, 35, 130, 1)', padding:'20px 30px 10px 30px'}}>
                  <img src={mindfulllogo} width={75}  alt="" />
                  <p className="text-xs mt-3 text-gray-400" style={{color:'D9D9D9'}}>
                Mindfull is a creative design agency specializing in branding, web design, UI/UX,performance marketing
                and marketing visuals businesses stand out.
              </p>

              <div className="">
           
            <div className="flex  gap-2 mt-4" >
              <a
                href="#"       onClick={handleWhatsAppClick}
                className="py-2 px-5 rounded flex items-center justify-center space-x-2 w-1/2" 
                style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-4 h-4 flex items-center justify-center"><img src={wp} alt="" /></span>
                <span className='text-black text-xs'>Chat With Us</span>
              </a>
              <div className="relative w-1/2">
        <a
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick}
          className="py-2 px-5 rounded flex items-center justify-center space-x-2 bg-blue-100 "
        >
          <img src={call} alt="Call" className="w-4 h-4" />
          <span className="text-black text-xs">{displayNumber}</span>
        </a>
        {showCopied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs w-36 p-2 rounded">
            Copied to clipboard!
          </div>
        )}
      </div>    
            </div>

            <a onClick={handleEmailClick}
              href="mailto:marketing@mindfull.co.in"
              className="py-2 px-4 mt-2 rounded flex items-center justify-center space-x-2" 
              style={{backgroundColor:'rgba(212, 226, 255, 1)', width:'100%'}}
            >
              <span className="w-4 h-4 flex items-center justify-center"><img src={massage} alt="" /></span>
              <span className='text-black text-xs'>marketing@mindfull.co.in</span>
            </a>
          </div>

          <div className="space-y-3 ">
            {/* Logo and Description */}
            {/* <div className=""> */}
              <div className='flex gap-10'>
                <div className='mt-4'>
                  <div className='text-lg font-medium'>Social Network</div>
                  <div className="flex space-x-6 pt-3">
                    <div className='w-8 h-8 cursor-pointer' >
                      <a href="https://www.linkedin.com/company/mindfull-creative-studio/" target="_blank" rel="noreferrer">
                        <img src={linkdin} alt="" />
                      </a>
                    </div>
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.facebook.com/share/1AAnudm6Fw/" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="" />
                      </a>
                    </div> 
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.instagram.com/mindfull.co.in/" target="_blank" rel="noreferrer">
                        <img src={insta} alt="" />
                      </a>
                    </div> 
                    <div className='w-8 h-8 mt-1 cursor-pointer' onClick={handleEmailClick}>
                      <a href="mailto:marketing@mindfull.co.in">
                        <img src={mail2} alt="" />
                      </a>
                    </div> 
                  </div>
                </div>
              </div>

              <div className='text-lg font-medium'>Our Loation</div>
              <div className='text-xs text-gray-400'>Ganeesham-D, 1st Floor, Unit No. 1, Govind-Yashada Chowk. Pimple Saudagar, Pune 411027</div>

            {/* Navigation */}
            <nav >
              <ul className="flex flex-wrap justify-around mt-8">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                </li>
              
                <li>
                  <a 
                  target="_blank" rel="noreferrer"
                                      href="https://forms.gle/qXoQAAMGpcKFcieB9" 
                    // href="#career" 
                    // onClick={(e) => {
                      // e.preventDefault();
                      // scrollToSection('career');
                    // }}
                  >
                    Career
                  </a>
                </li>
              
              </ul>
            </nav>
          </div>
        <div className="mt-4 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center items-center">
        </div>
    </footer>
    </div>
      
  </>
  );
};

export default Myfooter;