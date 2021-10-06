import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { basicInformation } from '../data/basic'

const Sidebar = () => {
  return (
    <div className="dark:bg-primary text-primary dark:text-white h-full text-center w-16 fixed">
      <div className="pb-4">
        <FontAwesomeIcon fixedWidth size="lg" icon={faHamburger} />
      </div>
      <div className="">
        <a
          href="/"
          className="sidebar-name font-primary py-4 text-2xl font-semibold"
        >
          Pawan Kumar
        </a>
      </div>
      <div>
        <div className="py-4">
          <a
            className="font-primary text-lg sidebar-link"
            href={basicInformation.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            GI.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-lg sidebar-link"
            href={basicInformation.linkedinLink}
            target="_blank"
            rel="noreferrer"
          >
            LI.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-lg sidebar-link"
            href={basicInformation.twitterLink}
            target="_blank"
            rel="noreferrer"
          >
            TW.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-lg sidebar-link"
            href={basicInformation.facebookLink}
            target="_blank"
            rel="noreferrer"
          >
            FB.
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
