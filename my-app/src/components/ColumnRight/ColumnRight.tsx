'use client';
import { useRouter } from 'next/navigation';

const ColumnRight = () => {
  const router = useRouter();
  return (
    <div className='column-right'>
      <p onClick={() => router.push('/proyectos')}>proyectos</p>
      <p onClick={() => router.push('/sobre-mi')}>sobre mi</p>
      <p onClick={() => router.push('')}>currículum</p>
      <p onClick={() => router.push('/contactame')}>contáctame</p>
      <p onClick={() => router.push('/prensa')}>prensa</p>
    </div>
  );
};

export default ColumnRight;
