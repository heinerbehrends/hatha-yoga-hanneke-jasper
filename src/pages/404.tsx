import * as React from 'react';
import { Link } from 'gatsby';
import { Heading, SubHeading } from '../components/indexStyles';

// markup
const NotFoundPage = () => {
  return (
    <>
      <Heading>Oeps</Heading>
      <SubHeading>De pagina die je zoekt bestaat niet</SubHeading>
      <Link to="/">Wil je terug naar de homepage?</Link>
    </>
  );
};

export default NotFoundPage;
