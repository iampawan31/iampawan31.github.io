import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'

const Introduction: FC = (): ReactElement => {
  return (
    <div className="w-full lg:bg-introduction ">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-96 h-96 md:h-auto object-top object-cover"
          src="/profile-picture-new.jpg"
          alt="profile"
        />
        <div className="md:px-16 md:py-16">
          <div className="font-primary text-4xl md:text-6xl pt-8 pb-4">
            Hello <br /> I'm <br /> Pawan Kumar
          </div>
          <div className="font-primary text-xl md:text-2xl py-4">
            Web Developer
          </div>
          <div className="font-body md:text-xl">{basicInformation.about}</div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
