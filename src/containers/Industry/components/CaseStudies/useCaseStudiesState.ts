/**
 *
 * Industry
 *
 *  */

import { useState } from 'react';

export const useCaseStudiesState = ({}) => {
  const [content, setcontent] = useState([
    {
      title: 'insurance',
      imageSrc: '/static/img/industry/insurance@2x.png',
      description:
        'Until now, cyber security insurance was based on broad estimated risk. Leading global insurers are using Reveles to identify the precise levels of exposure, to identify the real digital risk present in a business, to provide the best coverage strategy.',
    },
    {
      title: 'accountancy',
      imageSrc: '/static/img/industry/accountancy@2x.png',
      description:
        "Currently businesses don't place a financial value on their data or add it to the balance sheet. We are working with Certified Accounting Professionals to combine the power of A.I with accounting expertise and best practice to attribute a value to data.",
    },
    {
      title: 'private equity & investment banking',
      imageSrc: '/static/img/industry/banking@2x.png',
      description:
        "Acquiring a business involves understanding it's intrinsic value. From now on, Lawyers and Accountants can reduce uncertainty by using Reveles to better understand the value derived from data. Giving buyers and sellers more confidence in the valuation and future growth potential.",
    },
    {
      title: 'health care',
      imageSrc: '/static/img/industry/healthcare@2x.png',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
    },
    {
      title: 'government',
      imageSrc: '/static/img/industry/government@2x.png',
      description:
        'Governments use data to better understand the needs of society and enable them to improve public services. This involves gathering and analysing multiple sources of complex data to derive meaning. Reveles enables analysts to work with vast quantities of data at speed and pinpoint the information that is most significant to inform decisions.',
    },
  ]);
  return { content, setcontent };
};

export default useCaseStudiesState;
