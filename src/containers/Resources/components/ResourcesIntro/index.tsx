/**
 *
 * Resources Intro
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import { Title, TitleText } from 'containers/Landing/components/Intro';

import SearchBar from 'components/SearchBar';
import PageIntroSection from 'components/PageIntro';

import ArchOutline from 'containers/Industry/components/Arch';

interface Props {}

const BGImg = '/static/img/Resources/bg@2x.png';
const title = 'resources';

const items = [
  { title: 'Whitepapers', id: 'whitepapers' },
  { title: 'Case Studies', id: 'case-studies' },
  { title: 'Videos', id: 'videos' },
  { title: 'All Resources', id: 'all-resources' },
];

const ResourcesIntro = (props: Props) => {
  const handleNavItemClick = (id) => (evt) => {
    console.log({ id });
  };
  return (
    <StyledPageIntroSection imageSrc={BGImg} noLogo>
      <Wrapper>
        <TitleTextWrapper>
          <Title>{title}</Title>
        </TitleTextWrapper>
        <SearchBar
          onClickSearch={(value) => {
            // console.log({ value });
          }}
          onSearchChange={(value) => {
            // console.log({ value });
          }}
        />
        <nav style={{ width: '100%', marginTop: '15px' }}>
          <ListItems>
            {items.map(({ id, title }) => (
              <li key={id}>
                <Button type="button" onClick={handleNavItemClick(id)}>
                  {title}
                </Button>
              </li>
            ))}
          </ListItems>
        </nav>
        <ArchOutline showMobile />
      </Wrapper>
    </StyledPageIntroSection>
  );
};

export default ResourcesIntro;

const StyledPageIntroSection = styled(PageIntroSection)`
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleTextWrapper = styled.div`
  text-align: center;
`;

const ListItems = styled.ul`
  list-style: none;
  display: flex;
  padding: 0 15px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;
  ${({ theme }) => theme.media.max.tablet`
    flex-wrap: wrap;
    justify-content: center;
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
      width: 25%;
    `}
  }
`;

const Button = styled.button`
  font-family: 'NextPro-Light', sans-serif;

  border-radius: 5px;
  width: 100%;
  padding: 7px 5px;
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
  font-size: 0.7rem;

  ${({ theme }) => theme.media.min.mobile`
    font-size: 1rem;
    padding: 7px 10px;
  `}
`;
