import { FC, ReactElement } from 'react'
import ExpertiseItem from '../components/ExpertiseItem'
import Header from '../components/Header'
import { EXPERTISE } from '../utils/constants'

const Expertise: FC = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-alternate dark:bg-primary grid grid-cols-3 grid-flow-row md:grid-rows-4 md:grid-flow-col w-full p-8 gap-4">
        <ExpertiseItem icon={EXPERTISE.REACT} />
        <ExpertiseItem icon={EXPERTISE.VUEJS} />
        <ExpertiseItem icon={EXPERTISE.NUXTJS} />
        <ExpertiseItem icon={EXPERTISE.LARAVEL} />
        <ExpertiseItem icon={EXPERTISE.NEXTJS} />
        <ExpertiseItem icon={EXPERTISE.NODEJS} />
        <ExpertiseItem icon={EXPERTISE.TAILWINDCSS} />
        <ExpertiseItem icon={EXPERTISE.BOOTSTRAP} />
        <ExpertiseItem icon={EXPERTISE.CSS3} />
        <ExpertiseItem icon={EXPERTISE.EXPRESS} />
        <ExpertiseItem icon={EXPERTISE.GITHUB} />
        <ExpertiseItem icon={EXPERTISE.HTML5} />
        <ExpertiseItem icon={EXPERTISE.JAVASCRIPT} />
        <ExpertiseItem icon={EXPERTISE.SASS} />
      </div>
      <div className="order-first md:order-last">
        <Header title="Expertise" dark={false} color="bg-expertise" />
      </div>
    </div>
  )
}

export default Expertise
