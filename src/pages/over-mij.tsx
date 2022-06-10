import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { styled } from '../../stitches.config';
import { Heading, SubHeading, TextBox } from '../components/indexStyles';
import { makeOverMijData } from '../data/overMijData';
import { ImageNode } from '../utils';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';
import { Contact } from '../components/contactStyles';
import { LessenContactContainer } from '../layouts/lessonLayout';
import { makeContactData } from '../data/contactData';

const OverMijContainer = styled('section', {
  display: 'flex',
  length: 0,
});

export default function OverMij({ hanneke }: OverMijImageData) {
  const { data } = makeOverMijData(hanneke);
  const { title, content } = data.wpPage;
  const contactData = makeContactData();
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
      <SubHeading id="contact">Contact</SubHeading>
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
