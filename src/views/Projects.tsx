import { FC, ReactElement } from 'react'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import { projectType } from '../utils/types'

type ProjectsProp = {
  projects: projectType[] | []
}

const Projects: FC<ProjectsProp> = ({ projects }): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Header title="Projects" dark={false} color="bg-expertise" />
      </div>
      <div className="dark:bg-primary md:dark:bg-primary md:bg-alternate py-16 px-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects &&
          projects
            .sort((a, b) => b.order - a.order)
            .map((project, index) => (
              <ProjectItem project={project} key={index} />
            ))}
      </div>
    </div>
  )
}

export default Projects
