import { FC, ReactElement, useEffect, useState } from 'react'
import TechnologyItem from './TechnologyItem'
import { storage } from '../firebase-config'
import { getDownloadURL, ref } from 'firebase/storage'
import { projectType } from '../utils/types'

type ProjectItemProp = {
  project: projectType
}

const ProjectItem: FC<ProjectItemProp> = ({ project }): ReactElement => {
  const [imageSrc, setImageSrc] = useState<string>('')

  useEffect(() => {
    getDownloadURL(ref(storage, project.image)).then((url) => setImageSrc(url))
  }, [project])

  return (
    <div className="flex flex-col mb-10 font-body pb-6 bg-expertise text-primary rounded-lg shadow-lg">
      <div>
        <img
          className="rounded-tl-lg rounded-tr-lg w-full filter grayscale hover:grayscale-0 transition"
          src={imageSrc}
          alt={project.name}
        />
      </div>
      <div className="px-4 pt-4">
        <div className="font-semibold text-xl">{project.name}</div>
        <div className="py-4">{project.description}</div>
        <div className="space-x-2">
          <a
            className="px-2 py-2 hover:bg-alternate transition text-sm hover:text-primary bg-primary rounded text-alternate"
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="px-2 py-2 hover:bg-alternate transition text-sm hover:text-primary bg-primary rounded text-alternate"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {project.isDemoLink ? 'Demo' : 'Website'}
          </a>
        </div>
        <div></div>
        {project.technologies && (
          <div className="pt-4 flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <TechnologyItem
                key={index}
                name={tech}
                backgroundColor="bg-primary text-white"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
