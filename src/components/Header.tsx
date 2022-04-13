import { FC, ReactElement } from 'react'

type HeaderPropTypes = {
  title: string
  dark: boolean
  color: string
}

const Header: FC<HeaderPropTypes> = ({ title, color, dark }): ReactElement => {
  return (
    <div
      className={`w-full h-16 md:w-96 md:h-96 ${
        dark ? 'text-white' : 'text-primary'
      } flex flex-wrap justify-center content-center capitalize font-primary text-center lg:text-left text-2xl lg:text-4xl ${color}`}
    >
      {title}
    </div>
  )
}

export default Header
