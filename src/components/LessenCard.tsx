import { Link } from 'gatsby';
import React from 'react';
import { styled } from '../../stitches.config';
import Button from './button';
import { Paragraph, SmallerHeading } from './InfoCard';

export type LessenCard = {
  title: string;
  text: string;
  cta: string;
  link: string;
};

type LessenCardProps = { lessenCards: LessenCard[] };

export const LessenCardsContainer = styled('article', {
  display: 'grid',
  gridGap: '$s',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  '@m': {
    marginTop: '$xl',
  },
});

const LessenContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  padding: '$s',
  borderBottom: '1px solid $coral',
  '@s': {
    padding: '$l',
  },
  '@l': {
    borderRadius: '$s',
    border: '1px solid',
    borderColor: '$blue',
    padding: '64px',
    paddingTop: '$xl',
  },
});

const LeesMeerLink = styled(Link, {
  color: '$coral',
  boxSizing: 'content-box',
  display: 'inline-block',
  border: '2px dotted rgba(0, 0, 0, 0)',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    textDecoration: 'underline',
    borderColor: '$green',
    paddingX: '$xxs',
    borderRadius: '$xxs',
  },
});

export default function LessenCards({ lessenCards }: LessenCardProps) {
  return (
    <LessenCardsContainer>
      {lessenCards.map((lessenCard) => (
        <LessenContainer key={lessenCard.title}>
          <div>
            <SmallerHeading>{lessenCard.title}</SmallerHeading>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: lessenCard.text }}
            ></Paragraph>
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
