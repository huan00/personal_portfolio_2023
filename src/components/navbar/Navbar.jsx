import React from 'react'
import './navbar.css'

import {
  RiMailSendLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFolderOpenFill
} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="app__navbar app__padding">
      <div className="app__navbar__logo">
        <div>
          <h1>Hz</h1>
        </div>
      </div>
      <div className="app__navbar__content">
        <RiFolderOpenFill className="app__navbar__content--icons" />
      </div>
    </div>
  )
}

export default Navbar
