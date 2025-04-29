import React, {  useEffect, useRef, useState } from 'react'
import { Contactus, Heroseaction, Myfooter, Navigationbar, Ourservces, Webelieve } from '../components'
import "./../assets/css/home.css";
import { group, Industries } from '../assets/img/home'
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, } from '../assets/img/logos';
import { loading } from '../assets/videos';
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
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
  // Check if mobile device on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        zIndex: 9999
      }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Mobile Experience Currently in Progress
          </h2>
          <p style={{ color: '#888' }}>
            Our mobile version is under development. Please visit from a desktop 
            for the complete experience.
          </p>
          <div style={{ marginTop: '2rem', fontSize: '3rem' }}>
            {/* You can add a loading spinner or animation here */}
            🚧⏳
          </div>
        </div>
      </div>
    );
  }

  return (
    // Your existing desktop return content
    <div className="content-view">
       {/* <div className="content-view"> */}

 
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

<div className='title-home mb-24 ml-48 '>Industries we serve</div>
<img src={Industries} alt="" style={{width:'100%', marginBottom:'40px'}} />
<section id="contact">
  <Contactus/>
</section>
<Myfooter/>
{/* </div> */}
      {/* ... rest of your desktop content ... */}
    </div>
  );
};

export default Home;