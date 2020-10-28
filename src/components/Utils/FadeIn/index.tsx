/**
 *
 *
 *    FadeIn
 *
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { useRouter } from 'next/router';

const FadeIn = ({ children, ...props }: IFadeInProps) => {
  // const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log({ isLoaded });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container loaded={isLoaded} className="FADE_IN">
      {children}
    </Container>
  );
};

const mapStateToProps = ({ display }) => ({
  ...display,
});

export default connect(mapStateToProps)(FadeIn);

interface IFadeInProps {
  loaded: boolean;
  children: any;
}

const Container = styled.div`
  transition: opacity 5s ease 0.3s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  // border: 1px solid #000;
`;
