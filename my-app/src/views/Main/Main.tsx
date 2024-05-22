'use client';

import React from 'react';

let projects = [
  {
    name: 'El chofer',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370802/mh4waruewqmhsf7jbx4z.mp4',
  },
  {
    name: 'Infinito',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370814/bgafagyfcflmvknupvj2.mp4',
  },
  {
    name: 'Tu mirada',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370832/hzhbnxigbtswf3worcuu.mp4',
  },
];

const Main = () => {
  const startPreview = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };

  const stopPreview = (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  return (
    <div className='main-wrapper'>
      <div className='column-left'>
        <p>candela buttigliero.</p>
      </div>
      <div className='main-projects-wrapper'>
        {projects && projects.length
          ? projects.map((project, index) => {
              return (
                <div
                  className='project'
                  key={`project__${project.name}-${index}`}
                >
                  <p>{project.name}</p>
                  <video
                    src={project.url}
                    className='container'
                    controls
                    onMouseEnter={startPreview}
                    onMouseLeave={stopPreview}
                  ></video>
                </div>
              );
            })
          : 'No projects available'}
      </div>
      <div className='column-right'>
        <p>projects</p>
        <p>cv</p>
        <p>letter of recommendation</p>
        <p>contact me</p>
      </div>
    </div>
  );
};
export default Main;
