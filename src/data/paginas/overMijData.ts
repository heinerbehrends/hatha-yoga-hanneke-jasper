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
          <h2>Yogales op maat</h2>
          Ik geef yogales op maat en naar behoefte en dat doe ik in verschillende vormen, zoals:
          <ul>
            <li>cursussen</li>
            <li>individuele begeleiding</li>
            <li>workshops</li>
            <li>in groepen met een speciale vraag</li>
            <li>voor bedrijven.</li>
          </ul>
          <br>
          <p>Mijn wens is om mensen in aanraking te brengen met het rustgevende, 
          vitaliserende en helende effect van yoga door dit voor iedereen 
          toegankelijk te maken. Zo heb ik yoga gegeven aan jongeren in de 
          crisisopvang, aan mensen met een fysieke beperking tot aan yoga 
          achter het bureau. In het geven van yogalessen voel ik me helemaal 
          op mijn plek.</p>
          <h2>Verdieping</h2>
          <p>De cursist heeft aan mij een betrokken yogadocent met veel gevoel 
          voor de eigenheid van ieder individu. Aan de vierjarige opleiding 
          van Saswitha voor Yoga en Wijsbegeerte te Bilthoven heb ik mijn 
          opleiding gevolgd.<br>
          Naast het lesgeven in Hatha Yoga zoek ik altijd naar verdieping in 
          mijn kennis en vaardigheden. Zo ben ik heb kennis opgedaan in 
          ademoefeneningen (pranayama), meditatie, filosofie en 
          chakrapsychologie. Naast het diploma aan Saswitha heb ik 
          certificaten in de volgende bevoegdheden:</p>
          <ul>
            <li>Yoga &amp; Meditatie</li>
            <li>Adem &amp; Ademtherapie</li>
            <li>Aryuvedische Massage</li>
            <li>Yoga voor doelgroepen</li>
            <li>Anatomie &amp; Fysiologie</li>
          </ul>
          <br>
          <p>Eerder was ik eerstegraads docent beeldende kunst en gaf o.a les
          op kunstacademie Minerva en middelbare scholen. Daarnaast was ik een
          periode werkzaam als beeldend kunstenaar. Ook heb ik ervaring als
          pedagogisch begeleider in de kinderdagopvang en geef ik yogales aan
          kinderen.</p>`,
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
