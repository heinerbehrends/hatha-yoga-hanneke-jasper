import { LessonNode } from '../../homePageProps';
import { makeLessonData } from '../lessonData';

export const voorKinderenData: LessonNode = {
  slug: 'lessen-voor-kinderen',
  title: 'Lessen voor kinderen',
  extraVelden: {
    buttonTekst: 'Boek nu je gratis adviesgesprek',
    menuTekst: 'Voor kinderen',
  },
  excerpt: /* html */ `
    In de yogales worden ongeveer twaalf oefeningen gedaan. De hele wervelkolom 
    wordt in alle richtingen in beweging gebracht. Dynamische, statische en 
    ontspannende oefeningen worden afgewisseld.
  `,
  content: /* html */ `
    <h3>Ontspanning voor lichaam en geest </h3>
    <br>
    Yoga voor kinderen biedt ontspanning, rust, zelfvertrouwen, creativiteit, 
    uit het hoofd kunnen komen en in het lijf.
    In de groepsles yoga voor kinderen bewegen we met plezier en verbeelding. 
    Het kind leert zichzelf beter kennen. <br>Door het bewegen en allerlei houdingen 
    aan te nemen ontdekken ze wie ze zijn en wat ze ervaren. 
    Er is bestaat een yogahouding voor van alles wat een kind ervaren kan: 
    Blijheid kan worden gevierd, boosheid/frustratie kan worden ontladen, moed 
    en kracht wordt gezocht in houdingen zoals de Held. 
    <br> 
    In de yogalessen wordt fantasie en creativiteit aangesproken. Zelfvertrouwen 
    wordt gestimuleerd doordat het kind zichzelf kan zijn en mag voelen wat er
    is. Het gaat nooit over 'moeten' in de lessen (behalve de afspraken om een 
    geconcentreerde en veilige sfeer te creëren). <br>
    In de les kunnen de kinderen naast oefeningen die ik aanbied, zelf een 
    kaartje met een oefening uitkiezen. Zo is er ruimte voor individuele 
    behoefte. Het mooie hiervan is dat we ook oefenen om aandacht voor elkaar 
    te hebben en elkaar ruimte te geven.
    `,
};

export const makeVoorKinderen = makeLessonData(voorKinderenData);
