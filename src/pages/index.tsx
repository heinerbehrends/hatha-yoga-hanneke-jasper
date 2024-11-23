import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import {
  HomePageHeading,
  TextBox,
  SubHeading,
  Heading,
} from "../components/indexStyles";
import Hero from "../components/hero";
import InfoCard from "../components/InfoCard";
import LessenCards from "../components/LessenCard";
import { getLocalImage, getLessonsData, ImageNode } from "../utils";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/ContactForm";
import ContactCards from "../components/ContactCards";
import { Contact } from "../components/contactStyles";
import { HomeImages, makeHomeData } from "../data/paginas/homeData";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { InfoCardsContainer } from "../components/infoCardStyles";

export default function Home({ data }: ImageQuery) {
  const images: HomeImages = {
    houdingen: {
      dog: data.dog,
      plow: data.plow,
      torsion: data.torsion,
    },
    aanbevelingen: {
      testimonial: data.testimonial,
    },
  };
  const homeData = makeHomeData(images);
  const introductionData = homeData.data.wpPage.introductie;
  const infoCardsData = homeData.data.wpPage.overHathaYoga.infos;
  const lessonNodes = homeData.data.allWpLes.nodes;
  const testimonialNodes = homeData.data.allWpAanbeveling.nodes;
  const contactInfo = homeData.data.wpPage.contactgegevens;
  return (
    <Layout slot={<Hero />}>
      <Helmet>
        <title>Hatha Yoga Groningen</title>
        <meta
          name="description"
          content={homeData.data.wpPage.seo.omschrijving}
        />
        <meta property="og:title" content={introductionData.kop} />
      </Helmet>
      <HomePageHeading>{introductionData.kop}</HomePageHeading>
      <TextBox
        dangerouslySetInnerHTML={{ __html: introductionData.introductie }}
      />
      <SubHeading as="h2">
        {homeData.data.wpPage.overHathaYoga.infoKop}
      </SubHeading>
      <InfoCardsContainer>
        {infoCardsData.map((info, index) => (
          <InfoCard
            key={info.titel}
            color={index}
            html={info.inhoud}
            title={info.titel}
            image={getLocalImage(info.afbeelding) as IGatsbyImageData}
          />
        ))}
      </InfoCardsContainer>
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
      <Heading id="contact" as="h2">
        Contact
      </Heading>
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
  query PicsQuery {
    dog: file(relativePath: { eq: "Dog.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED)
      }
    }
    plow: file(relativePath: { eq: "Plow.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED)
      }
    }
    torsion: file(relativePath: { eq: "Torsion.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED)
      }
    }
    testimonial: file(relativePath: { eq: "Heiner.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 90, placeholder: BLURRED)
      }
    }
  }
`;

type ImageQuery = {
  data: {
    dog: ImageNode;
    plow: ImageNode;
    torsion: ImageNode;
    testimonial: ImageNode;
  };
};
