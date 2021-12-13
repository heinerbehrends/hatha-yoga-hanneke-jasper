import React from 'react';
import { styled, globalCss } from '../../stitches.config';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ImageCard from '../components/ImageCard';

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
  fontSize: 'min(6.25vw, 48px)',
  textAlign: 'center',
  marginTop: '$xl',
});

const infoCardText1 = `Saswitha yoga is een vorm van hatha yoga die uitgaat van de eenheid 
van lichaam en bewustzijn, waarbij de adem de verbinding vormt. De adem wordt gebruikt als 
middel om in jezelf die verbinding te ervaren. De adem is de dragende kracht in elke beweging. 
Door concentratie op de adem ontstaat een meditatieve aandacht die leidt tot verstilling.`;

export default function Home() {
  global();
  return (
    <Layout slot={<Hero />}>
      {/* <Hero /> */}
      <Heading>Wat is Hatha Yoga?</Heading>
      <ImageCard text={infoCardText1} title="Rustgevend" />
    </Layout>
  );
}
