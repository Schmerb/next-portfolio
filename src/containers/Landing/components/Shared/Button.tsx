/**
 *
 * Button
 *
 *  */

import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick: () => void;
}

const LearnButton = ({ onClick, text = 'LearnMore' }: Props) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

export default LearnButton;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.Primary};
  background-color: #fff;
  margin-top: 25px;
  padding: 5px 15px;
  border-radius: 3px;
  overflow: hidden;
  border: none;
  cursor: pointer;
`;
