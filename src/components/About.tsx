import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'
import Header from './Header'

const About: FC = (): ReactElement => {
  return (
    <div className="container mx-auto text-primary">
      <div className="bg-alternate shadow-sm px-4 py-10">
        <Header title="ABOUT" />
        <div className="font-body grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 gap-4">
          <div className="break-words text-md">{basicInformation.about}</div>
          <div className="mx-auto">
            <img
              className="mx-auto text-center shadow-lg rounded-full w-2/3"
              src="/profile-picture.jpg"
              alt="profile"
            />
          </div>
          <div className="text-primary">
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
    </div>
  )
}

export default About
