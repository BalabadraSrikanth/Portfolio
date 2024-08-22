import './App.css';
import Mainmenu from './Components/Mainmenu/Mainmenu';
import Skills from './Components/Skills/Skills';
import Home from './Components/Home/Home';
import Aboutme from './Components/Aboutme/Aboutme';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Mainmenu />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="aboutme" className="section">
        <Aboutme />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="project" className="section">
        <Project />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
