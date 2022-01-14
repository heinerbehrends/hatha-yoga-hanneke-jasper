import { Link } from 'gatsby';
import React from 'react';
import { styled } from '../../stitches.config';
import Button from './button';
import { SmallerHeading } from './InfoCard';

export type LessenCard = {
  title: string;
  text: string;
  cta: string;
  link: string;
};

type LessenCardProps = { lessenCards: LessenCard[] };

export const LessenCardsContainer = styled('article', {
  display: 'grid',
  gridGap: '16px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  '@m': {
    marginTop: '$3xl',
  },
});

const LessenContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
  display: 'block',
});

export default function LessenCards({ lessenCards }: LessenCardProps) {
  return (
    <LessenCardsContainer>
      {lessenCards.map((lessenCard) => (
        <LessenContainer key={lessenCard.title}>
          <div>
            <SmallerHeading>{lessenCard.title}</SmallerHeading>
            <p dangerouslySetInnerHTML={{ __html: lessenCard.text }}></p>
            <LeesMeerLink to={lessenCard.link}>Lees meer</LeesMeerLink>
          </div>
          <Button size="big" color="greenTint" to="/contact">
            {lessenCard.cta}
          </Button>
        </LessenContainer>
      ))}
    </LessenCardsContainer>
  );
}
