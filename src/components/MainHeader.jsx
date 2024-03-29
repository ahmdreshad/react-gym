import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

function MainHeader() {
  return (
      <header className='main__header'>
          <div className="main__header-container container">
              <div className="main__header-left">
                  <h4>#100DaysOfWorkout</h4>
                  <h1>Join The Legeneds Of The Fitness World</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum suscipit iusto dolores ducimus mollitia repellendus?</p>
                  <Link to="/plans" className='btn lg'>Get Started</Link>
              </div>
              <div className="main__header-right">
                  <div className="main__header-circle"></div>
                  <div className="main__header-image">
                      <img src={Image} alt="" />
                  </div>
              </div>

        </div>
          
    </header>
  )
}

export default MainHeader