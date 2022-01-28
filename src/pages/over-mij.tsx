import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { css, styled } from '../../stitches.config';
import { Heading } from '../components/indexStyles';

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

const HTMLContainer = styled('article', {
  maxWidth: '720px',
  marginX: 'auto',
  marginTop: '$xl',
  backgroundColor: '$white',
  paddingX: '$3xl',
  paddingY: '$xxl',
  borderRadius: '$s',
  border: '1px solid $coral',
  '& h2': {
    fontSize: '$xl',
    marginY: '$s',
  },
  '& ul': {
    marginY: '$s',
  },
  '& li': {
    listStyleType: 'circle',
    listStylePosition: 'inside',
  },
});

const OverMijContainer = styled('section', {
  display: 'flex',
});

const imageStyles = css({
  width: '200px',
  height: '260px',
  transform: 'translate(30px, 30px)',
});

const ImageContainer = styled('div', {
  borderRadius: '50%',
  backgroundColor: '$green',
  width: '260px',
  height: '260px',
  overflow: 'hidden',
  transform: 'translate(-75px)',
  border: '1px solid $coral',
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
  const image = data.wpPage.featuredImage.node;
  return (
    <Layout>
      <Heading>{title}</Heading>
      <OverMijContainer>
        <HTMLContainer
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <ImageContainer>
          <GatsbyImage
            alt={image.altText}
            image={image.localFile.childImageSharp.gatsbyImageData}
            className={imageStyles()}
          />
        </ImageContainer>
      </OverMijContainer>
    </Layout>
  );
}
