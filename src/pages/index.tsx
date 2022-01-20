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

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$xl-resp',
  paddingX: '$s',
});

export default function Home(props: HomePageProps) {
  const infoCardsData = props.data.wpPage.overHathaYoga.infos;
  console.log(infoCardsData);
  const lessonNodes = props.data.allWpLes.nodes.reverse();
  const testimonialNodes = props.data.allWpAanbeveling.nodes;
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      {infoCardsData.map((info, index) => (
        <InfoCard
          color={index}
          html={info.inhoud}
          title={info.titel}
          image={getLocalImage(info.afbeelding)}
        />
      ))}
      <LessenCards lessenCards={getLessonsData(lessonNodes)} />
      {testimonialNodes.map(({ aanbevolenDoor, content }) => (
        <Testimonial
          author={aanbevolenDoor.aanbevolenDoor}
          image={getLocalImage(aanbevolenDoor.foto)}
          quote={content}
        />
      ))}
      <ContactForm />
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Wat kan hatha yoga voor je doen?" }) {
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
        aanbevolenDoor: {
          toonOpPagina: { eq: "Wat kan hatha yoga voor je doen?" }
        }
      }
    ) {
      nodes {
        content
        aanbevolenDoor {
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
  }
`;
