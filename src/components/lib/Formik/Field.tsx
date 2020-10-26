/**
 *
 * Base Input
 *
 *
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { useField } from 'formik';

import Input from 'components/Elements/Input';

export const MyTextField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <Container>
      <FieldWrapper>
        <Label>
          {label}
          <Input {...field} {...props} />
        </Label>
      </FieldWrapper>
      <StyledError className="error" error={hasError} />
    </Container>
  );
};

export default MyTextField;

export const Container = styled.div`
  color: #000;
  margin-bottom: 10px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
`;

/**
 *
 * Styled Error
 *
 *  */
export const StyledError = ({ children, style, className, error }: any) => (
  <MyError style={style} className={className} error={error}>
    {children}
    {error}
  </MyError>
);

const MyError = styled.div<any>`
  color: red;
  font-family: 'Roboto', sans-serif;
  /* overflow: hidden; */
  font-size: 1rem;
  transition: height 0.5s, opacity 0.3s ease 0.2s;
  ${({ error }) =>
    error
      ? css`
          height: 15px;
          opacity: 1;
          margin-left: 0.4rem;
          margin-top: 0.6rem;
        `
      : css`
          height: 0px;
          opacity: 0;
        `}
`;
