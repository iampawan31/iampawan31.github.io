import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'

const Introduction: FC = (): ReactElement => {
  return (
    <div className="w-full bg-introduction rounded-tr-3xl rounded-tl-3xl">
      <div className="flex flex-row">
        <img
          className="w-96 rounded-tl-3xl"
          src="/profile-picture-new.jpg"
          alt="profile"
        />
        <div className="px-16">
          <div className="font-primary text-4xl md:text-4xl sm:text-4xl xs:text-4x lg:text-7xl pt-8 pb-4">
            Hello <br /> I'm <br /> Pawan Kumar
          </div>
          <div className="font-primary text-2xl py-4">Web Developer</div>
          <div className="font-primary">{basicInformation.about}</div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
