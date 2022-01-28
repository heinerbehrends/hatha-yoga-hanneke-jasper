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
      nodes: LessenNode[];
    };
    allWpAanbeveling: {
      nodes: TestimonialNode[];
    };
  };
};

export default HomePageProps;
