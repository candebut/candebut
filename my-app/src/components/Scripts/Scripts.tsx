import { isMobile } from '@/utils/utils';
import Image from 'next/image';

const Scripts: React.FC<any> = ({ projects }) => {
  const startPreview = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    vid.muted = true;
    vid.play();
  };

  const stopPreview = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  return (
    <div className='screenwriting-wrapper'>
      {projects && projects.length
        ? projects.map((item: any, index: number) => (
            <div
              key={`project__${item.name}--${index}`}
              className='screenwriting'
            >
              <div className='content'>
                <video
                  src={item.url}
                  controls={isMobile()}
                  onMouseEnter={startPreview}
                  onMouseLeave={stopPreview}
                ></video>
              </div>

              <div className='text'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                {item.text ? <h1>Sinopsis</h1> : null}
                <p>{item.text}</p>
                {item.link ? (
                  <div className='link'>
                    Disponible en
                    <a href={item.link}>{item.linkText}</a>{' '}
                    {item.link2 ? (
                      <a href={item.link2}> y {item.link2Text}</a>
                    ) : null}
                  </div>
                ) : null}
                {item.premios ? <p>Seleccionado para {item.premios}</p> : null}
              </div>
            </div>
          ))
        : 'No projects found'}
    </div>
  );
};

export default Scripts;
