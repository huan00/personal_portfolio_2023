import './App.css'
import Contact from './components/contact/Contact'

import Navbar from './components/navbar/Navbar'
import SocialMedia from './components/socialMedia/SocialMedia'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <HomePage />
      <Contact />
    </div>
  )
}

export default App
