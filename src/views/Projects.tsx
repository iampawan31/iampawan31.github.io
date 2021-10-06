import { FC, ReactElement } from 'react'
import { projects } from '../data/projects'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'

const Projects: FC = (): ReactElement => {
  return (
    <div className="flex">
      <div>
        <Header title="PROJECTS" color="bg-expertise" />
      </div>
      <div className="bg-alternate p-16">
        {projects &&
          projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Projects
