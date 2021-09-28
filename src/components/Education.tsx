import { FC, ReactElement } from 'react'
import { education } from '../data/education'
import EducationItem from './EducationItem'
import Header from './Header'

const Education: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="bg-alternate shadow-sm px-4 py-10">
        <Header title="EDUCATION" />
        {education &&
          education.map((ed, index) => (
            <EducationItem education={ed} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Education
