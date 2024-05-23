import React from 'react';
import Image from 'next/image';
import caerseEsPartir from '../../../public/static/images/caerse-es-partir.webp';
import laCasaYElCementerio from '../../../public/static/images/la_casa.png';
import pequeñosHeroes from '../../../public/static/images/pequenos-heroes.jpeg';

const redirectToUrl = (url: string) => {
  window.open(url);
};

const Books = () => {
  return (
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
          <Image src={pequeñosHeroes} width={300} alt='Picture of the author' />
          <div className='content-details fadeIn-right'>
            <h3>Messi, Pequeños héroes</h3>
            <p>Cuento infantil - En proceso</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
