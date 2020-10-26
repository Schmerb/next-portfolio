/**
 *
 * Input
 *
 *  */

import styled, { css } from 'styled-components';
/**
 * Input
 *
 * @param {InputProps} { type = 'text', onChange, value, ...props }
 */
export const Input = ({
  type = 'text',
  onChange,
  value,
  ...props
}: InputProps) => (
  <StyledInput type={type} onChange={onChange} value={value} {...props} />
);

interface InputProps {
  type?: string;
  value?: string;
  onChange?: (evt: any) => void;
}

/* eslint-disable-next-line */
export const StyledInput = styled.input<any>`
  display: inline-block;
  background-color: #fff;
  color: #000;
  width: 100%;
  font-size: 1rem;
  height: 2.5rem;
  padding: 5px;
  padding-left: 10px;
  transition: border-color 0.3s;
  outline: none;
  border: 2px solid lightgrey;
  border-radius: 5px;

  &::placeholder {
    vertical-align: middle;
    font-size: 1rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export default Input;
