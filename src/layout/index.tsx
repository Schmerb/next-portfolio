/**
 *
 * Layout
 *
 * App styles should go in this file as well as any
 * components not rendered in main element
 *
 *  */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import Header, { HEADER_HEIGHT } from 'components/Header';
import Footer, { FOOTER_HEIGHT } from 'components/Footer';
import Menu from 'components/Menu';
import LoadingScreen from 'components/LoadingScreen';
import useGetContentState from 'containers/Landing/useGetContentState';

import { setContent } from 'actions/content';

import { toastError } from 'utils/lib/Toastify';

// this will take place of any "main.css" base style files
import { MyGlobalStyle } from 'styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';
// import 'scroll-behavior-polyfill';

require('es6-promise').polyfill();
require('fetch-everywhere');

const Layout = ({
  children,
  title = 'This is the default title',
  dispatch,
  menuIsOpen,
  isScrolled,
  fontIsLoaded,
  content,
}: LayoutProps) => {
  const { projectState, error }: any = useGetContentState();

  useEffect(() => {
    const smoothscroll = require('smoothscroll-polyfill');

    // kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (projectState) {
      dispatch(setContent(projectState));
    }
  }, [projectState]);

  useEffect(() => {
    if (error) {
      toastError(
        error.toString
          ? error.toString()
          : 'Sorry, something went wrong fetching content.',
      );
    }
  }, [error]);

  const menuProps = { dispatch, menuIsOpen };
  const hasData = !!(content && content.data);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LoadingScreen hasData={hasData} />
      {hasData && (
        <>
          <Header {...menuProps} isScrolled={isScrolled} hasData={hasData} />
          <Menu {...menuProps} />
          <ToastContainer />
          <Main role="main">
            <Container>{children}</Container>
          </Main>
          <Footer />
        </>
      )}
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
  content: any;
}

const mapStateToProps = ({ display, content }) => ({
  menuIsOpen: display.menuIsOpen,
  isScrolled: display.isScrolled,
  fontIsLoaded: display.fontIsLoaded,
  content,
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
