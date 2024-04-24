import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import handleScrollToSection from './ScrollToSection.jsx';

import {
  FaUserAstronaut,
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='nav-bg'>
      <ul className='nav'>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('projects')}
        >
          <p className='nav-text'>About</p>
        </li>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('projects')}
        >
          <p className='nav-text'>Projects</p>
        </li>

        <li>
          <a
            className='social-link'
            href='https://docs.google.com/document/d/1-T07OkqF7FY3UvIiGnq4BROq3yT96NY8mj8q4apmCLQ/'
            target='_blank'
          >
            <p className='nav-text'>Resume</p>
          </a>
        </li>
        <li className='page-item'>
          <a
            className='social-link'
            href='https://github.com/zfranczak'
            target='_blank'
          >
            <p className='nav-text'>Github</p>
          </a>
        </li>
        <li className='page-item'>
          <a
            className='social-link'
            href='https://www.linkedin.com/in/zachary-franczak/'
            target='_blank'
          >
            <p className='nav-text'>Linkedin</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
