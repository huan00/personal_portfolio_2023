import React from 'react'
import Project from '../../components/project/Project'
import './projects.css'

import { projects } from '../../constants/projects'

const Projects = () => {
  return (
    <div className="app__projects" id="projects">
      <div className="app__project--header">
        <h1 className="headerText">My works</h1>
      </div>
      <div className="app__projects__container">
        {projects.map((project) => (
          <Project
            imgUrl={project.imgUrl}
            name={project.name}
            desc={project.desc}
            tech={project.tech}
            url={project.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
