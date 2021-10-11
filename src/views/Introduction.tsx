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
          <div className="font-body font-light text-4xl md:text-7xl py-6">
            Hello <br /> I'm <br /> Pawan Kumar
          </div>
          <div className="font-body md:text-lg py-6">
            {basicInformation.about}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
