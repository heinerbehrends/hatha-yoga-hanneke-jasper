import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

type LessonData = {
  data: {
    wpLes: {
      slug: string;
      title: string;
      content: string;
      buttonTekst: {
        buttonTekst: string;
      };
    };
  };
};

export default function LessonLayout({ data: { wpLes } }: LessonData) {
  console.log(wpLes);
  return (
    <Layout>
      <h1>{wpLes.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: wpLes.content }}></article>
    </Layout>
  );
}

export const lessonPageQuery = graphql`
  query LessonPageQuery($id: String) {
    wpLes(id: { eq: $id }) {
      id
      slug
      title
      content
      buttonTekst {
        buttonTekst
      }
    }
  }
`;
