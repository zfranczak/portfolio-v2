import React from 'react';
import '../styles/Header.css';
import Graphic from '../assets/Graphic.svg';
import headshot from '../assets/zak_headshot_in_circle.png';
import handleScrollToSection from './ScrollToSection.jsx';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='shape-overlay'></div>

      <div className='header-top'>
        <div className='text'>
          <div className='content'>
            {/* <img className='headshot' src={headshot} alt='Headshot of Zak' /> */}{' '}
            <div className='shape-overlay-2'></div>
            <div className='text-container'>
              <h1 className='title'>
                Zachary<br></br>Franczak
              </h1>
              <h2 className='sub-title'>Front End Developer</h2>
              <p className='p'>
                I make design centric websites to capture the attention of your
                audience.
              </p>
            </div>
            <img className='graphic' src={Graphic} alt='Project Example' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
