import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Gallery = ({ vidRef }) => {

    useEffect(() => {
        const currentPosition = vidRef.current.getBoundingClientRect().top
        const videoPosition = document.querySelector(".gallery-container").getBoundingClientRect().top
        const yPosition = videoPosition - currentPosition
        const width = (window.innerWidth - 100) / 3;


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-container",
                scroller: "body",
                start: "top 90%", // Adjusted for a smoother trigger point
                end: "top 20%", 
                scrub: true, // Smoothest scrub effect
            },
            defaults: { duration: 1.2, ease: "power2.out" } // Default settings for consistency
        });
        
        tl.to(vidRef.current, {
            y: yPosition + 30,
            height: "50vh",
            width: width,
        }, "start") // Named position for alignment
        
        tl.to(".row1 img", {
            scale: 1,
            opacity: 1,
        }, "start+=0.3"); // Slight delay for better sync
        

        gsap.to(".row2 img", {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".row2",
                scroller: "body",
                start: "top 80%",
                end: "top 0%",
                scrub: 0.5,
            }
        })

        gsap.to(".row3 img", {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".row3",
                scroller: "body",
                start: "top 80%",
                end: "top 0%",
                scrub: 0.5,
            }
        })

    }, [])

    return (
        <div className='gallery-container'>
            <div className="gallery-row row1">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0001-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
                <div className="gallery-item"></div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0014-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
            </div>
            <div className="gallery-row row2">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0164-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0218-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0251-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
            </div>
            <div className="gallery-row row3">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0326-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/1227-Manifest Wedding Weekend-(Day-2).jpg" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/1319-Manifest Wedding Weekend-(Day-2).jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
