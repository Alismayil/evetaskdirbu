import React from 'react'
import './navbar.scss'
import { PiChartBarHorizontalFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";


function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <p>Dazzling Demo</p>
      </div>
      <div className='navbarBtns'>
        <ul className='btnUl'>

          <li className='HomeLi'>
            <a href="">HOME</a>
          </li>
          <li className=''>
            <a href="">GALLERY </a>
          </li>
          <li className=''>
            <a href="">SHORTCODES </a>
          </li>
          <li  className='aboutLi'>
            <a href="" >ABOUT
              {/* <ul className='aboutUl'>
                <li><a href="">
                  <PiChartBarHorizontalFill />
                  <p> Page Markup And Formatting</p>
                </a></li>
                <li><a href="">
                <IoIosMail />
                  <p>  Contact Form</p>


                </a></li>
                <li><a href="">
                <FaRegImage />
                  <p> Page Image Alignment (Full-Width)</p>
                </a></li>
                <li><a href="">
                <FaLeaf />
                  <p>  Clearing Floats</p>
                </a></li>
              </ul> */}
               </a>
          </li>
          <li className=''>
            <a href="">LANGUAGES </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar