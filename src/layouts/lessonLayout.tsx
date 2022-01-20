import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { css, styled } from '../../stitches.config';
import Button from '../components/button';
import Layout from '../components/layout';
import Testimonial from '../components/testimonial';
import { Heading } from '../pages';
import { getLocalImage, ImageNode } from '../utils';

const LessenHTML = styled('article', {
  marginTop: '$s',
  '@l': { marginTop: '$l' },
});

const LessenContainer = styled('div', {
  paddingX: '$s',
  '@m': {
    paddingX: '$l',
  },
  '@l': {
    paddingX: '$xxl',
  },
});

const imageStyles = css({
  marginTop: '$s',
  '@l': { marginTop: '$l' },
});

type LessonData = {
  data: {
    wpLes: {
      slug: string;
      title: string;
      content: string;
      buttonTekst: {
        buttonTekst: string;
      };
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    };
    wpAanbeveling?: {
      aanbeveling: {
        aanbevelingTekst: string;
        aanbevolenDoor: string;
        foto: ImageNode;
      };
    };
  };
};

export default function LessonLayout({
  data: { wpLes, wpAanbeveling },
}: LessonData) {
  return (
    <Layout background={true} border={true}>
      <LessenContainer>
        <Heading>{wpLes.title}</Heading>
        <GatsbyImage
          alt=""
          image={
            wpLes.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          }
          className={imageStyles()}
        />
        <LessenHTML dangerouslySetInnerHTML={{ __html: wpLes.content }} />
        <Button to="/contact" size="big" color="greenTint">
          {wpLes.buttonTekst.buttonTekst}
        </Button>
        {wpAanbeveling ? (
          <Testimonial
            quote={wpAanbeveling.aanbeveling.aanbevelingTekst}
            author={wpAanbeveling.aanbeveling.aanbevolenDoor}
            image={getLocalImage(wpAanbeveling.aanbeveling.foto)}
          />
        ) : null}
      </LessenContainer>
    </Layout>
  );
}

export const lessonPageQuery = graphql`
  query LessonPageQuery($id: String, $title: String) {
    wpLes(id: { eq: $id }) {
      id
      slug
      title
      content
      buttonTekst {
        buttonTekst
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 960
                placeholder: BLURRED
                blurredOptions: {}
              )
            }
          }
        }
      }
    }
    wpAanbeveling(aanbeveling: { toonOpPagina: { eq: $title } }) {
      aanbeveling {
        aanbevelingTekst
        aanbevolenDoor
        foto {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 90, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;
