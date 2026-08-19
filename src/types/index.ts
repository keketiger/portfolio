export interface ProjetProps {
  image: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
  buttons?: {
    github?: string;
    url?: string;
    images?: string[];
    preview?: string;
  }
};
