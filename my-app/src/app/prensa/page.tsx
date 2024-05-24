'use client';
import LinkPreview from '@/components/LinkPreview/LinkPreview';
import Image from 'next/image';

const Prensa = () => {
  return (
    <div className='press-wrapper'>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.elespanol.com/el-cultural/cine/20231002/candela-buttigliero-guionista-violencia-machista-aceptada-ciertos-entornos-sociales/798170535_0.html'
          }
        />{' '}
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          description={false}
          url={
            'https://open.spotify.com/episode/1hGRgjRUsMk5jzfyQPOvIa?si=EuSw_8PkQQqZXgguYxRK3Q&nd=1&dlsi=7ce3b39ab0734d58'
          }
        />
      </div>
      <div className='card-wrapper'>
        <Image
          src={
            'https://res.cloudinary.com/daowfatkx/image/upload/v1716542747/fidfgky45d1njnsqxl95.jpg'
          }
          width={500}
          height={200}
          alt='Picture of the author'
        />
      </div>

      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://clubinfluencers.com/el-chofer-conquista-iii-edicion-audi-future-stories/'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            ' https://www.lacapital.com.ar/zoom/una-guionista-rosarina-gano-un-premio-espana-un-corto-contra-el-abuso-sexual-n10068882.html'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.madridnorte24horas.com/podcast/cultura-de-cine/cultura-de-cine-candela-buttigliero-ganadora-de-audi-future-stories-2023/'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview url={'https://www.youtube.com/watch?v=3FqIe2KhPWM'} />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.madridnorte24horas.com/podcast/cultura-de-cine/cultura-de-cine-candela-buttigliero-ganadora-de-audi-future-stories-2023/'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://35milimetros.es/el-chofer-candela-buttigliero-audi-future-stories/'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.murcia.com/empresas/noticias/2023/09/29-el-estreno-de-el-chofer-en-el-festival-de-san-sebastian-culmina-la-iii-edicion-de-audi-future-storie.asp'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.youtube.com/watch?v=XIhSv26NRZE&pp=ygUTY2FuZGVsYSBidXR0aWdsaWVybw%3D%3D'
          }
        />
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.youtube.com/watch?v=f9poodxb4uY&pp=ygUTY2FuZGVsYSBidXR0aWdsaWVybw%3D%3D'
          }
        />{' '}
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.20minutos.es/cinemania/noticias/chofer-audi-future-stories-buenas-sensaciones-san-sebastian-5178078/'
          }
        />{' '}
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.makma.net/roberto-alamo-candela-buttigliero-el-chofer/'
          }
        />{' '}
      </div>
      <div className='card-wrapper'>
        <LinkPreview
          url={
            'https://www.youtube.com/watch?v=BmAeSl7-tYI&pp=ygUTY2FuZGVsYSBidXR0aWdsaWVybw%3D%3D'
          }
        />
      </div>
    </div>
  );
};

export default Prensa;
