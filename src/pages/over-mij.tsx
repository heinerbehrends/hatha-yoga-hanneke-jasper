import React from 'react';
import { graphql } from 'gatsby';
import { makeOverMijData } from '../data/paginas/overMijData';
import { ImageNode } from '../utils';
import LessonLayout from '../layouts/lessonLayout';
import { makeContactData } from '../data/contactData';
import { makeLessonPageData } from '../data/lessonData';
import { makeTestimonialData } from '../data/testimonialsData';

export default function OverMij({ data: pictures }: OverMijImageData) {
  const { hanneke, testimonial } = pictures;
  const {
    data: { wpPage: page },
  } = makeOverMijData(hanneke);
  const wpLes = makeLessonPageData(page, hanneke);
  const wpAanbeveling = { aanbeveling: makeTestimonialData(testimonial) };
  const wpPage = {
    contactgegevens: makeContactData(),
  };
  return <LessonLayout data={{ wpLes, wpAanbeveling, wpPage }}></LessonLayout>;
}

export const query = graphql`
  query OverMijPicsQuery {
    testimonial: file(relativePath: { eq: "Heiner.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 90)
      }
    }
    hanneke: file(relativePath: { eq: "Over-mij.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
  }
`;

type OverMijImageData = {
  data: {
    hanneke: ImageNode;
    testimonial: ImageNode;
  };
};
