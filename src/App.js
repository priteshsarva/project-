import React, { useEffect, useRef } from 'react'
import './App.css';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import MidSection from './components/mid-section/MidSection';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './components/cursor/Cursor';


function App() {

  document.addEventListener('load',()=>{
    console.log("load");
  })

  const scrollRef = useRef(null)


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
    return () => {
      scroll.destroy();
    }
  }, [])



  return <>
   <Cursor />
    <div id='main' ref={scrollRef} className='scroll-container'>
      <Hero />
      <MidSection />
      <About />
      <Footer />
    </div>
    <Banner />
    <Nav />
    
  </>
}

export default App;
