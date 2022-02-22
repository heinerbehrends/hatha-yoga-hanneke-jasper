import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { css, styled } from '../../stitches.config';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';
import { Contact } from '../components/contactStyles';
import { Heading, TextBox } from '../components/indexStyles';
import Layout from '../components/layout';
import Testimonial from '../components/testimonial';
import { getLocalImage, ImageNode } from '../utils';

const LessenHTML = styled('article', {
  marginTop: '$s',
  '@l': { marginTop: '$l' },
  '& ul': {
    listStyleImage: 'circle',
    listStylePosition: 'inside',
  },
});

const LessenContainer = styled('div', {
  paddingX: '$m',
  '@l': {
    paddingX: '$l',
  },
});

const LessenContactContainer = styled('div', {
  paddingX: '$l',
});

const imageStyles = css({
  marginTop: '$s',
  '@l': { marginTop: '$l' },
});

type LessonData = {
  pageContext: {
    contactData: {
      adres: string;
      emailadres: string;
      telefoonnummer: string;
      telefonischBereikbaar: string;
      kvkNummer: string;
    };
  };
  data: {
    wpLes: {
      slug: string;
      title: string;
      content: string;
      extraVelden: {
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
  pageContext,
}: LessonData) {
  const contactData = pageContext.contactData;
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
        <TextBox dangerouslySetInnerHTML={{ __html: wpLes.content }} />
        {/* <Button to="/#contact" size="big" color="greenTint">
          {wpLes.extraVelden.buttonTekst}
        </Button> */}
        {wpAanbeveling ? (
          <Testimonial
            quote={wpAanbeveling.aanbeveling.aanbevelingTekst}
            author={wpAanbeveling.aanbeveling.aanbevolenDoor}
            image={getLocalImage(wpAanbeveling.aanbeveling.foto)}
          />
        ) : null}
      </LessenContainer>
      <Heading>{wpLes.extraVelden.buttonTekst}</Heading>
      <LessenContactContainer>
        <Contact>
          <ContactCards
            emailadres={contactData.emailadres}
            telefoonnummer={contactData.telefoonnummer}
            telefonischBereikbaar={contactData.telefonischBereikbaar}
          />
          <ContactForm />
        </Contact>
      </LessenContactContainer>
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
      extraVelden {
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
