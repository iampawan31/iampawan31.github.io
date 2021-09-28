import { FC, ReactElement } from 'react'

const SectionBreak: FC = (): ReactElement => {
  return (
    <div className="md:container md:mx-auto w-full">
      <hr className="bg-primary dark:bg-primary p-1" />
    </div>
  )
}

export default SectionBreak
