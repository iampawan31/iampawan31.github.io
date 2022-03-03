import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { educationType } from '../utils/types'

type EducationItemProps = {
  education: educationType
}

const EducationItem: FC<EducationItemProps> = ({ education }): ReactElement => {
  return (
    <div className="mb-10 font-body py-6 bg-about text-white rounded-lg shadow px-2">
      <div className="mb-2 text-xl">
        <span className="font-bold">{education.institutionName}</span>
      </div>
      <div className="font-bold mb-2">{education.degree}</div>
      <div className="mb-2">{`${education.startedOn} - ${education.completedOn}`}</div>
      <div className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {`${education.city}, ${education.state}`}
      </div>
    </div>
  )
}

export default EducationItem
