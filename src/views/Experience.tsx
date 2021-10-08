import { FC, ReactElement } from 'react'
import { experience } from '../data/experience'
import ExperienceItem from '../components/ExperienceItem'
import Header from '../components/Header'

const Experience: FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Header title="Experience" color="bg-experience" />
      </div>
      <div className="bg-alternate px-8 py-16">
        {experience &&
          experience.map((ex, index) => (
            <ExperienceItem experience={ex} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Experience
