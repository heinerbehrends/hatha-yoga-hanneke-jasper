import React from 'react';
import Button from './button';
import { Paragraph, SmallerHeading } from './infoCardStyles';
import {
  LessenCardsContainer,
  LessenContainer,
  LeesMeerLink,
} from './lessenCardStyles';

export type LessenCard = {
  title: string;
  text: string;
  cta: string;
  link: string;
};

type LessenCardProps = { lessenCards: LessenCard[] };

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
