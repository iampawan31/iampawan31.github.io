import { FC, ReactElement } from 'react'
import { experience } from '../data/experience'
import ExperienceItem from './ExperienceItem'
import Header from './Header'

const Experience: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <Header title="EXPERIENCE" />
      {experience &&
        experience.map((ex, index) => (
          <ExperienceItem experience={ex} key={index} />
        ))}
    </div>
  )
}

export default Experience
