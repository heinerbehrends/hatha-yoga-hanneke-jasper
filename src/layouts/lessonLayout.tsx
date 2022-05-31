import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { css, styled } from '../../stitches.config';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';
import { Contact } from '../components/contactStyles';
import { Heading, SubHeading, TextBox } from '../components/indexStyles';
import Layout from '../components/layout';
import Testimonial from '../components/testimonial';
import { getLocalImage, ImageNode } from '../utils';

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

export type LessonPageData = {
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
        foto?: ImageNode;
      };
    };
    wpPage: {
      contactgegevens: {
        adres: string;
        emailadres: string;
        telefoonnummer: string;
        telefonischBereikbaar: string;
        kvkNummer: string;
      };
    };
  };
};

export default function LessonLayout({
  data: { wpLes, wpAanbeveling, wpPage },
}: // pageContext,
LessonPageData) {
  const contactData = wpPage.contactgegevens;
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
        {wpAanbeveling ? (
          <Testimonial
            quote={wpAanbeveling.aanbeveling.aanbevelingTekst}
            author={wpAanbeveling.aanbeveling.aanbevolenDoor}
            image={
              wpAanbeveling.aanbeveling?.foto
                ? getLocalImage(wpAanbeveling.aanbeveling?.foto)
                : undefined
            }
          />
        ) : null}
      </LessenContainer>
      <SubHeading id="contact">{wpLes.extraVelden.buttonTekst}</SubHeading>
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
