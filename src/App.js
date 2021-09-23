import { useEffect } from "react";

import Introduction from "./components/Introduction";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionBreak from "./components/SectionBreak";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const root = window.document.documentElement;
    root.removeAttribute("class");
    root.classList.add(isDarkMode ? "dark" : "light");
  }, []);
  return (
    <div className="App h-full bg-alternate font-alternate dark:bg-primary text-primary dark:text-alternate">
      <DarkModeButton />
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
  );
}

export default App;
