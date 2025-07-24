'use client';

import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import ColumnRight from '@/components/ColumnRight/ColumnRight';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ContactButton from './PopupButton';
import { ProjectClientProps } from '@/types/types';

export default function ProjectClient({ project }: ProjectClientProps) {
  const router = useRouter();

  useEffect(() => {
    if (!project) router.push('/proyectos');
  }, [project]);

  if (!project) return null;

  return (
    <div className='w100'>
      <div className='main-wrapper'>
        <ColumnLeft />
        <div className='project-page'>
          <div className='content'>
            <h2 className='project-name'>{project.name}</h2>
            <p className='project-description'><i>{project.description}</i></p>

            {project.text ? (
                <div className='project-logline'>
                    Logline
                    <p>{project.text}</p></div>) : null}
            {project.recorrido ? (<div className='project-logline'>
                Recorrido del proyecto
                <p>{project.recorrido}</p></div>) : null}
                    
            {project.estado !== 'estrenado' ? <ContactButton project={project} /> : null}
          </div>
        </div>
        <ColumnRight />
      </div>
      <Footer />
    </div>
  );
}
