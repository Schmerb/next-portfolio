/**
 *
 * Footer
 *
 *  */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { useSpring } from 'react-spring';
import { isBrowser, isMobile } from 'react-device-detect';

import LinkedInIcon from 'components/svg/Brands/LinkedIn';
import GithubIcon from 'components/svg/Brands/Github';
import EmailIcon from 'components/svg/Icons/Email';
import UpArrowIcon from 'components/svg/Icons/UpArrow';

import useScrollTop from 'utils/hooks/useScrollTop';
import { links } from 'utils/navigation';

interface FooterProps {}

export const FOOTER_HEIGHT = 477;

const props = { width: 30, height: 30, fill: '#555' };

const Footer = ({}: FooterProps) => {
  const ref = useRef(false); // used to prevent arrowUp/distanceFromBottom bug

  const [showUpArrow, setShowUpArrow] = useState(false);

  const scrollTop = useScrollTop({});

  const [, setY] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    const distanceFromBottom =
      document.body.scrollHeight - window.innerHeight - window.scrollY;

    if (ref.current && distanceFromBottom < FOOTER_HEIGHT * 2) {
      // set state to show
      setShowUpArrow(true);
    } else {
      setShowUpArrow(false);
    }
    // this prevents bug where distanceFromBottom is not correct on page load
    ref.current = true;
  }, [scrollTop]);

  const handleLinkClick = (id: string) => (evt: any) => {
    evt.preventDefault();
    const El = document.querySelector(`#${id}`);
    const box = El.getBoundingClientRect();
    const elDistanceToTop = window.pageYOffset + box.top;
    window.scroll({
      top: elDistanceToTop,
      left: 0,
      behavior: 'smooth',
    });
    // setY({
    //   y: elDistanceToTop,
    //   reset: true,
    //   from: { y: window.scrollY },
    //   // @ts-ignore
    //   onFrame: (props: any) => window.scroll(0, props.y),
    // });
    // if (isBrowser) {
    //   setY({
    //     y: elDistanceToTop,
    //     reset: true,
    //     from: { y: window.scrollY },
    //     // @ts-ignore
    //     onFrame: (props: any) => window.scroll(0, props.y),
    //   });
    // } else {
    // window.scroll({
    //   top: elDistanceToTop,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    // }
  };

  const scrollToTop = () => {
    if (isBrowser) {
      setY({
        y: 0,
        reset: true,
        from: { y: window.scrollY },
        // @ts-ignore
        onFrame: (props: any) => window.scroll(0, props.y),
      });
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <UpArrowWrapper onClick={scrollToTop} showUpArrow={showUpArrow}>
        <UpArrowIcon width={30} height={30} />
      </UpArrowWrapper>
      <Wrapper>
        <NavList>
          {links.map(({ id, text }) => (
            <li key={id}>
              {/* <Link to={id} smooth={true} duration={1500} delay={250}> */}
              <a onClick={handleLinkClick(id)}>{text}</a>
              {/* </Link> */}
            </li>
          ))}
        </NavList>
      </Wrapper>
      <IconList>
        <IconListItem>
          <a href="https://github.com/Schmerb" target="_blank">
            <GithubIcon {...props} />
          </a>
        </IconListItem>
        <IconListItem>
          <a href="mailto:mikeschmerbeck@gmail.com" target="_blank">
            <EmailIcon {...props} />
          </a>
        </IconListItem>
        <IconListItem>
          <a
            href="https://www.linkedin.com/in/michael-schmerbeck/"
            target="_blank"
          >
            <LinkedInIcon {...props} />
          </a>
        </IconListItem>
      </IconList>
      <Copyright>copyright © 2020 | Mike Schmerbeck</Copyright>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  color: #fff;
  height: ${FOOTER_HEIGHT}px;
  padding: 50px 15px;
`;

const UpArrowWrapper = styled.div`
  position: fixed;
  right: 15px;
  bottom: ${FOOTER_HEIGHT - 50}px;
  opacity: ${({ showUpArrow }) => (showUpArrow ? 1 : 0)};
  z-index: 1;
  transition: opacity 0.15s;
  svg,
  path {
    fill: ${({ theme }) => theme.colors.PrimaryBluePurple};
  }
  svg {
    @keyframes bounce {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -5px);
      }
      100% {
        transform: translateY(0, 0);
      }
    }
    cursor: pointer;

    &:hover {
      animation: bounce 2s ease-in-out infinite;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavList = styled(List)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  &::before,
  &::after {
    content: '';
    background-color: #555;
    position: absolute;
    height: 1px;
    width: 20%;
    top: 50%;
  }
  &::before {
    left: 0;
    transform: translate(50%, -50%);
  }
  &::after {
    right: 0;
    transform: translate(-50%, -50%);
  }

  li {
    margin-bottom: 15px;
    text-transform: uppercase;
    a {
      color: ${({ theme }) => theme.colors.Bone};
      transition: color 0.15s;
      cursor: pointer;
      &:hover {
        color: lightgrey;
      }
    }
  }
`;

const IconList = styled(List)`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 30px 15px;
  &::before {
    content: '';
    background-color: #555;
    position: absolute;
    height: 30px;
    width: 1px;
    top: -15%;
  }
`;

const IconListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid #555;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 0 20px rgba(107, 107, 107, 0.6);
  }

  a {
    svg,
    path {
      transition: transform 0.15s, fill 0.15s;
    }
    &:hover {
      svg {
        transform: scale(0.85);
        path {
          fill: ${({ theme }) => theme.colors.PrimaryBluePurple};
        }
      }
    }
  }
`;

const Copyright = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  text-align: center;
`;
