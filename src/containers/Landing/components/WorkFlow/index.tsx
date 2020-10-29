/**
 *
 *
 *    WorkFlow
 *
 *
 */
import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useTrail, animated } from 'react-spring';

import logos from 'utils/data/logos';
import { ToolType } from 'utils/data/types';

const title = 'Work Flow';
const text = 'Some of the tools I use to develop efficiently';

const tools: ToolType[] = [
  {
    id: uuidv4(),
    imgSrc: logos.vscode.imgSrc,
    href: logos.vscode.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.sketch.imgSrc,
    href: logos.sketch.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.gulp.imgSrc,
    href: logos.gulp.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.bsync.imgSrc,
    href: logos.bsync.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.git.imgSrc,
    href: logos.git.href,
  },
];

const WorkFlow = ({}: WorkFlowProps) => {
  const [trail, set, stop]: any = useTrail(tools.length, () => ({
    opacity: 0,
    transform: 'translate3d(55px,0,0)',
    config: {
      tension: 105,
    },
  }));
  return (
    <Container id="work-flow-section">
      <Title>{title}</Title>
      <Text>{text}</Text>
      {trail.map((props, index) => {
        const { id, imgSrc, href, style } = tools[index];
        return (
          <animated.li style={props} key={id}>
            <Link href={href} target="_blank">
              <LogoImage src={imgSrc} style={style} />
            </Link>
          </animated.li>
        );
      })}
    </Container>
  );
};

export default memo(WorkFlow);

interface WorkFlowProps {}

const Container = styled.section``;

const Title = styled.h2`
  margin: 0;
  padding: 0;
`;
const Text = styled.p`
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.PrimaryGrey};
`;

const LogoImage = styled.img`
  width: auto;
  height: 70px;
`;
