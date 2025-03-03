import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-fd'>
      <span>stay connected</span>
      <div className='footer-btm'>
        <div>
          <Link target='_blank' href="https://www.instagram.com/manifest.ind/">instagram</Link>
          <Link target='_blank' href="https://www.facebook.com/people/Manifestind/61559407741751/">facebook</Link>
          <Link target='_blank' href="https://x.com/_manifestind">Twitter</Link>
          <Link target='_blank' href="https://www.threads.net/@manifest.ind">Thread</Link>
          <Link target='_blank' href="https://www.youtube.com/@ManifestInd">Youtube</Link>
        </div>
        <span>© 2025 All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer