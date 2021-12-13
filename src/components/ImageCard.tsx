import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from '../../stitches.config';

type InfoCardProps = {
  title: string;
  text: string;
};

const ImageCardContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  alignItems: 'center',
  borderRadius: '$s-resp',
  height: '300px',
  variants: {
    size: {
      bigScreen: {
        marginTop: '$3xl-resp',
        marginX: '$xl-resp',
      },
      smallScreen: {
        marginLeft: '$3xl-resp',
      },
    },
  },
});

const ImageContainer = styled('div', {
  backgroundColor: '$blue',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  zIndex: '1',
  variants: {
    size: {
      bigScreen: {
        height: 'min(31.25vw, 300px)',
        width: 'min(31.25vw, 300px)',
      },
      smallScreen: {
        width: '160px',
      },
    },
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'inherit' },
      },
    },
    hideAtLarge: {
      true: {
        float: 'left',
        shapeOutside: 'circle(42.58% at 5.13rem 10.38rem)',
        marginRight: '$xl-resp',
        marginTop: '$3xl-resp',
        display: 'inherit',
        '@l': { display: 'none' },
      },
    },
  },
});

const TextContainer = styled('article', {
  width: '640px',
  paddingLeft: '$3xl-resp',
  paddingRight: '$xl-resp',
  paddingY: '$xl-resp',
  backgroundColor: '$white',
  borderRadius: '$m-resp',
  marginLeft: '-60px',
});

const Shape = styled('div', {
  width: '20px',
  height: '240px',
  shapeOutside: 'ellipse(215px 216px at -996.67% 95px)',
  float: 'left',
  variants: {
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'inherit' },
      },
    },
  },
});

const SmallerHeading = styled('h2', {
  fontSize: '$xl',
  fontWeight: 500,
});

export default function ImageCard({ title, text }: InfoCardProps) {
  return (
    <ImageCardContainer size={{ '@initial': 'smallScreen', '@l': 'bigScreen' }}>
      <ImageContainer
        hideUnderLarge={true}
        size={{ '@initial': 'smallScreen', '@l': 'bigScreen' }}
      >
        <StaticImage
          alt="Een foto van een yoga houding"
          width={300}
          height={300}
          layout="constrained"
          src="../images/houding-1.png"
          placeholder="none"
        />
      </ImageContainer>

      <TextContainer>
        <ImageContainer
          hideAtLarge={true}
          size={{ '@initial': 'smallScreen', '@l': 'bigScreen' }}
        >
          <StaticImage
            alt="Een foto van een yoga houding"
            width={300}
            height={300}
            layout="constrained"
            src="../images/houding-1.png"
            placeholder="none"
          />
        </ImageContainer>
        <SmallerHeading>{title}</SmallerHeading>
        <Shape hideUnderLarge={true} />
        <p> {text}</p>
      </TextContainer>
    </ImageCardContainer>
  );
}
