import { useState } from 'react'
import './App.css'
import Contact from './components/contact/Contact'
import Email from './components/email/Email'

import Navbar from './components/navbar/Navbar'
import SocialMedia from './components/socialMedia/SocialMedia'
import About from './pages/about/About'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'

function App() {
  const [emailModal, setEmailModal] = useState(false)

  const handleClick = () => {
    setEmailModal((prev) => !prev)
  }
  return (
    <div className="App">
      <Navbar />
      <SocialMedia handleClick={handleClick} />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      {emailModal && <Email handleClick={handleClick} />}
    </div>
  )
}

export default App
