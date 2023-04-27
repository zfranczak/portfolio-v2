import React, { useState, useEffect } from 'react'
import '../styles/NavBar.css'
import handleScrollToSection from './ScrollToSection.jsx'

import {
  FaUserAstronaut,
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='nav-bg'>
      <ul className='nav'>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('projects')}
        >
          <i className='nav-icon'>
            <FaUserAstronaut />
          </i>
          <p className='nav-text'>Projects</p>
        </li>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('contact')}
        >
          <i className='nav-icon'>
            <FaRegCommentDots />
          </i>
          <p className='nav-text'>Contact</p>
        </li>
        <li className='page-item'>
          <a
            className='social-link'
            href='https://github.com/zfranczak'
            target='_blank'
          >
            <i className='nav-icon'>
              <FaGithub />
            </i>
            <p className='nav-text'>Github</p>
          </a>
        </li>
        <li className='page-item'>
          <a
            className='social-link'
            href='https://www.linkedin.com/in/zachary-franczak/'
            target='_blank'
          >
            <i className='nav-icon'>
              <FaLinkedin />
            </i>
            <p className='nav-text'>Linkedin</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
