import { FC, ReactElement } from 'react'
import { education } from '../data/education'
import EducationItem from '../components/EducationItem'
import Header from '../components/Header'

const Education: FC = (): ReactElement => {
  return (
    <div className="flex">
      <div className="bg-alternate w-full px-8 py-16">
        {education &&
          education.map((ed, index) => (
            <EducationItem education={ed} key={index} />
          ))}
      </div>
      <div>
        <Header title="EDUCATION" color="bg-about" />
      </div>
    </div>
  )
}

export default Education
