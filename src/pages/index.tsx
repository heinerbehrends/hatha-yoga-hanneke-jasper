import React from 'react';
import { styled, globalCss } from '../../stitches.config';
import Hero from '../components/hero';
import Layout from '../components/layout';

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

export default function Home() {
  global();
  return (
    <Layout>
      <Hero />
      <Heading>Wat is Hatha Yoga?</Heading>
    </Layout>
  );
}
