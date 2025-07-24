import ProjectClient from './ProjectClient';
import { projects } from '@/app/data/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const rawProject = projects.find((p) => p.id === params.id);

  const project =
    rawProject
      ? {
          estado: rawProject.estado ?? '',
          recorrido: rawProject.recorrido ?? null,
          text: rawProject.text ?? null,
          id: rawProject.id,
          name: rawProject.name,
          description: rawProject.description,
          url: rawProject.url,
          supportImg: rawProject.supportImg ?? '',
        }
      : undefined;

  return <ProjectClient project={project} />;
}
