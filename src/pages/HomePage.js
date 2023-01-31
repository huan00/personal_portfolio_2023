import React from 'react'

import './homePage.css'

const HomePage = () => {
  return (
    <div className="app__home app__padding">
      <div className="app__home__container">
        <div className="app__home__container--box first" />
        <div className="app__home__container--text">
          <h1>&#60;Hello, I'm Huan Zeng /&#62;</h1>
          <p>
            a software engineer. I am passionate about using technology to solve
            complex problems and create innovative solutions. /&#62;
          </p>
        </div>
        <div className="app__home__container--box second" />
      </div>
    </div>
  )
}

export default HomePage
