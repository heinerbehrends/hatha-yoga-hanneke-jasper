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
      mobile: {
        width: '70vw',
        height: '50vw',
        paddingX: '15vw',
        boxSizing: 'content-box',
      },
      smallScreen: {
        height: 'min(50vw, 400px)',
        width: 'min(50vw, 400px)',
        paddingX: 0,
        boxSizing: 'border-box',
        borderRadius: 'min(50vw, 400px)',
      },
      bigScreen: {
        height: 'min(40vw, 400px)',
        width: 'min(40vw, 400px)',
        borderRadius: 'min(40vw, 400px)',
      },
    },
  },
});

const HeroGrid = styled('div', {
  display: 'flex',
  // gridTemplateColumns: 'min-content max-content',
  alignItems: 'center',
  marginX: 'auto',
  variants: {
    size: {
      mobile: {
        width: 'fit-content',
        flexDirection: 'column-reverse',
        marginTop: 0,
      },
      bigger: {
        flexDirection: 'row',
        marginTop: 'calc(60px + $s-resp)',
      },
    },
  },
});

const TextLogo = styled('span', {
  backgroundColor: '$white',
  color: '$coral',
  fontFamily: 'Ostrich Sans',
  variants: {
    size: {
      mobile: {
        fontSize: '16vw',
        lineHeight: '16vw',
        textAlign: 'center',
        width: '100vw',
        paddingY: '$xl-resp',
      },
      smallScreen: {
        fontSize: '8vw',
        lineHeight: '8vw',
        width: 'fit-content',
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

const Break = styled('br', {
  variants: {
    display: {
      hide: {
        display: 'none',
      },
      show: {
        display: 'initial',
      },
    },
  },
});

export default function Hero() {
  const dahliaRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dahliaWidth = dahliaRef.current?.clientWidth!;
    const windowWidth = getWindowWidth();
    if (windowWidth! < 640 && windowWidth! > 480) {
      heroRef.current!.style.marginLeft = `${(dahliaWidth / 2) * -1}px`;
    }
  });
  return (
    <HeroGrid ref={heroRef} size={{ '@initial': 'mobile', '@s': 'bigger' }}>
      <DahliaContainer
        ref={dahliaRef}
        size={{ '@initial': 'mobile', '@s': 'smallScreen', '@md': 'bigScreen' }}
      >
        <StaticImage
          alt="picture of a dahlia"
          src="../images/dahlia.png"
          placeholder="none"
        />
      </DahliaContainer>
      <TextLogo
        size={{ '@initial': 'mobile', '@s': 'smallScreen', '@md': 'bigScreen' }}
      >
        Hatha Yoga <Break display={{ '@initial': 'show', '@s': 'hide' }} />{' '}
        Hanneke Jasper
      </TextLogo>
    </HeroGrid>
  );
}
