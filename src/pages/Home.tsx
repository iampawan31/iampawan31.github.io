import React from 'react'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import About from '../views/About'
import Contact from '../views/Contact'
import Education from '../views/Education'
import Experience from '../views/Experience'
import Expertise from '../views/Expertise'
import Introduction from '../views/Introduction'
import Projects from '../views/Projects'

const Home = () => {
  return (
    <div className="md:pt-10 bg-off-white font-alternate  dark:bg-primary text-primary">
      <div className="md:container mx-auto">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="md:ml-16 flex flex-col">
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

export default Home
