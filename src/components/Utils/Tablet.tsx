/**
 * Tablet Utility
 *  */

import styled from 'styled-components';

export const Tablet = styled.div`
  ${({ theme }) => theme.media.max.tablet`
    display: none;
  `}
`;

export default Tablet;
