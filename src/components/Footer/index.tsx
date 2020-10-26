/**
 *
 * Footer
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';

import FooterLayout from './FooterLayout';

interface FooterProps {}

export const FOOTER_HEIGHT = 200;

const Footer = ({}: FooterProps) => {
  return (
    <>
      <ArchImgAbove src="/static/img/footer-arch.png" />
      <Container>
        <Content>
          <InnerWrapper>
            <LogoWrapper style={{ width: '100%' }}>
              <StyledLogo
                isDark
                width={40}
                height={40}
                style={{ fontSize: '1.5rem', textAlign: 'center' }}
              />
            </LogoWrapper>
            <FooterLayout />
          </InnerWrapper>
        </Content>
      </Container>
    </>
  );
};

Footer.propTypes = {};

export default Footer;

const Container = styled.footer`
  position: relative;
  min-height: ${FOOTER_HEIGHT}px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.LightGrey};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;
`;

const StyledLogo = styled(Logo)`
  ${({ theme }) => theme.media.min.tablet`
    span {
      margin-left: 10px;
    }
    &::before {
      background-color: #000;
      content: '';
      height: 1px;
      width: 100%;
      margin-right: 15px;
      margin-left: 15px;
    }
    &::after {
      background-color: #000;
      content: '';
      height: 1px;
      width: 100%;
      margin-right: 15px;
      margin-left: 15px;
    }
  `}
`;

const LogoWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 15px auto;
`;

const ArchImgAbove = styled.img`
  width: 100%;
  transform: translateY(20px);
  ${({ theme }) => theme.media.min.mobile`
    transform: translateY(140px);
  `}
  ${({ theme }) => theme.media.min.tablet`
    transform: translateY(140px);
  `}
  ${({ theme }) => theme.media.min.desktop`
    transform: translateY(200px);
  `}
`;
