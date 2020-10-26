/**
 *
 * Textarea
 *
 *  */

import styled, { css } from 'styled-components';

export const Textarea = ({ ...props }: any) => <StyledTextarea {...props} />;

export default Textarea;

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  width: 100%;
  resize: vertical;
  min-height: 120px;
  max-height: 400px;
  padding: 10px;
  border: 2px solid lightgrey;
  border-radius: 5px;
`;
