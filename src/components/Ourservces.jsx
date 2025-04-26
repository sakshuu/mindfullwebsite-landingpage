import React from 'react'
import { icon1, icon2, icon3, icon4, icon5, leftarrow, rightarrow, service1 , service2,
   service3,
   service4,
   service5,
   service6,
   service7,
   service8,
   service9,
  service10,
  service11,
  service12,
  service13,
  service14,
  service15,
  service16,
  service17,
  service18,
  service19,
  service20} from '../assets/img/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../assets/css/services.css"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { arrownext, arrowpre, Macbookpro } from '../assets/img/home';

const Ourservces = () => {
  const cardColors = ['#E6BDFF', '#F8E8ED', '#D4E2FF', '#E6BDFF', '#F8E8ED']
  const ourWorks = [
    {
      id:'1',
      icon:icon1,
      title:'UI/UX & Web Solutions',
      desc:'We design intuitive digital experiences that don’t just look good—they work seamlessly. From responsive websites to user-friendly platforms, we craft interfaces that guide, engage, and convert. Our thoughtful approach to UI/UX has helped brands simplify the user journey and increase online engagement meaningfully.',
      images: [
        service1,
        service2,
        service3,
        service4,
      ]
    },
    {
      id:'2',
      icon:icon2,
      title:'Digital Presence & Performance Marketing eiusmod.',
      desc:'We help brands be seen—and remembered.With a mix of strategy, creativity, and analytics, our performance marketing solutions have helped clients grow online, connect with their ideal audience, and achieve consistent, trackable growth across platforms.',
      images: [
        service5,
        service6,
        service7,
        service8,
      ]
    },
    {
      id:'3',
      icon:icon3,
      title:'Branding & Identity Design',
      desc:'In a busy world, visuals capture attention first. We produce visuals—photos, videos, graphics—that captivate and communicate your story clearly. Our content has helped brands grab attention, boost engagement, and express their identity in ways that truly resonate with audiences.',
      images: [
        service9,
        service10,
        service11,
        service12,
      ]
    },
    {
      id:'4',
      icon:icon4,
      title:'Visual Content Creation',
      desc:'We help brands be seen—and remembered.With a mix of strategy, creativity, and analytics, our performance marketing solutions have helped clients grow online, connect with their ideal audience, and achieve consistent, trackable growth across platforms.',
      images: [
        service13,
        service14,
        service15,
        service16,
      ]
    },
    {
      id:'5',
      icon:icon5,
      title:'Marketing Collateral & Advertising ',
      desc:'We turn ideas into impactful campaigns and collaterals that stick. From brochures to billboards, print ads to digital banners, we ensure every asset tells your story with clarity and creativity. Our work has helped brands leave lasting impressions and spark real-world results.',
      images: [
        service17,
        service18,
        service19,
        service20,
      ]
    },
  ]
  return <>
<div className='pl-48'>
<div className='text-xl text-gray-500 mb-1'>Our Services</div>
      <div className='text-lg text-gray-300  max-w-2xl'>
      From strategy to branding and content creation, our <br /> services drive measurable success and long-term growth.
      </div>
</div>

  <div className="relative py-16 px-4 sm:px-6 lg:px-8 mx-auto" style={{width:'85vw'}}>
        <div className="relative">
          {/* Navigation buttons positioned outside the padded content */}
          <div className="absolute inset-y-0 left-0 flex items-center -ml-12 z-10">
            <button className="swiper-button-prev bg-gray-500 rounded-full shadow-md transition-colors">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg> */}
              <img src={leftarrow} className='min-w-6' alt="" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center -mr-12 z-10">
            <button className="swiper-button-next bg-gray-500 rounded-full p-3 shadow-md  transition-colors">
              <img src={rightarrow} className='min-w-6' alt="" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg> */}
            </button>
          </div>

          {/* Padded content area */}
          <div className="px-8 sm:px-12 lg:px-16 cursor-pointer">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="services-swiper"
            >
              {ourWorks.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Text content with dynamic background color */}
                    <div 
                      className="lg:w-1/2 rounded-lg md:p-12 xl:p-20"
                      style={{ backgroundColor: cardColors[index % cardColors.length] }}
                    >
                      <div className='mb-4'>
                        <img src={item.icon} className="w-10 h-10 ml-4" alt="" />
                      </div>
                      <h2 className="text-2xl font-bold text-black   xl:mt-8">
                        {item.title}
                      </h2>
                      <p className="text-lg text-black leading-relaxed xl:mt-8">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Images grid */}
                    <div className="lg:w-1/2">
                      {/* <div className="grid grid-cols-2 gap-4">
                        {item.images.map((image, idx) => (
                          <div key={idx} className="relative overflow-hidden aspect-square rounded-lg">
                            <img
                              src={image}
                              alt={`${item.title} example ${idx + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div> */}

                       <div className="grid grid-cols-2 gap-4">
                        {item.images.map((image, idx) => (
                          <div 
                            key={idx} 
                            className="relative overflow-hidden aspect-square rounded-lg group"
                          >
                            <img
                              src={image}
                              alt={`${item.title} example ${idx + 1}`}
                              className="absolute inset-0 w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                            />
                          </div>
                        ))}
                      </div> 
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
  </>
}

export default Ourservces