import React from 'react';
import { graphql } from 'gatsby';
import { styled } from '../../stitches.config';
import Layout from '../components/layout';
import Hero from '../components/hero';
import InfoCard, { InfoCardProps } from '../components/InfoCard';
import LessenCards from '../components/LessenCard';
import { infoCards, lessenCards } from '../data';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$xl-resp',
  paddingX: '$s',
});

type ColorsMapType = {
  [index: number]: 'red' | 'green' | 'blue';
};

// set the sequence of colors
const colorsMap: ColorsMapType = {
  0: 'blue',
  1: 'red',
  2: 'green',
};
type ImageNode = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};
function getImage(imageNode: ImageNode): IGatsbyImageData {
  return imageNode.localFile.childImageSharp.gatsbyImageData;
}

export default function Home(props: HomePageProps) {
  console.log(props);
  const infoCardsData = props.data.wpPage.overHathaYoga;
  console.log(infoCardsData);
  return (
    <Layout slot={<Hero />}>
      <Heading>Wat kan Hatha Yoga voor je doen?</Heading>
      {/* {infoCardsData.map((infoCard, index) => (
        <InfoCards
          key={infoCard.title}
          text={infoCard.text}
          title={infoCard.title}
          color={colorsMap[index]}
        />
      ))} */}
      <InfoCard
        color="green"
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
        color="blue"
        text={infoCardsData.inhoud3}
        title={infoCardsData.titel3}
        image={getImage(infoCardsData.afbeelding3)}
      />

      <LessenCards lessenCards={lessenCards} />
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
        excerpt
        buttonTekst {
          buttonTekst
        }
      }
    }
  }
`;

type HomePageProps = {
  data: {
    wpPage: {
      title: string;
      overHathaYoga: {
        titel0: string;
        inhoud0: string;
        afbeelding0: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
        titel2: string;
        inhoud2: string;
        afbeelding2: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
        titel3: string;
        inhoud3: string;
        afbeelding3: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    };
    allWpLes: {
      nodes: {
        excerpt: string;
        buttonTekst: {
          buttonTekst: string;
        };
      };
    };
  };
};
