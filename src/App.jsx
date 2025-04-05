import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Navigation from './Navigation/index.jsx'
import Home from './Home/index.jsx'
import Footer from './Footer/index.jsx'
import WorkforceSolutions from './WorkforceSolutions/index.jsx'
import Industries from './Industries/index.jsx'
import About from './about/index.jsx'
import Contact from './Contact/index.jsx'
import './App.css'

// ScrollToTop component to handle scroll position
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
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
