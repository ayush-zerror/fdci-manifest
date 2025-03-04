import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import React from 'react'
gsap.registerPlugin(ScrollToPlugin)
const Section4 = ({ registerBtn }) => {
    const handleRegister = () => {
        // registerBtn.current.scrollIntoView({ behavior: "smooth" });
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            onComplete: function () {
                if (registerBtn.current) {
                    registerBtn.current.click()
                }
            }
        })

    }
    return (
        <div className='section4-fd'>
            <h3>Register now – don’t miss out on the event!</h3>
            <div id='banner-btn' onClick={handleRegister}>
                <h6>Register now</h6>
                <span id='banner-btn-cir'>
                    <span id='icon-btn'><i className="ri-arrow-right-up-line"></i></span>
                </span>
            </div>
        </div>
    )
}

export default Section4