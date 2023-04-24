import '../styles/Projects.css'
import { forwardRef } from 'react'

const Projects = (ref) => {
  return (
    <div className='projects' id='projects'>
      <h1 className='title'>Projects</h1>
      <div className='project-container'>
        <div className='project'>
          <h2></h2>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Projects)
