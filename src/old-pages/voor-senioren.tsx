import { graphql } from 'gatsby';
import React from 'react';
import { makeContactData } from '../data/contactData';
import { makeVoorSenioren } from '../data/paginas/voorSeniorenData';
import { makeTestimonialData } from '../data/testimonialsData';
import LessonLayout from '../layouts/lessonLayout';
import { ImageNode } from '../utils';

export default function LessenVoorKinderen({ data: pictures }: ImageQuery) {
  const { testimonial, lessenfoto } = pictures;
  const wpLes = makeVoorSenioren({ testimonial, lesson: lessenfoto });
  const wpAanbeveling = { aanbeveling: makeTestimonialData(testimonial) };
  const wpPage = {
    contactgegevens: makeContactData(),
  };

  return (
    <LessonLayout
      data={{ wpLes: wpLes.data.wpLes, wpAanbeveling, wpPage }}
    ></LessonLayout>
  );
}

type ImageQuery = {
  data: {
    testimonial: ImageNode;
    lessenfoto: ImageNode;
  };
};

export const query = graphql`
  query voorSeniorenQuery {
    testimonial: file(relativePath: { eq: "Heiner.jpg" }) {
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
