import '../styles/Header.css'
import headshot from '../assets/zak_headshot_in_circle.png'
import background from '../assets/explore.jpg'
import handleScrollToSection from './ScrollToSection.jsx'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  return (
    <div
      className='header'
      id='header'
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='header-top'>
        <img className='headshot' src={headshot} alt='Headshot of Zak' />
        <div className='text'>
          <h1 className='title'>Zachary Franczak</h1>
          <h2 className='sub-title'>Front End Developer</h2>
          <p className='p'>
            Hi, I'm Zak, a front-end web developer with a creative flair. My
            professional background in theatre and music brings a unique
            perspective to my web development. With a degree in Digital Media:
            Game Development and a passion for creating captivating web
            experiences, I'm ready to bring innovation and creativity to your
            projects. When I'm not coding, you'll find me exploring nature or
            volunteering at a local high school theatre. Let's connect and
            collaborate!
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
