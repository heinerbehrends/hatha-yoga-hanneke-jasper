import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css, styled } from '../../stitches.config';
import HYHJ from '../images/HYHJ.svg';

const HeroContainer = styled('div', {
  backgroundColor: '$green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      mobile: {
        boxSizing: 'content-box',
      },
      bigScreen: {
        width: '100%',
        boxSizing: 'border-box',
      },
    },
  },
});

const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '960px',
});

const PaddingContainer = styled('div', {
  display: 'flex',
  paddingY: '6%',
  '@m': {
    paddingY: '8%',
    paddingLeft: '5%',
  },
});

const TextLogo = styled('h1', {
  textAlign: 'center',
  fontFamily: 'Ostrich Sans',
  color: '$coral',
  fontSize: '$3xl',
  lineHeight: '56px',
  paddingY: '$m',
});

const LogoContainer = styled('div', {
  width: '100%',
  backgroundColor: '$white',
  '@m': {
    display: 'none',
  },
});

const imageStyles = css({
  width: 'clamp(128px, 33%, 300px)',
  height: 'clamp(128px, 33%, 300px)',
  marginX: 'auto',
  '@m': {
    height: '33%',
    width: '33%',
  },
  zIndex: 1,
});

const svgStyles = css({
  display: 'none',
  transform: 'translateX(-50px)',
  '@m': {
    display: 'initial',
  },
});

const translateLeftStyle = {} as const;

export default function Hero() {
  const dahliaRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <LogoContainer>
        <TextLogo>
          hatha yoga <br /> hanneke jasper
        </TextLogo>
      </LogoContainer>
      <HeroContainer
        ref={dahliaRef}
        size={{ '@initial': 'mobile', '@m': 'bigScreen' }}
      >
        <ImageContainer>
          <PaddingContainer>
            <StaticImage
              className={imageStyles()}
              alt="picture of a dahlia"
              src="../images/dahlia.png"
              placeholder="none"
              width={400}
            />
            <HYHJ className={svgStyles()} />
          </PaddingContainer>
        </ImageContainer>
      </HeroContainer>
    </>
  );
}
