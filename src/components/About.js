import React from 'react'
import AboutBackground from '../Assets/about-background-image.png'
import AboutBackgroundImage from'../Assets/about-background.png'
const About = () => {
  return (
      <div className='abut-section-container'>
          <div className='about-background-image-container'>
          <img src={AboutBackground}  alt=""/> 
          </div>
          
          <div className='about-section-text-container'>
              <p className='primary-subheading'>About</p>
              <h1 className='primary-heading 1'>
                  Food Is An Important Part of A Balanced Diet
              </h1>
              <p className='primary-text 1'>
                  Food plays a vital role in our life without food survival is not possible.Healthy fod wil help us to maintain our body fit and healthy.

              </p>
              <div className='about-buttons-container'>
                  <button className="secondary-button">Learn More</button>
                  <button className="watch-video button"></button>
              </div>
              <div className='about-section-image-container'>
              <img src={AboutBackgroundImage} alt=""/>
          </div>
              
          </div>
    </div>
  )
}

export default About






