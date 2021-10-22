import React from 'react';
import { styled, globalCss } from '../../stitches.config';

const Heading = styled('h1', {
  fontSize: '$xxl',
  fontFamily: 'Asap',
});

const global = globalCss({
  '*': {
    fontFamily: '$default',
  },
});

export default function Home(props) {
  global();
  return (
    <>
      <Heading>This is it!</Heading>
    </>
  );
}
