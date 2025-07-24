import ProjectClient from './ProjectClient';
import { projects } from '@/app/data/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id || '',
  }));
}

export default function ProjectPage({ params }: any) {
  const rawProject = projects.find((p) => p.id === params.id);

  if (!rawProject) {
    notFound();
    return null;
  }

  const project = {
    estado: rawProject.estado ?? '',
    recorrido: rawProject.recorrido ?? null,
    text: rawProject.text ?? null,
    id: rawProject.id,
    name: rawProject.name,
    description: rawProject.description,
    url: rawProject.url,
    supportImg: rawProject.supportImg ?? '',
  };

  return (
    <ProjectClient
      estado={project.estado}
      recorrido={project.recorrido}
      text={project.text}
      id={project.id}
      name={project.name}
      description={project.description}
      url={project.url}
      supportImg={project.supportImg}
    />
  );
}
