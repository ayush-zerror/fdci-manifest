import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Section4 = () => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const handleSlide = (direction) => {
        if (!swiperRef.current) return;

        const slides = swiperRef.current.children;
        if (!slides.length) return;

        let newIndex = currentIndex;

        if (direction === "next" && currentIndex < slides.length - 1) {
            newIndex++;
        } else if (direction === "prev" && currentIndex > 0) {
            newIndex--;
        }

        const slideWidth = slides[newIndex].offsetWidth;
        const maxTranslateX = swiperRef.current.scrollWidth - swiperRef.current.parentElement.clientWidth;

        let newTranslateX = slides[newIndex].offsetLeft;
        if (newTranslateX > maxTranslateX) {
            newTranslateX = maxTranslateX + 100; // Prevent overscrolling
        }

        swiperRef.current.style.transform = `translateX(-${newTranslateX - 50}px)`;

        setCurrentIndex(newIndex);
    };

    // Update button visibility on slide change
    useEffect(() => {
        setIsFirstSlide(currentIndex === 0);
        setIsLastSlide(currentIndex === swiperRef.current?.children.length - 1);
    }, [currentIndex]);

    return (
        <div className="home-section4">
            <h3>Glimpses from the Previous Year</h3>
            <div className="swiper-container">
                <div className="swiper-scroll" ref={swiperRef}>
                <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/0237-Manifest Launch Party.jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase small">
                        <Image width={1000} height={1000} src="/gallery/0208-Manifest Launch Party.jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/0014-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/0164-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/0192-FDCI+Manifest Wedding Weekend-(Day-1).jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/1515-Manifest Wedding Weekend-(Day-2).jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/Designer Falguni and Shane Peacock with Avarna Jain and Sara Tendulkar 2.jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/0264-Manifest Launch Party.jpg" alt="image" />
                    </div>
                    <div className="swiper-showcase large">
                        <Image width={1000} height={1000} src="/gallery/Designer Rohit Gandhi with models 2.jpg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="controller-swiper">
                <div className="swiper-btns">
                    <button
                        id="previous"
                        onClick={() => handleSlide("prev")}
                        style={{ opacity: isFirstSlide ? 0.5 : 1, pointerEvents: isFirstSlide ? "none" : "auto" }}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9968 29.5L3 16.4968L15.9968 3.5H17.6804L5.27667 15.8974L29 15.8974V17.0963L5.27667 17.0963L17.6804 29.5H15.9968Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <button
                        id="next"
                        onClick={() => handleSlide("next")}
                        style={{ opacity: isLastSlide ? 0.5 : 1, pointerEvents: isLastSlide ? "none" : "auto" }}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0032 3.5L29 16.5032L16.0032 29.5H14.3196L26.7233 17.1026H3V15.9037H26.7233L14.3196 3.5H16.0032Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <span id="swiper-counter">({String(currentIndex + 1).padStart(2, "0")})/(09)</span>
            </div>
        </div>
    );
};

export default Section4;
