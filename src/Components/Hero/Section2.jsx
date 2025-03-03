import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
const Section2 = ({ registerBtn }) => {

  const handleRegister = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      onComplete: function () {
        if (registerBtn.current) {
          console.log("click");
          registerBtn.current.click()
        }
      }
    })

  }
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
        <p>{"FDCI Manifest Wedding Weekend (FMWW) is an exclusive two-day showcase celebrating India’s finest bridal designers and jewellers, offering a preview of their latest collections alongside a curated selection of top wedding brands. A collaboration between the Fashion Design Council of India (FDCI) and Manifest, RPSG Lifestyle Media Group’s luxury wedding and lifestyle title, FMWW blends high fashion with premium wedding essentials. By invitation only, this prestigious event not only elevates Indian craftsmanship and innovation but also provides unparalleled media visibility across Manifest's print, digital, and social platforms.".split("").map((l, i) => <span key={i}>{l}</span>)}</p>
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