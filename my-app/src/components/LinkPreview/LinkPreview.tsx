'use client';
import { GenericPreviewData, PreviewData, YouTubePreviewData } from '@/types/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function LinkPreview({ url = '', description = true }) {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();

        const isYouTubeVideo = isYouTubeURL(url);
        if (isYouTubeVideo) {
          const videoId = extractYouTubeVideoId(url);
          const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

          setPreviewData({
            videoId,
            videoThumbnail,
          } as YouTubePreviewData);
          setLoading(false);
        } else {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const title = doc.querySelector('title')?.textContent || '';
          const description =
            doc
              .querySelector('meta[name="description"]')
              ?.getAttribute('content') || '';
          const image =
            doc
              .querySelector('meta[property="og:image"]')
              ?.getAttribute('content') || '';

          setPreviewData({
            title,
            description,
            image,
          } as GenericPreviewData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const isYouTubeURL = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const extractYouTubeVideoId = (url: string) => {
    const videoIdRegex =
      /(?:\/embed\/|\/watch\?v=|\/(?:embed\/|v\/|watch\?.*v=|youtu\.be\/|embed\/|v=))([^&?#]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : '';
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return (
      <p>
        No se pudo cargar la previsualización,{' '}
        <a className='url' href={url}>
          hace click aquí para acceder a la nota.
        </a>
      </p>
    );
  }

  const handleClick = () => {
    window.open(url, '_blank');
  };

  if ('videoId' in previewData) {
    return (
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Image
          src={previewData.videoThumbnail}
          alt='Video Thumbnail'
          width={400}
          height={225}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{previewData.title}</h3>
      {description ? <p>{previewData.description}</p> : null}
      {previewData.image && (
        <Image
          src={previewData.image}
          alt='Link Preview'
          width={400}
          height={225}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
}

export default LinkPreview;
