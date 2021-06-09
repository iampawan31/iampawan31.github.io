import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="font-heading font-bold text-6xl text-primary pb-8">
        about
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 gap-4">
        <div className="font-heading font-normal break-words text-md text-primary">
          Experienced Full Stack Developer with a demonstrated history of
          working in the computer software industry. Skilled in PHP, Laravel
          Framework, VueJs, NuxtJs. Have experience using TDD Approach for
          building applications. Strong engineering professional with a Bachelor
          of Engineering (B.E.) focused in computer ccience from VTU, Belgaum,
          India.
        </div>
        <div className="mx-auto">
          <img
            className="ring-8 ring-primary mx-auto text-center rounded-full w-2/3"
            src="/profile-picture.jpg"
            alt="profile"
          />
        </div>
        <div>
          <p className="font-heading text-primary font-extrabold text-md">
            Name: <span className="font-normal">Pawan Kumar</span>
          </p>
          <p className="font-heading text-primary font-extrabold text-md">
            Age: <span className="font-normal">31 years</span>
          </p>
          <p className="font-heading text-primary font-extrabold text-md">
            Location:{' '}
            <span className="font-normal">Kanpur, Uttar Pradesh, India</span>
          </p>
          <div className="grid grid-cols-7 gap-2 mt-2">
            <FontAwesomeIcon
              size="2x"
              className="text-primary"
              icon={faGithub}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-primary"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-primary"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-primary"
              icon={faFacebook}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
