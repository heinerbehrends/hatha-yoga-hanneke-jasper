import { LessonNode } from '../../homePageProps';
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
    zijn. Doordat yoga niet prestatiegericht is, is het uitermate geschikt voor 
    ouderen. In de les wordt er enkel binnen de grenzen geoefend wat 
    overbelasting voorkomt. Ieder mens kan yoga beoefenen zolang hij/zij ademt, 
    ook als er fysieke beperkingen zijn. Dat is het prachtige van yoga!
  `,
  content: /* html */ `
    <h3>Ontspanning voor lichaam en geest </h3>
    <p>De yogalessen voor ouderen worden op een rustiger tempo gegeven. De adem, 
    het rustig en diep ademen, staan centraal. De beweging en de houding volgen 
    de adem. Ook wordt er gewerkt aan souplesse en spierkracht tijdens de lessen en is er ruimte 
    en tijd om je lichaam goed te voelen en kan het uiteindelijk zorgen voor volkomen 
    rust/vrede in jezelf ervaren. </p>
    <p>De aangeboden oefeningen zijn rustig, niet te zwaar en/of te lang. Alle 
    gewrichten worden bewogen zonder dat er gewicht op het gewricht staat.
    Zonodig kan er een stoel gebruikt worden of geoefend worden in de 
    rolstoel. Voor iedere deelnemer is persoonlijke aandacht zodat de yogahouding met zoveel mogelijk kan worden te ervaren.</p>
    <p>In de les komt meditatie aan bod en milde ademoefeningen die kunnen zorgen voor ontspanning en verstilling.
    Yoga voor ouderen kan verzachtend en helend werken. Yoga brengt lichaam en 
    geest in balans; het geeft fysiek en mentaal ontspanning, lichaam en geest 
    kunnen soepeler worden door de beoefening.
    </p>
    `,
};

export const makeVoorSenioren = makeLessonData(voorSeniorenData);
