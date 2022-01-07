import { Link } from 'gatsby';
import React from 'react';
import { styled } from '../../stitches.config';
import { SmallerHeading } from './InfoCard';

type LessenCard = {
  title: string;
  text: string;
  link: string;
};

type LessenCardProps = { lessenCards: LessenCard[] };

const LessenCardsContainer = styled('article', {
  display: 'grid',
  gridGap: '16px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  '@m': {
    marginTop: '$3xl',
  },
});

const LessenContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$s',
  fontSize: '$s',
  '@s': {
    fontSize: '$body',
  },
  '@m': {
    border: '1px solid',
    borderColor: '$blue',
    padding: '64px',
    paddingTop: '48px',
  },
  borderRadius: '$s',
});

const LeesMeerLink = styled(Link, {
  color: '$coral',
  display: 'inline',
});

export default function LessenCards({ lessenCards }: LessenCardProps) {
  return (
    <LessenCardsContainer>
      {lessenCards.map((lessenCard) => (
        <LessenContainer key={lessenCard.title}>
          <SmallerHeading>{lessenCard.title}</SmallerHeading>
          <p>{lessenCard.text}</p>
          <LeesMeerLink to={lessenCard.link}>Lees meer</LeesMeerLink>
        </LessenContainer>
      ))}
    </LessenCardsContainer>
  );
}
