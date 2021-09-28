import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'

type ExpertiseItemProps = {
  icon: IconProp
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({ icon }): ReactElement => {
  return (
    <div className="p-6 inline bg-dark text-primary hover:bg-primary hover:text-alternate dark:text-alternate dark:hover:bg-alternate dark:hover:text-primary transition-all duration-200 rounded">
      <FontAwesomeIcon size="3x" icon={icon} />
    </div>
  )
}

export default ExpertiseItem
