import React from 'react';

function ProjectCard({
  title,
  description,
  image,
  liveSite,
  github,
  id,
  tags,
}) {
  return (
    <div className={`project`} id={`${id}`}>
      <div className='project-box'>
        <div className='top-container'>
          <div className='img-container'>
            <img src={image} alt={title} className='project-image' />
          </div>
        </div>
        <div className='bottom-container'>
          <h2 className='project-title'>{title}</h2>
          <p className='project-description'>{description}</p>
          <a className='option' href={liveSite} target='_blank'>
            View Site
          </a>
          <a className='option' href={github} target='_blank'>
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
