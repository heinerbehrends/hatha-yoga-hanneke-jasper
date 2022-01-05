import React from 'react';
import { styled } from '../../stitches.config';
import { SmallerHeading } from './InfoCard';

type LessenCard = {
  title: string;
  text: string;
};

type LessenCardProps = { lessenCards: LessenCard[] };

const LessenCardsContainer = styled('article', {
  display: 'grid',
  gridGap: '16px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  marginX: '$s',
  marginTop: '$3xl',
});

const LessenContainer = styled('div', {
  backgroundColor: '$white',
  border: '1px solid',
  borderColor: '$blue',
  padding: '64px',
  paddingTop: '48px',
  borderRadius: '$s',
});

export default function LessenCards({ lessenCards }: LessenCardProps) {
  return (
    <LessenCardsContainer>
      {lessenCards.map((lessenCard) => (
        <LessenContainer key={lessenCard.title}>
          <SmallerHeading>{lessenCard.title}</SmallerHeading>
          <p>{lessenCard.text}</p>
        </LessenContainer>
      ))}
    </LessenCardsContainer>
  );
}
