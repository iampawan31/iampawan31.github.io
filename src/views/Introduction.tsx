import { FC, ReactElement } from 'react'

const Introduction: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col bg-alternate dark:bg-off-white shadow-sm rounded-tl rounded-tr">
        <div className="text-center text-4xl md:text-4xl sm:text-4xl xs:text-4xl font-primary lg:text-7xl pt-8 pb-2">
          PAWAN KUMAR
        </div>
        <div className="text-center font-primary text-2xl pb-8">
          Web Developer
        </div>
      </div>
    </div>
  )
}

export default Introduction
