import { graphql } from 'gatsby';
import React from 'react';
import { makeContactData } from '../data/contactData';
import { makeLessonPageData } from '../data/lessonData';
import { groepslessenData } from '../data/paginas/groepslessenData';
import { makeTestimonialData } from '../data/testimonialsData';
import LessonLayout from '../layouts/lessonLayout';
import { ImageNode } from '../utils';

export default function Groepslessen({ data: pictures }: ImageQuery) {
  const { testimonial, lessenfoto } = pictures;
  const wpLes = makeLessonPageData(groepslessenData, lessenfoto);
  const wpAanbeveling = { aanbeveling: makeTestimonialData(testimonial) };
  const wpPage = {
    contactgegevens: makeContactData(),
  };
  return <LessonLayout data={{ wpLes, wpAanbeveling, wpPage }}></LessonLayout>;
}

type ImageQuery = {
  data: {
    testimonial: ImageNode;
    lessenfoto: ImageNode;
  };
};

export const query = graphql`
  query groepslessenQuery {
    testimonial: file(relativePath: { eq: "Heiner.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 90)
      }
    }
    lessenfoto: file(relativePath: { eq: "Lessenfoto.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
  }
`;
