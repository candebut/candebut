'use client';
import Books from '@/components/Books/Books';
import Collapsable from '../../components/Collapsable/Collapsable';
import React from 'react';
import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import ColumnRight from '@/components/ColumnRight/ColumnRight';
import Footer from '@/components/Footer/Footer';
import Scripts from '@/components/Scripts/Scripts';
import { projects } from '../data/data';

const Proyectos = () => {
  return (
    <div className='w100'>
      <div className='main-wrapper'>
        <ColumnLeft />
        <div className='main-projects-wrapper'>
          <Collapsable open title='Guion'>
            <Scripts projects={projects} />
          </Collapsable>
          <Collapsable open title='Libros'>
            <Books />
          </Collapsable>
          {/* <Collapsable open title='Proyectos en desarrollo'>
            <Scripts />
          </Collapsable> */}
        </div>
        <ColumnRight />
      </div>
      <Footer />
    </div>
  );
};
export default Proyectos;
