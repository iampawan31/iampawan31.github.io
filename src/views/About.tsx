import { FC, ReactElement } from 'react'
import { basicInformationType } from '../utils/types'
import Header from '../components/Header'

type IntroductionProp = {
  about: basicInformationType | null
}

const About: FC<IntroductionProp> = ({ about }): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="">
        <Header title="About" color="bg-about" />
      </div>
      <div className="md:bg-alternate dark:bg-primary w-full px-4 py-6 md:p-16">
        <div className="text-primary">
          <div className="text-xl font-body py-6 dark:text-white text-primary md:dark:text-off-white md:text-primary">
            {about?.about}
          </div>
          <p className="hidden font-body  font-extrabold text-md dark:text-white text-primary md:dark:text-off-white md:text-primary">
            Age:
            <span className="pl-2 font-body font-normal dark:text-white text-primary md:dark:text-off-white md:text-primary">
              {`${about?.age} years`}
            </span>
          </p>
          <p className="font-body font-extrabold text-md dark:text-white text-primary md:dark:text-off-white md:text-primary">
            Location:
            <span className="pl-2 font-body font-normal">
              {`${about?.city}, ${about?.state}, ${about?.country}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
