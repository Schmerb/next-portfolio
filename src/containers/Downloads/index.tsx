/**
 *
 *
 *    Downloads
 *
 *
 */

import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import FooterTitle from 'components/FooterTitle';

import DownloadsIntro from './components/Intro';

const Downloads = ({}: DownloadsProps) => {
  const router = useRouter();

  const title = router.query.title;
  const titleArr = router.query.titleArr;
  const imageSrc = router.query.imageSrc;
  const description = router.query.description;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <DownloadsIntro
          title={title}
          titleArr={titleArr}
          imageSrc={imageSrc}
          description={description}
        />
      </Container>
      <FooterTitle showLogo />
    </>
  );
};

export default memo(Downloads);

export interface DownloadsProps {}

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
`;
