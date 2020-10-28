/**
 *
 * Thinkful Project Data
 *
 *  */
import { v4 as uuidv4 } from 'uuid';

import { ProjectType } from 'utils/data/types';

import logos from './logos';

export const headerData = {
  title: 'Projects',
  text:
    'Below are a few personal projects I have created in the past. I was the sole developer on each one, handling everything from frontend UI/UX design to configuring the API and database on the backend.',
};

const projectSrc = '/static/img/projects';

export const thinkfulProjects: ProjectType[] = [
  {
    id: uuidv4(),
    title: 'CryptoKeeper',
    link: {
      title: 'cryptokeeper.co',
      href: 'https://www.cryptokeeper.co/',
    },
    description:
      'A cryptocurrency tracking (React-Redux) application using Socket.IO for real-time data transfer as well as Twilio and Mailgun for sms text message and email notification alerts. CryptoKeeper displays the price and market data for some of the more popular cryptocurrencies in real-time and allows for users to signup for an account and create custom notification events for a given currency based off of a condition that they choose. When that condition has been met, the user will then receive the custom message they have created via text and/or email depending on what they choose.',
    credit: '',
    clientCode: 'https://github.com/Schmerb/cryptokeeper-client',
    apiCode: 'https://github.com/Schmerb/cryptokeeper-api',
    tools: [
      {
        id: uuidv4(),
        imgSrc: logos.reactRedux,
        href: 'https://reactjs.org/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.javascript,
        href: 'https://nodejs.org/en/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.expressText,
        href: 'http://expressjs.com/',
        style: { width: 'auto', height: '40px' },
      },
      {
        id: uuidv4(),
        imgSrc: logos.mongodb,
        href: 'https://www.mongodb.com/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.mongoose,
        href: 'https://reactjs.org/',
        style: { width: 'auto', height: '90px' },
      },
      {
        id: uuidv4(),
        imgSrc: logos.socketIO,
        href: 'http://socket.io/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.sass,
        href: 'https://reactjs.org/',
      },
    ],
    images: {
      desktop: `${projectSrc}/crypto/crypto-currencies-black-desktop-compressor.png`,
      laptop: `${projectSrc}/crypto/crypto-home-laptop-compressor.png`,
      mobile: `${projectSrc}/crypto/crypto-mobile-compressor.png`,
    },
  },
  {
    id: uuidv4(),
    title: 'Droned Reviews',
    link: {
      title: 'droned.reviews',
      href: 'http://www.droned.reviews/',
    },
    description:
      'Droned Reviews is a user-sourced drone review website that provides a platform for users to share personal knowledge and experience with quadcopters. Whether you are an experienced pilot or a first-time buyer, it is a place to come and read up on first-hand information on the latest drone makes and models provided by real drone pilots and hobbyists such as myself. Users can also navigate through images and technical specifications of some of the top models manufactured by the most trusted names in the personal drone industry.',
    credit: '',
    clientCode: 'https://github.com/Schmerb/droned-reviews',
    apiCode: '',
    tools: [
      {
        id: uuidv4(),
        imgSrc: logos.javascript,
        href: 'https://nodejs.org/en/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.mongodb,
        href: 'https://www.mongodb.com/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.html5,
        href: 'https://www.w3.org/TR/html5/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.css3,
        href: 'https://www.w3.org/TR/css-2017/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.jqueryText,
        href: 'https://jquery.com/',
        style: { width: 'auto', height: '80px' },
      },
    ],
    images: {
      desktop: `${projectSrc}/droned/droned-homepage-desktop-compressor.png`,
      laptop: `${projectSrc}/droned/droned-reviews-laptop-compressor.png`,
      mobile: `${projectSrc}/droned/droned-mobile-compressor.png`,
    },
  },
  {
    id: uuidv4(),
    title: 'Stream It',
    link: {
      title: 'schmerb.github.io/stream-it',
      href: 'https://schmerb.github.io/stream-it/',
    },
    description:
      'A front-end only search engine where users can find out exactly where and for how much they can currently stream a movie or tv show as well as find ratings and other useful information. It uses the GuideBox API to leverage about 340 sources. Unfortunately, the API is no longer public and service to Stream It has since expired, but data on roughly 500 movies have been cached to retain some level of functionality.',
    credit: '',
    clientCode: 'https://github.com/Schmerb/stream-it',
    apiCode: '',
    tools: [
      {
        id: uuidv4(),
        imgSrc: logos.html5,
        href: 'https://www.w3.org/TR/html5/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.css3,
        href: 'https://www.w3.org/TR/css-2017/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.jqueryText,
        href: 'https://jquery.com/',
        style: { width: 'auto', height: '80px' },
      },
      {
        id: uuidv4(),
        imgSrc: logos.slick,
        href: 'http://kenwheeler.github.io/slick/',
      },
    ],
    images: {
      desktop: `${projectSrc}/streamit/streamit-interstellar-withsuggestions-compressor.png`,
      laptop: `${projectSrc}/streamit/streamit-home-laptop-compressor.png`,
      mobile: `${projectSrc}/streamit/streamit-mobile-compressor.png`,
    },
  },
  {
    id: uuidv4(),
    title: 'Toobverse',
    link: {
      title: 'schmerb.github.io/toobverse',
      href: 'https://schmerb.github.io/toobverse/',
    },
    description:
      'Toobverse is a modern web platform designed for users to search and view YouTube media and discover high-quality videos as well as live broadcasted content in an easy to navigate and sleek environment',
    credit: '',
    clientCode: 'https://github.com/Schmerb/stream-it',
    apiCode: '',
    tools: [
      {
        id: uuidv4(),
        imgSrc: logos.html5,
        href: 'https://www.w3.org/TR/html5/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.css3,
        href: 'https://www.w3.org/TR/css-2017/',
      },
      {
        id: uuidv4(),
        imgSrc: logos.jqueryText,
        href: 'https://jquery.com/',
        style: { width: 'auto', height: '80px' },
      },
      {
        id: uuidv4(),
        imgSrc: logos.slick,
        href: 'http://kenwheeler.github.io/slick/',
      },
    ],
    images: {
      desktop: `${projectSrc}/toob/toob-search-desktop-compressor.png`,
      laptop: `${projectSrc}/toob/toob-video-laptop-2-compressor.png`,
      mobile: `${projectSrc}/toob/toob-mobile-compressor.png`,
    },
  },
];
