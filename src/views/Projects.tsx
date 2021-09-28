import { FC, ReactElement } from 'react'
import { projects } from '../data/projects'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'

const Projects: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="bg-alternate dark:bg-off-white shadow-sm px-4 py-10">
        <Header title="PROJECTS" />
        {projects &&
          projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Projects
