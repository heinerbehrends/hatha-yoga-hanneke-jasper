import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { styled } from '../../stitches.config';
import { Heading, TextBox } from '../components/indexStyles';

export const query = graphql`
  query OverMij {
    wpPage(title: { eq: "Wie ik ben" }) {
      title
      content
      slug
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const OverMijContainer = styled('section', {
  display: 'flex',
});

type OverMijData = {
  data: {
    wpPage: {
      title: string;
      content: string;
      slug: string;
      featuredImage: {
        node: {
          altText: string;
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    };
  };
};

export default function OverMij({ data }: OverMijData) {
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
