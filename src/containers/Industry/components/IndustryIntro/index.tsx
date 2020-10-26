/**
 *
 * IndustryIntro
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import PageIntroSection from 'components/PageIntro';
import ArchOutline from '../Arch';

const BGImg = '/static/img/industry/bg-sm@2x.png';

interface IndustryIntroProps {}

const text =
  'Reveles is a Machine Intelligence platform which identifies the data that carries the greatest risk, and alerts you on the action required to reduce exposure and safeguard your digital assets';
const items = [
  {
    text: 'Insurance',
    slug: '/insurance',
  },
  {
    text: 'Accountancy',
    slug: '/accountancy',
  },
  {
    text: 'Legal',
    slug: '/legal',
  },
  {
    text: 'Health Care',
    slug: '/health-care',
  },
  {
    text: 'Government',
    slug: '/government',
  },
];

const IndustryIntro = ({}: IndustryIntroProps) => {
  const handleNavItemClick = (slug) => () => {
    alert(`Clicked on: ${slug}`);
  };
  return (
    <PageIntroSection
      text={text}
      imageSrc={BGImg}
      imgStyle={{ transform: 'translateY(-17%)' }}
    >
      <IntroWrapper>
        <ButtonList>
          {items.map((item) => (
            <li key={item.slug}>
              <Button type="button" onClick={handleNavItemClick(item.slug)}>
                {item.text}
              </Button>
            </li>
          ))}
        </ButtonList>
      </IntroWrapper>
      <ArchOutline />
    </PageIntroSection>
  );
};

export default IndustryIntro;

const IntroWrapper = styled.div`
  padding: 0px 15px;
  margin: 15px auto;
  margin-top: 50px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 100px;
  `}
`;

const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  ${({ theme }) => theme.media.max.tablet`
    flex-wrap: wrap;
    `}
  ${({ theme }) => theme.media.min.tablet`
    justify-content: space-evenly;    
  `}
  li {
    margin-left: 7px;
    margin-right: 7px;
    margin-top: 14px;
    ${({ theme }) => theme.media.max.tablet`
      width: calc(33.33% - 14px);
    `}
    ${({ theme }) => theme.media.min.tablet`
      width: 20%;
    `}
  }
`;

const Button = styled.button`
  font-family: 'NextPro-Light', sans-serif;
  font-size: 0.8rem;
  border-radius: 5px;
  width: 100%;
  padding: 7px 10px;
  cursor: pointer;
  border: none;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  ${({ theme }) => theme.styles.ellipsisMask};

  ${({ theme }) => theme.media.min.mobile`
    font-size: 1rem;
  `}
`;
