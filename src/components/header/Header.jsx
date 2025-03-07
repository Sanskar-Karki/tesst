import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  // Toggle menu
  const [toggle, showMenu] = useState(false)


  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="" className='nav__logo'>Sans</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list '>
            <li className='nav__item '>
              <a href="" className='nav__link active-link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href="" className='nav__link '>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li className='nav__item'>
              <a href="" className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>


            <li className='nav__item'>
              <a href="mailto:sanskarkarki20@gmail.com?subject=Hello&body=Hi%20there,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%0A%0AI%20would%20like%20to%20discuss%20something.%0A%0ABest%20regards,%0A%5BYour%20Name%5D" className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__close ' onClick={() => { showMenu(!toggle) }}></i>
        </div>

        <div className='nav__toggle' onClick={() => { showMenu(!toggle) }}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
