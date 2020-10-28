/**
 *
 * Types
 *
 *  */

export interface ProjectType {
  id: number;
  title: string;
  link: {
    title: string;
    href: string;
  };
  description: string;
  credit?: string;
  clientCode: string;
  apiCode?: string;
  tools: string[];
  images: {
    desktop: string;
    laptop: string;
    mobile: string;
  };
}
