'use client'
import React, { useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div>
       <div>
            <div className='navbar-container' >
                <div className={`navbar-row  ${openNav ? 'active' : !openNav} `}>
                  <div>Logo</div>
                  <nav>
                    <ul>
                      <li>Courses</li>
                      <li>Instructors</li>
                      <li>Blogs</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                  <div>
                    <a href="#" className="navbar-btn">Sign Up</a>
                    <a href="#" className="navbar-btn">Login</a>
                  </div>
                 
                  </div>
                  <div onClick={() => setOpenNav(!openNav)} className='openMenu'>
                  <button>Open</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar