import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import { useRef } from 'react';
function App() {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
   <Navbar  scrollToSection={scrollToSection} 
        contactRef={contactRef} 
        servicesRef={servicesRef} 
        aboutRef={aboutRef}></Navbar>
   <Hero></Hero>
    <About  ref={aboutRef}></About>
    <Services  ref={servicesRef}></Services>
    <Footer  ref={contactRef}></Footer>
   </div>
  );
}
export default App;


