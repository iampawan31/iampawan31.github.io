import { FC, ReactElement } from 'react'
import TechnologyItem from './TechnologyItem'

type ProjectItemProps = {
  project: {
    name: string
    description: string
    githubLink: string
    demoLink: string
    imageLink: string
    technologies?: {
      name: string
      color: string
    }[]
  }
}

const ProjectItem: FC<ProjectItemProps> = ({ project }): ReactElement => {
  return (
    <div className="font-body py-6 flex rounded-lg transition bg-primary dark:text-primary dark:bg-alternate text-alternate mb-6 shadow px-2 space-x-4">
      <div>
        <img
          className="rounded-lg shadow max-w-sm"
          src={project.imageLink}
          alt=""
        />
      </div>
      <div>
        <div className="font-bold text-2xl">{project.name}</div>
        <div className="py-4">{project.description}</div>
        <div>
          <a
            className="px-4 py-2 hover:bg-secondary hover:text-alternate dark:hover:bg-secondary bg-alternate dark:bg-primary dark:text-alternate rounded text-primary"
            href={project.githubLink}
          >
            Github Link
          </a>
          <a
            className="px-4 py-2 ml-2 hover:bg-secondary hover:text-alternate dark:hover:bg-secondary bg-alternate dark:bg-primary dark:text-alternate rounded text-primary"
            href={project.demoLink}
          >
            Demo
          </a>
        </div>
        <div></div>
        {project.technologies && (
          <div className="pt-4 flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <TechnologyItem index={index} name={tech.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
