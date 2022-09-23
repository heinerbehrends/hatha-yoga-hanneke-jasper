import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ImageNode } from '../../utils';

export type OverMijData = {
  data: {
    wpPage: {
      title: string;
      content: string;
      slug: string;
      featuredImage: {
        node: {
          altText: string;
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    };
  };
};

export function makeOverMijData(image: ImageNode): OverMijData {
  return {
    data: {
      wpPage: {
        title: 'Over mij',
        content: /* html */ `
          <h3> Mijn wens is om mensen in aanraking te brengen met het rustgevende, 
          vitaliserende en helende effect van yoga en dit voor iedereen 
          toegankelijk te maken.</h3>
          
   
      
        <br> Vanaf 2009 geef ik yogales op maat en behoefte, dat doe ik in de
          vorm van cursussen, individuele begeleiding, workshops, in groepen
          met een speciale vraag en/of behoefte en voor bedrijven. <br>
          
          <br>Ik voel me helemaal op mijn plek als ik yogales geef. <br>
          Het maakt me gelukkig als mensen zich meer kunnen ontspanning en 
          zichzelf vinden. Met betrokkenheid geef ik les waarbij ik afstem op 
          jou. <br>
          
         
        <br>Zo heb ik yoga gegeven aan jongeren in de crisisopvang, kinderen, 
          aan mensen met een fysieke beperking tot aan yoga achter het bureau.<br>
        
          <br>Aan de vierjarige opleiding van Saswitha voor Yoga en Wijsbegeerte te 
          Bilthoven, heb ik mijn opleiding gevolgd en mijn diploma behaald.
          Naast het lesgeven in hatha yoga zoek ik altijd naar verdieping in mijn 
          eigen yogabeoefening, kennis en vaardigheden zoals ademoefeneningen 
          (pranayama), meditatie, filosofie, chakrapsychologie.<br>
          Naast het diploma aan Saswitha heb ik de volgende certificaten 
          in de volgende bevoegdheden: <br> <br>
          <ul>
            <li>Yoga & Meditatie </li>
            <li>Adem & Ademtherapie </li>
            <li>Aryuvedische massage</li>
            <li>Yoga voor verschillende doelgroepen</li>
            <li>Anatomie en fysiologie</li>
          <ul/>
          <br> 
          Eerder was ik eerste graads docent beeldende kunst en gaf o.a op 
          freelance basis les op kunstacademie Minerva en middelbare scholen 
          en was ik een periode werkzaam als beeldend kunstenaar. Ook heb ik 
          ervaring als pedagogisch begeleider in de kinderdagopvang en geef 
          ik yogales aan kinderen. <br> En ben ik moeder van Celine die nu 
          7 jaar is.
`,
        slug: 'over-mij',
        featuredImage: {
          node: {
            altText: 'yogadocent Hanneke Jasper',
            localFile: image,
          },
        },
      },
    },
  };
}
