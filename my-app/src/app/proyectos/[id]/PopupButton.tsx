'use client';

import { ProjectClientProps } from "@/types/types";

export default function ContactButton(project: ProjectClientProps) {
  const handleClick = () => {
    const subject = encodeURIComponent(`Solicitud de dossier de venta para ${project.name}`);
    const email = 'candelabuttigliero@gmail.com';
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  return (
    <button className='contact-button' onClick={handleClick}>
      Solicitar dossier de venta
    </button>
  );
}
