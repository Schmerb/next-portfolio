/**
 *
 * Teammates
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import members from './members';

interface TeammatesProps {}

const Teammates = ({}: TeammatesProps) => {
  return (
    <MemberList>
      {members.map(({ name, jobTitle, imageSrc }) => (
        <li key={name}>
          <Img src={imageSrc} />
          <Name>{name}</Name>
          <JobTitle>{jobTitle}</JobTitle>
        </li>
      ))}
    </MemberList>
  );
};

export default Teammates;

const MemberList = styled.ul`
  color: #000;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;

  li {
    width: 50%;
    text-align: center;
    margin-top: 55px;

    ${({ theme }) => theme.media.min.tablet`
      width: 33.3%;
      margin-top: 100px;
    `}
  }
`;

const Img = styled.img`
  width: 50%;
  max-width: 180px;
`;

const Name = styled.div``;

const JobTitle = styled.div`
  font-family: 'NextPro-Light', sans-serif;
`;
