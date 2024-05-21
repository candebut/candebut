import React from 'react';
import { projects } from '../../data/data';
import Card from '../../components/Card/Card';

const Main = () => {
  return (
    <div className='main-wrapper'>
      <div className='leftColumn'>
        <p>candela buttigliero.</p>
      </div>
      <div className='main-body'>
        {projects.map((project) => (
          <Card item={project} />
        ))}
      </div>
    </div>
  );
};

export default Main;
