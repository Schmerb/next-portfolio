/**
 *
 *
 *    DownloadForm
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import DownloadFormik from './DownloadFormik';

// import myPDF from '/static/pdf/dummy.pdf'

const DownloadForm = ({}: DownloadFormProps) => {
  const [initialValues, setInitialValues] = useState(() => {
    // fetch values from localStorage?
    return { title: '', name: '', email: '', companyName: '', message: '' };
  });

  return (
    <Container>
      <DownloadFormik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          const link = document.createElement('a');
          link.href = '/static/pdf';
          link.download = '/static/pdf/dummy.pdf';
          link.dispatchEvent(new MouseEvent('click'));
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      />
    </Container>
  );
};

export default memo(DownloadForm);

interface DownloadFormProps {}

const Container = styled.div``;
