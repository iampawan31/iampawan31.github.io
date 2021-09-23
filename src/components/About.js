import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";

const About = () => {
  return (
    <div className="container mx-auto py-10 text-primary dark:text-alternate">
      <Header title="ABOUT" />
      <div className="font-body grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 gap-4">
        <div className="break-words text-md">
          Experienced Full Stack Developer with a demonstrated history of
          working in the computer software industry. Skilled in PHP, Laravel
          Framework, VueJs, NuxtJs. Have experience using TDD Approach for
          building applications. Strong engineering professional with a Bachelor
          of Engineering (B.E.) focused in computer science from VTU, Belgaum,
          India.
        </div>
        <div className="mx-auto">
          <img
            className="mx-auto text-center shadow-lg rounded-full w-2/3"
            src="/profile-picture.jpg"
            alt="profile"
          />
        </div>
        <div className="text-primary dark:text-alternate">
          <p className="font-body  font-extrabold text-md">
            Age:<span className="pl-2 font-body font-normal">31 years</span>
          </p>
          <p className="font-body font-extrabold text-md">
            Location:
            <span className="pl-2 font-body font-normal">
              Kanpur, Uttar Pradesh, India
            </span>
          </p>
          <div className="grid grid-cols-7 gap-2 mt-2">
            <FontAwesomeIcon size="2x" icon={faGithub} />
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
            <FontAwesomeIcon size="2x" icon={faTwitter} />
            <FontAwesomeIcon size="2x" icon={faFacebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
