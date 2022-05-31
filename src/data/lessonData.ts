import { IGatsbyImageData } from 'gatsby-plugin-image';
import { LessonNode } from '../homePageProps';
import { LessonPageData } from '../layouts/lessonLayout';
import { ImageNode } from '../utils';
import { makeContactData } from './contactData';
import { makeHeinerTestimonialData } from './testimonialsData';

export type LessonData = LessonNode & {
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
};

export function makeLessonPageData(
  content: LessonNode,
  lessonImage: ImageNode
): LessonData {
  return {
    ...content,
    featuredImage: { node: { localFile: lessonImage } },
  };
}

type LessonImages = {
  heiner: ImageNode;
  lesson: ImageNode;
};

export function makeLessonData(
  content: LessonNode
): (lessenImages: LessonImages) => LessonPageData {
  return (lessonImages: LessonImages) => ({
    data: {
      wpLes: makeLessonPageData(content, lessonImages.lesson),
      wpPage: {
        contactgegevens: makeContactData(),
      },
      wpAanbeveling: {
        aanbeveling: makeHeinerTestimonialData(lessonImages.heiner),
      },
    },
  });
}
