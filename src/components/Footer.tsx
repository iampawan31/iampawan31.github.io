import { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="bg-primary dark:bg-alternate dark:text-primary py-5 text-alternate mt-16">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="font-primary">PAWAN KUMAR</div>
          <div className="font-primary">{currentYear}</div>
          <div className="font-primary">MADE WITH REACT</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
