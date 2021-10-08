import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'
import Header from '../components/Header'

const About: FC = (): ReactElement => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="">
        <Header title="About" color="bg-about" />
      </div>
      <div className="bg-alternate w-full p-16">
        <div className="text-primary">
          <div className="text-xl font-body py-6">{basicInformation.about}</div>
          <p className="font-body  font-extrabold text-md">
            Age:
            <span className="pl-2 font-body font-normal">
              {`${basicInformation.age} years`}
            </span>
          </p>
          <p className="font-body font-extrabold text-md">
            Location:
            <span className="pl-2 font-body font-normal">
              {`${basicInformation.city}, ${basicInformation.state}, ${basicInformation.country}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
