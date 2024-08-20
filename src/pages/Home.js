import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import './Home.css'

function HomePage() {
  return (
    <>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
