import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  InfoCardContainer,
  ArticleContainer,
  TextContainer,
  SmallerHeading,
  Shape,
  Paragraph,
  ImageContainer,
  infoImageStyles,
} from './infoCardStyles';

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
            className={infoImageStyles()}
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
