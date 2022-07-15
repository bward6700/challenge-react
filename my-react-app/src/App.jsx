
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';
import Home from './pages/Home';

const App = () => {
  return <Router>
    <nav>
    <Link to='/'>Home</Link>
    <Link to='About'>About</Link>
    <Link to='Contact'>Contact</Link>

    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='*' element={<Errorpage/>} />

    </Routes>
  </Router>;
};

export default App;