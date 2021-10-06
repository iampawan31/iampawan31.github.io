import { FC, ReactElement } from 'react'

type TechnologyItemProps = {
  name: string
  index: number
}

const TechnologyItem: FC<TechnologyItemProps> = ({
  name,
  index,
}): ReactElement => {
  return (
    <span
      className="mr-2 text-sm rounded-lg bg-alternate text-primary dark:bg-primary dark:text-alternate px-2 py-1 my-1"
      key={index}
    >
      {name}
    </span>
  )
}

export default TechnologyItem
