import '../styles/Header.css'
import headshot from '../assets/zak_headshot_in_circle.png'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <img className='headshot' src={headshot} alt='Headshot of Zak' />
        <div className='text'>
          <h1 className='title'>Zachary Franczak</h1>
          <h2 className='sub-title'>Front End Developer</h2>
        </div>
      </div>
      <i>
        <FaChevronDown className='down-arrow' />
      </i>
    </div>
  )
}

export default Header
