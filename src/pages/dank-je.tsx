import React from 'react';
import { Link } from 'gatsby';
import { Heading, SubHeading } from '../components/indexStyles';
import Layout from '../components/layout';

function ThankYou() {
  return (
    <Layout>
      <Heading>Dank je voor je bericht</Heading>
      <span
        role="image"
        aria-label="Hands folded"
        style={{
          fontSize: '3rem',
          textAlign: 'center',
          padding: '2rem 0 2rem 0',
        }}
      >
        🙏
      </span>
      <Link style={{ textAlign: 'center', cursor: 'pointer' }} to="/">
        Wil je terug naar de homepage?
      </Link>
    </Layout>
  );
}

export default ThankYou;
