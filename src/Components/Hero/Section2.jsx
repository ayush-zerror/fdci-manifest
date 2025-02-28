import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React from 'react'
gsap.registerPlugin(ScrollToPlugin)
const Section2 = ({registerBtn}) => {

  const handleRegister = ()=>{
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      onComplete:function(){
        if(registerBtn.current){
          console.log("click");
          registerBtn.current.click()
        }
      }
    })
    
  }

  return (
    <div id='home-section2'>
      <h2>FDCI Manifest Wedding Weekend</h2>
      <div id='date-container'>
        <div className='text-wrap-d'>
          <i className="ri-calendar-2-line"></i>
          <p>2 August, 2024 - 3 August, 2025
          </p>
        </div>
        <div className='text-wrap-d'>
          <i className="ri-map-pin-line"></i>
          <p>Taj Palace, New Delhi</p>
        </div>
      </div>
      <div id="about-text-container">
        <p>Two-day exclusive showcase by the leading bridal designers and jewellers of the country, featuring a preview of the latest collection of the designers and a curation of the best wedding brands under one roof, by-invite for brands and guests.</p>
        <p>The Fashion Design Council of India (FDCI) is the premier organization representing fashion professionals in India. Dedicated to promoting Indian artisans and nurturing young talent, FDCI is at the forefront of the fashion industry, organizing prestigious events such as India Couture Week. Through its initiatives, FDCI aims to elevate Indian fashion globally, fostering creativity and innovation.</p>
        <p>Manifest, a luxury lifestyle wedding title by RPSG Lifestyle Media Group. offers a curated world of fashion, jewellery, beauty, wellness, relationships and lifestyle. As a partner with FDCI Manifest Wedding Weekend it offers participants an opportunity to enjoy media visibility across its print, digital and social platforms.</p>
      </div>
      <div id='banner-btn' onClick={handleRegister} className='banner-btn-bottom'>
        <h6>Register now</h6>
        <span id='banner-btn-cir'>
          <span id='icon-btn'><i className="ri-arrow-right-up-line"></i></span>
        </span>
      </div>
    </div>
  )
}

export default Section2