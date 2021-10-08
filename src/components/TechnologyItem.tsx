import { FC, ReactElement } from 'react'

type TechnologyItemProps = {
  name: string
}

const TechnologyItem: FC<TechnologyItemProps> = ({ name }): ReactElement => {
  return (
    <span className="mr-2 text-sm rounded-lg bg-alternate text-primary dark:bg-primary dark:text-alternate px-2 py-1 my-1">
      {name}
    </span>
  )
}

export default TechnologyItem
