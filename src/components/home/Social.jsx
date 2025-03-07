import React from 'react'

const Social = () => {
  return (
    <div>
      <div className="home__social">

        <a href="https://github.com/Sanskar-Karki" className="home__social-icon" target='_blank'>
          <i class="uil uil-github-alt social--icon--link"></i>
        </a>
        <a href="https://www.linkedin.com/in/sanskar-karki-480b2a199/" className="home__social-icon" target='_blank'>
          <i class="uil uil-linkedin-alt social--icon--link"></i>

        </a>

        <a href="mailto:sanskarkarki20@gmail.com?subject=Hello&body=Hi%20there,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%0A%0AI%20would%20like%20to%20discuss%20something.%0A%0ABest%20regards,%0A%5BYour%20Name%5D" className="home__social-icon" target="_blank">
          <i class="uil uil-envelope social--icon--link"></i>
        </a>


      </div>


    </div>
  )
}

export default Social
