'use client';
import { useRouter } from 'next/navigation';

const ColumnRight = () => {
  const router = useRouter();
  return (
    <div className='column-right'>
      <p onClick={() => router.push('/')}>proyectos</p>
      <p onClick={() => router.push('/sobre-mi')}>sobre mi</p>
      <p>
        <a
          href='Candela Buttigliero - CV.pdf'
          download='Candela Buttigliero - CV'
        >
          currículum
        </a>
      </p>
      <p onClick={() => router.push('mailto:candelabuttigliero@gmail.com')}>
        contacto
      </p>
    </div>
  );
};

export default ColumnRight;
