import '../styles/Header.css'
import headshot from '../assets/zak_headshot_in_circle.png'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='text'>
          <h1 className='title'>Zachary Franczak</h1>
          <h2 className='sub-title'>Front End Developer</h2>
        </div>
        <img className='headshot' src={headshot} alt='Headshot of Zak' />
      </div>
      <i>
        <FaChevronDown onClick={handleClick} className='down-arrow' />
      </i>
    </div>
  )
}

export default forwardRef(Header)
