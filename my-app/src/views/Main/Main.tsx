'use client';

import { projects } from '@/app/data/data';
import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import ColumnRight from '@/components/ColumnRight/ColumnRight';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

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
        <ColumnLeft />
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
                        poster={project.supportImg}
                        // controls={isMobile}
                        onMouseEnter={startPreview}
                        onMouseLeave={stopPreview}
                        loop
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
        <ColumnRight />
      </div>
      <div className='arrow-icon'>
        {' '}
        <FaChevronDown />
      </div>

      <Footer />
    </div>
  );
};
export default Main;
