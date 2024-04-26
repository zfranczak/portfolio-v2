import React from 'react';

function ProjectCard({
  className,
  title,
  description,
  image,
  liveSite,
  github,
  tags,
}) {
  return (
    <div className={`project ${className}`}>
      <div className='top-container'>
        <h2 className='project-title'>{title}</h2>
        <div className='img-container'>
          <img src={image} alt={title} className='project-image' />
          <div className='hover-options'>
            <a className='option' href={liveSite} target='_blank'>
              Live Project Demo
            </a>
            <a className='option' href={github} target='_blank'>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <p className='project-description'>{description}</p>
        <div className='tags'>
          {tags.map((tag, index) => (
            <span key={index} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
