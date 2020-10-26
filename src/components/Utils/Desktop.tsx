/**
 * Desktop Utility
 *  */

import styled from 'styled-components';

export const Desktop = styled.div`
  ${({ theme }) => theme.media.max.desktop`
    display: none;
  `}
`;

export default Desktop;
