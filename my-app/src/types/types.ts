export type ProjectClientProps = {
  project: {
    estado: string;
    recorrido: any;
    text: any;
    id: string;
    name: string;
    description: string;
    url: string;
    supportImg: string;
  } | undefined;
};

export interface Project {
  name: string;
}

export interface ContactButtonProps {
  project: Project;
}

export interface YouTubePreviewData {
  videoId: string;
  videoThumbnail: string;
}

export interface GenericPreviewData {
  title: string;
  description: string;
  image: string;
}

export type PreviewData = YouTubePreviewData | GenericPreviewData;