import { FC, ReactElement, useEffect, useState } from 'react'
import DarkModeButton from '../components/DarkModeButton'
import { DARK, LIGHT } from '../utils/constants'
import { socialLinksType } from '../utils/types'

type SidebarProps = {
  socialLinks: socialLinksType | undefined
}

const Sidebar: FC<SidebarProps> = ({ socialLinks }): ReactElement => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT
  )

  const colorTheme: string = theme === LIGHT ? DARK : LIGHT

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])

  return (
    <div className="flex p-4 md:py-0 md:flex-col justify-between md:justify-start text-primary dark:text-alternate md:h-full md:text-center md:w-16 md:fixed">
      <div className="">
        <a
          href="/"
          className="sidebar-name font-primary text-2xl font-semibold"
        >
          Pawan Kumar
        </a>
      </div>
      <div className="hidden md:flex flex-col">
        <div className="py-4">
          <a
            className="font-primary text-md sidebar-link"
            href={socialLinks?.github}
            target="_blank"
            rel="noreferrer"
          >
            GI.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-md sidebar-link"
            href={socialLinks?.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LI.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-md sidebar-link"
            href={socialLinks?.twitter}
            target="_blank"
            rel="noreferrer"
          >
            TW.
          </a>
        </div>
        <div className="py-4">
          <a
            className="font-primary text-md sidebar-link"
            href={socialLinks?.facebook}
            target="_blank"
            rel="noreferrer"
          >
            FB.
          </a>
        </div>
      </div>
      <div>
        <DarkModeButton
          colorTheme={theme}
          setTheme={(color) => setTheme(color)}
        />
      </div>
    </div>
  )
}

export default Sidebar
