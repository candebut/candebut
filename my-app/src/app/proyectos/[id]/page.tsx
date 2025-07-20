// app/proyectos/[id]/page.tsx
import ProjectClient from './ProjectClient';
import { projects } from '@/app/data/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  return <ProjectClient project={project} />;
}
