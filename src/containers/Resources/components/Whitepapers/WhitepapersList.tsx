/**
 *
 * WhitepapersList
 *
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Button from 'components/Elements/Button';
import { desktopPapers } from './data/papers';

interface Props {}

const WhitepapersList = (props: Props) => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const toShow = showAll ? [...desktopPapers, ...desktopPapers] : desktopPapers;
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
      <List>
        {toShow.map(({ title, titleArr, description, imageSrc }) => (
          <li key={imageSrc}>
            <a
              href="/downloads"
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

export default WhitepapersList;

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
