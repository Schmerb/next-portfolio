/**
 *
 *
 *    ProjectImages
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const ProjectImages = ({ images }: ProjectImagesProps) => {
  const [, set] = useState();
  
  return (
    <Container>
      <h2>ProjectImages</h2>
    </Container>
  );
};

export default memo(ProjectImages);

interface ProjectImagesProps {
  images: any[];
}

const Container = styled.div`
  margin-top: 50px;
  border: 1px solid #000;
`;
