import Header from './components/Header';
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App h-screen">
      <div className="md:container md:mx-auto">
        <Header />
        <Introduction />
        <Expertise />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
