import { LessonNode } from '../../homePageProps';
import { makeLessonData } from '../lessonData';

export const voorBedrijvenData: LessonNode = {
  slug: 'lessen-voor-bedrijven',
  title: 'Lessen voor bedrijven',
  extraVelden: {
    buttonTekst: 'Boek nu je gratis consult',
    menuTekst: 'Voor bedrijven',
  },
  excerpt: /* html */ `
    In de yogales worden ongeveer twaalf oefeningen gedaan. De hele wervelkolom 
    wordt in alle richtingen in beweging gebracht. Dynamische, statische en 
    ontspannende oefeningen worden afgewisseld.
  `,
  content: /* html */ `
    Ik geef yogales op maat en behoefte. dat doe ik in de vorm van cursussen, 
    individuele begeleiding, workshops, in groepen met een speciale vraag en/of 
    behoefte en voor bedrijven.
    <br>
    Mijn wens is om mensen in aanraking te brengen met het rustgevende, 
    vitaliserende en helende effect van yoga en dit voor iedereen, die dat 
    wenst, toegankelijk te maken.
    In het yogalesgeven voel ik me helemaal op mijn plek.
    Zo heb ik yoga gegeven aan jongeren in de crisisopvang, aan mensen met 
    een fysieke beperking tot aan yoga achter het bureau. De cursist heeft 
    aan mij een betrokken yogadocent met veel gevoel voor de eigenheid van 
    ieder individu.
    Aan de vierjarige opleiding van Saswitha voor Yoga en Wijsbegeerte te 
    Bilthoven, heb ik mijn opleiding gevolgd.
    Naast het lesgeven in Hatha Yoga zoek ik altijd naar verdieping in mijn 
    eigen yogabeoefening, kennis en vaardigheden zoals ademoefeneningen 
    (pranayama), meditatie, filosofie, chakrapsychologie.
    `,
};

export const makeVoorBedrijven = makeLessonData(voorBedrijvenData);
