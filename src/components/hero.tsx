import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from '../../stitches.config';

function getWindowWidth() {
  if (typeof window === 'undefined') return;
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
}

const DahliaContainer = styled('div', {
  backgroundColor: '$green',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      bigScreen: {
        height: 'min(40vw, 400px)',
        width: 'min(40vw, 400px)',
        borderRadius: 'min(40vw, 400px)',
      },
      smallScreen: {
        height: 'min(50vw, 400px)',
        width: 'min(50vw, 400px)',
        borderRadius: 'min(50vw, 400px)',
      },
    },
  },
});

const HeroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'min-content max-content',
  marginTop: 'calc(62px + $xl-resp)',
  alignItems: 'center',
  marginLeft: '$s-resp',
});

const TextLogo = styled('span', {
  backgroundColor: '$white',
  color: '$coral',
  fontFamily: 'Ostrich Sans',
  width: 'fit-content',
  variants: {
    size: {
      smallScreen: {
        fontSize: '8.33vw',
        paddingX: '4.17vw',
        paddingY: '3.13vw',
        borderRadius: '3.13vw',
        marginLeft: '-6.25vw',
      },
      bigScreen: {
        fontSize: 'min(6.67vw, 64px)',
        paddingX: '$l-resp',
        paddingY: '$m-resp',
        marginLeft: '-$xl-resp',
        borderRadius: '$m-resp',
      },
    },
  },
});

export default function Hero() {
  const dahliaRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dahliaWidth = dahliaRef.current?.clientWidth!;
    if (getWindowWidth()! < 640) {
      heroRef.current!.style.marginLeft = `${(dahliaWidth / 2) * -1}px`;
    }
  });
  return (
    <HeroGrid ref={heroRef}>
      <DahliaContainer
        ref={dahliaRef}
        size={{ '@initial': 'smallScreen', '@md': 'bigScreen' }}
      >
        <StaticImage
          alt="picture of a dahlia"
          src="../images/dahlia.png"
          placeholder="none"
        />
      </DahliaContainer>
      <TextLogo size={{ '@initial': 'smallScreen', '@md': 'bigScreen' }}>
        Hatha Yoga Hanneke Jasper
      </TextLogo>
    </HeroGrid>
  );
}
