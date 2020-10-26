/**
 *
 * Header
 *
 *  */

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

export const HEADER_HEIGHT = 60;

const Header = ({ dispatch, menuIsOpen }: HeaderProps) => {
  const [state, setState] = useState({ slug: '', title: 'SecondSight' });

  return <Container>Header</Container>;
};

interface HeaderProps {
  dispatch: (action: any) => void;
  menuIsOpen: boolean;
  isScrolled?: boolean;
}

export default memo(Header);

const Container = styled.header<any>`
  color: #fff;
  background-color: cornflowerblue;
  height: 100vh;
  padding: 15px;
`;
