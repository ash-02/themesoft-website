import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Navigation from './Navigation/index.jsx'
import Home from './Home/index.jsx'
import Footer from './Footer/index.jsx'
import WorkforceSolutions from './WorkforceSolutions/index.jsx'
import Industries from './Industries/index.jsx'
import About from './About/index.jsx'
import Contact from './Contact/index.jsx'
import Expertise from './Expertises/index.jsx'
import Certifications from './Diversity/index.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App flex flex-col items-start justify-start pt-2 h-full w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workforce-solutions" element={<WorkforceSolutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertise/:expertiseSlug" element={<Expertise />} />
          <Route path="/supplier-diversity" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
