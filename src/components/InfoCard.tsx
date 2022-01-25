import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { css, styled } from '../../stitches.config';

export const InfoCardContainer = styled('section', {
  display: 'flex',
  marginX: 'auto',
  gridTemplateColumns: '300px 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$s-resp',
  variants: {
    size: {
      bigScreen: {
        overflow: 'hidden',
        marginTop: '$3xl',
        '&:first-of-type': {
          marginTop: '$xl',
        },
      },
      smallScreen: {
        marginTop: '$l',
      },
    },
  },
});

const ImageContainer = styled('div', {
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
        paddingX: 0,
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
        '@l': { display: 'none' },
      },
    },
  },
});

const ArticleContainer = styled('article', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  width: '100%',
  backgroundColor: '$white',
  marginX: 'auto',
  '@l': {
    width: '66%',
    borderRadius: '$m-resp',
    marginLeft: '-60px',
    paddingX: '$3xl',
    paddingTop: '$xl',
    paddingBottom: '$xl',
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
  paddingLeft: '$s',
  '@m': {
    paddingLeft: '$m',
  },
  '@l': {
    paddingLeft: 0,
  },
  '& svg': {
    transform: 'scale(120%)',
    marginRight: '$xs',
  },
});

export const Paragraph = styled('p', {
  fontSize: '$s',
  marginTop: '2px',
  paddingX: '$s',
  '@s': {
    fontSize: '$body',
  },
  '@m': {
    paddingLeft: '$m',
    paddingRight: '$m',
  },

  '@l': {
    paddingX: 0,
  },
});

const TextContainer = styled('div', {
  height: 'fit-content',
});

const imageStyles = css({
  width: '50%',
  '@m': {
    width: '33',
  },
});

export type InfoCardProps = {
  title: string;
  image: IGatsbyImageData;
  color: number;
  html: string;
};

const colorMap = ['blue', 'red', 'green'] as const;

export default function InfoCard({ title, image, color, html }: InfoCardProps) {
  return (
    <InfoCardContainer size={{ '@initial': 'smallScreen', '@l': 'bigScreen' }}>
      <ImageContainer
        color={colorMap[color]}
        hideUnderLarge={true}
        size={{ '@initial': 'mobile', '@m': 'smallScreen', '@l': 'bigScreen' }}
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
          color={colorMap[color]}
        >
          <GatsbyImage
            alt="Een foto van een yoga houding"
            image={image}
            className={imageStyles()}
          />
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
