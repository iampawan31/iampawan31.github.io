import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import TechnologyItem from './TechnologyItem'

type ExperienceItemProps = {
  experience: {
    company: string
    jobTitle: string
    from: string
    to: string
    responsibilities: string
    location: string
    technologies?: {
      name: string
      color: string
    }[]
  }
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  experience,
}): ReactElement => {
  return (
    <div className="mb-10 font-body py-6 group bg-primary text-alternate dark:bg-alternate dark:text-primary rounded-lg shadow-sm px-2">
      <div className="mb-2 text-xl">
        <span className="font-bold">{experience.jobTitle}</span> -
        {experience.company}
      </div>
      <div className="mb-2">
        <span className="px-2 py-1 rounded-lg bg-alternate dark:bg-primary dark:text-alternate text-primary">{`${experience.from} - ${experience.to}`}</span>
      </div>
      <div>{experience.responsibilities}</div>
      <p className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {experience.location}
      </p>
      {experience.technologies && (
        <div className="pt-4">
          {experience.technologies.map((tech, index) => (
            <TechnologyItem index={index} name={tech.name} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
