'use client';
import { useRouter } from 'next/navigation';

const ColumnRight = () => {
  const router = useRouter();
  return (
    <div className='column-right'>
      <p onClick={() => router.push('/proyectos')}>proyectos</p>
      <p onClick={() => router.push('/sobre-mi')}>sobre mi</p>
      <p>
        <a
          href='CV Candela Buttigliero - Guionista y analista de guion.pdf'
          download='CV Candela Buttigliero - Guionista y analista de guion'
        >
          currículum
        </a>
      </p>
      <p onClick={() => router.push('mailto:candelabuttigliero@gmail.com')}>
        contáctame
      </p>
      <p onClick={() => router.push('/prensa')}>prensa</p>
    </div>
  );
};

export default ColumnRight;
