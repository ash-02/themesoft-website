import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tsLogo from './assets/ts_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://themesoft.com" target="_blank">
          <img src={tsLogo} className="logo" alt="ts logo" />
        </a>
      </div>
      <h1>A Super Experience Is on the Way!</h1>
      <p className="read-the-docs">
      Thank you for visiting themesoft. We’re hard at work crafting a powerful new website that’s set to launch soon. Stay tuned for updates—your next-level digital experience is just around the corner!
      </p>
    </>
  )
}

export default App
