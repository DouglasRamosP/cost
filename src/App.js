import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Company from './components/pages/Company';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
