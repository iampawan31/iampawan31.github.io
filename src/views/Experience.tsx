import { FC, ReactElement } from 'react'
import { experience } from '../data/experience'
import ExperienceItem from '../components/ExperienceItem'
import Header from '../components/Header'

const Experience: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="bg-alternate dark:bg-off-white shadow-sm px-4 py-10">
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
