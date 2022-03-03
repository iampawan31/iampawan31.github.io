import { collection, getDocs } from 'firebase/firestore'
import { FC, ReactElement, useRef, useState, useEffect } from 'react'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { db } from './firebase-config'
import About from './views/About'
import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experience'
import Expertise from './views/Expertise'
import Introduction from './views/Introduction'
import Projects from './views/Projects'
import {
  basicInformationType,
  educationType,
  socialLinksType,
} from './utils/types'

const App: FC = (): ReactElement => {
  const loaderRef = useRef<LoadingBarRef | null>(null)
  const [portfolio, setPortfolio] = useState<any>([])
  const [introduction, setIntroduction] = useState<basicInformationType>()
  const [education, setEducation] = useState<[educationType]>()
  const [socialLinks, setSocialLinks] = useState<socialLinksType>()

  const startLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.continuousStart(0, 500)
    }
  }

  const completeLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.complete()
    }
  }

  const getPortfolio = async () => {
    startLoader()
    const portfolioRef = collection(db, 'portfolio')
    const data = await getDocs(portfolioRef)
    const usersData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setPortfolio(usersData)
    completeLoader()
  }

  useEffect(() => {
    getPortfolio()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (portfolio) {
      setIntroduction(
        portfolio.filter((d: any) => d.type === 'basic_information')[0]
      )
      setEducation(portfolio.filter((d: any) => d.type === 'education'))
      setSocialLinks(portfolio.filter((d: any) => d.type === 'social_links')[0])
    }
  }, [portfolio])

  return (
    <>
      <LoadingBar color="#1b74e4" height={5} shadow ref={loaderRef} />
      <div className="md:pt-10 bg-off-white font-alternate  dark:bg-primary text-primary">
        <div className="md:container mx-auto">
          <div className="flex flex-col md:flex-row">
            <Sidebar socialLinks={socialLinks} />
            <div className="md:ml-16 flex flex-col">
              <Introduction introduction={introduction} />
              <About about={introduction} />
              <Expertise />
              <Experience />
              <Education education={education} />
              <Projects />
              <Contact />
              <Footer socialLinks={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
