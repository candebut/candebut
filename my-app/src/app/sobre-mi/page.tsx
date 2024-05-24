'use client';
import ColumnLeft from '@/components/ColumnLeft/ColumnLeft';
import ColumnRight from '@/components/ColumnRight/ColumnRight';
import Image from 'next/image';
import cande from '../../../public/static/images/cande.jpeg';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { isMobile } from '@/utils/utils';

const SobreMi = () => {
  const router = useRouter();
  return (
    <div className='w100'>
      <div className='main-wrapper'>
        <ColumnLeft />
        <div className='sobre-mi-wrapper'>
          <div>
            <Image
              src={cande}
              width={500}
              height={200}
              alt='Picture of the author'
            />
            <div className='text'>
              <p>
                Nací en Rosario, Argentina, en 1993. Mientras estudiaba{' '}
                <b>Ciencias de la Comunicación</b> en la Universidad de Buenos
                Aires (y cualquier carrera que me permitiera posponer el hecho
                de que lo que amaba era escribir), estudié guión con{' '}
                <b>Jorge Maestro, Pablo Culell y Ramiro San Honorio</b> y
                comencé a escribir cortometrajes y a trabajar como fotógrafa. En
                2021 me mudé a<b> Barcelona</b> y continué mis estudios con{' '}
                <b>Josan Hartero</b>. En 2022 gané el concurso{' '}
                <a href='https://about.netflix.com/en/news/introducing-the-netflix-created-by-initiative'>
                  {' '}
                  Creative Equity de Netflix
                </a>{' '}
                , que me permitió estudiar el{' '}
                <b>
                  Master de Guion Cinematográfico en{' '}
                  <a href='https://escac.com/'>ESCAC</a>
                </b>
                . Allí, escribí múltiples cortometrajes, colaborando con jóvenes
                directores y productores y trabajando, a la vez, como analista
                de guion. Publiqué dos libros:{' '}
                <a href='https://alcioneditora.com.ar/productos/caerse-es-partir-con-el-cuerpo/'>
                  {' '}
                  Caerse es partir con el cuerpo{' '}
                </a>{' '}
                y{' '}
                <a href='https://www.casadellibro.com/libro-la-casa-y-el-cementerio/9788419648983/14348316'>
                  {' '}
                  La casa y el cementerio{' '}
                </a>{' '}
                Egresada del Máster, trabajé como{' '}
                <b>guionista y analista de guion</b>
                en{' '}
                <a href='https://arenacollective.com.ar/'>Arena Collective</a> y
                en Agosto del 2023 gané el concurso <b>Audi Future Stories</b>{' '}
                con <i>El Chofer</i>, un guion que escribí y luego{' '}
                <b>dirigí junto a Kike Maíllo</b> y fue estrenado en el{' '}
                <b>Festival Internacional de Cine de San Sebastián</b>.
              </p>
            </div>
          </div>
          <div className='column-right abort-turn prensa'>
            <p onClick={() => router.push('/prensa')}>prensa</p>
            <p>
              <a
                href='CV Candela Buttigliero - Guionista y analista de guion.pdf'
                download='CV Candela Buttigliero - Guionista y analista de guion'
              >
                currículum
              </a>
            </p>
          </div>

          {isMobile ? null : (
            <p
              onClick={() => router.push('mailto:candelabuttigliero@gmail.com')}
            >
              candelabuttigliero@gmail.com
            </p>
          )}
        </div>
        <ColumnRight />
      </div>
      <Footer />
    </div>
  );
};
export default SobreMi;
