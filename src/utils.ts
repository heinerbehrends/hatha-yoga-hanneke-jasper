import { IGatsbyImageData } from 'gatsby-plugin-image';
import { LessenCard } from './components/LessenCard';
import { LessonNode } from './homePageProps';

export type ImageNode = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};
export function getLocalImage(
  imageNode: ImageNode | undefined
): IGatsbyImageData | undefined {
  if (!imageNode) return;
  return imageNode.childImageSharp.gatsbyImageData;
}
export function getLessonsData(
  lessonNodes: Omit<LessonNode, 'content'>[]
): LessenCard[] {
  return lessonNodes.map((node) => ({
    title: node.title,
    text: node.excerpt,
    cta: node.extraVelden.buttonTekst,
    link: node.slug,
  }));
}
