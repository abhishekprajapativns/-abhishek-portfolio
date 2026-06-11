import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Highlights from "./components/Highlights";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0d0a1e] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Highlights />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
