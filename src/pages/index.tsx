import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HomePageProps from '../homePageProps';
import { Heading, Introduction, SubHeading } from '../components/indexStyles';
import Hero from '../components/hero';
import InfoCard from '../components/InfoCard';
import LessenCards from '../components/LessenCard';
import { getLocalImage, getLessonsData } from '../utils';
import Testimonial from '../components/testimonial';
import ContactForm from '../components/ContactForm';
import ContactCards from '../components/ContactCards';
import { Contact } from '../components/contactStyles';

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
        <meta name="description" content={props.data.wpPage.seo.omschrijving} />
        <meta property="og:title" content={introductionData.kop} />
      </Helmet>
      <Heading>{introductionData.kop}</Heading>
      <Introduction
        dangerouslySetInnerHTML={{ __html: introductionData.introductie }}
      />
      <SubHeading as="h2">{props.data.wpPage.overHathaYoga.infoKop}</SubHeading>
      {infoCardsData.map((info, index) => (
        <InfoCard
          key={info.titel}
          color={index}
          html={info.inhoud}
          title={info.titel}
          image={getLocalImage(info.afbeelding)}
        />
      ))}
      <SubHeading as="h2">Lesvormen</SubHeading>
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
      <SubHeading id="contact" as="h2" style={{ scrollMarginTop: '80px' }}>
        Contact
      </SubHeading>
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
        omschrijving
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
        aanbeveling: { toonOpPagina: { eq: "Yogalessen in Groningen" } }
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
