import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <div className="text-xl font-primary py-16">
            {basicInformation.about}
          </div>
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
          <div className="grid grid-cols-7 gap-2 mt-2">
            <a
              href={basicInformation.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
            <a
              href={basicInformation.linkedinLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
            <a
              href={basicInformation.twitterLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
            <a
              href={basicInformation.facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
