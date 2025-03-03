import React, { useRef } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'
import Gallery from './Gallery'

const Hero = () => {
  const registerBtn = useRef(null)
  const vidRef = useRef(null)
  return (
    <div className='home-wrapper-main'>
      <Section1 registerBtn={registerBtn}/>
      <Section2 registerBtn={registerBtn}/>
      <Section3 vidRef={vidRef}/>
      <Gallery vidRef={vidRef}/>
      <Footer/>
    </div>
  )
}

export default Hero