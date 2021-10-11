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
    <div className="flex flex-col mb-10 font-body pb-6 bg-off-white text-primary border rounded-lg shadow-lg">
      <div>
        <img
          className="rounded-tl-lg rounded-tr-lg w-full filter grayscale"
          src={project.imageLink}
          alt=""
        />
      </div>
      <div className="px-4 pt-4">
        <div className="font-semibold text-2xl">{project.name}</div>
        <div className="py-4">{project.description}</div>
        <div className="space-x-2">
          <a
            className="px-2 py-2 hover:bg-expertise text-sm hover:text-primary bg-primary rounded text-alternate"
            href={project.githubLink}
          >
            Github
          </a>
          <a
            className="px-2 py-2 hover:bg-expertise text-sm hover:text-primary bg-primary rounded text-alternate"
            href={project.demoLink}
          >
            Demo
          </a>
        </div>
        <div></div>
        {project.technologies && (
          <div className="pt-4 flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <TechnologyItem
                key={index}
                name={tech.name}
                backgroundColor="bg-expertise"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
