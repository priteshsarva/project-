import React, { useEffect } from 'react'
import './MidSection.css'
import Ixperience from './images/ixperience.png'
import plug from './images/plug.png'
import hudu from './images/hudu.png'
import { gsap, Power3 } from "gsap";


const MidSection = () => {

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max)


  useEffect(() => {
    var ydiff = 0;
    var xdiff = 0;
    var rotatdiif = 0;
    // var rotate = 0;
    var timeout = 0;

    document.querySelectorAll(".elem").forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        clearTimeout(timeout);
        console.log(e);
        ydiff = e.clientY - element.getBoundingClientRect().top
        xdiff = e.clientX - element.querySelector('img').getBoundingClientRect().width / 2
        rotatdiif = clamp(e.movementX, -20, 20)
        gsap.to(element.querySelector('img'), {
          x: xdiff,
          y: ydiff,
          rotate: rotatdiif,
          opacity: 1,
          duration: 1,
          ease: Power3,
        })
        timeout = setTimeout(() => {
          gsap.to(element.querySelector('img'), {
            rotate: 0,
            duration: 1,
            ease: Power3,
          })
        }, 100);
      })

      element.addEventListener("mouseleave", (e) => {
        gsap.to(element.querySelector('img'), {
          opacity: 0,
          duration: 1,
          ease: Power3,
        })
      })

    })

  })





  return (
    <div className='midsection' id='midsection'>
      <div className="elem">
        <img src={plug} alt="plug" />
        <h1>the plug</h1>
        <h5>2022</h5>
      </div>
      <div className="elem">
        <img src={Ixperience} alt="ixperience" />
        <h1>ixperience</h1>
        <h5>2022</h5>
      </div>
      <div className="elem last">
        <img src={hudu} alt="hudu" />
        <h1>hudu</h1>
        <h5>2021</h5>
      </div>
    </div>
  )
}

export default MidSection