import React, { useEffect, useRef, useState } from 'react';
import "./../assets/css/home.css";
const wordArray = ['elevate', 'design', 'impact', 'think'];
const wordColorMap = {
  elevate: 'bg-lightpink',
  think: 'bg-lightblue',
  design: 'bg-purplle',
  impact: 'bg-blue',
};

const Heroseaction = () => {
  const [currWord, setCurrWord] = useState(wordArray[0]);
  const index = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % wordArray.length;
      setCurrWord(wordArray[index.current]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

const currentColorClass = wordColorMap[currWord];
 
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
  return <>
  <div className="content-desktop-view">
   <div className='mainhero'>
        <div className='hero-sub-content'>
          <div style={{ display: 'flex', }} className='col-span-2 pl-28 pt-[20%]'>
            <div>
              <div className='text-7xl font-bold md:ml-9 sm:mt-40'>We</div>
              <div className='flex gap-2 items-center'>
                <div 
                  className={`w-6 h-6 rounded-full mt-7 ${currentColorClass}`}
                ></div>
                <div className='text-7xl font-bold'>{currWord}</div>
              </div>
              <p className='main-content mt-4 w-96'>
                From concept to execution, we craft experiences that captivate, communicate, and convert. Blending strategy, creativity, and innovation to build brands that leave a lasting impact.
              </p>
              <button onClick={scrollToContact} className="bg-transparent mt-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-md">
                Get Started
              </button>
            </div>
          </div>
          {/* <div className='md:col-span-3 sm:col-span-5'>
            <iframe 
              width="670" 
              height="415" 
              src="https://www.youtube.com/embed/9VsEAEX6C9Q?si=ZBXkMK7Cmpv-qCJz" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
  </div>

  <div className="content-mobile-view">
      <div className='mainhero-mobile '>
      <div className='hero-sub-content-mobile mt-20'>
      <div className='text-5xl font-bold ml-6 mt-16'>We</div>
              <div className='flex gap-2 items-center mt-1'>
                <div 
                  className={`w-4 h-4 rounded-full mt-6  ${currentColorClass}`}
                ></div>
                <div className='text-5xl font-bold'>{currWord}</div>
              </div>


            {/* <div className='mt-4'>
            <iframe 
              width="325" 
              height="200" 
              src="https://www.youtube.com/embed/9VsEAEX6C9Q?si=ZBXkMK7Cmpv-qCJz" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div> */}
          <p className='text-base text-gray-300 mt-6'>
                From concept to execution, we craft experiences that captivate, communicate, and convert. Blending strategy, creativity, and innovation to build brands that leave a lasting impact.
              </p>
              <button onClick={scrollToContact} className="bg-transparent mt-4 hover:bg-blue-500 text-white  hover:text-white py-2 px-7 border border-blue-500 hover:border-transparent rounded-md">
                Get Started
              </button>
      </div>
      </div>
  </div>
  </>
}

export default Heroseaction