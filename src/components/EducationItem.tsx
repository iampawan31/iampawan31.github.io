import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'

type EducationItemProps = {
  education: {
    institutionName: string
    attendedFrom: string
    attendedTo: string
    degree: string
    location: string
  }
}

const EducationItem: FC<EducationItemProps> = ({ education }): ReactElement => {
  return (
    <div className="font-body mb-10 py-6 bg-primary dark:bg-alternate text-alternate dark:text-primary rounded-lg shadow px-2">
      <div className="mb-2 text-xl">
        <span className="font-bold">{education.institutionName}</span>
      </div>
      <div className="font-bold mb-2">{education.degree}</div>
      <div className="mb-2">{`${education.attendedFrom} - ${education.attendedTo}`}</div>
      <div className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {education.location}
      </div>
    </div>
  )
}

export default EducationItem
