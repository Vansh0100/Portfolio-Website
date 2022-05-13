import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


import Header from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header/>
      <Profile/>
      <Router>
        <Routes>
          <Route index path='/about' element={<About/>} />
        </Routes>
      </Router>
      <About/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Achievements/>
      <Experience/>
      <Footer/>
    </>
  );
}

export default App;
