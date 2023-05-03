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
            Hi, I'm Zak, a front-end web developer with a passion for creating
            captivating web experiences. With a degree in Digital Media: Game
            Development and a professional background in theatre and music, I
            bring a unique perspective to my web development work.
            <br></br>
            I'm highly aware of the pain points that businesses face when it
            comes to their website, such as slow load times, unresponsive
            design, and outdated layouts. I'm dedicated to delivering custom
            solutions that not only look great but also function seamlessly.
            <br></br>
            If you're looking for a talented web developer to join your team,
            let's connect and collaborate. With my passion for creating
            captivating web experiences and my expertise in front-end web
            development, I'm confident that I can help take your projects to the
            next level.
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
