/**
 *
 * caseStudies
 *
 *  */

import { v4 as uuidv4 } from 'uuid';

export const caseStudies = [
  {
    id: uuidv4(),
    title: 'A Process of Discovery and Transformation',
    titleArr: ['A Process of', 'Discovery and Transformation'],
    imageSrc: '/static/img/Resources/Desktop/process@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
  {
    id: uuidv4(),
    title: 'Reveles for Intelligent Data Migration',
    titleArr: ['Reveles for Intelligent', 'Data Migration'],
    imageSrc: '/static/img/Resources/Desktop/reveles@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
  {
    id: uuidv4(),
    title: 'Meaning and Value: A Chicken and Egg Analysis',
    titleArr: ['Meaning and Value:', 'A Chicken and Egg Analysis'],
    imageSrc: '/static/img/Resources/Desktop/meaning@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
];

export default caseStudies;
