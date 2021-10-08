import { FC, ReactElement } from 'react'
import { projects } from '../data/projects'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'

const Projects: FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Header title="Projects" color="bg-expertise" />
      </div>
      <div className="bg-alternate py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects &&
          projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Projects
