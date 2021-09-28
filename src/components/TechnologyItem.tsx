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
      className="mr-2 rounded-lg group-hover:bg-alternate group-hover:text-primary dark:group-hover:bg-primary dark:group-hover:text-alternate dark:bg-alternate py-1 bg-primary px-2"
      key={index}
    >
      {name}
    </span>
  )
}

export default TechnologyItem
