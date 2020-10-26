/**
 *
 * Teaxtarea
 *
 *
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { useField } from 'formik';

import Textarea from 'components/Elements/Textarea';

import { StyledError } from './Field';

export const MyTextareaField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <Container>
      <FieldWrapper>
        <Label>
          {label}
          <Textarea {...field} {...props} />
        </Label>
      </FieldWrapper>
      <StyledError className="error" error={hasError} />
    </Container>
  );
};

export default MyTextareaField;

const Container = styled.div`
  /* border: 1px solid red; */
`;

const FieldWrapper = styled.div`
  /* display: flex;
  align-items: center; */
`;

const Label = styled.label`
  width: 100%;
`;
