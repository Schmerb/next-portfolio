/**
 *
 *
 *    ContactFormik
 *
 *
 */

import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useSpring, animated } from 'react-spring';

import MyTextField from 'components/lib/Formik/Field';
import MyTextareaField from 'components/lib/Formik/TextareaField';

import validate from './validate';

const springConfig = {
  config: {
    tension: 105,
  },
};

const ContactFormik = ({
  initialValues,
  onSubmit,
  showForm,
}: ContactFormikProps) => {
  // animation show states
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSendBtn, setShowSendBtn] = useState(false);

  useEffect(() => {
    if (showForm) {
      setShowName(true);
      setTimeout(() => {
        setShowEmail(true);
        setTimeout(() => {
          setShowMessage(true);
          setTimeout(() => {
            setShowSendBtn(true);
          }, 250);
        }, 250);
      }, 250);
    }
  }, [showForm]);

  const nameProps = useSpring({
    ...springConfig,
    opacity: showName ? 1 : 0,
    transform: `translate3d(0,${showName ? '0px' : '55px'},0)`,
  });
  const emailProps = useSpring({
    ...springConfig,
    opacity: showEmail ? 1 : 0,
    transform: `translate3d(0,${showEmail ? '0px' : '55px'},0)`,
  });
  const messageProps = useSpring({
    ...springConfig,
    opacity: showMessage ? 1 : 0,
    transform: `translate3d(0,${showMessage ? '0px' : '55px'},0)`,
  });
  const showBtnProps = useSpring({
    ...springConfig,
    opacity: showSendBtn ? 1 : 0,
    transform: `translate3d(0,${showSendBtn ? '0px' : '55px'},0)`,
  });

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <animated.div style={nameProps}>
            <MyTextField name="name" type="text" placeholder="Name*" />
          </animated.div>
          <animated.div style={emailProps}>
            <MyTextField name="email" type="email" placeholder="Email*" />
          </animated.div>
          <animated.div style={messageProps}>
            <MyTextareaField
              name="message"
              type="textarea"
              placeholder="Message*"
            />
          </animated.div>
          <animated.div style={showBtnProps}>
            <Controls>
              <StyledButton primary type="submit" disabled={isSubmitting}>
                Send
              </StyledButton>
            </Controls>
          </animated.div>
        </Form>
      )}
    </Formik>
  );
};

export default memo(ContactFormik);

interface ContactFormikProps {
  initialValues: any;
  onSubmit: any;
  showForm: boolean;
}

const Form = styled.form`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 800px;
  margin: 0 auto;
`;

const Controls = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.PrimaryBlue};
  font-family: 'NextPro-Light', sans-serif;
  font-size: 1.3rem;
  width: 180px;
  border-radius: 5px;
  padding: 12px 15px;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.colors.PrimaryBlue};
  transition: 0.15s box-shadow, 0.15s transform;
  cursor: pointer;
  box-shadow: 1px 3px 2px -1px rgba(0, 0, 0, 0.43);

  &:hover {
    border-color: ${({ theme }) => theme.colors.PrimaryPurple};
    color: ${({ theme }) => theme.colors.PrimaryPurple};
    ${({ theme }) => theme.styles.boxShadows['1']};
  }
  &:active {
    transform: translateY(1px);
    color: ${({ theme }) => theme.colors.PrimaryBlue};
    box-shadow: 1px 3px 2px -1px rgba(0, 0, 0, 0.43);
  }
`;
