import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "./assets/logo.png"
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const [scroll, setScroll] = useState(false)
  window.addEventListener('scroll', navbarChange)

  function navbarChange() {
    if(window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  return (
    <>
      <div className={`main-nav-container ${scroll? 'scrolled' : ''}`}>
        <div className="top-bar-container">
          <div className="top-bar-con-1">
            <div className="top-bar">
              <AiOutlineGlobal />
              <h3>ENGLISH</h3>
              <IoMdArrowDropdown />
            </div>
            <div className="top-bar">
              <BsCurrencyExchange />
              <h3>TRY</h3>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="sign-in-out">
            <h3>Log In</h3>
            <h3>Sign Up</h3>
          </div>
        </div>
        <div className={`navbar-container`}>
          <div className="main-logo">
            <img src={mainLogo} />
          </div>
          <nav className={`header-nav`}>
            <NavLink className='navbar-icons' >Home</NavLink>
            <NavLink className='navbar-icons' >What We Offer</NavLink>
            <NavLink className='navbar-icons' >Popular Tours</NavLink>
            <NavLink className='navbar-icons' >Hotels</NavLink>
            <NavLink className='navbar-icons' >Contact Us</NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}