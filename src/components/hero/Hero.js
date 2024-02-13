import React, { useEffect } from 'react'
import { gsap, Expo } from "gsap";
import './Hero.css'


const Hero = () => {


  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#headinghide", {
      y: 0,
      // delay: .5,
      duration: 2.5,
      ease: Expo.easeOut,
      stagger: 0.2,
    }).to("#headinghide-inverted", {
      y: 0,
      delay: -2,
      duration: 2.5,
      ease: Expo.easeOut,
      // stagger: 0.2,
    }).to('#herofooter', {
      y: 0,
      delay: -3.5,
      duration: 2.5,
      ease: Expo.easeInOut
    })

    return () => {

    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="top">
          <div className="headings">
            <div id="headingAnimation">
              <h1 id='headinghide' className="headings-h1">Product</h1>
            </div>
            <div id="headingAnimation">
              <h1 id='headinghide' className="headings-h1 ml-11vw" >Designer</h1>
            </div>
            <div id="headingAnimation">
              <h5 id='headinghide-inverted' className="headings-h5">Based in Toronto</h5>
            </div>
          </div>
          <div className="available">
            <div id="headingAnimation">
              <h5 id='headinghide-inverted' >AVAILABLE FOR FREELANCE</h5>
            </div>
            <div id="headingAnimation">
              <h5 id='headinghide-inverted'>WORK FROM MAY 23'</h5>
            </div>
          </div>
        </div>
        <div id='headingAnimation'>
          <div id="herofooter" className="bottom">
            <a href="/">CURRENTLY WORKING AT YML <i className="ri-arrow-right-up-line"></i></a>
            <a href="/">PROTOPIE AMBASSADOR <i className="ri-arrow-right-up-line"></i></a>
            <a href='#midsection' className="down">
              <div className="arrow"><i className="ri-arrow-down-line"></i></div>
              <div className="arrow"><i className="ri-arrow-down-line"></i></div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero