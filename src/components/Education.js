import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="font-heading font-bold text-6xl text-primary pb-8">
        education
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <div>
          <h1 className="font-heading text-primary text-md font-bold mb-2">
            Visvesvaraya Technological University
          </h1>
          <p className="font-heading text-primary">September 2009 - May 2013</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-heading text-primary font-bold mb-2">
            Bachelor’s Degree (Computer Science)
          </h1>
          <p className="font-heading text-primary">
            Completing projects for clients based out of India and US.
          </p>
          <p className="text-primary mt-2">
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={faMapMarkerAlt}
            />
            Bangalore
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <div>
          <h1 className="font-heading text-primary text-md font-bold mb-2">
            Kendriya Vidyalaya
          </h1>
          <p className="font-heading text-primary">March 1995 - March 2007</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-heading text-primary font-bold mb-2">
            Highschool
          </h1>
          <p className="font-heading text-primary">
            I was responsible for understanding the project requirements and
            come up with Specification document and design and develop the
            application. I was given the responsibility to decide on the tech
            stack for the project. Designed and developed the application. Added
            various features to the application using third party libraries.
            Also wrote automated tests for bug free code. Deployed the
            application to web server.
          </p>
          <p className="text-primary mt-2">
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={faMapMarkerAlt}
            />
            New Delhi, India
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <div>
          <h1 className="font-heading text-primary text-md font-bold mb-2">
            Anti Alias Ventures
          </h1>
          <p className="font-heading text-primary">August 2014 - March 2016</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-heading text-primary font-bold mb-2">
            Full Stack Developer
          </h1>
          <p className="font-heading text-primary">
            I was responsible for handling projects using different technologies
            and work with a team of developers. Responsibilities included work
            on various projects and interact with clients to understand their
            requirements, work with a team of developers to deliver the projects
            with strict deadlines, review and give feedback to junior developer
            on code quality and refactoring.
          </p>
          <p className="text-primary mt-2">
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={faMapMarkerAlt}
            />
            New Delhi, India
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <div>
          <h1 className="font-heading text-primary text-md font-bold mb-2">
            Anti Alias Ventures
          </h1>
          <p className="font-heading text-primary">July 2014 - August 2014</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-heading text-primary font-bold mb-2">
            Intern - Web Developer
          </h1>
          <p className="font-heading text-primary">
            Joined Anti Alias as web developer intern. Responsibilities included
            work on various tasks assigned by senior developer(s), testing the
            projects for bugs and give feedback and improve technical and
            communication skills.
          </p>
          <p className="text-primary mt-2">
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={faMapMarkerAlt}
            />
            New Delhi, India
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <div>
          <h1 className="font-heading text-primary text-md font-bold mb-2">
            Mphasis Limited
          </h1>
          <p className="font-heading text-primary">June 2013 - May 2014</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-heading text-primary font-bold mb-2">
            Service Support Engineer
          </h1>
          <p className="font-heading text-primary">
            Respond to Enterprise customer queries via inbound calls, emails,
            chat and web tickets within defined SLAs,Logging incidents and
            service requests, categorising and prioritising them, and managing
            their life cycle as per ITIL guidelines. Update users about request
            status and close request when users are satisfied with solutions,
            Level 1 troubleshooting mainly related to desktop/OS, Custom and
            COTS applications, Exchange related, End devices, VPN, VOIP and
            share point as per guidelines in the knowledge base. Remote desktop
            troubleshooting. Escalate complex incidents / requests to upstream
            technical groups. Operating the computer, OS and Knowledge base
            navigation
          </p>
          <p className="text-primary mt-2">
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={faMapMarkerAlt}
            />
            Bengaluru, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
