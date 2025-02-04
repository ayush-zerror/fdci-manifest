import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React from 'react'
gsap.registerPlugin(ScrollToPlugin)
const Section2 = () => {

  const handleRegister = ()=>{
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
    })
  }

  return (
    <div id='home-section2'>
      <h2>FDCI Manifest Wedding Weekend</h2>
      <div id='date-container'>
        <div className='text-wrap-d'>
          <i className="ri-calendar-2-line"></i>
          <p>3 August, 2024 - 4 August, 2024
          </p>
        </div>
        <div className='text-wrap-d'>
          <i className="ri-map-pin-line"></i>
          <p>Taj Palace, New Delhi</p>
        </div>
      </div>
      <div id="about-text-container">
        <p>Experience the Ultimate in Wedding Luxury at the FDCI Manifest Wedding Weekend</p>
        <p>New Delhi, June 10th, 2024: The Fashion Design Council of India (FDCI) and RPSG Lifestyle Media are ecstatic to jointly announce the FDCI Manifest Wedding Weekend, which will take place at the Taj Palace, New Delhi, on August 3rd and 4th , 2024.</p>
        <p>The FDCI Wedding Weekend aims at presenting the newest wedding trends by face-to-face interactions between patrons and the designers themselves. The selection of those showcasing their creations will be curated by FDCI and the editorial team of Manifest, ensuring a rich experience for those attending. Given the personal nature of interactions involved with creative professionals, the event will be access-regulated, and patrons will be encouraged to attend by prior appointment and invitation only.</p>
        <p>Reflecting on the event’s significance, FDCI Chairman Sunil Sethi shared, “The overwhelming response to our inaugural FDCI Wedding Weekend set a high standard. This year, we aim to elevate the shopping experience even more. Print and digital media together form a comprehensive and creative promotional strategy, reaching diverse audiences and driving consumer interest. By uniting coveted couturiers, jewellers, and wedding professionals, we continue to tap into the booming Indian wedding and luxury fashion market, making this event the premier platform for acquiring festive couture, red-carpet creations, and exquisite jewellery.”</p>
        <p>Avarna Jain, Chairperson of RPSG Lifestyle Media, added, “We are delighted to launch our first homegrown brand at this exclusive event in association with the Fashion Design Council of India. The FDCI Manifest Wedding Weekend will not just bring together India’s top couturiers and the most celebrated jewellers for a bespoke two-day showcase but it will also set the trends for the season. Soon to be brides and grooms, and their families, painstakingly curated by our audience development teams, will be able to interact with India’s best couturiers and jewellers. This sets the tone for our couture, luxury and wedding initiative, that will reinvent the way young India looks at celebration and joy.”</p>
        <p>The Fashion Design Council of India (FDCI) is the country’s premiere representational body of fashion professionals, which encourages Indian artisans and helps develop young talent.</p><p>RPSG Lifestyle Media is a part of the USD 7-billion RP-Sanjiv Goenka Group with interests in power, carbon black, IT, retail, FMCG, sports and entertainment.</p>
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