
// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { MyFooter, Navigationbar } from './components';
// import { About, Contactus, Home, OurServices, Page404 } from './pages';
// import { loading } from './assets/videos';

// const Loader = () => {
//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgba(1, 1, 1, 1)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 9999
//     }}>
//       <div className="spinner-border text-primary" role="status">
//         <span className="visually-hidden">
//         <video 
//         autoPlay 
//         loop 
//         muted 
//         playsInline
        
//         style={{ width: '100vw',  }}
//       >
//         <source src={loading} type="video/webm" />
//         Your browser does not support the video tag.
//       </video>
//         </span>
//       </div>
//     </div>
//   );
// }

// const AppContent = () => {
//   const location = useLocation();
//   const is404Page = !['/', '/contactus', '/about', '/services'].includes(location.pathname);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); 

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div style={{backgroundColor:'rgba(1, 1, 1, 1)'}}>
//       {!is404Page && <Navigationbar/>}
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//         <Route path='/services' element={<OurServices/>}></Route>
//         <Route path='/contactus' element={<Contactus/>}></Route>
//         <Route path='*' element={<Page404/>}></Route>
//       </Routes>
//       {!is404Page && <MyFooter/>}
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react'
import Home from './pages/Home'
import "./assets/css/index.css"

const App = () => {
  return <>
  <div style={{backgroundColor:'rgba(1, 1, 1, 1)'}}>
    <Home/>
  </div>
  </>
}

export default App