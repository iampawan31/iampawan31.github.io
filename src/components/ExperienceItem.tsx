import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { experienceType } from '../utils/types'
import ExpertiseItem from './ExpertiseItem'

type ExperienceItemProp = {
  experience: experienceType | null
}

const ExperienceItem: FC<ExperienceItemProp> = ({
  experience,
}): ReactElement => {
  return (
    <div className="mb-10 font-body py-6 bg-experience text-primary rounded-lg shadow px-2">
      <div className="mb-2 text-xl">
        <span className="font-bold">{experience?.jobTitle} - </span>
        {experience?.company}
      </div>
      <div className="mb-2">
        <span className="px-2 py-1 rounded-lg bg-alternate text-primary">{`${experience?.from} - ${experience?.to}`}</span>
      </div>
      <div>{experience?.responsibilities}</div>
      <p className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {experience?.location}
      </p>
      {experience?.technologies && (
        <div className="pt-4 grid grid-cols-6 md:grid-flow-col md:grid-cols-12 gap-2">
          {experience.technologies.map((tech, index) => (
            <ExpertiseItem
              key={index}
              icon={`fill-${tech}`}
              width="w-10"
              height="w-10"
              padding="p-2"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
