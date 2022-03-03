import { FC, ReactElement } from 'react'
import EducationItem from '../components/EducationItem'
import Header from '../components/Header'
import { educationType } from '../utils/types'

type EducationProp = {
  education: [educationType] | undefined
}

const Education: FC<EducationProp> = ({ education }): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="dark:bg-primary md:dark:bg-alternate bg-alternate w-full px-8 py-16">
        {education &&
          education
            .sort((a, b) => a.order - b.order)
            .map((ed, index) => <EducationItem education={ed} key={index} />)}
      </div>
      <div className="order-first md:order-last">
        <Header title="Education" color="bg-about" />
      </div>
    </div>
  )
}

export default Education
