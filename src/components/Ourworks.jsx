import React, { useRef, useState } from 'react'
// import { group } from '../assets/img/home';
import "./../assets/css/about.css"
import { group } from '../assets/img/home';

const Ourworks = () => {
    const containerRef = useRef(null);
     const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [scrollLeft, setScrollLeft] = useState(0);
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
      };
      
      const handleMouseLeave = () => {
        if (isDragging) {
          setIsDragging(false);
          containerRef.current.style.cursor = 'grab';
        }
      };
      
      const handleMouseUp = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
      };
      
      const handleMouseMove = (e) => {
        if (!isDragging) return;

        e.preventDefault(); //
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust multiplier for faster/slower scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
      };
  
  return <>
  <div className="content-desktop-view">

  {/* </div> */}

   <div className='text-lg md:text-xl text-gray-500 mb-1 px-6 md:px-14 lg:px-28'>We Work</div>

  <div className="relative overflow-x-auto cursor-pointer">
    <div
      ref={containerRef}
      className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: 'grab' }}
    >
      <div className="w-[320vw]">
        <img src={group} className="h-[38vh] sm:h-[50vh] w-[390vw] pointer-events-none object-cover" alt="" />
      </div>
    </div>
  </div> 
  </div> 

  <div className="content-mobile-view">
    
    {/* </div> */}
   <div className='text-lg md:text-xl text-gray-500 mb-2 md:px-14 lg:px-28'>Our Work</div>
  
  <div className="relative overflow-x-auto cursor-pointer">
      <div
        ref={containerRef}
        className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}
      >
        <div className="w-[1200vw]">
          <img src={group} className="h-[38vh] sm:h-[50vh] w-[1200vw] pointer-events-none object-cover" alt="" />
        </div>
      </div>
    </div> 
    </div> 
    
  </>
}

export default Ourworks