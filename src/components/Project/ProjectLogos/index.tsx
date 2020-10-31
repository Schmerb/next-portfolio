/**
 *
 *
 *    ProjectLogos
 *
 *
 */

import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useTrail, useSprings, animated } from 'react-spring';

import { ToolType } from 'utils/data/types';

const ProjectLogos = ({ logosRef, tools, inView }: ProjectLogosProps) => {
  const [trail, set, stop]: any = useTrail(tools.length, () => ({
    opacity: 0,
    transform: 'translate3d(55px,0,0)',
    config: {
      tension: 105,
    },
  }));

  useEffect(() => {
    if (inView) {
      set({ opacity: 1, transform: 'translate3d(0,0,0)' });
    }
  }, [inView]);

  return (
    <LogoImagesList ref={logosRef}>
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
    </LogoImagesList>
  );
};

export default memo(ProjectLogos);

interface ProjectLogosProps {
  logosRef: any;
  tools: ToolType[];
  inView: boolean;
}

const LogoImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0;
  margin-top: 35px;
  margin-bottom: 35px;

  li {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    img {
      transition: transform 0.15s;
      &:hover {
        /* transform: translate3d(0, -2px, 0); */
        transform: scale(0.9);
      }
    }
  }
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
