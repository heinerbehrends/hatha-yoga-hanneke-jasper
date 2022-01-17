import React from 'react';
import { styled } from '../../stitches.config';
import Layout from '../components/layout';
import Hero from '../components/hero';
import InfoCard from '../components/InfoCard';
import LessenCards from '../components/LessenCard';
import HomePageProps from './index/homePageProps';
import { getImage, getLessonsData } from './index/indexUtils';
import { graphql } from 'gatsby';
import Testimonial from '../components/testimonial';

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$xl-resp',
  paddingX: '$s',
});

export default function Home(props: HomePageProps) {
  const infoCardsData = props.data.wpPage.overHathaYoga;
  const lessonNodes = props.data.allWpLes.nodes.reverse();
  const testimonialNodes = props.data.allWpAanbeveling.nodes;
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      <InfoCard
        color="blue"
        text={infoCardsData.inhoud0}
        title={infoCardsData.titel0}
        image={getImage(infoCardsData.afbeelding0)}
      />
      <InfoCard
        color="red"
        text={infoCardsData.inhoud2}
        title={infoCardsData.titel2}
        image={getImage(infoCardsData.afbeelding2)}
      />
      <InfoCard
        color="green"
        text={infoCardsData.inhoud3}
        title={infoCardsData.titel3}
        image={getImage(infoCardsData.afbeelding3)}
      />
      <LessenCards lessenCards={getLessonsData(lessonNodes)} />
      {testimonialNodes.map((testimonial) => (
        <Testimonial
          author={testimonial.aanbevolenDoor.aanbevolenDoor}
          image={{
            gatsbyImageData:
              testimonial.aanbevolenDoor.foto.localFile.childImageSharp
                .gatsbyImageData,
            alt: '',
          }}
          quote={testimonial.content}
        />
      ))}
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Wat kan hatha yoga voor je doen?" }) {
      title
      overHathaYoga {
        titel0
        inhoud0
        afbeelding0 {
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
        titel2
        inhoud2
        afbeelding2 {
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
        titel3
        inhoud3
        afbeelding3 {
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
