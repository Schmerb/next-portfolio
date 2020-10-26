/**
 *
 * CasestudiesList
 *
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Title } from 'containers/Landing/components/Intro';

import Button from 'components/Elements/Button';
import { caseStudies } from './data/caseStudies';

interface Props {}

const CasestudiesList = (props: Props) => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const toShow = showAll ? [...caseStudies, ...caseStudies] : caseStudies;
  const handleClick = (paperData) => (evt) => {
    evt.preventDefault();
    console.log({ paperData });
    //
    // re-route to Download UI
    //
    router.push({
      pathname: '/downloads',
      query: {
        title: paperData.title,
        titleArr: paperData.titleArr,
        description: paperData.description,
        imageSrc: paperData.imageSrc,
      },
    });
  };
  return (
    <>
      <TitleWrapper>
        <Title dark>case studies</Title>
      </TitleWrapper>
      <List>
        {toShow.map(({ title, titleArr, description, imageSrc }) => (
          <li key={title}>
            <a
              href="#!"
              onClick={handleClick({ title, titleArr, description, imageSrc })}
            >
              <Image src={imageSrc} />
            </a>
            <TitleText>
              <div>{titleArr[0]}</div>
              <div>{titleArr[1]}</div>
            </TitleText>
            <Description>{description}</Description>
          </li>
        ))}
      </List>
      <StyledButton dark onClick={() => setShowAll((v) => !v)}>
        View {showAll ? 'Less' : 'All'}
      </StyledButton>
    </>
  );
};

export default CasestudiesList;

const TitleWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 50px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  padding: 0;
  margin: 0 auto;
  margin-top: 50px;

  li {
    width: 33.3%;
  }
`;

const TitleText = styled.h3`
  font-size: 1rem;
  font-family: 'NextPro-Medium', sans-serif;
`;

const Description = styled.p`
  font-family: 'NextPro-Light', sans-serif;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;

const StyledButton = styled(Button)`
  padding-left: 40px;
  padding-right: 40px;
  font-family: 'NextPro-Light', sans-serif;
  font-size: 1.2rem;
`;
