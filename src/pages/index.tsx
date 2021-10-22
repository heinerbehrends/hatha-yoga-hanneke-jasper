import React from 'react';
import { styled, globalCss } from '../../stitches.config';
import NavBar from '../components/navBar';

const global = globalCss({
  '*': {
    fontFamily: '$default',
    fontSize: '$body',
  },
});

const Heading = styled('h1', {
  fontSize: '$xxl',
  textAlign: 'center',
});

const navBarItems: string[] = [
  'Individuele Lessen',
  'Groepslessen',
  'Voor bedrijven',
  'Voor scholen',
  'Over mij',
];

export default function Home() {
  global();
  return (
    <>
      <NavBar navItems={navBarItems} />
      <Heading>This is it!</Heading>
    </>
  );
}
