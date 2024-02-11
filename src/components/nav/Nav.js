import React, { useEffect } from 'react'
import './Nav.css'
import { gsap, Expo } from "gsap";


const Nav = () => {
    useEffect(() => {
        const animation = () => {
            const tl = gsap.timeline();
            tl.from('nav', {
                y: -10,
                opacity: 0,
                duration: 1.5,
                ease: Expo.easeInOut
            })
        }    
      return () => {
        animation();
      }
    }, )
    
   
    
    return <>
        <nav id='nav'>
            <a href="/">Cynthia Ugwu</a>
            <a href="/">Menu<span>+</span></a>
        </nav>
    </>
}

export default Nav