import { useState, useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaChevronDown } from 'react-icons/fa'

function App() {
  const projects = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='App'>
      <NavBar />
      <Header />
      <i>
        <FaChevronDown onClick={handleClick} className='down-arrow' />
      </i>
      <Projects ref={projects} />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
