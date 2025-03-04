import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <Image width={1000} height={1000} src="/images/fdci.png" />
            <div id='banner-btn'>
                <h6>Register now</h6>
                <span id='banner-btn-cir'>
                    <span id='icon-btn'><i className="ri-arrow-right-up-line"></i></span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar