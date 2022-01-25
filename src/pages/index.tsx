import React from 'react';
import { styled } from '../../stitches.config';
import Layout from '../components/layout';
import Hero from '../components/hero';
import InfoCard from '../components/InfoCard';
import LessenCards from '../components/LessenCard';
import HomePageProps from '../homePageProps';
import { getLocalImage, getLessonsData } from '../utils';
import { graphql } from 'gatsby';
import Testimonial from '../components/testimonial';
import ContactForm from '../components/ContactForm';
import ContactCards from '../components/ContactCards';

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$3xl-resp',
  paddingX: '$s',
});

const Contact = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gridGap: '$s',
  marginTop: '$xl',
  marginX: '$s',
});

export default function Home(props: HomePageProps) {
  const infoCardsData = props.data.wpPage.overHathaYoga.infos;
  const lessonNodes = props.data.allWpLes.nodes.reverse();
  const testimonialNodes = props.data.allWpAanbeveling.nodes;
  const contactInfo = props.data.wpPage.contactgegevens;
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      {infoCardsData.map((info, index) => (
        <InfoCard
          key={info.titel}
          color={index}
          html={info.inhoud}
          title={info.titel}
          image={getLocalImage(info.afbeelding)}
        />
      ))}
      <Heading as="h2">Lesvormen</Heading>
      <LessenCards lessenCards={getLessonsData(lessonNodes)} />
      {testimonialNodes.map(
        ({ id, aanbeveling: { aanbevelingTekst, foto, aanbevolenDoor } }) => (
          <Testimonial
            key={id}
            author={aanbevolenDoor}
            image={getLocalImage(foto)}
            quote={aanbevelingTekst}
          />
        )
      )}
      <Heading as="h2">Contact</Heading>
      <Contact>
        <ContactCards
          emailadres={contactInfo.emailadres}
          telefoonnummer={contactInfo.telefoonnummer}
          telefonischBereikbaar={contactInfo.telefonischBereikbaar}
        />
        <ContactForm />
      </Contact>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    wpPage(isFrontPage: { eq: true }) {
      title
      overHathaYoga {
        infos {
          titel
          inhoud
          afbeelding {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: NONE
                  width: 300
                  height: 300
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
      contactgegevens {
        adres
        emailadres
        telefoonnummer
        telefonischBereikbaar
        kvkNummer
      }
    }
    allWpLes {
      nodes {
        title
        excerpt
        slug
        buttonTekst {
          buttonTekst
        }
      }
    }
    allWpAanbeveling(
      filter: {
        aanbeveling: {
          toonOpPagina: { eq: "Wat kan hatha yoga voor je doen?" }
        }
      }
    ) {
      nodes {
        id
        aanbeveling {
          aanbevelingTekst
          aanbevolenDoor
          foto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
