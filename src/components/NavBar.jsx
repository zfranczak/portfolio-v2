import '../styles/NavBar.css'

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
          Projects
        </li>
        <li
          className='page-item'
          onClick={() => handleScrollToSection('contact')}
        >
          Contact
        </li>
        <li className='page-item'>Github</li>
        <li className='page-item'>Linkedin</li>
      </ul>
    </div>
  )
}

export default NavBar
