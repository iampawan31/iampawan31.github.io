import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { socialLinksType } from '../utils/types'

type FooterProps = {
  socialLinks: socialLinksType | null
}

const Footer: FC<FooterProps> = ({ socialLinks }): ReactElement => {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="text-primary dark:text-off-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4 flex-wrap text-center content-center">
          <div className="font-primary">{currentYear}</div>
          <div className="flex space-x-4">
            <a href={socialLinks?.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
            <a href={socialLinks?.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
            <a href={socialLinks?.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
            <a href={socialLinks?.facebook} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
