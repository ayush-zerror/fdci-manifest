import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Gallery = ({ vidRef }) => {

    useEffect(() => {
        if (window.innerWidth < 575) return;
    
        const updateHeight = () => {
            const currentPosition = vidRef.current.getBoundingClientRect().top;
            const videoPosition = document.querySelector(".gallery-container").getBoundingClientRect().top;
            const yPosition = videoPosition - currentPosition;
            const width = (window.innerWidth - 100) / 3;
            
            const img = document.querySelector(".gallery-item img");
            if (!img) return;
    
            let imgHeight = img.offsetHeight; // Ensure the image exists before accessing offsetHeight
            let height = imgHeight;
    
            if (window.innerWidth > 1285) {
                height = imgHeight;
            } else if (window.innerWidth >= 1200 && window.innerWidth <= 1285) {
                height = "40vh";
            } else if (window.innerWidth >= 991 && window.innerWidth <= 1199) {
                height = "30vh";
            } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
                height = "27vh";
            } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
                height = "20vh";
            }
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".gallery-container",
                    scroller: "body",
                    start: "top 90%",
                    end: "top 20%",
                    scrub: true,
                },
                defaults: { duration: 1.2, ease: "power2.out" }
            });
    
            tl.to(vidRef.current, {
                y: yPosition + 30,
                height: height,
                width: width,
                ease:"linear"
            }, "start");
    
            tl.to(".row1 img", {
                scale: 1,
                opacity: 1,
            }, "start+=0.8");
    
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
            });
    
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
            });
        };
    
        // Wait for images to load
        const images = document.querySelectorAll(".gallery-item img");
        let loadedImages = 0;
    
        images.forEach((img) => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener("load", () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        updateHeight();
                    }
                });
            }
        });
    
        if (loadedImages === images.length) {
            updateHeight();
        }
    }, [vidRef]);

    return (
        <div className='gallery-container'>
            <div className="gallery-row row1">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0001-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
                <div className="gallery-item"></div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0014-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
            </div>
            <div className="gallery-row row2">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0164-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0218-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0251-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
            </div>
            <div className="gallery-row row3">
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/0326-FDCI+Manifest Wedding Weekend-(Day-1).webp" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/1227-Manifest Wedding Weekend-(Day-2).webp" alt="image" />
                </div>
                <div className="gallery-item">
                    <Image width={1000} height={1000} loading='lazy' src="/gallery/1319-Manifest Wedding Weekend-(Day-2).webp" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
