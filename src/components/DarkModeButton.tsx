import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactElement } from 'react'
import { DARK, LIGHT } from '../utils/constants'

type DarkModeProps = {
  colorTheme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const DarkModeButton: FC<DarkModeProps> = ({
  colorTheme,
  setTheme,
}): ReactElement => {
  return (
    <div className="">
      <button
        onClick={() => setTheme(colorTheme === DARK ? LIGHT : DARK)}
        className="transition-all cursor-pointer focus:outline-none"
      >
        <FontAwesomeIcon
          size="2x"
          className="text-primary dark:text-alternate"
          icon={colorTheme === LIGHT ? faMoon : faSun}
        />
      </button>
    </div>
  )
}

export default DarkModeButton
