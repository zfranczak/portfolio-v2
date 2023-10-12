import '../styles/Header.css';
import headshot from '../assets/zak_headshot_in_circle.png';
import background from '../assets/explore.jpg';
import handleScrollToSection from './ScrollToSection.jsx';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <div
      className='header'
      id='header'
      style={{
        // backgroundImage: `url(${background})`,
        backgroundColor: '#13293D',
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
            Hello! I'm Zachary, a front-end developer with a unique perspective
            and versatile skill set. My background in entertainment, user
            experience curation, and digital media enhances my ability to craft
            user-friendly websites and applications using HTML5, CSS3, and
            JavaScript.
            <br></br>
            <br></br>I hold a degree in Digital Media: Game Development and have
            3 years of programming experience. I'm passionate about front-end
            development, continually expanding my knowledge and proficiency in
            technologies like React, SASS, Vite, and Git. Moreover, my expertise
            in design and content creation, utilizing tools like Photoshop,
            Premiere, Adobe XD, Figma, 3DS Max, and Illustrator, complements my
            development skills.
            <br></br>
            <br></br>
            As a reliable team player, I'm resourceful, energetic, and curious.
            I thrive on collaboration and am always eager to explore new ways of
            working with others to create engaging and meaningful user
            experiences. Let's discuss how we can leverage our talents to curate
            exceptional web experiences. Feel free to reach out to me—I look
            forward to your message.
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
  );
};

export default Header;
