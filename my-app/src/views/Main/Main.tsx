import React, { useState } from 'react';
import { projects } from '../../data/data';
import { Card, Column } from '../../components';

const Main = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className='main-wrapper'>
      <Column turn='right'>candela buttigliero.</Column>
      <div className='main-body'>
        {selectedProject ? (
          <Project project={selectedProject} />
        ) : (
          projects.map((project) => (
            <Card item={project} action={setSelectedProject(project)} />
          ))
        )}
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
