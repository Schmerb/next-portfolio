/**
 *
 *
 *    DownloadsIntro
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { Mobile, Tablet } from 'components/Utils';
import PageIntroSection from 'components/PageIntro/BasicTextIntro';

import DownloadForm from '../DownloadForm';

const BGImg = '/static/img/Download/bg@2x.png';

const DownloadsIntro = ({
  title,
  titleArr,
  description,
  imageSrc,
}: DownloadsIntroProps) => {
  console.log({ title });
  console.log({ titleArr });
  console.log({ imageSrc });
  console.log({ description });
  return (
    <StyledPageIntroSection
      imageSrc={BGImg}
      text="download"
      borderTop={false}
      noLogo
      largeText
    >
      <Wrapper>
        <ImgWrapper>
          <Image src={imageSrc || '/static/img/Download/PaperArch@2x.png'} />
          <LargeImage
            src={imageSrc || '/static/img/Download/download-img@2x.png'}
          />
        </ImgWrapper>
        <TextWrapper>
          <div>
            <div>{titleArr ? titleArr[0] : 'Powering'}</div>
            <TitleWithUnderline>
              {titleArr ? titleArr[1] : 'the Accounting Industry'}
            </TitleWithUnderline>
          </div>
          <div style={{ margin: '35px 0px' }}>
            {description ||
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh.'}
          </div>
          <div>1.24 MB, October 2020</div>
          <Tablet>
            <DownloadForm />
          </Tablet>
        </TextWrapper>
      </Wrapper>
      <Mobile>
        <DownloadForm />
      </Mobile>
    </StyledPageIntroSection>
  );
};

export default memo(DownloadsIntro);

interface DownloadsIntroProps {
  title?: any;
  titleArr?: any;
  description?: any;
  imageSrc?: any;
}

const StyledPageIntroSection = styled(PageIntroSection)`
  p {
    font-size: 3rem;
  }

  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;

const TitleWithUnderline = styled.div`
  position: relative;
  &::after {
    content: '';
    background-color: ${({ theme, light }) =>
      light ? '#fff' : theme.colors.Primary};
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50%;
    width: 130px;
    height: 5px;

    ${({ theme }) => theme.media.max.mobile`
      width: 80px;
    `}
    ${({ theme }) => theme.media.min.mobile`
      width: 130px;
    `}
    ${({ theme }) => theme.media.max.tablet`
      display: none;
    `}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 200px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  /* max-width: 800px; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;

  ${({ theme }) => theme.media.min.tablet`
    margin-top: 10vw;
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 20vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 30vw;
  }
`;

const Image = styled.img`
  width: 90%;
  max-width: 500px;
  transform: translateY(-15%);
  margin: 0 auto;
  ${({ theme }) => theme.media.min.tablet`
    display: none;
    `}
`;

const LargeImage = styled.img`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  transform: translateY(-15%);
  ${({ theme }) => theme.media.max.tablet`
    display: none;
  `}
`;

const ImgWrapper = styled.div`
  width: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //
  background-color: #fff;
  color: #000;
  font-size: 0.7rem;
  //
  width: 50%;

  min-height: 200px;
  //
  margin-top: 15px;
  padding: 15px;
  padding-right: 15px;
  border-radius: 10px;

  @media (min-width: 340px) {
    font-size: 0.8rem;
  }
  @media (min-width: 400px) {
    font-size: 0.9rem;
  }
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  ${({ theme }) => theme.media.min.tablet`
    font-size: 1.3rem;
  `}
`;
