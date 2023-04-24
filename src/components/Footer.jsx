import '../styles/Footer.css'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Built using React&nbsp;</p>
      <i>
        <FaReact className='react' />
      </i>
    </div>
  )
}

export default Footer
