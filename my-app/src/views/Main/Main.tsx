import React from 'react';
import { projects } from '../../data/data';
import { Card, Column } from '../../components';

const Main = () => {
  return (
    <div className='main-wrapper'>
      <Column turn='right'>candela buttigliero.</Column>
      <div className='main-body'>
        {projects.map((project) => (
          <Card item={project} />
        ))}
      </div>
      <Column turn='left'>
        <a href='/projects'>projects</a>
        <a href='/projects'>cv</a>
        <a href='/projects'>letters of recommendations</a>
        <a href='/projects'>contact me</a>
      </Column>
    </div>
  );
};

export default Main;
