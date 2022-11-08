import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}