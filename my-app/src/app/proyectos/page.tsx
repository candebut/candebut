'use client';
import Collapsable from '../../components/Collapsable/Collapsable';
import React from 'react';
import Image from 'next/image';
import caerseEsPartir from '../../../public/static/images/caerse-es-partir.webp';
import laCasaYElCementerio from '../../../public/static/images/la_casa.png';
import pequeñosHeroes from '../../../public/static/images/pequenos-heroes.jpeg';

const Proyectos = () => {
  const redirectToUrl = (url: string) => {
    window.open(url);
  };
  return (
    <div className='w100'>
      <div className='main-wrapper'>
        <div className='column-left'>
          <h3>candela buttigliero.</h3>
        </div>
        <div className='main-projects-wrapper'>
          <Collapsable open title='Libros'>
            <div className='books-wrapper'>
              <div
                className='book'
                onClick={() =>
                  redirectToUrl(
                    'https://alcioneditora.com.ar/productos/caerse-es-partir-con-el-cuerpo/'
                  )
                }
              >
                <div className='content'>
                  <div className='content-overlay'></div>
                  <Image
                    src={caerseEsPartir}
                    width={300}
                    alt='Portada del libro Caerse es partir con el cuerpo'
                  />
                  <div className='content-details fadeIn-right'>
                    <h3>Caerse es partir con el cuerpo</h3>
                    <p>Libro de relatos - Editorial Alción</p>
                  </div>
                </div>
              </div>

              <div
                className='book'
                onClick={() =>
                  redirectToUrl(
                    'https://apuleyoediciones.com/producto/la-casa-y-el-cementerio/'
                  )
                }
              >
                <div className='content'>
                  <div className='content-overlay'></div>
                  <Image
                    src={laCasaYElCementerio}
                    width={300}
                    alt='Portada del libro La Casa y el cementerio'
                  />
                  <div className='content-details fadeIn-right'>
                    <h3>La casa y el cementerio</h3>
                    <p>Cuento infantil - Apuleyo ediciones</p>
                  </div>
                </div>
              </div>
              <div
                className='book'
                onClick={() =>
                  redirectToUrl(
                    'https://apuleyoediciones.com/producto/la-casa-y-el-cementerio/'
                  )
                }
              >
                <div className='content'>
                  <div className='blurry'></div>
                  <div className='content-overlay blurry'></div>
                  <Image
                    src={pequeñosHeroes}
                    width={300}
                    alt='Picture of the author'
                  />
                  <div className='content-details fadeIn-right'>
                    <h3>Messi, Pequeños héroes</h3>
                    <p>Cuento infantil - En proceso</p>
                  </div>
                </div>
              </div>
            </div>
          </Collapsable>
          <Collapsable open title='Guion'>
            Consectetur adipiscing elit pellentesque habitant morbi tristique.
            Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
            pulvinar etiam. Pulvinar pellentesque habitant morbi tristique
            senectus et netus et. Elementum integer enim neque volutpat.
            Faucibus in ornare quam viverra orci sagittis. Amet volutpat
            consequat mauris nunc congue nisi vitae suscipit. Dui accumsan sit
            amet nulla. Proin sagittis nisl rhoncus mattis. Enim nulla aliquet
            porttitor lacus. Arcu odio ut sem nulla pharetra diam sit amet.
            Gravida rutrum quisque non tellus orci ac auctor augue
          </Collapsable>
          <Collapsable open title='Proyectos en desarrollo'>
            Consectetur adipiscing elit pellentesque habitant morbi tristique.
            Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
            pulvinar etiam. Pulvinar pellentesque habitant morbi tristique
            senectus et netus et. Elementum integer enim neque volutpat.
            Faucibus in ornare quam viverra orci sagittis. Amet volutpat
            consequat mauris nunc congue nisi vitae suscipit. Dui accumsan sit
            amet nulla. Proin sagittis nisl rhoncus mattis. Enim nulla aliquet
            porttitor lacus. Arcu odio ut sem nulla pharetra diam sit amet.
            Gravida rutrum quisque non tellus orci ac auctor augue
          </Collapsable>
        </div>
        <div className='column-right'>
          <p>proyectos</p>
          <p>currículum</p>
          <p>contáctame</p>
          <p>prensa</p>
        </div>
      </div>
      <footer>
        <p>guionista</p>
        <div>
          <a href='https://vimeo.com/candebut'>vimeo</a>
          <a href='https://www.imdb.com/name/nm15293418/'>imbd</a>
        </div>
      </footer>
    </div>
  );
};
export default Proyectos;
