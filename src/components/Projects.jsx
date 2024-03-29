import '../styles/Projects.css';
import WatchWise from '../assets/WatchWise.jpg';
import doggieDilemma from '../assets/doggie-dilemma.jpg';
import AiImg from '../assets/AI-app.jpg';
import breakoutImg from '../assets/breakout.jpg';
import pistachioImg from '../assets/pistachio-peet.png';
import rentalImg from '../assets/rental-site-ss.jpg';
import { TbBrandOpenai } from 'react-icons/tb';

const Projects = (ref) => {
  return (
    <div className='projects' id='projects'>
      <h1 className='section-title'>Projects</h1>
      <div className='project-container'>
        {/*-----------------------Doggie Dilemma------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>Doggie Dilemma</h2>
            <div className='img-container'>
              <img
                className='project-image'
                src={doggieDilemma}
                alt='WatchWise'
              />
              <div className='hover-options'>
                <a
                  className='option'
                  href='https://stately-duckanoo-82a9e1.netlify.app/'
                  target='_blank'
                >
                  Live Project Demo
                </a>
                <a
                  className='option'
                  href='https://github.com/zfranczak/fetch-th'
                  target='_blank'
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              Doggie Dilemma is a web app where users can find shelter dogs for
              adoption. They start by logging in with their name and email,
              authenticate via the provided login endpoint, and then browse
              available dogs on a search page. The page allows users to filter
              dogs by breed, paginate results, and sort alphabetically. Users
              can select favorite dogs, and a match can be generated based on
              favorited dog IDs using the /dogs/match endpoint. The API provides
              endpoints for dog info, breed names, search, and matching, along
              with authentication and location functionalities.
            </p>
            <div className='tags'>
              <span className='react'>React</span>
              <span className='node'>TypeScript</span>
              <span className='sass'>CSS</span>
              <span className='vite'>Vite</span>
              <span className='javascript'>JavaScript</span>
              <span className='gpt'>Login Authentication</span>
              <span className='web'>Web</span>
            </div>
          </div>
        </div>

        {/*-----------------------WatchWise------------------------*/}
        <div className='project'>
          <div className='top-container'>
            <h2 className='project-title'>WatchWise</h2>
            <div className='img-container'>
              <img className='project-image' src={WatchWise} alt='WatchWise' />
              <div className='hover-options'>
                <a
                  className='option'
                  href='https://chic-semolina-076749.netlify.app/'
                  target='_blank'
                >
                  Live Project Demo
                </a>
                <a
                  className='option'
                  href='https://github.com/zfranczak/watchWise'
                  target='_blank'
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <div className='bottom-container'>
            <p className='project-description'>
              A movie watchlist app, created for a month-long hackathon,
              featuring new APIs and technologies. It seamlessly integrates
              various data sources, enhancing the user's movie discovery and
              tracking experience. This project demonstrates an agile adoption
              of emerging technologies to craft a functional and user-friendly
              solution for movie enthusiasts.
            </p>
            <div className='tags'>
              <span className='react'>React</span>
              <span className='sass'>CSS</span>
              <span className='vite'>Vite</span>
              <span className='javascript'>JavaScript</span>
              <span className='gpt'>Themoviedb.org (TMDB) API</span>
              <span className='unsplash'>React Router</span>
              <span className='node'>React Context API</span>
              <span className='axios'>axios</span>
              <span className='web'>Web</span>
            </div>
          </div>
        </div>

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
              A motivational app for an AI-themed hackathon. The app generates
              motivational quotes from a dataset of famous athletes using
              ChatGPT's API and pairs them with images using the Unsplash API.
              My team and I used GitHub version control to streamline
              development and collaborate. The result was a functional and
              unique product that showcased our ability to integrate multiple
              APIs and technologies.
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
      </div>
    </div>
  );
};

export default Projects;
