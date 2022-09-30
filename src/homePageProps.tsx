import { ImageNode } from './utils';

export type LessonNode = {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  extraVelden: {
    buttonTekst: string;
    menuTekst: string;
  };
};

export type TestimonialNode = {
  id: string;
  aanbeveling: {
    aanbevelingTekst: string;
    aanbevolenDoor: string;
    foto?: ImageNode;
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
      introductie: {
        kop: string;
        introductie: string;
      };
      title: string;
      overHathaYoga: {
        infoKop: string;
        infos: InfoNode[];
      };
      contactgegevens: {
        adres: string;
        emailadres: string;
        telefoonnummer: string;
        telefonischBereikbaar: string;
        kvkNummer: string;
      };
      seo: {
        omschrijving: string;
      };
    };
    allWpLes: {
      nodes: Omit<LessonNode, 'content'>[];
    };
    allWpAanbeveling: {
      nodes: TestimonialNode[];
    };
  };
};

export default HomePageProps;
