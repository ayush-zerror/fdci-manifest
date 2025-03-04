import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section3 = ({vidRef}) => {
    useEffect(() => {
        // gsap.to(".video-container video", {
        //     transform: "translateX(-50%)  scale(1)",
        //     duration: 1.2,
        //     scrollTrigger: {
        //         trigger: '.video-container',
        //         scroller: "body",
        //         start: 'top 70%',
        //         end: 'top 20%',
        //         scrub: 1,
        //     }
        // });

        const highlightItems = document.querySelectorAll(".heighlight div span");
        highlightItems.forEach((item) => {
            let finalValue = parseInt(item.textContent.replace(/\D/g, "")); // Extract numbers
            gsap.fromTo(
                item,
                { innerText: 0 },
                {
                    innerText: finalValue,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".heighlight",
                        start: "top 100%",
                        toggleActions: "play none none reset"
                    },
                    snap: { innerText: 1 }, // Ensures numbers are whole
                    onUpdate: function () {
                        item.innerText = Math.floor(item.innerText); // Keeps it integer
                    }
                }
            );
        });

    }, []);

    return (
        <div className='home-section3'>
            <div className='heighlight'>
                <div>
                    <div className='hl-count'>
                        <span>1500</span><div className='plus'>+</div>
                    </div>
                    <p>Elite Wedding Guests</p>
                </div>
                <div>
                    <span>19</span>
                    <p>Luxury Bridal Designers</p>
                </div>
                <div>
                    <div className='hl-count'>
                        <div className='plus'>0</div><span>7</span>
                    </div>
                    <p>Exquisite Jewelry Houses</p>
                </div>
                <div>
                    <div className='hl-count'>
                        <div className='plus'>0</div><span>5</span>
                    </div>
                    <p>Expert-Led Masterclasses</p>
                </div>
                <div>
                    <div className='hl-count'>
                        <div className='plus'>0</div><span>6</span>
                    </div>
                    <p>Luxury Wedding Curators</p>
                </div>
            </div>
            <h3>Highlights from FDCI Manifest Wedding Weekend 2024</h3>
            <div  className='video-container'>
                <video ref={vidRef} autoPlay muted loop playsInline src="/videos/heighlight24.mp4"></video>
            </div>
        </div>
    );
}

export default Section3;
