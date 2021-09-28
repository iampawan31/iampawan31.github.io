import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'

type ExpertiseItemProps = {
  icon: IconProp
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({ icon }): ReactElement => {
  return (
    <div className="flex bg-dark text-primary w-24 h-24 justify-center items-center hover:bg-primary hover:text-alternate dark:bg-primary dark:text-alternate dark:hover:bg-alternate dark:hover:text-primary transition-all duration-200 rounded">
      <FontAwesomeIcon size="3x" icon={icon} />
    </div>
  )
}

export default ExpertiseItem
