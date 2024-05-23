'use client';

import React from 'react';

let projects = [
  {
    name: 'El chofer',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716451272/bg1igrcers6287wihsjx.mp4',
    description:
      'Cortometraje escrito por Candela Buttigliero, dirigido por Candela Buttigliero y Kike Maíllo',
  },
  {
    name: 'Infinito',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716390662/gtby70fv3gwr5kzmzzyh.mp4',
    description:
      'Cortometraje escrito por Candela Buttigliero y dirigido por John Araque & Frank Vera Gimenez',
  },
  {
    name: 'El cuerpo sabe',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716392352/y1uyvn2lvnr72soivrra.mp4',
    description: 'Corto documental creado y dirigido por Candela Buttigliero',
  },
  {
    name: 'Tu mirada',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370832/hzhbnxigbtswf3worcuu.mp4',
    description:
      'Videoclip para la banda "Eterna Inocencia", creado y escrito por Candela Buttigliero',
  },
  {
    name: 'Al desnudo',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716390644/h0yaxvmjf4sjbshtnfme.mp4',
    description:
      'Cortometraje escrito por Candela Buttigliero y dirigido por David Moreno',
  },
  {
    name: 'La obra de las máscaras',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716392903/ys0ai3n5bkwdcqbhxfjk.mp4',
    description:
      'Cortometraje escrito por Candela Buttigliero y dirigido por Norman Toledo Rojas',
  },
  {
    name: 'Visceral - mood trailer',
    url: 'https://res.cloudinary.com/daowfatkx/video/upload/v1716370814/bgafagyfcflmvknupvj2.mp4',
    description:
      'Mood trailer para la serie "Visceral", creada y escrita por Candela Buttigliero',
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
    <div className='w100'>
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
