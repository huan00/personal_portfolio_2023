import React from 'react'
import './about.css'

import { BsGearFill, BsGear } from 'react-icons/bs'

const About = () => {
  return (
    <div className="app__about">
      <div className="app__about--header">
        <h1 className="headerText">About Me</h1>
      </div>
      <div className="app__about__container">
        <div className="app__about--text">
          <p>
            Hello! My name is Huan and I enjoy creating things with codes.I have
            always had an interest in software engineering. In 2022 I sign up to
            General Assembly's immersive software engineer bootcamp.
          </p>
          <p>
            Fast-forward to today, I have been building web application with
            different languages and framework.
          </p>
        </div>
        <div className="app__about--img">
          <BsGear className="app__about--img-gear" />
          <BsGearFill className="app__about--img-gear" />
          <BsGearFill className="app__about--img-gear" />
        </div>
      </div>
    </div>
  )
}

export default About
