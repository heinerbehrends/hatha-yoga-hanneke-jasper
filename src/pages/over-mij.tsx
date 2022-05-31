import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { styled } from '../../stitches.config';
import { Heading, TextBox } from '../components/indexStyles';
import { makeOverMijData } from '../data/overMijData';
import { ImageNode } from '../utils';

const OverMijContainer = styled('section', {
  display: 'flex',
  length: 0,
});

export default function OverMij({ hanneke }: OverMijImageData) {
  const { data } = makeOverMijData(hanneke);
  const { title, content } = data.wpPage;
  return (
    <Layout>
      <Heading>{title}</Heading>
      <OverMijContainer>
        <TextBox
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </OverMijContainer>
    </Layout>
  );
}

export const query = graphql`
  query OverMijPicsQuery {
    hanneke: file(relativePath: { eq: "hanneke.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
  }
`;

type OverMijImageData = {
  hanneke: ImageNode;
};
