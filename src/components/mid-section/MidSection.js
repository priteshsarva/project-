import React, { useEffect } from 'react'
import './MidSection.css'
import Ixperience from './images/ixperience.png'
import plug from './images/plug.png'
import hudu from './images/hudu.png'
import { gsap, Power3 } from "gsap";


const MidSection = () => {

  useEffect(() => {

    document.querySelectorAll('.elem').forEach((elem) => {
      var ydiff = 0;
      var rotatdiif = 0;
      var rotate = 0;
      var timeout;

      elem.addEventListener('mouseleave', () => {
        console.log("mouse leave", elem.querySelector('h1').innerText);
        gsap.to(elem.querySelector('img'), {
          opacity: 0,
          ease: Power3,
        });
        gsap.to(elem.querySelector('h1'), {
          left: 0,
          opacity: 1,
          ease: Power3,
          duration: 2,

        })
        gsap.to(elem.querySelector('h5'), {

          opacity: 1,
          ease: Power3,
          duration: 2,

        })
      })
      elem.addEventListener('mousemove', (data) => {
        clearTimeout(timeout);
        ydiff = data.clientY - elem.getBoundingClientRect().top;
        rotatdiif = rotate - data.clientX;
        rotate = data.clientX;
        gsap.to(elem.querySelector('h1'), {
          left: 50,
          opacity: 0.3,
          ease: Power3,
          duration: 1,
        })
        gsap.to(elem.querySelector('h5'), {
          opacity: 0.3,
          ease: Power3,
          duration: 1,
        })
        // if (ydiff > elem.getBoundingClientRect().height) {
        //   gsap.to(elem.querySelector('img'), {
        //     opacity: 0,
        //     ease: Power3,
        //   });
        // }
        gsap.to(elem.querySelector('img'), {
          opacity: 1,
          top: ydiff,
          left: data.clientX,
          ease: Power3,
          duration: 1,
          rotate: gsap.utils.clamp(-20, 20, rotatdiif),
        });
        timeout = setTimeout(() => {
          elem.querySelector('img').style.transform = `rotate(0)`
        }, 100);

      })
    })
    return () => {

    }
  },)




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