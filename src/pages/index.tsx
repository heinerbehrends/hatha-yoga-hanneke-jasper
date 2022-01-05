import React from 'react';
import { styled, globalCss } from '../../stitches.config';
import Layout from '../components/layout';
import Hero from '../components/hero';
import InfoCards from '../components/InfoCard';
import LessenCards from '../components/LessenCard';
import { infoCards, lessenCards } from '../data';

const global = globalCss({
  '*': {
    fontFamily: '$default',
    fontSize: '$body',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
  },
});

const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$xl-resp',
  paddingX: '$s',
});

export default function Home() {
  global();
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      {infoCards.map((infoCard) => (
        <InfoCards
          key={infoCard.title}
          text={infoCard.text}
          title={infoCard.title}
          color={infoCard.color}
        />
      ))}
      {/* <LessenCards lessenCards={lessenCards} /> */}
    </Layout>
  );
}
