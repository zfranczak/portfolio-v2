import '../styles/Projects.css'
import AiImg from '../assets/AI-app.jpg'
import breakoutImg from '../assets/breakout.jpg'
import pistachioImg from '../assets/pistachio-peet.png'
import rentalImg from '../assets/rental-site-ss.jpg'

const Projects = (ref) => {
  return (
    <div className='projects' id='projects'>
      <h1 className='section-title'>Projects</h1>
      <div className='project-container'>
        {/*-----------------------InspireBOT 3000------------------------*/}
        <div className='project'>
          <div className='img-container'>
            <img className='project-image' src={AiImg} alt='Inspire 3000' />
            <div className='hover-options'>
              <a
                className='option'
                href='https://www.inspirebot3000.com'
                target='_blank'
              >
                Live Project Demo
              </a>
              <a
                className='option'
                href='https://github.com/chat-gpt-hack/Inspire-GPT'
                target='_blank'
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <h2 className='project-title'>InspireBOT 3000</h2>
          <p className='project-description'>
            A single page app that utilizes OpenAI's Chat GPT API as well as
            UnSplash's API. This was a submission for a 4 week Hackathon that my
            team of three created using React and Vite.
          </p>
          <div className='tags'>
            <span className='react'>React</span>
            <span className='sass'>SASS</span>
            <span className='vite'>Vite</span>
            <span className='javascript'>JavaScript</span>
            <span className='gpt'>Open AI GPT API</span>
            <span className='unsplash'>Unsplash API</span>
            <span className='web'>Web</span>
            <span className='node'>node.js</span>
            <span className='axios'>axios</span>
          </div>
        </div>

        {/*-----------------------Pistachio Peet------------------------*/}
        <div className='project'>
          <div className='img-container'>
            <img
              className='project-image'
              src={pistachioImg}
              alt='Pistachio Peet'
            />
            <div className='hover-options'>
              <a
                className='option'
                href='https://zfranczak.github.io/pistachio-peet/'
                target='_blank'
              >
                Live Project Demo
              </a>
              <a
                className='option'
                href='https://github.com/zfranczak/pistachio-peet'
                target='_blank'
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <h2 className='project-title'>Pistachio Peet</h2>
          <p className='project-description'>
            An Angry Birds style game made using the Phaser.io library and
            Matter.js physics engine.
          </p>
          <div className='tags'>
            <span className='javascript'>JavaScript</span>
            <span className='phaser'>Phaser.io</span>
            <span className='matter'>Matter.js</span>
            <span className='photoshop'>Adobe Photoshop</span>
            <span className='game'>Game</span>
          </div>
        </div>
        {/*-----------------------Rental Site------------------------*/}
        <div className='project'>
          <div className='img-container'>
            <img
              className='project-image'
              src={rentalImg}
              alt='Rental Property'
            />
            <div className='hover-options'>
              <a
                className='option'
                href='https://zfranczak.github.io/productlandingpage/'
                target='_blank'
              >
                Live Project Demo
              </a>
              <a
                className='option'
                href='https://github.com/zfranczak/productlandingpage'
                target='_blank'
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <h2 className='project-title'>Rental Property Landing Page</h2>
          <p className='project-description'>
            This is a website for a rental property in the UK utilizing
            flex-box.
          </p>
          <div className='tags'>
            <span className='html'>HTML</span>
            <span className='css'>CSS</span>
            <span className='web'>Web</span>
          </div>
        </div>
        {/*-----------------------Breakout Clone------------------------*/}
        <div className='project'>
          <div className='img-container'>
            <img
              className='project-image'
              src={breakoutImg}
              alt='Breakout Clone'
            />
            <div className='hover-options'>
              <a
                className='option'
                href='https://zfranczak.github.io/breakout-clone/'
                target='_blank'
              >
                Live Project Demo
              </a>
              <a
                className='option'
                href='https://github.com/zfranczak/breakout-clone'
                target='_blank'
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <h2 className='project-title'>Breakout Clone</h2>
          <p className='project-description'>
            This is a clone of the popular game breakout I made when first
            learning JavaScript.
          </p>
          <div className='tags'>
            <span className='javascript'>JavaScript</span>
            <span className='game'>Game</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
