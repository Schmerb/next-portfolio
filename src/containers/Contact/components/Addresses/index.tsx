/**
 *
 *
 *    Addresses
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const addresses = [
  {
    country: 'USA',
    line1: 'SecondSight Data Discovery, LLC',
    line2: '885 South College Mall Rd Suite 393,',
    line3: 'Bloomington IN, 47401',
    line4: 'Phone',
    line5: '1 (855) 438-6946',
  },
  {
    country: 'UAE',
    line1: 'twofour54,',
    line2: 'Salam Street, Abu Dhabi',
    line3: 'United Arab Emirates',
    line4: 'United',
    line5: 'Arab Emirates',
  },
];

const Addresses = ({}: IAddressesProps) => {
  return (
    <Container>
      {/* {addresses.map(({ country, line1, line2, line3 }) => (
        <Address>
          <Country>{country}</Country>
          <div>{line1}</div>
          <div>{line2}</div>
          <div>{line3}</div>
        </Address>
      ))} */}
      <AddressWrapper>
        <Address>
          <Country>USA</Country>
          <Wrapper>
            <div>
              <div>Address</div>
              <div>SecondSight Data Discovery, LLC</div>
              <div>885 South College Mall Rd </div>
              <div>Suite 393, Bloomington IN, 47401</div>
            </div>
            <div>
              <div>Phone</div>
              <div>1 (855) 438-6946</div>
            </div>
          </Wrapper>
        </Address>
        <Address>
          <Country>UAE</Country>
          <Wrapper>
            <div>
              <div>Address</div>
              <div>twofour54</div>
              <div>Salam Street,</div>
              <div>Abu Dhabi</div>
            </div>
            <div>
              <div>United</div> Arab Emirates
            </div>
          </Wrapper>
        </Address>
      </AddressWrapper>
      <EmailUsWrapper>
        <StyledLink href="mailto:info@s2shape.com">Email Us</StyledLink>
        <div>info@s2shape.com</div>
      </EmailUsWrapper>
      <MapImage src="/static/img/Contact/map@2x.png" />
    </Container>
  );
};

export default memo(Addresses);

interface IAddressesProps {}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  display: flex;
  max-width: 800px;
  padding-left: 25px;
  padding-right: 25px;

  ${({ theme }) => theme.media.max.tablet`
    flex-direction: column;
    align-items: center;
  `}
`;

const Address = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.LightGrey};
  color: #000;
  font-size: 1.2rem;
  width: 90%;
  max-width: 400px;
  height: 300px;
  padding: 15px;
  padding-top: 35px;
  margin: 0;
  margin-bottom: 60px;
  text-align: center;
  ${({ theme }) => theme.styles.boxShadows['1']};

  ${({ theme }) => theme.media.min.tablet`
    font-size: 1.4rem;
    width: 400px;
    &:first-of-type {
      margin-right: 15px;
    }
  `}
`;

const Country = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary};
  color: #fff;
  position: absolute;
  top: -20px;
  left: 50%;
  width: 80px;
  font-size: 1.2rem;
  padding: 7px 15px;
  border-radius: 5px;
  text-align: center;
  transform: translateX(-50%);
`;

const EmailUsWrapper = styled.div`
  color: #000;
  font-size: 1.2rem;
`;

const StyledLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.Primary};
  color: #fff;
  width: 80px;
  font-size: 1.2rem;
  padding: 7px 15px;
  margin: 0;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const MapImage = styled.img`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
`;
