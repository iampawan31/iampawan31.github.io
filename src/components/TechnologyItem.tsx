import { FC, ReactElement } from 'react'

type TechnologyItemProps = {
  name: string
  backgroundColor?: string
}

const TechnologyItem: FC<TechnologyItemProps> = ({
  name,
  backgroundColor,
}): ReactElement => {
  return (
    <span
      className={`${backgroundColor} mr-2 text-sm rounded-lg text-primary dark:bg-primary dark:text-alternate px-2 py-1 my-1`}
    >
      {name}
    </span>
  )
}

export default TechnologyItem
