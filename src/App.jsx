import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className='App'>
      <NavBar />
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
