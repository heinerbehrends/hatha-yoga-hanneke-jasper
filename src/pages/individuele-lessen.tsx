import { graphql } from 'gatsby';
import React from 'react';
import { makeContactData } from '../data/contactData';
import { makeLessonPageData } from '../data/lessonData';
import { individueleLessenData } from '../data/paginas/individueleLessenData';
import { makeTestimonialData } from '../data/testimonialsData';
import LessonLayout from '../layouts/lessonLayout';
import { ImageNode } from '../utils';

export default function IndividueleLessen({ data: pictures }: ImageQuery) {
  const { heiner, lessenfoto } = pictures;
  const wpLes = makeLessonPageData(individueleLessenData, lessenfoto);
  const wpAanbeveling = { aanbeveling: makeTestimonialData(heiner) };
  const wpPage = {
    contactgegevens: makeContactData(),
  };
  return <LessonLayout data={{ wpLes, wpAanbeveling, wpPage }}></LessonLayout>;
}

type ImageQuery = {
  data: {
    heiner: ImageNode;
    lessenfoto: ImageNode;
  };
};

export const query = graphql`
  query individueleLessenQuery {
    heiner: file(relativePath: { eq: "Heiner.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 90)
      }
    }
    lessenfoto: file(relativePath: { eq: "Lessenfoto2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
  }
`;
