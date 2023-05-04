import '../styles/Projects.css'
import AiImg from '../assets/AI-app.jpg'
import breakoutImg from '../assets/breakout.jpg'
import pistachioImg from '../assets/pistachio-peet.png'
import rentalImg from '../assets/rental-site-ss.jpg'
import { TbBrandOpenai } from 'react-icons/tb'

const Projects = (ref) => {
  return (
    <div className='projects' id='projects'>
      <h1 className='section-title'>Projects</h1>
      <div className='project-container'>
        {/*-----------------------InspireBOT 3000------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>
              <TbBrandOpenai />
              &nbsp;InspireBOT 3000
            </h2>
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
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              A motivational app for a recent 4-week long, AI-themed hackathon
              using OpenAI's API, React, and other technologies. The app
              generates motivational quotes from a dataset of famous athletes
              using ChatGPT's API and paired them with images using the Unsplash
              API. My team and I used GitHub version control to streamline
              development and collaborate in order to improve the app. The
              result was a functional and unique product that showcased our
              ability to integrate multiple APIs and technologies. We look
              forward to building on our skills and participating in future
              hackathons.
            </p>
            <div className='tags'>
              <span className='react'>React</span>
              <span className='sass'>SASS</span>
              <span className='vite'>Vite</span>
              <span className='javascript'>JavaScript</span>
              <span className='gpt'>Open AI GPT API</span>
              <span className='unsplash'>Unsplash API</span>
              <span className='node'>node.js</span>
              <span className='axios'>axios</span>
              <span className='web'>Web</span>
            </div>
          </div>
        </div>

        {/*-----------------------Pistachio Peet------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>Pistachio Peet</h2>
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
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              A 2D slingshot game developed using Phaser.io and Matter.js. It
              features advanced physics-based gameplay mechanics, including
              gravity manipulation and collision detection, resulting in a
              unique and challenging gaming experience. The game's scalable
              architecture allows for easy addition of new levels and game
              elements, making development efficient.
            </p>
            <div className='tags'>
              <span className='javascript'>JavaScript</span>
              <span className='phaser'>Phaser.io</span>
              <span className='matter'>Matter.js</span>
              <span className='photoshop'>Adobe Photoshop</span>
              <span className='game'>Game</span>
            </div>
          </div>
        </div>
        {/*-----------------------Rental Site------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>Rental Property Landing Page</h2>
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
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              The D & R Retreat website showcases HTML/CSS skills and the
              ability to create responsive, visually appealing layouts. It
              features a clean design, clear descriptions, high-quality images,
              and modern web development techniques.
            </p>
            <div className='tags'>
              <span className='html'>HTML</span>
              <span className='css'>CSS</span>
              <span className='web'>Web</span>
            </div>
          </div>
        </div>
        {/*-----------------------Breakout Clone------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>Breakout</h2>
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
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              This is my version of the game breakout that I made using
              JavaScript and the Phaser.io library.
            </p>
            <div className='tags'>
              <span className='javascript'>JavaScript</span>
              <span className='phaser'>Phaser.io</span>
              <span className='game'>Game</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
