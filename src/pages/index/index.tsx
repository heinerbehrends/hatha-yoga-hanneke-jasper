import React from 'react';
import { styled } from '../../../stitches.config';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import InfoCard from '../../components/InfoCard';
import LessenCards from '../../components/LessenCard';
import { HomeQuery } from './indexQuery';
import HomePageProps from './homePageProps';
import { getImage, getLessonsData } from './indexUtils';

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$xl-resp',
  paddingX: '$s',
});

export default function Home(props: HomePageProps) {
  const infoCardsData = props.data.wpPage.overHathaYoga;
  const lessonNodes = props.data.allWpLes.nodes.reverse();
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      <InfoCard
        color="blue"
        text={infoCardsData.inhoud0}
        title={infoCardsData.titel0}
        image={getImage(infoCardsData.afbeelding0)}
      />
      <InfoCard
        color="red"
        text={infoCardsData.inhoud2}
        title={infoCardsData.titel2}
        image={getImage(infoCardsData.afbeelding2)}
      />
      <InfoCard
        color="green"
        text={infoCardsData.inhoud3}
        title={infoCardsData.titel3}
        image={getImage(infoCardsData.afbeelding3)}
      />
      <LessenCards lessenCards={getLessonsData(lessonNodes)} />
    </Layout>
  );
}

export const query = HomeQuery;
