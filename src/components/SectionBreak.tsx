import { FC, ReactElement } from 'react'

const SectionBreak: FC = (): ReactElement => {
  return (
    <div className="md:container md:mx-auto py-10 w-full">
      <hr className="bg-primary dark:bg-alternate p-1" />
    </div>
  )
}

export default SectionBreak
