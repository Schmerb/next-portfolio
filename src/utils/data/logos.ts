/**
 *
 * Brand Icons
 *
 *  */

const logoSrc = '/static/img/icons';

export const sketch = `${logoSrc}/sketch-logo.png`;
export const reactRedux = `${logoSrc}/react-redux.png`;
export const chaiMocha = `${logoSrc}/chaijs-mocha.png`;
export const css3 = `${logoSrc}/css3.png`;
export const express = `${logoSrc}/express-js.png`;
export const expressText = `${logoSrc}/express-txt-logo.png`;
export const gulp = `${logoSrc}/gulp-cup.png`;
export const html5 = `${logoSrc}/html5-logo.png`;
export const es6 = `${logoSrc}/es6.png`;
export const heroku = `${logoSrc}/heroku.png`;
export const jQuery = `${logoSrc}/jQuery.png`;
export const jqueryText = `${logoSrc}/jquery-withtext.png`;
export const mernstack = `${logoSrc}/mernstack.png`;
export const slick = `${logoSrc}/slick-js.png`;
export const bsync = `${logoSrc}/bsync.png`;
export const socketIO = `${logoSrc}/socket.io-icon.png`;
export const sass = `${logoSrc}/sass.png`;
export const node = `${logoSrc}/Node.png`;
export const nodejs = `${logoSrc}/nodejs-icon.png`;
export const mongodb = `${logoSrc}/mongodb-logo.png`;
export const mongoose = `${logoSrc}/mongoose.png`;
export const javascript = `${logoSrc}/javascript.png`;
export const vscode = `${logoSrc}/vscode.png`;
export const git = `${logoSrc}/git-icon-blackpng`;

const Logos: LogosProps = {
  sketch: {
    imgSrc: sketch,
    href: 'https://www.sketchapp.com/',
  },
  reactRedux: {
    imgSrc: reactRedux,
    href: 'https://reactjs.org/',
  },
  chaiMocha: {
    imgSrc: chaiMocha,
    href: 'https://www.chaijs.com/',
  },
  css3: {
    imgSrc: css3,
    href: 'https://www.w3.org/TR/css-2017/',
  },
  express: {
    imgSrc: express,
    href: 'http://expressjs.com/',
  },
  expressText: {
    imgSrc: expressText,
    href: 'http://expressjs.com/',
  },
  gulp: {
    imgSrc: gulp,
    href:
      'https://www.mikeschmerbeck.com/assets/icons/compressed/gulp-cup-compressor.png',
  },
  html5: {
    imgSrc: html5,
    href: 'https://www.w3.org/TR/html5/',
  },
  es6: {
    imgSrc: es6,
    href: '',
  },
  heroku: {
    imgSrc: heroku,
    href: 'https://heroku.com',
  },
  jQuery: {
    imgSrc: jQuery,
    href: 'https://jquery.com/',
  },
  jqueryText: {
    imgSrc: jqueryText,
    href: 'https://jquery.com/',
  },
  mernstack: {
    imgSrc: mernstack,
    href: 'https://www.mongodb.com/mern-stack',
  },
  slick: {
    imgSrc: slick,
    href: 'http://kenwheeler.github.io/slick/',
  },
  bsync: {
    imgSrc: bsync,
    href: 'https://www.browsersync.io/',
  },
  socketIO: {
    imgSrc: socketIO,
    href: 'http://socket.io/',
  },
  sass: {
    imgSrc: sass,
    href: 'https://reactjs.org/',
  },
  node: {
    imgSrc: node,
    href: 'https://nodejs.org/en/',
  },
  nodejs: {
    imgSrc: nodejs,
    href: 'https://nodejs.org/en/',
  },
  mongodb: {
    imgSrc: mongodb,
    href: 'https://www.mongodb.com',
  },
  mongoose: {
    imgSrc: mongoose,
    href: 'https://mongoosejs.com/',
  },
  javascript: {
    imgSrc: javascript,
    href: 'https://nodejs.org/en/',
  },
  vscode: {
    imgSrc: vscode,
    href: 'https://code.visualstudio.com/',
  },
  git: {
    imgSrc: git,
    href: 'https://git-scm.com/',
  },
};

export default Logos;

interface LogosProps {
  sketch: LogoProps;
  reactRedux: LogoProps;
  chaiMocha: LogoProps;
  css3: LogoProps;
  express: LogoProps;
  expressText: LogoProps;
  gulp: LogoProps;
  html5: LogoProps;
  es6: LogoProps;
  heroku: LogoProps;
  jQuery: LogoProps;
  jqueryText: LogoProps;
  mernstack: LogoProps;
  slick: LogoProps;
  bsync: LogoProps;
  socketIO: LogoProps;
  sass: LogoProps;
  node: LogoProps;
  nodejs: LogoProps;
  mongodb: LogoProps;
  mongoose: LogoProps;
  javascript: LogoProps;
  vscode: LogoProps;
  git: LogoProps;
}

interface LogoProps {
  imgSrc: string;
  href: string;
}
