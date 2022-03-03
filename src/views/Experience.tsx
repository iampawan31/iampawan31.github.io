import { FC, ReactElement } from 'react'
import ExperienceItem from '../components/ExperienceItem'
import Header from '../components/Header'
import { experienceType } from '../utils/types'

type ExperienceProp = {
  experiences: experienceType[] | []
}

const Experience: FC<ExperienceProp> = ({ experiences }): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Header title="Experience" color="bg-experience" />
      </div>
      <div className="dark:bg-primary md:dark:bg-alternate md:bg-alternate px-8 py-16">
        {experiences &&
          experiences
            .sort((a, b) => b.order - a.order)
            .map((experience, index) => (
              <ExperienceItem experience={experience} key={index} />
            ))}
      </div>
    </div>
  )
}

export default Experience
