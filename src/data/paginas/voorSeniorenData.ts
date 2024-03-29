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
    zijn. Omdat mijn yogalessen niet prestatiegericht zijn, zijn ze uitermate geschikt voor 
    ouderen. In de les wordt er enkel binnen de grenzen geoefend wat 
    overbelasting voorkomt. Ieder mens kan yoga beoefenen zolang hij/zij ademt, 
    ook als er fysieke beperkingen zijn. Dat is het prachtige van yoga!
  `,
  content: /* html */ `
    <h3>Ontspanning voor lichaam en geest </h3>
    <p>Mijn yogalessen voor ouderen worden op een rustiger tempo gegeven.<p>
    <br> De adem, het rustig en diep ademen, staat centraal; de beweging volgt 
    de adem. En de houding wordt door de adem gedragen. <br>
    <br> Er is ruimte om je lichaam goed te kunnen voelen en je geest waar te nemen. Uiteindelijk kan de adem in combinatie met beweging en concentratie zorgen voor volkomen 
    rust/vrede in jezelf.<br>
    Ook wordt er gewerkt aan souplesse en spierkracht tijdens de lessen.  </p>
    <br>De aangeboden oefeningen zijn rustig, niet te zwaar en/of te lang. Alle 
    gewrichten worden bewogen zonder dat er gewicht op het gewricht staat.<br>
    <br>Zonodig kan er een stoel gebruikt worden of geoefend worden in de 
    rolstoel. Voor iedere deelnemer is persoonlijke aandacht zodat de yogahouding comfortabel kan zijn.<br>
    <br>In de les komt meditatie aan bod en milde ademoefeningen die kunnen zorgen voor ontspanning en innerlijke rust.<br>
    <br>Yoga voor ouderen kan verzachtend en helend werken. Yoga brengt lichaam en 
    geest in balans; het geeft fysiek en mentaal ontspanning, lichaam en geest 
    kunnen soepeler worden door de beoefening.<br>
    </p>
    `,
};

export const makeVoorSenioren = makeLessonData(voorSeniorenData);
