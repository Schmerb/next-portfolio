/**
 *
 * Button
 *
 *  */

import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  children?: any;
  primary?: boolean;
  dark?: boolean;
  onClick?: () => void;
  style?: any;
  className?: string;
  type?: string;
}

const Button = ({
  onClick,
  text = '',
  children,
  primary,
  dark,
  style,
  className,
  type = 'button',
}: Props) => {
  return (
    <StyledButton
      type={type}
      className={className}
      primary={primary}
      dark={dark}
      onClick={onClick}
      style={style}
    >
      {text || children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  font-family: 'NextPro-Medium', sans-serif;
  color: ${({ theme, primary, dark }) =>
    primary || dark ? '#fff' : theme.colors.Primary};
  background-color: ${({ theme, primary, dark }) =>
    primary ? theme.colors.Primary : dark ? 'grey' : '#fff'};
  margin-top: 25px;
  padding: 7px 15px;
  border-radius: 3px;
  overflow: hidden;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  /* ${({ theme }) => theme.styles.boxShadows['0']}; */
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`;
