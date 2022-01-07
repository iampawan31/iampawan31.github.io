import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'

const Introduction: FC = (): ReactElement => {
  return (
    <div className="w-full lg:bg-introduction px-4 md:px-0 ">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-96 h-96 md:h-auto object-top object-cover"
          src="/profile-picture-new.jpg"
          alt="profile"
        />
        <div className="md:px-16 md:py-16">
          <div className="font-body font-light text-4xl md:text-7xl pt-4 pb-0 md:py-6 dark:text-white text-primary md:dark:text-primary md:text-primary">
            Hello <br /> I'm <br className="hidden md:block" /> Pawan Kumar
          </div>
          <div className="font-body text-xl md:text-lg py-6 dark:text-white text-primary md:dark:text-primary md:text-primary">
            {basicInformation.about}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
