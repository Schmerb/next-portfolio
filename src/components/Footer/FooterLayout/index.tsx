/**
 *
 * FooterLayout
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import { Mobile, Tablet } from 'components/Utils';
import Twitter from 'components/svg/Brands/Twitter';
import LinkedIn from 'components/svg/Brands/LinkedIn';
// import Logo from 'components/Logo';
import Link from 'components/Elements/Link';

import FooterNav from './FooterNav';

interface Props {}

const FooterLayout = (props: Props) => (
  <>
    <Tablet>
      <FooterNav />
    </Tablet>
    <InfoWrapper>
      <div>
        <div style={{ fontWeight: 'bolder' }}>Phone</div>
        <InfoValue>+1 (855) 438-6946</InfoValue>
      </div>
      <div>
        <div style={{ fontWeight: 'bolder' }}>Web</div>
        <InfoValue>www.secondsight.ai</InfoValue>
        <InfoValue>info@s2shape.com</InfoValue>
      </div>
      <div>
        <div style={{ fontWeight: 'bolder' }}>Address</div>
        <InfoValue>885 South College Mall Road,</InfoValue>
        <InfoValue>Suite 393, Bloomington, IN 47401</InfoValue>
      </div>
    </InfoWrapper>
    <Mobile>
      <Social />
      <Terms />
      <Copy />
    </Mobile>
    <StyledTablet>
      <FlexWrapper>
        <TermsDesktop />
        <Social style={{ width: '33.3%' }} />
      </FlexWrapper>
    </StyledTablet>
  </>
);

export default FooterLayout;

const Social = ({ style = {} }) => (
  <SocialWrapper style={style}>
    <Twitter width={30} height={30} />
    <LinkedIn width={30} height={30} />
  </SocialWrapper>
);

const Terms = () => (
  <TermsWrapper>
    <div>
      <StyledLink href="/terms">Terms of Use</StyledLink>
    </div>
    <div>
      <StyledLink href="/privacy">Privacy and Security Statement</StyledLink>
    </div>
  </TermsWrapper>
);
const TermsDesktop = () => (
  <TermsWrapper>
    <Copy />
    <div>
      <StyledLink href="/terms">Terms of Use</StyledLink>
    </div>
    <div>
      <StyledLink href="/privacy">Privacy and Security Statement</StyledLink>
    </div>
  </TermsWrapper>
);

const Copy = () => <Copyright>© 2020 SecondSight Data Discovery</Copyright>;

const StyledTablet = styled(Tablet)`
  color: #000;
  width: calc(100% - 30px);
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  border-top: 1px solid #000;
  margin: 0px 15px;
  padding-top: 30px;
`;

const InfoValue = styled.div`
  font-family: 'NextPro-Light', sans-serif;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* border: 1px solid red; */

  ${({ theme }) => theme.media.max.tablet`
    margin-top: 25px;
    > div {
      margin-top: 25px;
    }
  `}
  ${({ theme }) => theme.media.min.tablet`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 25px;
  `}
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* border: 1px solid red; */
  ${({ theme }) => theme.media.max.tablet`
    margin-top: 25px;
    margin-bottom: 25px;
  `}
`;

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* border: 1px solid red; */
  ${({ theme }) => theme.media.max.tablet`
    margin-top: 25px;
    margin-bottom: 25px;
    > div {
      &:first-of-type {
        margin-bottom: 15px;
      }
    }
  `}
  ${({ theme }) => theme.media.min.tablet`
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    > div {
      &:first-of-type {
        margin-right: 15px;
      }
    }
  `}
`;

const Copyright = styled.div`
  text-align: center;
  ${({ theme }) => theme.media.max.tablet`
    padding-bottom: 15px;
  `}
  ${({ theme }) => theme.media.min.tablet`
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  `}
`;

// const ArchImgAbove = styled.img`
//   width: 100%;
//   transform: translateY(20px);
//   ${({ theme }) => theme.media.min.tablet`
//     transform: translateY(100px);
//   `}
//   ${({ theme }) => theme.media.min.desktop`
//     transform: translateY(200px);
//   `}
// `;

const StyledLink = styled(Link)`
  color: #000;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
