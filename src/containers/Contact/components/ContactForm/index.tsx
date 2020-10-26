/**
 *
 *
 *    ContactForm
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { Title, TitleText } from 'containers/Landing/components/Intro';

import ContactFormik from './ContactFormik';

const ContactForm = ({}: IContactFormProps) => {
  const [initialValues, setInitialValues] = useState(() => {
    // fetch values from localStorage?
    return { title: '', name: '', email: '', companyName: '', message: '' };
  });

  return (
    <Container>
      <TitlwWrapper>
        <Title dark>
          <div>contact us</div>
        </Title>
      </TitlwWrapper>
      <ContactFormik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      />
    </Container>
  );
};

export default memo(ContactForm);

interface IContactFormProps {}

const Container = styled.section`
  margin-top: 30vw;
  ${({ theme }) => theme.media.min.desktop`
     margin-top: 40vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 50vw;
  }
`;

const TitlwWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
  /* border: 1px solid #000; */
`;
