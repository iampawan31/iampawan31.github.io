import { education } from '../data/education'
import Header from './Header'
import EducationItem from './EducationItem'
import { FC, ReactElement } from 'react'

const Education: FC = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <Header title="EDUCATION" />
      {education &&
        education.map((ed, index) => (
          <EducationItem education={ed} key={index} />
        ))}
    </div>
  )
}

export default Education
