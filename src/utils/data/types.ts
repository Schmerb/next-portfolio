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

export interface ToolType {
  id: string;
  imgSrc: string;
  href: string;
  style?: any;
}
export interface ImagesType {
  desktop: string;
  laptop: string;
  mobile: string;
}
interface LinkType {
  title: string;
  href: string;
}
