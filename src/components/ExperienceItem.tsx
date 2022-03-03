import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import TechnologyItem from './TechnologyItem'

import { experienceType } from '../utils/types'

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
        <div className="pt-4 flex flex-wrap">
          {experience.technologies.map((tech, index) => (
            <TechnologyItem
              key={index}
              name={tech}
              backgroundColor="bg-primary text-white"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
