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
    <div className="font-body py-6 flex rounded-lg transition dark:text-alternate text-primary mb-6 hover:shadow px-2 space-x-4">
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
            className="px-4 py-2 hover:bg-secondary bg-primary dark:bg-alternate dark:text-primary rounded text-alternate"
            href={project.githubLink}
          >
            Github Link
          </a>
          <a
            className="px-4 ml-2 hover:bg-secondary py-2 bg-primary dark:bg-alternate dark:text-primary rounded text-alternate"
            href={project.demoLink}
          >
            Demo
          </a>
        </div>
        <div></div>
        {project.technologies && (
          <div className="pt-4">
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
