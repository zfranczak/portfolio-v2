import '../styles/Header.css'
import headshot from '../assets/zak_headshot_in_circle.png'
import handleScrollToSection from './ScrollToSection.jsx'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <img className='headshot' src={headshot} alt='Headshot of Zak' />
        <div className='text'>
          <h1 className='title'>Zachary Franczak</h1>
          <h2 className='sub-title'>Front End Developer</h2>
          <p className='p'>
            Hi! I'm Zak, a front end developer born and raised in the SF Bay
            Area. If I'm not coding, you'll probably find me hiking. 🌲
          </p>
        </div>
      </div>
      <i>
        <FaChevronDown
          className='down-arrow'
          onClick={() => handleScrollToSection('projects')}
        />
      </i>
    </div>
  )
}

export default Header
