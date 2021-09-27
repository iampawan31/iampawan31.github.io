import { FC, ReactElement } from 'react'
import { projects } from '../data/projects'
import ProjectItem from './ProjectItem'
import Header from './Header'

const Projects: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <Header title="PROJECTS" />
      {projects &&
        projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
    </div>
  )
}

export default Projects
