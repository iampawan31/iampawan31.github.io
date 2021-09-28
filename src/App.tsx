import { FC, ReactElement, useEffect, useState } from 'react'
import DarkModeButton from './components/DarkModeButton'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'
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
    <div className="App h-full pt-10 bg-off-white font-alternate dark:bg-primary text-primary dark:text-primary">
      <DarkModeButton
        colorTheme={theme}
        setTheme={(color) => setTheme(color)}
      />
      <Introduction />
      <About />
      <SectionBreak />
      <Expertise />
      <SectionBreak />
      <Experience />
      <SectionBreak />
      <Education />
      <SectionBreak />
      <Projects />
      <SectionBreak />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
