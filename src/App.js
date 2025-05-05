import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Company from './components/pages/Company';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/company'>Company</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/newproject'>NewProject</Link>
      </div>
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
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
