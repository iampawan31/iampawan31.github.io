import { FC, ReactElement } from 'react'

const SectionBreak: FC = (): ReactElement => {
  return (
    <div className="w-full">
      <hr className="bg-primary dark:bg-off-white p-1" />
    </div>
  )
}

export default SectionBreak
