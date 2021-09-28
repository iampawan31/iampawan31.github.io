import { FC, ReactElement } from 'react'
import { experience } from '../data/experience'
import ExperienceItem from './ExperienceItem'
import Header from './Header'

const Experience: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="bg-alternate shadow-sm px-4 py-10">
        <Header title="EXPERIENCE" />
        {experience &&
          experience.map((ex, index) => (
            <ExperienceItem experience={ex} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Experience
