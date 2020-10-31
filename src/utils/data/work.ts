/**
 *
 * Work Data
 *
 *  */
import { v4 as uuidv4 } from 'uuid';

import { ProjectType } from 'utils/data/types';

import logos from './logos';

export const headerData = {
  title: 'Work',
  text:
    'Below are a few of the projects I have been contracted to build. I was the only front-end engineer.',
  // 'Below is a project I was hired to build. I was the only developer and worked closely with the designer.',
};

const projectSrc = '/static/img/projects';

export const workProjects: ProjectType[] = [
  {
    id: uuidv4(),
    title: 'Sheffield Haworth: TALNT',
    link: {
      title: 'dev.talnt.sh/',
      href: 'https://dev.talnt.sh/',
    },
    description:
      'A React/Redux/React-Boilerplate news aggregator frontend that consumes a backend utilizing machine learning algorithms to curate articles for each user based on their individual interests. By scraping other websites, TALNT was designed to make finding news articles of particular interest an easy, seamless and hands-off process.',
    credit: '',
    clientCode: '',
    apiCode: '',
    tools: [
      {
        id: uuidv4(),
        ...logos.reactRedux,
      },
      {
        id: uuidv4(),
        ...logos.reactBoilerplate,
      },
      {
        id: uuidv4(),
        ...logos.styledComponents,
      },
      {
        id: uuidv4(),
        ...logos.reactSpring,
      },
    ],
    images: {
      desktop: `${projectSrc}/SH/SH-desktop-homepage-XL.png`,
      laptop: `${projectSrc}/SH/SH-laptop.png`,
      mobile: `${projectSrc}/SH/SH-mobile-iphone6.png`,
    },
  },
  {
    id: uuidv4(),
    title: 'Net Neutrality Microsite for Thinkful©',
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
      {
        id: uuidv4(),
        ...logos.reactRedux,
      },
      {
        id: uuidv4(),
        ...logos.expressText,
        style: { width: 'auto', height: '40px' },
      },
      {
        id: uuidv4(),
        ...logos.mongodb,
      },
      {
        id: uuidv4(),
        ...logos.mongoose,
        style: { width: 'auto', height: '90px' },
      },
      {
        id: uuidv4(),
        ...logos.sass,
      },
    ],
    images: {
      desktop: `${projectSrc}/net-neutrality/net-neutrality-desktop-compressor.png`,
      laptop: `${projectSrc}/net-neutrality/net-neutrality-laptop-compressor.png`,
      mobile: `${projectSrc}/net-neutrality/net-neutrality-mobile-compressor.png`,
    },
  },
];
