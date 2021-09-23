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
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ExpertiseItem from "./ExpertiseItem";

const Expertise = () => {
  return (
    <div className="container mx-auto">
      <div className="font-primary font-bold text-6xl text-primary dark:text-alternate pb-8">
        EXPERTISE
      </div>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        <ExpertiseItem icon={faLaravel} />
        <ExpertiseItem icon={faReact} />
        <ExpertiseItem icon={faVuejs} />
        <ExpertiseItem icon={faHtml5} />
        <ExpertiseItem icon={faCss3} />
        <ExpertiseItem icon={faPhp} />
        <ExpertiseItem icon={faJs} />
        <ExpertiseItem icon={faNodeJs} />
        <ExpertiseItem icon={faNode} />
        <ExpertiseItem icon={faNpm} />
        <ExpertiseItem icon={faWordpress} />
        <ExpertiseItem icon={faGit} />
        <ExpertiseItem icon={faDatabase} />
      </div>
    </div>
  );
};

export default Expertise;
