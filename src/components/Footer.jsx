import '../styles/Footer.css'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/zfranczak/portfolio-v2' target='_blank'>
        <p>Built using React&nbsp;</p>
      </a>
      <i>
        <a href='https://github.com/zfranczak/portfolio-v2' target='_blank'>
          <FaReact className='react-icon' />
        </a>
      </i>
    </div>
  )
}

export default Footer
