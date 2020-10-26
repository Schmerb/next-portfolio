/**
 *
 *
 *    CheckboxField
 *
 *
 */

import React, { useState, memo } from 'react';
import styled, { css } from 'styled-components';
import { useField } from 'formik';

import Input from 'components/Elements/Input';

import { StyledError } from '../Formik/Field';

const CheckboxField = ({ label, ...props }: ICheckboxFieldProps) => {
  const [field, meta, helpers] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <Container>
      <FieldWrapper>
        <Label>
          <Input type="checkbox" {...field} {...props} />
          {label}
        </Label>
      </FieldWrapper>
      <StyledError className="error" error={hasError} />
    </Container>
  );
};

export default memo(CheckboxField);

interface ICheckboxFieldProps {
  label: any;
  name: string;
}

const Container = styled.div`
  color: #000;

  input {
    width: 30px;
    margin-right: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
`;
