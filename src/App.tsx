import { FC, ReactElement, useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import DarkModeButton from './components/DarkModeButton'
import Education from './components/Education'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import SectionBreak from './components/SectionBreak'

const App: FC = (): ReactElement => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  const colorTheme: string = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])

  return (
    <div className="App h-full bg-alternate font-alternate dark:bg-primary text-primary dark:text-alternate">
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
