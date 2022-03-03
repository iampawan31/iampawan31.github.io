import { FC, ReactElement } from 'react'
import { TechnologyItemType } from '../utils/types'

type TechnologyItemProps = TechnologyItemType | null

const TechnologyItem: FC<TechnologyItemProps> = ({
  name,
  backgroundColor,
}): ReactElement => {
  return (
    <span
      className={`${backgroundColor} mr-2 text-sm rounded-lg text-primary dark:bg-primary dark:text-alternate px-2 py-1 my-1`}
    >
      {`#${name}`}
    </span>
  )
}

export default TechnologyItem
