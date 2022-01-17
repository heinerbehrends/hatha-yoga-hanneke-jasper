import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from '../../stitches.config';

export const InfoCardContainer = styled('section', {
  display: 'flex',
  marginX: 'auto',
  gridTemplateColumns: '300px 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$s-resp',
  overflow: 'hidden',
  variants: {
    size: {
      bigScreen: {
        marginTop: '$3xl',
      },
      smallScreen: {
        marginTop: '$xl',
      },
    },
  },
});

const ImageContainer = styled('div', {
  backgroundColor: '$blue',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  marginTop: '$l',
  zIndex: '1',
  variants: {
    color: {
      blue: {
        backgroundColor: '$blue',
      },
      red: {
        backgroundColor: '$red',
      },
      green: {
        backgroundColor: '$green',
      },
    },
    size: {
      bigScreen: {
        height: 'min(31.25vw, 300px)',
        width: 'min(31.25vw, 300px)',
        borderRadius: '50%',
        marginTop: '$l',
      },
      smallScreen: {
        flexDirection: 'column',
        float: 'none',
        width: '100%',
        borderRadius: 0,
        alignItems: 'center',
        margin: 0,
        marginTop: '$m',
      },
      mobile: {
        marginX: 0,
        marginTop: '$l',
        width: '100%',
        borderRadius: 0,
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
        display: 'inherit',
        marginTop: '$m',
        borderRadius: '$s',
        '@l': { display: 'none' },
      },
    },
  },
});

const ArticleContainer = styled('article', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  width: '640px',
  paddingTop: '$xl-resp',
  backgroundColor: '$white',
  marginX: 'auto',
  '@l': {
    borderRadius: '$m-resp',
    marginLeft: '-60px',
    paddingX: '$3xl',
  },
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

export const SmallerHeading = styled('h2', {
  fontSize: '$l',
  fontWeight: 500,
  paddingLeft: '$l',
});

const Paragraph = styled('p', {
  fontSize: '$s',
  marginTop: '$xs',
  paddingX: '$l',
  '@s': {
    fontSize: '$body',
  },
});

const TextContainer = styled('div', {
  paddingX: '$s',
});

export type InfoCardProps = {
  title: string;
  image: IGatsbyImageData;
  color: 'red' | 'blue' | 'green';
  html: string;
};

export default function InfoCard({ title, image, color, html }: InfoCardProps) {
  return (
    <InfoCardContainer size={{ '@initial': 'smallScreen', '@l': 'bigScreen' }}>
      <ImageContainer
        color={color}
        hideUnderLarge={true}
        size={{ '@m': 'smallScreen', '@l': 'bigScreen' }}
      >
        <GatsbyImage alt="Een foto van een yoga houding" image={image} />
      </ImageContainer>

      <ArticleContainer>
        <ImageContainer
          hideAtLarge={true}
          size={{
            '@initial': 'mobile',
            '@m': 'smallScreen',
            '@l': 'bigScreen',
          }}
          color={color}
        >
          <GatsbyImage alt="Een foto van een yoga houding" image={image} />
        </ImageContainer>
        <TextContainer>
          <SmallerHeading>{title}</SmallerHeading>
          <Shape hideUnderLarge />
          <Paragraph dangerouslySetInnerHTML={{ __html: html }} />
        </TextContainer>
      </ArticleContainer>
    </InfoCardContainer>
  );
}
