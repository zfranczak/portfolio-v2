import '../styles/NavBar.css'
import {
  FaUserAstronaut,
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const NavBar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className='nav-bg'>
      <ul className='nav'>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('projects')}
        >
          <i>
            <FaUserAstronaut />
          </i>
          Projects
        </li>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('contact')}
        >
          <i>
            <FaRegCommentDots />
          </i>
          Contact
        </li>
        <li className='page-item'>
          <a href='https://github.com/zfranczak' target='_blank'>
            <i>
              <FaGithub />
            </i>
            Github
          </a>
        </li>
        <li className='page-item'>
          <a
            href='https://www.linkedin.com/in/zachary-franczak/'
            target='_blank'
          >
            <i>
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
