import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, FC } from 'react'

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
    <div className="pb-10 font-body py-6 group hover:bg-primary dark:hover:bg-alternate dark:hover:text-primary hover:text-alternate rounded-lg transition hover:shadow px-2">
      <div>
        <span className="font-bold">{experience.jobTitle}</span> -
        {experience.company}
      </div>
      <div>{`${experience.from} - ${experience.to}`}</div>
      <p>{experience.responsibilities}</p>
      <p className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {experience.location}
      </p>
      {experience.technologies && (
        <div className="pt-4">
          {experience.technologies.map((tech, index) => (
            <span
              className="mr-2 rounded-lg group-hover:bg-alternate dark:group-hover:bg-primary dark:bg-alternate py-1 bg-primary px-2"
              style={{ color: tech.color }}
              key={index}
            >
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
