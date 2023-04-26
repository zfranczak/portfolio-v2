import React, { useState, useEffect } from 'react'
import '../styles/NavBar.css'
import handleScrollToSection from './ScrollToSection.jsx'
import headshot from '../assets/zak_headshot_in_circle.png'
import {
  FaUserAstronaut,
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='nav-bg'>
      <img className='headshot-nav' src={headshot} alt='Headshot of Zak' />
      <ul className='nav'>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('projects')}
        >
          <i className='nav-icon'>
            <FaUserAstronaut />
          </i>
          Projects
        </li>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('contact')}
        >
          <i className='nav-icon'>
            <FaRegCommentDots />
          </i>
          Contact
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
            Github
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
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
