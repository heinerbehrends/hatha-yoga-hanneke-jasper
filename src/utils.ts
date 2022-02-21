import { IGatsbyImageData } from 'gatsby-plugin-image';
import { LessenCard } from './components/LessenCard';
import { LessenNode } from './homePageProps';

export type ImageNode = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};
export function getLocalImage(imageNode: ImageNode): IGatsbyImageData {
  return imageNode.localFile.childImageSharp.gatsbyImageData;
}
export function getLessonsData(lessonNodes: LessenNode[]): LessenCard[] {
  return lessonNodes.map((node) => ({
    title: node.title,
    text: node.excerpt,
    cta: node.extraVelden.buttonTekst,
    link: node.slug,
  }));
}
