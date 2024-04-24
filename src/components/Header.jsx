import React from 'react';
import '../styles/Header.css';
import headshot from '../assets/zak_headshot_in_circle.png';
import handleScrollToSection from './ScrollToSection.jsx';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='header-top'>
        <div className='text'>
          <div className='content'>
            {/* <img className='headshot' src={headshot} alt='Headshot of Zak' /> */}
            <div className='text-container'>
              <h1 className='title'>
                Zachary<br></br>Franczak
              </h1>
              <h2 className='sub-title'>Front End Developer</h2>
              <p className='p'>
                I make design centric websites to capture the attention of your
                audience. I make design centric websites to capturethe attention
                of your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
