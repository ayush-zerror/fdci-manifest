import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
const Section2 = () => {

  useEffect(() => {
    gsap.to("#about-text-container p span", {
      color: "black",
      stagger: .3,
      duration: 3,
      scrollTrigger: {
        trigger: "#about-text-container",
        start: "top 75%",
        end: "top 10%",
        scrub: 1
      }
    })

    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh()
    };

  }, [])

  return (
    <div id='home-section2'>
      {/* <h2>FDCI Manifest Wedding Weekend</h2>
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
      </div> */}
      <div id="about-text-container">
        <p>{"FDCI Manifest Wedding Weekend (FMWW) is an exclusive two-day showcase of India’s top bridal designers, jewellers, and wedding brands. A collaboration between the Fashion Design Council of India (FDCI) and Manifest, RPSG Lifestyle Media Group’s luxury wedding title, FMWW blends high fashion with premium wedding essentials, offering unmatched media visibility across Manifest's platforms.".split("").map((l, i) => <span key={i}>{l}</span>)}</p>
      </div>
      {/* <div id='banner-btn' onClick={handleRegister} className='banner-btn-bottom'>
        <h6>Register now</h6>
        <span id='banner-btn-cir'>
          <span id='icon-btn'><i className="ri-arrow-right-up-line"></i></span>
        </span>
      </div> */}
    </div>
  )
}

export default Section2