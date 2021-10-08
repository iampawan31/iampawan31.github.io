import { FC, ReactElement } from 'react'

type HeaderPropTypes = {
  title: string
  color: string
}

const Header: FC<HeaderPropTypes> = ({ title, color }): ReactElement => {
  return (
    <div
      className={`w-96 h-96 text-primary flex flex-wrap justify-center content-center capitalize font-primary text-center lg:text-left text-2xl lg:text-4xl ${color}`}
    >
      {title}
    </div>
  )
}

export default Header
