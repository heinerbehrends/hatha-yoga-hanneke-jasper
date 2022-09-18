import { ImageNode } from '../utils';

export type FooterData = {
  overMij: {
    overMijSamenvatting: {
      samenvatting: string;
      overMijFoto: ImageNode;
    };
  };
  contact: {
    contactgegevens: {
      emailadres: string;
      telefoonnummer: string;
      adres: string;
      kvkNummer: string;
    };
  };
};

export function makeFooterData(image: ImageNode): FooterData {
  return {
    overMij: {
      overMijSamenvatting: {
        samenvatting: /* html */ `
          Ik heb mijn vak geleerd aan de vierjarige 
          <a href="https://www.yoga-saswitha.nl/">Saswitha opleiding voor Yoga</a> 
          en Wijsbegeerte te Bilthoven. Je hebt aan mij een betrokken yogadocent 
          met veel gevoel voor de eigenheid van ieder individu.`,
        overMijFoto: image,
      },
    },
    contact: {
      contactgegevens: {
        emailadres: 'hanneke.jasper@gmail.com',
        adres: 'Emmastraat 15 g 206 - 9722EW Groningen',
        telefoonnummer: '06-44834632',
        kvkNummer: '75888300',
      },
    },
  };
}
