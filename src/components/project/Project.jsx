import React from 'react'

import './project.css'

const Project = ({ name, desc, imgUrl, url, tech }) => {
  return (
    <div className="app__project">
      <div className="card-front">
        <h1>{name}</h1>
        <img src={imgUrl} alt="project" />
      </div>
      <div className="card-back">
        <p>{desc}</p>
        <a href={url}>
          <p>visit site</p>
        </a>
        <div className="card-back-language">
          <h5>languages</h5>
          <div>
            {tech.map((lang) => (
              <p>&nbsp;{lang} |</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
