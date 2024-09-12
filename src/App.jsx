import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'
import WebLogo from './assets/images/WebLogo.png';
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
   <div>
  <a name="top" />
  <header id="welcome-section">
    <nav id="navbar">
      <div className="row">
        <a href="#top">
          <img src={WebLogo} alt="logo" className="logo" />
        </a>
        <ul className="navlinks">
          <li><a href="#about">resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
    <div className="header-text-box">
      <h1>Charlie Hutchings</h1>
      <p>is a web developer</p>
    </div>
  </header>
  <Resume/>
  <Projects/>
  <Contact/>
  </div>
    </>
  )
}

export default App
