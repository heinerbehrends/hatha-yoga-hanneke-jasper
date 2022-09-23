import { LessonNode } from '../../homePageProps';
import { makeLessonData } from '../lessonData';

export const voorKinderenData: LessonNode = {
  slug: 'voor-kinderen',
  title: 'Lessen voor kinderen',
  extraVelden: {
    buttonTekst: 'Neem contact met me op',
    menuTekst: 'Voor kinderen',
  },
  excerpt: /* html */ `
    Yoga voor kinderen biedt ontspanning, rust, zelfvertrouwen en creativiteit.
    Het geeft kinderen mogelijkheid om uit het hoofd kunnen komen en in het lijf.
    <br>In de yogales voor kinderen bewegen we met plezier en verbeelding.<br>
    <br>Het kind kan zichzelf beter leren kennen door yoga. Door het bewegen en goed door te ademen in allerlei houdingen 
    kunnen ze ontdekken wie ze zijn en wat ze ervaren. <br>
  `,
  content: /* html */ `
    <h3>Ontspanning voor lichaam en geest </h3>
    <br>Yoga voor kinderen biedt ontspanning, rust, zelfvertrouwen en creativiteit. 
    Kinderyoga geeft de mogelijkheid om uit het hoofd kunnen komen en in het lijf.<br)
    
     <br>Het kind kan zichzelf beter leren kennen door yoga. Door het bewegen en allerlei houdingen 
    aan te nemen ontdekken ze wie ze zijn en wat ze ervaren. <br>
    <br>In de yogales voor kinderen bewegen we met plezier en verbeelding.<br>

   
    <br>Er is bestaat een yogahouding voor van alles wat een kind ervaren kan: 
    Blijheid kan worden gevierd, boosheid/frustratie kan worden ontladen, moed 
    en kracht wordt gezocht in houdingen zoals de Held. 
    <br> 
    <br>In de yogalessen wordt fantasie en creativiteit aangesproken. Zelfvertrouwen 
    wordt gestimuleerd doordat het kind zichzelf kan zijn en mag voelen wat er
    is. Het gaat nooit over 'moeten' in de lessen (behalve de afspraken om een 
    geconcentreerde en veilige sfeer te creëren). <br>
    <br>In de les kunnen de kinderen naast oefeningen die ik aanbied, zelf een 
    kaartje met een oefening uitkiezen. Zo is er ook ruimte voor de individuele 
    behoefte. Het mooie hiervan is dat we ook nog oefenen om aandacht voor elkaar 
    te hebben en elkaar ruimte te geven.<br>
    
  
    
    <br> Individuele lessen met uw kind (of samen met verzorger/ouder) zijn ook mogelijk.
    Bijvoorbeeld als uw kind hoogsensitief is en/of lastig prikkels verwerkt.<br>
    `,
};

export const makeVoorKinderen = makeLessonData(voorKinderenData);
