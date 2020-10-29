/**
 *
 *
 *    Contact
 *
 *
 */

import React, { useEffect, useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import useVisibilityState from 'utils/hooks/useVisibilityState';

import ContactFormik from './ContactFormik';

const springConfig = {
  config: {
    tension: 105,
  },
};

const title = 'Get in TOUCH';
const text = 'mikeschmerbeck@gmail.com';
const href = 'mailto:mikeschmerbeck@gmail.com';

const Contact = ({ scrollTop }: ContactProps) => {
  const inputRef: any = useRef();
  const [initialValues, setInitialValues] = useState(() => {
    // fetch values from localStorage?
    return { name: '', email: '', message: '' };
  });

  // inView handler
  const { containerRef, containerInView } = useVisibilityState({ scrollTop });
  // animation show states
  const [showTitle, setShowtitle] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (containerInView) {
      setShowtitle(true);
      setTimeout(() => {
        setShowLink(true);
      }, 250);
    }
  }, [containerInView]);

  const titleProps = useSpring({
    ...springConfig,
    opacity: showTitle ? 1 : 0,
    transform: `translate3d(0,${showTitle ? '0px' : '55px'},0)`,
  });

  const linkProps = useSpring({
    ...springConfig,
    opacity: showLink ? 1 : 0,
    transform: `translate3d(0,${showLink ? '0px' : '55px'},0)`,
  });

  const copyEmail = () => {
    /* Select the text field */
    inputRef.current.select();
    // inputRef.current.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand('copy');
  };

  return (
    <Container id="contact-section" ref={containerRef}>
      <TitleWrapper>
        <animated.div style={titleProps}>
          <Title>{title}</Title>
        </animated.div>
        <animated.div style={linkProps}>
          <Link href={href}>{text}</Link>
          <CopyButton type="button" onClick={copyEmail}>
            Copy
          </CopyButton>
        </animated.div>
        <HiddenInput type="text" value={text} ref={inputRef} />
      </TitleWrapper>
      <FormWrapper>
        <ContactFormik
          showForm={showLink}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        />
      </FormWrapper>
    </Container>
  );
};

export default memo(Contact);

interface ContactProps {
  scrollTop: number;
}

const Container = styled.section`
  padding: 50px 15px;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 2rem;
  `}
`;

const Link = styled.a`
  color: #000;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: lighter;
  text-decoration: none;
  transition: 0.15s color;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 1.3rem;
    text-align: center;
  `}

  &:hover {
    color: grey;
  }
`;

const FormWrapper = styled.div`
  margin-top: 25px;
`;

const CopyButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
`;

/**
 * useTrailAnimation
 *
 * @param {*} { containerInView }
 * @returns
 */
// const useAnimation = ({ containerInView }) => {
//   // animation
//   const animatedProps = useSpring({
//     opacity: containerInView ? 1 : 0,
//   });

//   return animatedProps;
// };
