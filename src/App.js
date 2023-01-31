import './App.css'
import Contact from './components/contact/Contact'

import Navbar from './components/navbar/Navbar'
import SocialMedia from './components/socialMedia/SocialMedia'
import About from './pages/about/About'
import HomePage from './pages/home/HomePage'
import Project from './pages/project/Project'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <HomePage />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App
