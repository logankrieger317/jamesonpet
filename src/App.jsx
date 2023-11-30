import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Book from './components/Book'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import DevTeam from './components/DevTeam'
import Small from './components/Small'
import Large from './components/Large'
import Long from './components/Long'
import Short from './components/Short'
import Addons from './components/Addons'
import Faq from './components/Faq'



import './App.css'

function App() {
  

  return (
    <>
     <div>
     
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/devteam" element={<DevTeam />} />
          <Route path="/small" element={<Small />} />
          <Route path="/large" element={<Large />} />
          <Route path="/long" element={<Long />} />
          <Route path="/short" element={<Short />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
     </div>
    </>
  )
}

export default App
