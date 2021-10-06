import { FC, ReactElement, useEffect, useState } from 'react'
import DarkModeButton from './components/DarkModeButton'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'
import Sidebar from './components/Sidebar'
import { DARK, LIGHT } from './constants'
import About from './views/About'
import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experience'
import Expertise from './views/Expertise'
import Introduction from './views/Introduction'
import Projects from './views/Projects'

const App: FC = (): ReactElement => {
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
    <div className="pt-10 bg-off-white font-alternate  dark:bg-primary text-primary dark:text-off-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-11">
            <DarkModeButton
              colorTheme={theme}
              setTheme={(color) => setTheme(color)}
            />
            <Introduction />
            <About />
            <Expertise />
            <Experience />
            <Education />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
