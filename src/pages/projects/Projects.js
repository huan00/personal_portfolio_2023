import React from 'react'
import Project from '../../components/project/Project'
import './projects.css'

import imgUrl from '../../assets/images/projects/devise.png'

const Projects = () => {
  return (
    <div className="app__projects">
      <div className="app__project--header">
        <h1 className="headerText">My works</h1>
      </div>
      <div className="app__projects__container">
        <Project
          imgUrl={imgUrl}
          name="ProjectName"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam modi
          numquam vitae porro eum! Exercitationem, neque recusandae. Corporis,
          nam quisquam?"
        />
      </div>
    </div>
  )
}

export default Projects
