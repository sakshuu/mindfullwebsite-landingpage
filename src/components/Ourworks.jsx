// import React, { useRef, useState } from 'react'
// // import { group } from '../assets/img/home';
// import "./../assets/css/about.css"
// import { group } from '../assets/img/home';

// const Ourworks = () => {
//     const containerRef = useRef(null);
//      const [isDragging, setIsDragging] = useState(false);
//         const [startX, setStartX] = useState(0);
//         const [scrollLeft, setScrollLeft] = useState(0);
//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setStartX(e.pageX - containerRef.current.offsetLeft);
//         setScrollLeft(containerRef.current.scrollLeft);
//         containerRef.current.style.cursor = 'grabbing';
//       };
      
//       const handleMouseLeave = () => {
//         if (isDragging) {
//           setIsDragging(false);
//           containerRef.current.style.cursor = 'grab';
//         }
//       };
      
//       const handleMouseUp = () => {
//         setIsDragging(false);
//         containerRef.current.style.cursor = 'grab';
//       };
      
//       const handleMouseMove = (e) => {
//         if (!isDragging) return;

//         e.preventDefault(); //
//         const x = e.pageX - containerRef.current.offsetLeft;
//         const walk = (x - startX) * 2; // Adjust multiplier for faster/slower scrolling
//         containerRef.current.scrollLeft = scrollLeft - walk;
//       };
  
//   return <>
//   <div className="content-desktop-view">

//   {/* </div> */}

//    <div className='text-lg md:text-xl text-gray-500 mb-1 px-6 md:px-14 lg:px-28'>We Work</div>

//   <div className="relative overflow-x-auto cursor-pointer">
//     <div
//       ref={containerRef}
//       className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
//       onMouseDown={handleMouseDown}
//       onMouseLeave={handleMouseLeave}
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//       style={{ cursor: 'grab' }}
//     >
//       <div className="w-[320vw]">
//         <img src={group} className="h-[38vh] sm:h-[50vh] w-[390vw] pointer-events-none object-cover" alt="" />
//       </div>
//     </div>
//   </div> 
//   </div> 

//   <div className="content-mobile-view">
    
//     {/* </div> */}
//    <div className='text-lg md:text-xl text-gray-500 mb-2 md:px-14 lg:px-28'>Our Work</div>
  
//   <div className="relative overflow-x-auto cursor-pointer">
//       <div
//         ref={containerRef}
//         className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
//         onMouseDown={handleMouseDown}
//         onMouseLeave={handleMouseLeave}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseMove}
//         style={{ cursor: 'grab' }}
//       >
//         <div className="w-[1200vw]">
//           <img src={group} className="h-[38vh] sm:h-[50vh] w-[1200vw] pointer-events-none object-cover" alt="" />
//         </div>
//       </div>
//     </div> 
//     </div> 
    
//   </>
// }

// export default Ourworks


import React, { useRef, useState } from 'react'
import "./../assets/css/about.css"
import { group } from '../assets/img/home';

const Ourworks = () => {
    const desktopContainerRef = useRef(null);
    const mobileContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Common handler for both desktop and mobile
    const handleDragStart = (e, ref) => {
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        // setStartX(clientX - ref.current.offsetLeft);
        setStartX(clientX - desktopContainerRef.current.offsetLeft);
        // setScrollLeft(ref.current.scrollLeft);
        setScrollLeft(desktopContainerRef.current.scrollLeft);
        // ref.current.style.cursor = 'grabbing';
        desktopContainerRef.current.style.cursor = 'grabbing';
    };

    const handleDragMove = (e, ref) => {
        if (!isDragging) return;
        
        // const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        // const x = clientX - ref.current.offsetLeft;
        // const walk = (x - startX) * 3; 

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - desktopContainerRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        // Increased multiplier for better scroll
        // ref.current.scrollLeft = scrollLeft - walk;
        desktopContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = (ref) => {
        setIsDragging(false);
        // ref.current.style.cursor = 'grab';
        desktopContainerRef.current.style.cursor = 'grab';
    };

    return (
        <>
            {/* Desktop View */}
            {/* <div className="content-desktop-view">
                <div className='text-lg md:text-xl text-gray-500 mb-3 px-6 md:px-14 lg:px-28'>Our Work</div>
                <div className="relative">
                    <div
                        ref={desktopContainerRef}
                        className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
                        onMouseDown={(e) => handleDragStart(e, desktopContainerRef)}
                        onMouseLeave={() => handleDragEnd(desktopContainerRef)}
                        onMouseUp={() => handleDragEnd(desktopContainerRef)}
                        onMouseMove={(e) => handleDragMove(e, desktopContainerRef)}
                        style={{ cursor: 'grab' }}
                    >
                        <div className="w-[320vw]">
                            <img src={group} className="h-[38vh] sm:h-[50vh] w-[390vw] pointer-events-none object-cover" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

<div className="content-desktop-view">
            <div className='text-lg md:text-xl text-gray-500 mb-3 px-6 md:px-14 lg:px-28'>Our Work</div>
            <div className="relative w-full">
                <div
                    ref={desktopContainerRef}
                    className="w-full h-[40vh] sm:h-[50vh] md:h-[45vh] lg:h-[55vh] overflow-x-auto scrollbar select-none"
                    onMouseDown={handleDragStart}
                    onMouseLeave={handleDragEnd}
                    onMouseUp={handleDragEnd}
                    onMouseMove={handleDragMove}
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                    onTouchMove={handleDragMove}
                    style={{ cursor: 'grab' }}
                >
                    <div className="w-max min-w-full">
                        <img 
                            src={group} 
                            className="h-[53vh] w-auto max-w-none object-contain object-left-top pointer-events-none"
                            alt="Our work" 
                        />
                    </div>
                </div>
            </div>
        </div>

            <div className="content-mobile-view">
                <div className='text-lg md:text-xl text-gray-500 mb-3 md:px-14 lg:px-28'>Our Work</div>
                <div className="relative overflow-x-auto cursor-pointer">
                    <div
                        ref={mobileContainerRef}
                        className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
                        onMouseDown={(e) => handleDragStart(e, mobileContainerRef)}
                        onMouseLeave={() => handleDragEnd(mobileContainerRef)}
                        onMouseUp={() => handleDragEnd(mobileContainerRef)}
                        onMouseMove={(e) => handleDragMove(e, mobileContainerRef)}
                        style={{ cursor: 'grab' }}
                    >
                        <div className="w-[1200vw]">
                            <img src={group} className="h-[38vh] sm:h-[50vh] w-[1200vw] pointer-events-none object-cover" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourworks