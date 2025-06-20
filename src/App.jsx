import "./App.css";
import "./styles/variables.css";

import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
