import 'bootstrap/dist/css/bootstrap.min.css';     
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import 'bootstrap-icons/font/bootstrap-icons.css';   
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './Styles/Style.css';


function App() {
    useEffect(() => {
        AOS.init({ once: true }); 
      }, []);
    
    return (
      <>
        <Header />
        <main className="pt-5" id="home">
          <About />
          <Skills />
          <Projects />
          <Timeline />
        </main>
        <Contact />
        </>
    );
  }
  
  export default App;
  
