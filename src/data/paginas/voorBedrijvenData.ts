import { LessonNode } from '../../homePageProps';
import { makeLessonData } from '../lessonData';

export const voorBedrijvenData: LessonNode = {
  slug: 'voor-bedrijven',
  title: 'Lessen voor bedrijven',
  extraVelden: {
    buttonTekst: 'Boek nu je gratis consult',
    menuTekst: 'Voor bedrijven',
  },
  excerpt: /* html */ `
    Het beoefenen van yoga heeft een bewezen positieve invloed op de 
    productiviteit van werknemers: het vermindert stress, verbetert de focus 
    en helpt bij fysieke klachten. 
  `,
  content: /* html */ `
    Het beoefenen van yoga heeft een bewezen positieve invloed op de 
    productiviteit van werknemers: het vermindert stress, verbetert de focus 
    en helpt bij fysieke klachten.
    <h3>Voordelen van yoga op de werkvloer op een rij.</h3>
    <ul>
      <li>Minder stress</li>
      <li>Minder fysieke klachten</li>
      <li>Minder ziekteverzuim</li>
      <li>Meer vitaliteit</li>
      <li>Meer creativiteit</li>
      <li>Betere concentratie en focus</li>
      <li>Betere onderlinge sfeer</li>
      <li>Hogere productiviteit</li>
      <li>Effectiever werken</li>
    </ul>
    <br>
    Door mijn ruime ervaring in het geven van yogalessen (ook voor achter het bureau) weet ik hoe ik yoga op een laagdrempelige 
    manier toegankelijk kan maken voor iedereen. En hoe je yoga kunt integreren 
    in een werkdag. 
    `,
};

export const makeVoorBedrijven = makeLessonData(voorBedrijvenData);
