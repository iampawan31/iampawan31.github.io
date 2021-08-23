import Introduction from "./components/Introduction";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import SectionBreak from "./components/SectionBreak";

function App() {
  return (
    <div className="App h-full bg-alternate py-5">
      <Introduction />
      <About />
      <SectionBreak />
      <Expertise />
      <SectionBreak />
      <Experience />
      <SectionBreak />
      <Education />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
