'use client';
import Books from '@/components/Books/Books';
import Collapsable from '../../components/Collapsable/Collapsable';
import React from 'react';
import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import Image from 'next/image';
import { projects } from '../data/data';
import ColumnRight from '@/components/ColumnRight/ColumnRight';

const Proyectos = () => {
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
        <ColumnLeft />
        <div className='main-projects-wrapper'>
          <Collapsable open title='Libros'>
            <Books />
          </Collapsable>
          <Collapsable open title='Guion'>
            <div className='screenwriting-wrapper'>
              {projects && projects.length
                ? projects.map((item, index) => (
                    <div
                      key={`project__${item.name}--${index}`}
                      className='screenwriting'
                    >
                      {item.images ? (
                        <div className='images'>
                          <Image
                            src={item.poster}
                            width={400}
                            height={200}
                            alt='Picture of the author'
                          />
                          <div className='smaller-screenwriting'>
                            <Image
                              src={item.back1}
                              width={300}
                              height={200}
                              alt='Picture of the author'
                            />
                            <Image
                              src={item.back2}
                              width={300}
                              height={200}
                              alt='Picture of the author'
                            />
                            <Image
                              src={item.back3}
                              width={300}
                              height={200}
                              alt='Picture of the author'
                            />
                          </div>
                        </div>
                      ) : (
                        <div className='content'>
                          <video
                            src={item.url}
                            onMouseEnter={startPreview}
                            onMouseLeave={stopPreview}
                          ></video>
                          <div className='content-details fadeIn-right'>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      )}
                      <div className='text'>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        {item.text ? <h1>Sinopsis</h1> : null}
                        <p>{item.text}</p>
                        <br />
                        {item.link ? (
                          <div className='link'>
                            Disponible en
                            <a href={item.link}>{item.linkText}</a>{' '}
                            {item.link2 ? (
                              <a href={item.link2}> y {item.link2Text}</a>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))
                : 'No projects found'}
            </div>
          </Collapsable>
          <Collapsable open title='Proyectos en desarrollo'>
            Consectetur adipiscing elit pellentesque habitant morbi tristique.
            Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
            pulvinar etiam. Pulvinar pellentesque habitant morbi tristique
            senectus et netus et. Elementum integer enim neque volutpat.
            Faucibus in ornare quam viverra orci sagittis. Amet volutpat
            consequat mauris nunc congue nisi vitae suscipit. Dui accumsan sit
            amet nulla. Proin sagittis nisl rhoncus mattis. Enim nulla aliquet
            porttitor lacus. Arcu odio ut sem nulla pharetra diam sit amet.
            Gravida rutrum quisque non tellus orci ac auctor augue
          </Collapsable>
        </div>
        <ColumnRight />
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
export default Proyectos;
