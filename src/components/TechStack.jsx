import React from 'react';

function TechStack({ techName, techIcon, link }) {
  const IconComponent = techIcon;
  return (
    <div>
      <div className='projects-container'>
        <IconComponent />
        <p className=''>{techName}</p>
      </div>
    </div>
  );
}

export default TechStack;
