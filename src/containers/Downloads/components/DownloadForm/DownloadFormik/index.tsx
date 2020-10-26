/**
 *
 *
 *    DownloadFormik
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import { Mobile, Tablet } from 'components/Utils';
import MyTextField from 'components/lib/Formik/Field';
import MyTextareaField from 'components/lib/Formik/TextareaField';
import CheckboxField from 'components/lib/Formik/CheckboxField';
import Button from 'components/Elements/Button';
import Link from 'components/Elements/Link';

import validate from './validate';

const DownloadFormik = ({ initialValues, onSubmit }: DownloadFormikProps) => {
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
            <MyTextField
              name="name"
              type="text"
              placeholder="First and Last Name*"
            />
          </TopWrapper>
          <MyTextField
            name="jobPosition"
            type="text"
            placeholder="Job Position"
          />
          <MyTextField name="email" type="email" placeholder="Email*" />
          <MyTextField
            name="companyName"
            type="text"
            placeholder="Company Name*"
          />
          <Controls>
            <Tablet>
              <StyledButton primary type="submit" disabled={isSubmitting}>
                Download PDF
              </StyledButton>
            </Tablet>
            <CheckboxField
              name="terms"
              label={
                <TermsSpan>
                  I agree with the{' '}
                  <StyledLink href="/terms">Terms & Conditions</StyledLink>
                </TermsSpan>
              }
            />
            <Mobile style={{ marginLeft: '25px' }}>
              <StyledButton primary type="submit" disabled={isSubmitting}>
                Download PDF
              </StyledButton>
            </Mobile>
          </Controls>
        </Form>
      )}
    </Formik>
  );
};

export default memo(DownloadFormik);

interface DownloadFormikProps {
  initialValues: any;
  onSubmit?: any;
}

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  ${({ theme }) => theme.media.max.tablet`
    padding-left: 15px;
    padding-right: 15px;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 30px;
  `}
`;

const TermsSpan = styled.span`
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 1rem;
`;

const Controls = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
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
  min-width: 140px;
  ${({ theme }) => theme.media.min.tablet`
    margin: 0px;
    margin-right: 30px;
    font-size: 1.1rem;
  `}
`;
