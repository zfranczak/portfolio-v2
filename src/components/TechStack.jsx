import React from 'react';

function TechStack({ techName, techIcon, link }) {
  return (
    <div>
      <div className='projects-container'>
        <li>
          {techName}
          <a>{techIcon}</a>
        </li>
      </div>
    </div>
  );
}

export default TechStack;
