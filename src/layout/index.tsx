/**
 *
 * Layout
 *
 * App styles should go in this file as well as any
 * components not rendered in main element
 *
 *  */

import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';

import FadeIn from 'components/FadeIn';
import Header, { HEADER_HEIGHT } from 'components/Header';
import Footer, { FOOTER_HEIGHT } from 'components/Footer';
import Menu from 'components/Menu';

// this will take place of any "main.css" base style files
import { MyGlobalStyle } from 'styles/globalStyles';

require('es6-promise').polyfill();
require('fetch-everywhere');

const Layout = ({
  children,
  title = 'This is the default title',
  dispatch,
  menuIsOpen,
  isScrolled,
  fontIsLoaded,
}: LayoutProps) => {
  const menuProps = { dispatch, menuIsOpen };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* <FadeIn loaded={fontIsLoaded}> */}
      <Header {...menuProps} isScrolled={isScrolled} />
      <Menu {...menuProps} />
      <Main role="main">
        <Container>{children}</Container>
      </Main>
      <Footer />
      {/* </FadeIn> */}
      <MyGlobalStyle />
    </>
  );
};

interface LayoutProps {
  children: any;
  dispatch?: (action: any) => void;
  title?: string;
  menuIsOpen: boolean;
  isScrolled: boolean;
  fontIsLoaded: boolean;
}

const mapStateToProps = ({ display }) => ({
  menuIsOpen: display.menuIsOpen,
  isScrolled: display.isScrolled,
  fontIsLoaded: display.fontIsLoaded,
});

export default connect(mapStateToProps)(Layout);

const Main = styled.main`
  color: #000;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
  /* border: 2px solid red; */
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;
