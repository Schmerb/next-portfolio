/**
 * Mobile Utility
 *  */

import styled from 'styled-components';

export const Mobile = styled.div`
  ${({ theme }) => theme.media.min.tablet`
    display: none;
  `}
`;

export default Mobile;
