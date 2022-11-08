import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}