import React from 'react'
import Cv from '../../assets/Sanskar_karki_CV.pdf'
const Data = () => {
  return (
    <div className='home__data'>
      <div className="home__title">Hi, I'm Sanskar Karki 👋
      </div>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className='home__description'>I specialize in frontend development, building responsive and user-friendly applications.</p>

      <a href={Cv} download='' className='button button-flex'>
        Download CV{' '}
        <i class="uil uil-import cv__icon download--btn"></i>
      </a>

    </div>
  )
}

export default Data
