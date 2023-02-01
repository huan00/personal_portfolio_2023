import React from 'react'

import './project.css'

const Project = ({ name, des }) => {
  return (
    <div className="app__project">
      <div className="card-front">
        <h1>{name}</h1>
      </div>
      <div className="card-back">
        <p>{des}</p>
      </div>
    </div>
  )
}

export default Project
