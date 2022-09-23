import { LessonNode } from '../../pages/homePageProps';
import { makeLessonData } from '../lessonData';

export const voorSeniorenData: LessonNode = {
  slug: 'voor-senioren',
  title: 'Lessen voor senioren',
  extraVelden: {
    buttonTekst: 'Neem contact met me op',
    menuTekst: 'Voor senioren',
  },
  excerpt: /* html */ `
    Op iedere leeftijd kan yoga een goede ondersteuning voor lichaam en geest 
    zijn. Doordat yoga niet prestatiegericht is, is het heel geschikt voor 
    ouderen. In de les wordt er enkel binnen de grenzen geoefend wat 
    overbelasting voorkomt. Ieder mens kan yoga beoefenen zolang hij/zij ademt, 
    ook als er fysieke beperkingen zijn.
  `,
  content: /* html */ `
    <h3>Ontspanning voor lichaam en geest </h3>
    <p>De yogalessen voor ouderen worden op een rustiger tempo gegeven. De adem, 
    het rustig en diep ademen, staat centraal. De beweging en de houding volgen 
    de adem. Ook wordt er gewerkt aan souplesse en spierkracht en is er ruimte 
    door het rustige tempo om je lichaam goed te voelen en uiteindelijk volkomen 
    rust in jezelf te ervaren. </p>
    <p>De aangeboden oefeningen zijn rustig, niet te zwaar en te lang. Alle 
    gewichten worden bewogen zonder dat er gewicht op het gewricht staat.
    Zonodig kan er een stoel gebruikt worden of geoefend worden of in de 
    rolstoel. Zodat iedereen met comfort de yogahouding kan ervaren.</p>
    <p>In de les komt meditatie aan bod en milde ademoefeningen die kunnen zorgen voor ontspanning en verstilling.
    Yoga voor ouderen kan verzachtend en helend werken. Yoga brengt lichaam en 
    geest in balans; het geeft fysiek en mentaal ontspanning, lichaam en geest 
    kunnen soepeler worden door de beoefening.
    </p>
    `,
};

export const makeVoorSenioren = makeLessonData(voorSeniorenData);
