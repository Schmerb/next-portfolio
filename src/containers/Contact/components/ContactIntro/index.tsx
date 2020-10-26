/**
 *
 * Contact Intro
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import BasicPageIntroSection from 'components/PageIntro/BasicImgIntro';

import ArchGlobe from '../Arch';

interface Props {}

const BGImg = '/static/img/Contact/bg-image@2x.png';

const ContactIntro = (props: Props) => {
  return <StyledBasicPageIntroSection imageSrc={BGImg} />;
};

export default ContactIntro;

const StyledBasicPageIntroSection = styled(BasicPageIntroSection)`
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;
