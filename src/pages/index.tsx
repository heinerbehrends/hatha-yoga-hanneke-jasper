import React from 'react';
import Helmet from 'react-helmet';
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
  marginTop: '$s',
  marginX: '$xs',
  '@l': {
    marginTop: '$xl',
  },
});

const Introduction = styled('section', {
  backgroundColor: '$white',
  paddingX: '$s',
  marginTop: '$s',
  '@m': {
    marginTop: '$l',
  },
  '@l': {
    marginTop: '$xl',
    paddingX: '$3xl',
    paddingTop: '$xl',
    paddingBottom: '$xl',
    borderRadius: '$m-resp',
  },
});

export default function Home(props: HomePageProps) {
  const introductionData = props.data.wpPage.introductie;
  const infoCardsData = props.data.wpPage.overHathaYoga.infos;
  const lessonNodes = props.data.allWpLes.nodes.reverse();
  const testimonialNodes = props.data.allWpAanbeveling.nodes;
  const contactInfo = props.data.wpPage.contactgegevens;
  return (
    <Layout slot={<Hero />}>
      <Helmet>
        <title>{introductionData.kop}</title>
        <meta name="description" content={props.data.wpPage.seo.metaDesc} />
        <meta property="og:title" content={introductionData.kop} />
      </Helmet>
      <Heading>{introductionData.kop}</Heading>
      <Introduction
        dangerouslySetInnerHTML={{ __html: introductionData.introductie }}
      />
      <Heading as="h2">{props.data.wpPage.overHathaYoga.infoKop}</Heading>
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
      introductie {
        kop
        introductie
      }
      overHathaYoga {
        infoKop
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
      seo {
        metaDesc
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
