import React from 'react'
import './socialMedia.css'
import { RiMailSendLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

const SocialMedia = () => {
  return (
    <div className="app__socialMedia">
      <RiMailSendLine className="app__socialMedia--icons" />
      <RiGithubFill className="app__socialMedia--icons" />
      <RiLinkedinBoxFill className="app__socialMedia--icons" />
    </div>
  )
}

export default SocialMedia
