import Image from 'next/image';
import React from 'react';
import Main from '../views/Main/Main';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Main />
    </main>
  );
}
