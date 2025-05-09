import React, { useEffect, useState } from 'react'
import "./../assets/css/about.css"
import { mission, missionMobile, values, valuesmobile, vision, visionmobile} from '../assets/img/about';
import Ourworks from './Ourworks';

const Webelieve = () => {
  // pointer loop started js
  const points = [
    "Branding",
    "UX/UI",
    "Visual Content Creation",
    "Digital Marketing",
    "Marketing & Advertising",
    "Others"
  ];
  
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
        src:  vision,
        title:  'Vision',
        desc:'We don’t settle. We experiment, evolve, and explore new possibilities.'
    },
    {
        src:  values,
        title:  'Values',
        desc:'To lead a mindful revolution in branding, design, and digital storytelling.'
    },
  ]
 
  const [visiblePoints, setVisiblePoints] = useState(0);
  const [animationCycle, setAnimationCycle] = useState(0);
  useEffect(() => {
    let currentPoint = -1

    const interval = setInterval(() => {
      if (currentPoint < points.length - 1) {
        currentPoint++
        setVisiblePoints(currentPoint)
      } else {
        // Reset animation after a delay
        clearInterval(interval)
        setTimeout(() => {
          setVisiblePoints(-1)
          setAnimationCycle((prev) => prev + 1)
          setTimeout(() => {
            // Start new animation cycle
            currentPoint = -1
          }, 500)
        }, 3000)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [animationCycle, points.length])



  return <>

<div className="content-desktop-view ">
  <div className='p-4 md:p-10 lg:p-20'>

    <div className='text-lg md:text-xl text-gray-500 mb-1'>We Believe</div>
    <div className='text-base md:text-lg text-gray-300 mb-6 md:mb-10 max-w-2xl'>
      Growth you can see, impact you can  <br className='hidden sm:block' />  measure, success you can believe in.
    {/* </div> */}
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 content-center place-content-center '>
  <div className='lg:col-span-2 px-4 md:px-8 lg:px-12'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
      {weBelieve.map((card) => (
        <div 
          key={card.id}
          className="group bg-[#111111] rounded-2xl py-12 w-full transition-all duration-300 relative overflow-hidden"
        >
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
                      group-hover:opacity-50 transition-opacity duration-300"
            style={{
              boxShadow: `inset 0 0 50px ${card.shadowColor}`
            }}
          />
          
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <div 
              className='text-4xl md:text-5xl lg:text-6xl font-bold transition-colors mb-3 md:mb-5 duration-300'
              style={{ color: card.numberColor }}
            >
              {card.number}
            </div>
            <div className='text-xl md:text-lg text-gray-300 text-center'>
              {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className=" max-w-2xl ">
      <div style={styles.timelineContainer}>
        {points.map((point, index) => (
          <div
            key={`${animationCycle}-${index}`}
            style={{
              ...styles.timelineItem,
              ...(index <= visiblePoints ? styles.timelineItemVisible : {}),
            }}
          >
            <div style={styles.timelineDot}></div>
            {index < points.length - 1 && (
              <div
                style={{
                  ...styles.timelineConnector,
                  ...(index <= visiblePoints ? styles.timelineConnectorVisible : {}),
                }}
              ></div>
            )}
            <div
              style={{
                ...styles.timelineContent,
                ...(index <= visiblePoints ? styles.timelineContentVisible : {}),
              }}
            >
              {point}
            </div>
          </div>
        ))}
      </div>
    </div>
</div> 
</div> 



{/* We Work Section */}
<div>

  <Ourworks/>

  {/* <div className='flex flex-wrap justify-between mb-4 relative p-20 '>
    {aboutImag.map((item, index) => (
        <div >
        <img src={item.src} alt="" style={{height:'95vh'}} />
            <div className='absolute bottom-40' style={{width:'11%', marginLeft:'6%'}}> 
              <div>
            <div className='text-center mb-6 text-xl'>{item.title}</div>
        <div className='text-center text-lg text-gray-300'>{item.desc}</div>
              </div>
            </div>
        </div>
    ))}
    </div> */}
 <div className="flex flex-wrap justify-between p-4 md:p-20 bg-[#0a0a2e] min-h-screen">
      {aboutImag.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 px-2 mb-8 md:mb-0 relative">
          <div className="relative">
            <img
              src={item.src|| "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={600}
              className="w-full h-auto" />
            <div className="absolute md:bottom-[12%] xl:bottom-[20%] left-0 right-0 text-center md:px-6 xl:px-20 ">
              <h3 className="text-white md:text-xl xl:text-3xl mb-6">{item.title}</h3>
              <p className="text-gray-300 md:text-lg xl:tetx-1xl">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
</div>
</div>

<div className="content-mobile-view p-6">
<div className='text-lg md:text-lg text-gray-500 '>We Believe</div>
    <div className='text-base md:text-sm text-gray-300 mb-6 md:mb-10 max-w-2xl'>
      Our services have a proven track <br className='hidden sm:block' /> record of boosting businesses
    </div>
{/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8'> */}
<div className='grid grid-cols-2 gap-2 '>
      {weBelieve.map((card) => (
        <div  key={card.id} className="group bg-[#111111] rounded-2xl py-7 md:p-10 lg:p-14 transition-all duration-300 relative overflow-hidden"
        >
          <div   className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
                      group-hover:opacity-50 transition-opacity duration-300"
            style={{
              boxShadow: `inset 0 0 25px ${card.shadowColor}`
            }}
          />
          
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <div 
              className='text-4xl font-bold transition-colors mb-1 duration-300'
              style={{ color: card.numberColor }}
            >
              {card.number}
            </div>
            <div className='text-xs text-white text-center'>
              {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="timeline-container mt-6">
    {points.map((point, index) => (
      <div 
        key={`${animationCycle}-${index}`}
        className={`timeline-item-mobile ${index <= visiblePoints ? 'visible' : ''}`}
      >
        <div className="timeline-dot"></div>
        {index < points.length - 1 && (
          <div className={`timeline-connector-mobile ${index < visiblePoints ? 'visible' : ''}`}></div>
        )}
        <div className="timeline-content text-base md:text-lg">{point}</div>
      </div>
    ))}
  </div>

  {/* We Work Section */}
<Ourworks/>

<div className='mt-4 space-y-4 md:space-y-6'>
  {/* Mission Section */}
  <div className='relative mx-auto max-w-6xl'>
    <img 
      src={missionMobile} 
      alt="Mission" 
      className='w-full h-auto object-cover rounded-lg shadow-lg' 
    />
    <div className='absolute inset-0 flex items-center justify-end pr-4 md:pr-8'>
      <div className=' p-4 rounded-lg w-[45%] md:w-[35%] lg:w-[30%] backdrop-blur-sm'>
        <div className='text-white text-center text-lg md:text-xl font-bold mb-2'>Mission</div>
        <div className='text-gray-200 text-center  text-xs md:text-sm leading-tight'>
          To build brand experiences hard and thoughts.hold...and truly impossible.
        </div>
      </div>
    </div>
  </div>

  {/* Vision Section */}
  <div className='relative mx-auto max-w-6xl'>
    <img 
      src={visionmobile} 
      alt="Vision" 
      className='w-full h-auto object-cover rounded-lg shadow-lg' 
    />
    <div className='absolute inset-0 flex items-center justify-start pl-4 md:pl-8'>
      <div className=' p-4 rounded-lg w-[45%] md:w-[35%] lg:w-[30%] backdrop-blur-sm'>
        <div className='text-white text-center text-lg md:text-xl font-bold mb-2'>Vision</div>
        <div className='text-gray-200  text-center text-xs md:text-sm leading-tight'>
          To lead a mindful reclusion in prompts. dream, and digital storytelling.
        </div>
      </div>
    </div>
  </div>

  {/* Values Section */}
  <div className='relative mx-auto max-w-6xl'>
    <img 
      src={valuesmobile} 
      alt="Values" 
      className='w-full h-auto object-cover rounded-lg shadow-lg' 
    />
    <div className='absolute inset-0 flex items-center justify-end pr-4 md:pr-8'>
      <div className=' p-4 rounded-lg w-[45%] md:w-[35%] lg:w-[30%] backdrop-blur-sm'>
        <div className='text-white text-center text-lg md:text-xl font-bold mb-2'>Values</div>
        <div className='text-gray-200  text-center  text-xs md:text-sm leading-tight'>
          We don't settle.We experiment...evolve, areaspect new possibilities.
        </div>
      </div>
    </div>
  </div>
</div>


</div>

  </>
}

export default Webelieve


// Styles object
const styles = {
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    position: "relative",
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "50px",
    position: "relative",
    opacity: 0,
    transform: "translateY(10px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  timelineItemVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  timelineDot: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#080808",
    border: "5px solid white",
    flexShrink: 0,
    zIndex: 2,
  },
  timelineConnector: {
    position: "absolute",
    top: "16px",
    left: "8px",
    height: "calc(100% + 50px)",
    width: "3px",
    backgroundColor: "#e0e0e0",
    zIndex: 1,
    transformOrigin: "top",
    transform: "scaleY(0)",
    transition: "transform 0.5s ease 0.3s",
  },
  timelineConnectorVisible: {
    transform: "scaleY(1)",
  },
  timelineContent: {
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: 500,
    color: "#333",
    opacity: 0,
    transform: "translateX(10px)",
    transition: "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s, color 0.3s ease",
  },
  timelineContentVisible: {
    opacity: 1,
    transform: "translateX(0)",
    color: "white",
  },
}
