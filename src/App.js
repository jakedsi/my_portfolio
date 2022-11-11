import React, {lazy, Suspense} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Home = lazy(()=>import('./components/Home/Home'))
const Projects = lazy(()=>import('./components/Projects/Projects'))
const About = lazy(()=>import('./components/About/About'))
const Contact = lazy(()=>import('./components/Contact/Contact'))

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}