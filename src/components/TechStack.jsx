import React from 'react';

function TechStack({ techName, techIcon, link }) {
  const IconComponent = techIcon;
  return (
    <div className='tech-unit'>
      <div>
        <IconComponent className='icons' />
        <p className='tech-name'>{techName}</p>
      </div>
    </div>
  );
}

export default TechStack;
