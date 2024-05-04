import React from 'react';

function TechStack({ techName, techIcon, link, color }) {
  const IconComponent = techIcon;
  const iconColor = { color };
  return (
    <div className='tech-unit'>
      <div>
        <IconComponent className='icons' style={iconColor} />
        <p className='tech-name'>{techName}</p>
      </div>
    </div>
  );
}

export default TechStack;
