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
                <p>Guionista y analista de guion especializada en desarrollo de cine y series.</p>
                <p><b>Beca Netflix – Creative Equity 2022</b> para el Máster de Guion en la <b>Escola de Cinema de Catalunya (ESCAC)</b>, ganadora del concurso <b>Audi Future Stories 2023</b> y del concurso de <b>Series Cortas del INCAA 2024</b>.</p>
                <p>Trabajo con una voz autoral sólida y sensibilidad narrativa, integrando perspectiva DEI desde la fase de escritura. Mi experiencia incluye mesas de guionistas, desarrollo de pitch decks, script doctoring y análisis narrativo para productoras en España y Latinoamérica. He trabajado con ONZA, Magma Cine, Indómita TV y Arena Collective y con operadoras como Warner, TNT y HBO Max. Fundadora de Diversidad en el Cine y analista voluntaria para el Observatorio de Diversidad Audiovisual de España.</p>
            </div>
          </div>
          <div className='column-right abort-turn prensa'>
            <p onClick={() => router.push('/prensa')}>prensa</p>
            <p>
              <a
                href='Candela Buttigliero - CV.pdf'
                download='Candela Buttigliero - CV'
              >
                currículum
              </a>
            </p>
          </div>

          {isMobile() ? null : (
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
