import { LessonNode } from '../../homePageProps';
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
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    <br>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi 
    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
    ut labore et dolore magnam aliquam quaerat voluptatem.
    <br>
    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
    vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla 
    pariatur?
    `,
};

export const makeIndividueleLessen = makeLessonData(individueleLessenData);
