import React, { useRef, useState } from 'react'
import { Heroseaction, Navigationbar, Ourservces, Webelieve } from '../components'
import "./../assets/css/home.css";
import { group } from '../assets/img/home'
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, } from '../assets/img/logos';

const Home = () => {
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
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for faster/slower scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  
const imagesicons = [
  {src:icon1},
  {src:icon2},
  {src:icon3},
  {src:icon4},
  {src:icon5},
  {src:icon6},
  {src:icon7},
  {src:icon8},
  {src:icon9},
  {src:icon10},
  {src:icon11},
  {src:icon12},
  {src:icon13},
  {src:icon14},
  {src:icon15},
  {src:icon16},
  {src:icon17},
  {src:icon18},
  {src:icon19},
  {src:icon20},
  {src:icon21},
  {src:icon22},
  {src:icon23},
  {src:icon24},
  {src:icon25},
]
  return <>
  <Navigationbar/>
  <Heroseaction/>
  <Webelieve/>
  <div className="relative overflow-x-auto cursor-pointer">
      <div
        ref={containerRef}
        className="mx-auto w-[99vw] h-[52vh] overflow-x-auto scrollbar select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}  >
        <div className="w-[300vw]">
          <img src={group} className="h-[50vh] w-[800vw] pointer-events-none" alt="" />
        </div>
      </div>
      </div>
      <Ourservces/>
      {/* icons */}
      <div className="ticker-container">
        <div className="ticker-content">
          {imagesicons.map((item, index) => (
          <div  className="ticker-item"> 
             <img
             src={item.src}
             alt={`gallery-${index}`} className='w-44'
             />
          </div>
          ))}
        </div>
      </div>

  </>
}

export default Home