import { FC, ReactElement } from 'react'

type HeaderPropTypes = {
  title: string
}

const Header: FC<HeaderPropTypes> = ({ title }): ReactElement => {
  return (
    <div className="font-primary font-bold text-center lg:text-left text-3xl lg:text-6xl pb-8">
      {title}
    </div>
  )
}

export default Header
