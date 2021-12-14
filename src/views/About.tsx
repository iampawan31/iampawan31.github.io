import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'
import Header from '../components/Header'

const About: FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="">
        <Header title="About" color="bg-about" />
      </div>
      <div className="md:bg-alternate w-full px-4 py-6 md:p-16">
        <div className="text-primary">
          <div className="text-xl font-body py-6 dark:text-white text-primary md:dark:text-primary md:text-primary">
            {basicInformation.about}
          </div>
          <p className="font-body  font-extrabold text-md dark:text-white text-primary md:dark:text-primary md:text-primary">
            Age:
            <span className="pl-2 font-body font-normal dark:text-white text-primary md:dark:text-primary md:text-primary">
              {`${basicInformation.age} years`}
            </span>
          </p>
          <p className="font-body font-extrabold text-md dark:text-white text-primary md:dark:text-primary md:text-primary">
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
