import '../styles/Projects.css'
import AiImg from '../assets/AI-app.jpg'
import breakoutImg from '../assets/breakout.jpg'
import pistachioImg from '../assets/pistachio-peet.png'
import rentalImg from '../assets/rental-site-ss.jpg'

const Projects = (ref) => {
  return (
    <div className='projects' id='projects'>
      <h1 className='title'>Projects</h1>
      <div className='project-container'>
        <div className='project'>
          <img className='project-image' src={AiImg} alt='Inspire 3000' />
          <h2 className='project-title'>InspireBOT 3000</h2>
          <p className='project-description'>
            A single page app that utilizes OpenAI's Chat GPT API as well as
            UnSplash's API. This was a submission for a 4 week Hackathon that my
            team of three created using React and Vite.
          </p>
          <div className='tags'>
            <span>React</span>
            <span>SASS</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>Open AI GPT API</span>
            <span>Unsplash API</span>
            <span>Web</span>
            <span>node.js</span>
            <span>axios</span>
          </div>
        </div>
        <div className='project'>
          <img
            className='project-image'
            src={pistachioImg}
            alt='Pistachio Peet'
          />
          <h2 className='project-title'>Pistachio Peet</h2>
          <p className='project-description'>
            An Angry Birds style game made using the Phaser.io library and
            Matter.js physics engine.
          </p>
          <div className='tags'>
            <span>JavaScript</span>
            <span>Phaser.io</span>
            <span>Matter.js</span>
            <span>Game</span>
          </div>
        </div>
        <div className='project'>
          <img className='project-image' src={rentalImg} alt='Inspire 3000' />
          <h2 className='project-title'>Rental Property Landing Page</h2>
          <p className='project-description'>
            This is a website for a rental property in the UK utilizing
            flex-box.
          </p>
          <div className='tags'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Web</span>
          </div>
        </div>
        <div className='project'>
          <img className='project-image' src={breakoutImg} alt='Inspire 3000' />
          <h2 className='project-title'>Breakout Clone</h2>
          <p className='project-description'>
            This is a clone of the popular game breakout I made when first
            learning JavaScript.
          </p>
          <div className='tags'>
            <span>JavaScript</span>
            <span>Game</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
