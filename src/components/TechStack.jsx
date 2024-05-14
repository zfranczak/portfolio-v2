import React from 'react';

function TechStack({ techName, techIcon, color }) {
  const IconComponent = techIcon;
  const iconStyle = { fill: color };

  return (
    <div className='tech-unit'>
      <div>
        <IconComponent className='icons' style={iconStyle} />
        <p className='tech-name'>{techName}</p>
      </div>
    </div>
  );
}

export default TechStack;
