import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { basicInformation } from '../data/basic'

const Footer: FC = (): ReactElement => {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="text-primary dark:text-off-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4 flex-wrap text-center content-center">
          <div className="font-primary">{currentYear}</div>
          <div className="flex space-x-4">
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

export default Footer
