/**
 *
 * ProductIntro
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

// import { HEADER_HEIGHT } from 'components/Header';
import PageIntroSection from 'components/PageIntro';

interface Props {}

const text =
  'Reveles is a Machine Intelligence platform which identifies the data that carries the greatest risk, and alerts you on the action required to reduce exposure and safeguard your digital assets';

const ProductIntro = ({}: Props) => {
  const [state, setState] = useState({ slug: '', title: 'Product Page' });
  return (
    <PageIntroSection
      imageSrc="/static/img/Product/bg-image@2x.png"
      text={text}
    >
      <ArchImageWrapper>
        <Arch src="/static/img/Product/ArchFeathers@2x.png" />
      </ArchImageWrapper>
    </PageIntroSection>
  );
};

export default ProductIntro;

const ArchImageWrapper = styled.div`
  height: 300px;
  width: 130px;
  position: relative;
  text-align: center;
  margin: 50px auto 0;
  transition: margin-top 0.3s;
  ${({ theme }) => theme.media.max.mobile`
    width: 80px;
  `}
  ${({ theme }) => theme.media.min.mobile`
    width: 130px;
  `}
  ${({ theme }) => theme.media.min.tablet`
     margin-top: 30px;
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 10vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 20vw;
    transform: scale(1.1);
  }
  @media (min-width: 1300px) {
    transform: scale(1.2);
  }
  @media (min-width: 1400px) {
    transform: scale(1.5);
  }
`;

const Arch = styled.img`
  width: 320%;
  height: auto;
  text-align: center;
  ${({ theme }) => theme.media.min.desktop`
    width: 360%;
    transform: translateX(-2%);
  `}
`;
