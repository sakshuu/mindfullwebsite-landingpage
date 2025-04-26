import React, { useEffect, useRef, useState } from 'react'
import "./../assets/css/about.css"
import { mission, values, vision, whymindfullimg } from '../assets/img/about';
import { group } from '../assets/img/home';

const Webelieve = () => {

   const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  // pointer loop started js
  const points = [
    "Branding",
    "UX/UI",
    "Visual Content Creation",
    "Digital Marketing",
    "Marketing & Advertising",
    "Others"
  ];
  
  const [activeCard, setActiveCard] = useState(null);
  const weBelieve = [
    {
      id: '1',
      number: '150+',
      title: 'Happy Customers',
      shadowColor: '#A84A94', 
      numberColor: '#A84A94' 
    },
    {
      id: '2',
      number: '12+',
      title: 'Years of Experience',
      shadowColor: '#1E51B1', 
      numberColor: '#1E51B1'  
    },
    {
      id: '3',
      number: '200+',
      title: 'Project Completed',
      shadowColor: '#11526B', 
      numberColor: '#11526B'  
    },
    {
      id: '4',
      number: '30+',
      title: 'Team Members',
      shadowColor: '#3E1893', 
      numberColor: '#3E1893'  
    },
  ];
  const aboutImag = [
    {
        src:  mission,
        title:  'Mission',
        desc:'To build brand experiences that are thoughtful, bold, and truly impactful.'
    },
    {
        src:  values,
        title:  'Values',
        desc:'To lead a mindful revolution in branding, design, and digital storytelling.'
    },
    {
        src:  vision,
        title:  'Vision',
        desc:'We don’t settle. We experiment, evolve, and explore new possibilities.'
    },
  ]
  const [visiblePoints, setVisiblePoints] = useState(0);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisiblePoints(prev => {
        if (prev >= points.length - 1) {
          // Reset for next cycle
          setTimeout(() => setVisiblePoints(0), 500); // Small delay before restart
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [animationCycle]); // Add animationCycle to dependencies

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

  return <>
    <div className='grid grid-cols-3 gap-4 content-center place-content-center p-20'>
<div className='col-span-2 px-4 md:px-8 lg:px-12'>
      <div className='text-xl text-gray-500 mb-1'>We Believe</div>
      <div className='text-lg text-gray-300 mb-10 max-w-2xl'>
        Our services have a proven track <br /> record of boosting businesses
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
        {weBelieve.map((card) => (
          <div 
            key={card.id}
            className="group bg-[#111111] rounded-2xl p-14 transition-all duration-300 relative overflow-hidden"
          >
            {/* Inner shadow effect on hover */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
                        group-hover:opacity-50 transition-opacity duration-300"
              style={{
                boxShadow: `inset 0 0 25px ${card.shadowColor}`
              }}
            />
            
            <div className='flex flex-col items-center justify-center h-full relative z-10'>
              {/* Dynamic number color */}
              <div 
                className='text-5xl md:text-6xl font-bold transition-colors mb-5 duration-300'
                style={{ color: card.numberColor }}
              >
                {card.number}
              </div>
              <div className='text-xl text-white text-center'>
                {card.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  

  <div className="timeline-container col-span-1 mt-28" >
      {points.map((point, index) => (
        <div 
          key={`${animationCycle}-${index}`} // Unique key for each animation cycle
          className={`timeline-item ${index <= visiblePoints ? 'visible' : ''}`}
        >
          <div className="timeline-dot"></div>
          {index < points.length - 1 && (
            <div className={`timeline-connector ${index < visiblePoints ? 'visible' : ''}`}></div>
          )}
          <div className="timeline-content">{point}</div>
        </div>
      ))}
    </div>
    </div>
<div  >

<div className='text-xl text-gray-500 mb-1 px-28'>We Work</div>

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

    <div className='flex justify-between mb-4 relative p-20 '>
    {aboutImag.map((item, index) => (
        <div >
        <img src={item.src} alt="" style={{height:'95vh'}} />
            <div className='absolute bottom-48' style={{width:'13%', marginLeft:'69px'}}> 
            <div className='text-center mb-6 text-xl'>{item.title}</div>
        <div className='text-center text-sm text-gray-300'>{item.desc}</div>
            </div>
        </div>
        // </div>
    ))}
    </div>
    </div>
  </>
}

export default Webelieve