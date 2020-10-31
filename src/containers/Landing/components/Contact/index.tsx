/**
 *
 *
 *    Contact
 *
 *
 */

import React, { useEffect, useState, useRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import emailjs, { init } from 'emailjs-com';
import ReactLoading from 'react-loading';

import colors from 'styles/theme/colors';
import { toastSuccess, toastError } from 'utils/lib/Toastify';

import ContactFormik from './ContactFormik';
import useAnimation from './useAnimation';

const title = 'Get in TOUCH';
const text = 'mikeschmerbeck@gmail.com';
const href = 'mailto:mikeschmerbeck@gmail.com';

const Contact = ({ scrollTop }: ContactProps) => {
  const [isSending, setIsSending] = useState(false);

  const [initialValues, setInitialValues] = useState(() => {
    // fetch values from localStorage?
    return { name: '', email: '', message: '' };
  });

  const {
    containerRef,
    // containerInView,
    titleProps,
    linkProps,
    showLink,
    showTitle,
  } = useAnimation({ scrollTop });

  const inputRef: any = useRef();
  const copyEmail = () => {
    /* Select the text field */
    inputRef.current.select();
    // inputRef.current.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand('copy');
  };

  useEffect(() => {
    //
    // initialize our email client
    //
    init('user_oYupYFGxNAdubi0HHerti');
  }, []);

  const handleSubmit = async (
    { name, email, message }: any,
    resetForm: any,
  ) => {
    setIsSending(true);
    // create template variables
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      //
      // send email
      //
      const response = await emailjs.send(
        'contact_service',
        'contact_form',
        templateParams,
      );
      if (response.status === 200) {
        // toast notification
        toastSuccess('Email has been sent!');
        // reset form here
        resetForm();
      } else {
        toastError('Sorry, something went wrong!');
      }
      // stop loader
      setIsSending(false);
    } catch (err) {
      // log error here
      console.error(err);
      setIsSending(false);
      toastError(
        err.toString ? err.toString() : 'Sorry, something went wrong!',
      );
    }
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
        <HiddenInput
          type="text"
          value={text}
          ref={inputRef}
          onChange={() => {}}
        />
      </TitleWrapper>
      <LoaderWrapper>
        {isSending && (
          <ReactLoading type="bars" color={colors.PrimaryBluePurple} />
        )}
      </LoaderWrapper>
      <FormWrapper isSending={isSending}>
        <ContactFormik
          showForm={showLink}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values, resetForm);
            setSubmitting(false);
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
  position: relative;
  padding: 50px 15px;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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
  ${({ isSending }) =>
    isSending &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
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
