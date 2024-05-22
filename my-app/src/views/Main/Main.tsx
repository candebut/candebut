'use client';

import React from 'react';

let projects = [
  {
    name: 'El chofer',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370802/mh4waruewqmhsf7jbx4z.mp4',
    description:
      'cortometraje - escrito por Candela Buttigliero, dirigido por Candela Buttigliero y Kike Maíllo',
  },
  {
    name: 'Visceral - mood trailer',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370814/bgafagyfcflmvknupvj2.mp4',
    description:
      'Mood trailer para la serie "Visceral", creada y escrita por Candela Buttigliero',
  },
  {
    name: 'Tu mirada',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370832/hzhbnxigbtswf3worcuu.mp4',
    description:
      'Videoclip para la banda "Eterna Inocencia", creado y escrito por Candela Buttigliero',
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
    <div>
      <div className='main-wrapper'>
        <div className='column-left'>
          <h3>candela buttigliero.</h3>
        </div>
        <div className='main-projects-wrapper'>
          {projects && projects.length
            ? projects.map((project, index) => {
                return (
                  <div
                    className='project'
                    key={`project__${project.name}-${index}`}
                  >
                    <div className='content'>
                      <div className='content-overlay'></div>
                      <video
                        src={project.url}
                        //   className='container'
                        //   controls
                        onMouseEnter={startPreview}
                        onMouseLeave={stopPreview}
                      ></video>
                      <div className='content-details fadeIn-right'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : 'No projects available'}
        </div>
        <div className='column-right'>
          <p>proyectos</p>
          <p>currículum</p>
          <p>contáctame</p>
          <p>prensa</p>
        </div>
      </div>
      <footer>
        <p>guionista</p>
        <div>
          <a href='https://vimeo.com/candebut'>vimeo</a>
          <a href='https://www.imdb.com/name/nm15293418/'>imbd</a>
        </div>
      </footer>
    </div>
  );
};
export default Main;
