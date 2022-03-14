import { collection, getDocs } from 'firebase/firestore'
import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { db } from './firebase-config'
import {
  BASIC_INFORMATION_TYPE,
  EDUCATION_TYPE,
  EXPERIENCE_TYPE,
  PORTFOLIO_COLLECTION,
  SOCIAL_LINKS_TYPE,
  PROJECT_TYPE,
} from './utils/constants'
import {
  basicInformationType,
  educationType,
  experienceType,
  projectType,
  socialLinksType,
} from './utils/types'
import About from './views/About'
import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experience'
import Expertise from './views/Expertise'
import Introduction from './views/Introduction'
import Projects from './views/Projects'

const loaderColors = [
  '#3D56B2',
  '#198597',
  '#f8a577',
  '#fff48f',
  '#1B8753',
  '#DC3444',
]

const App: FC = (): ReactElement => {
  const loaderRef = useRef<LoadingBarRef | null>(null)
  const [portfolio, setPortfolio] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [introduction, setIntroduction] = useState<basicInformationType | null>(
    null
  )
  const [education, setEducation] = useState<educationType[] | []>([])
  const [socialLinks, setSocialLinks] = useState<socialLinksType | null>(null)
  const [experiences, setExperiences] = useState<experienceType[] | []>([])
  const [projects, setProjects] = useState<projectType[] | []>([])

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
    setLoading(true)
    const portfolioRef = collection(db, PORTFOLIO_COLLECTION)
    const data = await getDocs(portfolioRef)
    const usersData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setPortfolio(usersData)
    completeLoader()
    setLoading(false)
  }

  useEffect(() => {
    getPortfolio()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (portfolio) {
      setIntroduction(
        portfolio.filter((d: any) => d.type === BASIC_INFORMATION_TYPE)[0]
      )
      setEducation(portfolio.filter((d: any) => d.type === EDUCATION_TYPE))
      setExperiences(portfolio.filter((d: any) => d.type === EXPERIENCE_TYPE))
      setSocialLinks(
        portfolio.filter((d: any) => d.type === SOCIAL_LINKS_TYPE)[0]
      )
      setProjects(portfolio.filter((d: any) => d.type === PROJECT_TYPE))
    }
  }, [portfolio])

  const loaderColor =
    loaderColors[Math.floor(Math.random() * loaderColors.length)]

  return (
    <>
      <LoadingBar color={loaderColor} height={5} shadow ref={loaderRef} />
      {!loading && (
        <div className="md:pt-10 bg-off-white font-alternate  dark:bg-primary text-primary">
          <div className="md:container mx-auto">
            <div className="flex flex-col md:flex-row">
              <Sidebar socialLinks={socialLinks} />
              <div className="md:ml-16 flex flex-col">
                <Introduction introduction={introduction} />
                <About about={introduction} />
                <Expertise />
                <Experience experiences={experiences} />
                <Education education={education} />
                <Projects projects={projects} />
                <Contact />
                <Footer socialLinks={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
