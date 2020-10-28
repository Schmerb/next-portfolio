/**
 *
 * Work Data
 *
 *  */
import { ProjectType } from 'utils/data/types';

import logos from './logos';

export const headerData = {
  title: 'Work',
  text:
    'Below is a project I was hired to build. I was the only developer and worked closely with the designer.',
};

const projectSrc = '/static/img/projects';

export const workProjects: ProjectType[] = [
  {
    id: 1,
    title: 'Net Neutrality Microsite for Thinkful',
    link: {
      title: 'thinkful.com/net-neutrality',
      href: 'https:///www.thinkful.com/net-neutrality',
    },
    description:
      'An interactive, map-based microsite built for Thinkful to showcase the 2018 House and Senate candidates and their political stances on Net Neutrality. Based on the amount of data and user interactivity involved, it was determined that React would be the perfect conduit to showcase the information.',
    credit: '-Designer: Darren Laiben',
    clientCode: 'https://github.com/Schmerb/net-neutrality-app-client',
    apiCode: 'https://github.com/Schmerb/net-neutrality-app-server',
    tools: [
      logos.reactRedux,
      logos.express,
      logos.mongodb,
      logos.mongoose,
      logos.sass,
    ],
    images: {
      desktop: `${projectSrc}/net-neutrality/net-neutrality-desktop-compressor.png`,
      laptop: `${projectSrc}/net-neutrality/net-neutrality-laptop-compressor.png`,
      mobile: `${projectSrc}/net-neutrality/net-neutrality-mobile-compressor.png`,
    },
  },
];
