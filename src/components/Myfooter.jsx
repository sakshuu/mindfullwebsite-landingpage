// import React from 'react'
// import { call, facebook, insta, linkdin, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'

// const Myfooter = () => {
//   return <>
//    <footer className="" style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
//       <div className="pt-14 p-10">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Column */}
//           <div className="space-y-8  col-span-2 pl-20">
//             {/* Logo and Description */}
//             <div className="space-y-4 ">
//               <div className='flex gap-10'>

//               {/* </div> */}
//               <div>
//               <img src={mindfulllogo} alt="" />
//               </div>
//               <div className='mt-10'>
//               <div className="flex space-x-6 pt-3">
//               <div className='w-8 h-8 cursor-pointer'>
//                 <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
//               <img src={linkdin} alt="" />
//                 </a>
//               </div>
//              <div className='w-8 h-8 cursor-pointer'>
              
//               <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
//               <img src={facebook} alt="" /></a>
//               </div> 
//              <div className='w-8 h-8 cursor-pointer'>
              
//               <a href="https://www.instagram.com/mindfull.co.in/">
//               <img src={insta} alt="" />

//               </a>
//               </div> 
//              <div className='w-8 h-8 mt-1 cursor-pointer'>
              
//               <a href="">
//               <img src={mail2} alt="" />

//               </a>
//               </div> 
//             </div>
//               </div>
//               </div>
//               <p className="text-sm" style={{color:'D9D9D9'}}>
//                 Mindfull is a creative design agency specializing in branding, web design,  <br /> UI/UX,performance marketing
//                 and marketing visuals businesses stand out.
//               </p>
//             </div>

//             {/* Navigation */}
//             <nav>
//               <ul className="flex flex-wrap justify-around ">
//                 <li>
//                   <a href="/" >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/about" >
//                     About us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/services" >
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" >
//                     Blogs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" >
//                     Career
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" >
//                     Testimonials
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="">
//               <div className="flex items-center space-x-2 ">
//                 <div className="w-4 h-4 rounded-full bg-white"></div>
//                 <span className='text-xl'>Business / Sales Enquiry</span>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                 <a
//                   href="#"
//                   className="  py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
//                 >
//                   <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
//                   <span className='text-black'>Chat With Us</span>
//                 </a>
//                 <a
//                   href="tel:7980009725"
//                   className=" py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
//                 >
//                   <span className="w-5 h-5 flex items-center justify-center"><img src={call} alt="" /></span>
//                   <span className='text-black'>7980009725</span>
//                 </a>
//               </div>

//               <a
//                 href="mailto:marketing@mindfull.co.in"
//                 className=" py-2 px-8 mt-3 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)' , width:'330px'}}
//               >
//                 <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
//                 <span className='text-black'>marketing@mindfull.co.in</span>
//               </a>
//             </div>

//         </div>

//         {/* Copyright */}
//         <div className="mt-4 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center items-center ">
//           <div>© 2025 Mindfull Creative Studios LLP</div>
//           <div className="flex space-x-4">
//             <a href="#" >
//               Privacy policy
//             </a>
//             <a href="#" >
//               Terms of use
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   </>
// }

// export default Myfooter

import React, { useState } from 'react'
import { call, facebook, insta, linkdin, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'

const Myfooter = () => {
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
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = '+917980009725';
  const displayNumber = '7980009725';

  const handleClick = (e) => {
    // On mobile devices
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop - copy to clipboard
      e.preventDefault();
      navigator.clipboard.writeText(phoneNumber);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };




  return (
    <footer className="" style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
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
                      <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
                        <img src={linkdin} alt="" />
                      </a>
                    </div>
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
                        <img src={facebook} alt="" />
                      </a>
                    </div> 
                    <div className='w-8 h-8 cursor-pointer'>
                      <a href="https://www.instagram.com/mindfull.co.in/">
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
          <div className="">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className='text-xl'>Business / Sales Enquiry</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#"       onClick={handleWhatsAppClick}

                className="py-2 px-8 rounded flex items-center justify-center space-x-2" 
                style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
                <span className='text-black'>Chat With Us</span>
              </a>
              <a href={`tel:${phoneNumber}`}
        onClick={handleClick}
                className="py-2 px-8 rounded flex items-center justify-center space-x-2" 
                style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex items-center justify-center"><img src={call} alt="" /></span>
                <span className='text-black'>7980009725</span>
              </a>
              {showCopied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          Copied to clipboard!
        </div>
      )}

            </div>

            <a onClick={handleEmailClick}
              href="mailto:marketing@mindfull.co.in"
              className="py-2 px-8 mt-3 rounded flex items-center justify-center space-x-2" 
              style={{backgroundColor:'rgba(212, 226, 255, 1)', width:'330px'}}
            >
              <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
              <span className='text-black'>marketing@mindfull.co.in</span>
            </a>
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
  );
};

export default Myfooter;