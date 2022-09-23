import { LessonNode } from '../../homePageProps';
import { makeLessonData } from '../lessonData';

export const groepslessenData: LessonNode = {
  slug: 'groepslessen',
  title: 'Groepslessen',
  extraVelden: {
    buttonTekst: 'Boek nu je gratis proefles',
    menuTekst: 'Groepslessen',
  },
  excerpt: /* html */ `
    In de yogales worden ongeveer twaalf oefeningen gedaan. De hele wervelkolom 
    wordt in alle richtingen in beweging gebracht. Dynamische, statische en 
    ontspannende oefeningen worden afgewisseld.
  `,
  content: /* html */ `
<article>
  <h2>Yoga met respect voor je eigen grenzen</h2>

  De lessen en cursussen zijn niet prestatiegericht, je doet de Yoga met respect 
  voor je eigen grenzen en binnen je mogelijkheden. Dat maakt dat de Yogalessen 
  voor iedereen zijn, dit geldt ook in de gevorderden en verdiepingslessen.
  <br><br>
  <h3>Yoga Basis</h3>
  <em>12 lessen, 1 uur per les</em>
  <p>De basis in de basiscursus is dat je leert dat je binnen je mogelijkheden yoga 
  beoefent: dat je bewust wordt dat het niet gaat om hoe lenig je bent en dat het 
  niet gaat om een prestatie leveren. Je wordt in de lessen uitgenodigd om in 
  vertrouwen en vriendelijkheid je grenzen te onderzoeken en te mogen ervaren 
  dat dit je bij diepe ontspanning kan brengen.</p>
  <p>Er is een opbouw in de Basis cursus. In de eerste Yogalessen van de cursus 
  besteed ik veel aandacht aan de buikadem en de adem in het bekken. 
  Rond ongeveer de vijfde les in de cursus wordt de Zonnegroet aangeleerd 
  (een reeks houdingen) die je na het leren altijd zelfstandig kunt blijven 
  beoefenen mocht je behoefte voelen om Yoga meer te integreren in je dagelijkse 
  leven. Daarna volgen er ook omgekeerde houdingen en enkele ademtechnieken.</p>

  <p>Deze cursus is geschikt voor als je adem hoog zit of als je net met yoga begint. 
  De cursus is goed voor cursisten die het prettig vinden om deze reeks te 
  herhalen; de verdieping kan net zo goed in herhaling liggen.
  Na de Basiscursus kun je doorstromen naar de Gevorderden of de Verdieping of 
  er voor kiezen om de cursus opnieuw te doen.</p>
  <br>
  <h3>Gevorderden cursus</h3>
  <em>12 lessen, 1 uur en 15 minuten per les</em>
  <br>
  <p>De gevorderden yogalessen borduren voort op de laatste lessen van de Basis 
  Yogacursus. De les duurt een uur en een kwartier. 
  <br> In de gevorderdenles ben je inmiddels vertrouwd met de ervaring dat je oefent binnen je eigen mogelijkheden en je jouw grenzen respecteert.<br>
  <br>Doordat de cursist gewend is aan de houdingen, in contact met de adem en concentratie, kunnen 
  houdingen wat langer worden aangehouden en worden. Iedereen met Yoga-ervaring of die de basiscursus 
  heeft gedaan, is welkom in de Gevorderden Hatha Yogales.</p>
  <br>
  <h3>Verdieping Hatha Yoga</h3>
  <em>Verdieping 12 lessen, anderhalf uur per les</em>
  <p>De yoga verdiepingslessen van anderhalf uur zorgen voor verdieping in de 
  yogabeoefening en de yoga ervaring. In deze yogalessen komen ook meer aan Yoga 
  gerelateerde gebieden aan bod zoals pranayama en meditatie. Deze yogalessen 
  bieden tevens de mogelijkheid om yogahoudingen langer aan te houden en 
  intensiever te oefenen. Je kunt na de basiscursus doorstromen als je het 
  prettig vindt om anderhalf uur met Yoga bezig te zijn. </p>
  <br>
 
</article>
  `,
};

export const makeGroepslessen = makeLessonData(groepslessenData);
