import React from 'react'
import './About.css'
import ProfilePicture from './images/cynthia.png'

const About = () => {
  return <>
    <div className="about">
      <div className="myself">
        <div className="profile-picture">
          <img src={ProfilePicture} alt="" />
        </div>
        <div className="desc">
          <p className='title'>(About Me)</p>
          <p className='aboutus'>
            I'm a product designer with a passion for creating products that not only look good but also solve real problems. When I'm not sketching ideas on paper, you can find me binge-watching a Netflix series or playing video games. My design philosophy is simple: make it visually appealing, functional, and bring a smile to people's faces. I'm the designer you want on your team if you want to make people say 'I need that in my life!'.
          </p>
          <a href="/" className='talk'>Let's talk</a>
        </div>
      </div>
      <div className="youtube">
        <p className='title'>(Forget to mention)</p>
        <a href="https://www.youtube.com" target='blank'>SUBSCRIBE TO MY YOUTUBE CHANNEL  <i className="ri-arrow-right-up-line"></i></a>
      </div>

    </div>
  </>
}

export default About