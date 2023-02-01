import React from 'react'
import './navbar.css'

import { RiFolderOpenFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="app__navbar app__padding">
      <div className="app__navbar__logo">
        <div>
          <a href="">
            <h1>Hz</h1>
          </a>
        </div>
      </div>
      <div className="app__navbar__content">
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#skills">
          <p>Skills</p>
        </a>
        <a href="#projects">
          <p>Work</p>
        </a>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQ3x96xobcMD2EMFKUXY134445aR1aTwN9yOmGh3G_MnI0Ekj7OBGZVttEDKOpKToy-2qQeZw0S5eo1/pub"
          target="__blank"
        >
          <RiFolderOpenFill className="app__navbar__content--icons" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
