'use client';

import Head from 'next/head';
import { projects } from '@/app/data/data';
import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import ColumnRight from '@/components/ColumnRight/ColumnRight';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Main = () => {
  const router = useRouter();
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
   <>
     <Head>
       {/* Básicos */}
       <title>Candela Buttigliero – Guionista Argentina de Cine & Series</title>
       <meta
         name="description"
         content="Portafolio de Candela Buttigliero, guionista argentina especializada en ficción, series y cine social. Proyectos: Visceral, Lapsus, y más."
       />
       <link rel="canonical" href="https://candelabuttigliero.com" />

       {/* Open Graph */}
       <meta property="og:title" content="Candela Buttigliero – Guionista Argentina" />
       <meta
         property="og:description"
         content="Conocé los proyectos y la trayectoria de Candela Buttigliero, guionista argentina de cine y series."
       />
       <meta property="og:url" content="https://candelabuttigliero.com" />
       <meta property="og:type" content="website" />
       <meta property="og:image" content="https://candelabuttigliero.com/preview.jpg" />

       {/* Twitter Cards */}
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:site" content="@candela_b" />

       {/* JSON‑LD para Organization/Person */}
       <script
         type="application/ldjson"
         dangerouslySetInnerHTML={{
           __html: `
           {
             "@context": "https://schema.org",
             "@type": "Person",
             "name": "Candela Buttigliero",
             "jobTitle": "Guionista",
             "url": "https://candelabuttigliero.com",
             "sameAs": [
               "https://www.instagram.com/candelabuttigliero",
               "https://vimeo.com/candela"
             ]
           }
           `,
         }}
       />
     </Head>

     <main className="w100">
       <header className="main-header">
         <h1 className="sr-only">Portafolio de Candela Buttigliero – Guionista Argentina</h1>
       </header>

      <div className='main-wrapper'>
        <ColumnLeft />
        <section className='main-projects-wrapper' aria-label="Proyectos destacados">
          {projects && projects.length ? (
            projects.map((project, index) => (
              <article
                className='project'
                key={`project__${project.name}-${index}`}
                onClick={() => router.push(`/proyectos/${project.id}`)}
              >
                <div className='content'>
                  <div className='content-overlay'></div>
                  <video
                    src={project.url}
                    poster={project.supportImg}
                    onMouseEnter={startPreview}
                    onMouseLeave={stopPreview}
                    loop
                  />
                  <div className='content-details fadeIn-right'>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </section>
        <ColumnRight />
      </div>

      <div className='arrow-icon'>
        <FaChevronDown aria-hidden="true" />
      </div>

      <Footer />
   </main>
 </>

  );
};
export default Main;
