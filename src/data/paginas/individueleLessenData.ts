import { LessonNode } from '../../pages/homePageProps';
import { makeLessonData } from '../lessonData';

export const individueleLessenData: LessonNode = {
  slug: 'individuele-lessen',
  title: 'Individuele lessen',
  extraVelden: {
    buttonTekst: 'Boek nu je eerste les',
    menuTekst: 'Individuele lessen',
  },
  excerpt: /* html */ `
    Voor wie het prettiger vindt om individueel les te krijgen is dat in 
    overleg mogelijk bij jou thuis, in de Dojo-ruimte van het Eiland van 
    Groningen of bij mij thuis. In de individuele lessen kan ik de les helemaal
    op jouw behoefte en of klachten afstemmen. 
  `,
  content: /* html */ `
    Voor wie het prettiger vindt om individueel les te krijgen is dat in 
    overleg mogelijk bij jou thuis, in de Dojo-ruimte van het Eiland van 
    Groningen of bij mij thuis. In de individuele lessen kan ik de les helemaal
    op jouw behoefte en/of klachten afstemmen. 
    `,
};

export const makeIndividueleLessen = makeLessonData(individueleLessenData);
