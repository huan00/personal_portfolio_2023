import React, { useState } from 'react'
import './socialMedia.css'
import { RiMailSendLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

import Email from '../email/Email'

const SocialMedia = ({ handleClick }) => {
  return (
    <div className="app__socialMedia">
      <RiMailSendLine
        className="app__socialMedia--icons"
        onClick={handleClick}
      />

      <a href="https://github.com/huan00?tab=repositories" target="__blank">
        <RiGithubFill className="app__socialMedia--icons" />
      </a>
      <a href="https://www.linkedin.com/in/huan-zeng/" target="__blank">
        <RiLinkedinBoxFill className="app__socialMedia--icons" />
      </a>
    </div>
  )
}

export default SocialMedia
