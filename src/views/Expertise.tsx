import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faLaravel,
  faNode,
  faNodeJs,
  faNpm,
  faPhp,
  faReact,
  faVuejs,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FC, ReactElement } from 'react'
import ExpertiseItem from '../components/ExpertiseItem'
import Header from '../components/Header'

const Expertise: FC = (): ReactElement => {
  return (
    <div className="flex">
      <div className="bg-alternate flex flex-row flex-wrap gap-x-8 gap-y-8 p-16">
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
      <div>
        <Header title="Expertise" color="bg-expertise" />
      </div>
    </div>
  )
}

export default Expertise
