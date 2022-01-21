import { ImageNode } from './utils';

export type LessenNode = {
  title: string;
  excerpt: string;
  slug: string;
  buttonTekst: {
    buttonTekst: string;
  };
};

export type TestimonialNode = {
  id: string;
  aanbeveling: {
    aanbevelingTekst: string;
    aanbevolenDoor: string;
    foto: ImageNode;
  };
};

type InfoNode = {
  titel: string;
  inhoud: string;
  afbeelding: ImageNode;
};

type HomePageProps = {
  data: {
    wpPage: {
      title: string;
      overHathaYoga: {
        infos: InfoNode[];
      };
      contactgegevens: {
        adres: string;
        emailadres: string;
        telefoonnummer: string;
        telefonischBereikbaar: string;
        kvkNummer: string;
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
