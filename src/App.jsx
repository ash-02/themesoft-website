import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tsLogo from './assets/ts_logo.png'
import './App.css'

import Navigation from './Navigation/index.jsx'
import Home from './Home/index.jsx'
import Footer from './Footer/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App
    flex flex-col items-start justify-start pt-2 h-full w-full
    ">
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App
