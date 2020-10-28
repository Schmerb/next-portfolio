/**
 *
 * Types
 *
 *  */

export interface ProjectType {
  id: number;
  title: string;
  link: LinkType;
  description: string;
  credit?: string;
  clientCode: string;
  apiCode?: string;
  tools: ToolType[];
  images: ImagesType;
}

interface ToolType {
  imgSrc: string;
  href: string;
}
interface ImagesType {
  desktop: string;
  laptop: string;
  mobile: string;
}
interface LinkType {
  title: string;
  href: string;
}
