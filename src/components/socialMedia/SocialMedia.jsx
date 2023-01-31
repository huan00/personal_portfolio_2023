import React from 'react'
import './socialMedia.css'
import { RiMailSendLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

const SocialMedia = () => {
  return (
    <div className="app__socialMedia">
      <RiMailSendLine className="app__navbar__content--icons" />
      <RiGithubFill className="app__navbar__content--icons" />
      <RiLinkedinBoxFill className="app__navbar__content--icons" />
    </div>
  )
}

export default SocialMedia
