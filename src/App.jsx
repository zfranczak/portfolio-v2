import { useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className='App'>
      <NavBar className='page-section' />
      <Header className='page-section' />
      <Projects className='page-section' />
      <Contact className='page-section' />
      <Footer />
    </main>
  );
}

export default App;
