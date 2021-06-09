import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faPhp,
  faJs,
  faVuejs,
  faNodeJs,
  faReact,
  faLaravel,
  faNode,
  faNpm,
  faWordpress,
  faMagento,
  faAws,
  faDigitalOcean,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Expertise = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="font-heading font-bold text-6xl text-primary pb-8">
        expertise
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
        <FontAwesomeIcon
          size="6x"
          className="text-primary text-center"
          icon={faLaravel}
        />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faReact} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faVuejs} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faHtml5} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faCss3} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faPhp} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faJs} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faNodeJs} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faNode} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faNpm} />
        <FontAwesomeIcon
          size="6x"
          className="text-primary"
          icon={faWordpress}
        />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faMagento} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faAws} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faGit} />
        <FontAwesomeIcon size="6x" className="text-primary" icon={faDatabase} />
        <FontAwesomeIcon
          size="6x"
          className="text-primary"
          icon={faDigitalOcean}
        />
      </div>
    </div>
  );
};

export default Expertise;
