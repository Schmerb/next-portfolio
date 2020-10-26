/**
 *
 *
 *    ContactFormik
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import MyTextField from 'components/lib/Formik/Field';
import MyTextareaField from 'components/lib/Formik/TextareaField';
import Button from 'components/Elements/Button';

import validate from './validate';

const ContactFormik = ({ onSubmit, initialValues }: IContactFormikProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <TopWrapper>
            <MyTextField name="title" type="text" placeholder="Title*" />
            <MyTextField name="name" type="text" placeholder="Name*" />
          </TopWrapper>
          <MyTextField name="email" type="email" placeholder="Email*" />
          <MyTextField
            name="companyName"
            type="text"
            placeholder="Company Name*"
          />
          <MyTextareaField
            name="message"
            type="textarea"
            placeholder="Message*"
          />
          <Controls>
            <StyledButton primary type="submit" disabled={isSubmitting}>
              Send
            </StyledButton>
          </Controls>
        </Form>
      )}
    </Formik>
  );
};

export default memo(ContactFormik);

interface IContactFormikProps {
  initialValues: any;
  onSubmit?: any;
}

const Form = styled.form`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 800px;
  margin: 0 auto;
  /* border: 2px solid limegreen; */
`;

const Controls = styled.div`
  text-align: center;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 100%;
    &:first-of-type {
      width: 100px;
    }
    &:nth-of-type(2) {
      margin-left: 15px;
    }
  }
`;

const StyledButton = styled(Button)`
  font-family: 'NextPro-Light', sans-serif;
  font-size: 1.3rem;
  width: 140px;
`;
