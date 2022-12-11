import React from 'react'
import { Image } from '../../atoms/Image'
import logo from '../../../assets/images/default-logo.png'

export const NavBar = () => {
  return (
    <nav>
      <div className='home-logo'><Image src={logo} alt='logo'  /></div>
      <div className='nav-left'>
            <div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
            {/* <div><svg className="u-svg-link" preserveAspectRatio="MidYMin slice" viewBox="0 0 112 112"><use></use></svg></div>
            <div><svg className="u-svg-link" preserveAspectRatio="MidYMin slice" viewBox="0 0 112 112"><use></use></svg></div>
            <div><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-9759"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></div> */}
      </div>
    </nav>
  )
}


