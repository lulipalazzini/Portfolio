import "./App.css";
import "./styles/variables.css";

import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </>
  );
}

export default App;
