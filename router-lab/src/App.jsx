import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
<nav>
        <ul>
          <li>
            <Link className="kalvium" to="/">KALVIUM❤️</Link>
          </li>
          <div>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
