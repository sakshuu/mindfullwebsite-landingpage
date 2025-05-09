import React, {  useEffect, useRef, useState } from 'react'
import { Contactus, Heroseaction, Myfooter, Navigationbar, Ourservces, Webelieve } from '../components'
import "./../assets/css/home.css";
import { group, Industrie1, Industrie10, Industrie2, Industrie3, Industrie4, Industrie5, Industrie6, Industrie7, Industrie8, Industrie9, Industries,  } from '../assets/img/home'
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, } from '../assets/img/logos';
import { loading } from '../assets/videos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simulate loading time or wait for video to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const Industriesites = [
    Industrie1,
    Industrie2,
    Industrie3,
    Industrie4,
    Industrie5,
    Industrie6,
    Industrie7,
    Industrie8,
    Industrie9,
    Industrie10
  ]

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

if (isLoading) {
  return (
    <div className="loading-video-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <video 
        autoPlay 
        muted 
        playsInline 
        onEnded={() => setIsLoading(false)}
        onCanPlayThrough={() => setVideoLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={loading} type="video/mp4" />
        {/* Fallback if video doesn't load */}
        <div style={{color: 'white', textAlign: 'center'}}>
          Loading...
        </div>
      </video>
    </div>
  );
}

// if (isMobile) {
//   return (
//     <div className="mobile-message" style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#000',
//       color: '#fff',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign: 'center',
//       padding: '20px',
//       zIndex: 9999
//     }}>
//       <h2>Our Mobile Experience is Currently in Development</h2>
//     </div>
//   );
// }

  return <>
  
      <Navigationbar/>
    <section id="home">
        <Heroseaction/>
    </section>
    <section id="about">
        <Webelieve/>
    </section>
    <section id="services">
        <Ourservces/>
    </section>
 {/* icons */}
 <div className="ticker-container">
        <div className="ticker-content">
          {imagesicons.map((item, index) => (
          <div  className="ticker-item"> 
             <img
             src={item.src}
             alt={`groupicons-${index}`} className='w-20 md:w-44'
             />
          </div>
          ))}
        </div>
      </div>
<div className="content-desktop-view">
      <div className='title-home mb-8 ml-48 '>Industries we serve</div>
      <img src={Industries} alt="" style={{width:'100%', marginBottom:'40px'}} />
</div>
<div className="content-mobile-view">
  {/* <div className='Industriesites-swiper'>
    <div>
<Swiper 
pagination={{
clickable: true,
bulletActiveClass: "swiper-pagination-bullet-active blue-dot"}}
modules={[Pagination]}
spaceBetween={30}
slidesPerView={1}>
      {
        Industriesites.map((item) => (
          <SwiperSlide key={item} style={{width:'100vw',}} >
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img src={item} key={item} style={{ display:'block',}} className='w-fit' alt="" />
            </div>
        </SwiperSlide>
        ))
      }
      </Swiper>
      </div>
  </div> */}
  <div className="relative    " style={{width:'100vw'}}>
          <div className="relative cursor-point">
            {/* Padded content area */}
            {/* <div className=" cursor-point"> */}
              <Swiper
       modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className="services-swiper-mobile"
              >
                {Industriesites.map((item, index) => (
                  
      <SwiperSlide key={item}>
        <div style={{

          width: '90vw',
          // backgroundColor:'red',
          display: 'block',
        }}>
          {/* <div> */}

          <img 
            src={item} 
            style={{
              margin:'auto',
              padding:'auto',
              // marginLeft:'15px',
              display: 'block',
              width: '80%',
              
            }} 
            alt="" 
            />
            {/* </div> */}
        </div>
      
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
</div>
    <section id="contact">
        <Contactus/>
    </section>
    <Myfooter/>
  </>
}

export default Home