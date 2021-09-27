import { FC, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

type DarkModeProps = {
  colorTheme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const DarkModeButton: FC<DarkModeProps> = ({
  colorTheme,
  setTheme,
}): ReactElement => {
  return (
    <div className="fixed top-5 right-5 transition-all">
      <button
        onClick={() => setTheme(colorTheme === 'dark' ? 'light' : 'dark')}
        className="transition-all cursor-pointer focus:outline-none"
      >
        <FontAwesomeIcon
          size="2x"
          icon={colorTheme === 'light' ? faMoon : faSun}
        />
      </button>
    </div>
  )
}

export default DarkModeButton
