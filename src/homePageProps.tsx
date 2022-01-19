import { IGatsbyImageData } from 'gatsby-plugin-image';

export type LessenNode = {
  title: string;
  excerpt: string;
  slug: string;
  buttonTekst: {
    buttonTekst: string;
  };
};

export type TestimonialNode = {
  content: string;
  aanbevolenDoor: {
    aanbevolenDoor: string;
    foto: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
};

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
      nodes: LessenNode[];
    };
    allWpAanbeveling: {
      nodes: TestimonialNode[];
    };
  };
};

export default HomePageProps;
