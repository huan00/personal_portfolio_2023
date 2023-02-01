import React from 'react'

import './project.css'

const Project = ({ name, desc, imgUrl, url }) => {
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
      </div>
    </div>
  )
}

export default Project
