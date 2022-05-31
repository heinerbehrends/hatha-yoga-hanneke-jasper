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
    De lessen zijn niet prestatiegericht, je doet de yoga met respect voor je
    eigen grenzen en binnen je mogelijkheden. Dat maakt dat de yogalessen voor
    iedereen zijn. In de beoefening staat de adem centraal. Door tijdens de
    oefeningen juist te leren ademen, kan energie door het hele lichaam gaan
    stromen. In de yogahoudingen kom je je eigen grenzen tegen. Met de adem
    kun je als het ware door deze grenzen heen ademen, vastgezette spanningen
    kun je hierdoor loslaten. Je masseert het lichaam als het ware van
    binnenuit met je adem. Dit geeft ruimte, ontspanning en vitaliteit. De
    yogahoudingen worden in de les structureel opgebouwd: eerst bewust
    worden/ervaren van contact met de ondergrond en hoe het lichaam voelt,
    dan wordt de houding dynamisch uitgevoerd om vervolgens een tijd statisch
    in de houding door te ademen. Na een tijd in de houding te zijn geweest
    is er tijd voor navoelen; een moment verschil te ervaren tussen de
    ervaring van het lichaam voor de oefening en na de oefening tussen
    links en rechts. Deze opbouw in het beoefenen geeft een ontmoeting met
    jezelf. Het kan je laten ervaren dat het lichaam reageert op het denken
    en de manier van ademen. Dit bewustzijnsproces zorgt ervoor dat je kunt
    loslaten wat je niet meer nodig is zodat je meer in verbinding komt met
    je innerlijk en de stilte in jezelf. Door in contact te blijven met de
    beweging, de houding en de adem in de oefening wordt het bewustzijn één
    met de beweging, het lichaam en de adem. Dit samenvallen van
    bewustzijn-adem-lichaam kan zorgen voor een gevoel van harmonie in jezelf
    en acceptatie van waar je nu bent zonder meer te hoeven/moeten dan wat er
    is. De yogalessen die ik geef zijn in de traditie van de vier-jarige
    Saswitha Opleiding voor Yoga en Wijsbegeerte te Bilthoven. Saswitha yoga
    is een vorm van hatha yoga die uitgaat van de eenheid van lichaam en
    bewustzijn, waarbij de adem de verbinding vormt. De adem wordt gebruikt
     als middel om in jezelf die verbinding te ervaren. De adem is de dragende
     kracht in elke beweging. Door concentratie op de adem ontstaat een
      meditatieve aandacht die leidt tot verstilling.
      <h5>PRAKTISCH</h5>
      <ul>
        <li>Graag vóór het tijdstip waarop de les begint
          aanwezig zijn zodat je rustig je plekje kunt vinden en je je eventueel
          kunt omkleden.</li>
        <li>Breng een lang badlaken of een doek mee voor op de mat. Er zijn 
          dekentjes en kussens aanwezig voor in de ontspanning.</li>
        <li>Tijdens de les draag je kleding waarin je je gemakkelijk kunt bewegen.</li>
        <li>Voor de les liever niet eten als dat niet lukt dan een lichte maaltijd.
        Tijdens de les hoeft er niet gedronken te worden. Het is goed om te
        drinken na de beoefening.</li>
        <li>De yoga wordt vrijwillig en op eigen risico beoefend. Raadpleeg bij
        twijfel een arts.</li>
        <li>Beoefen yoga vanuit de mogelijkheden van jouw lichaam, rekening
        houdend met eventuele blokkades en/of blessures. Respecteer de
        grenzen van je lichaam.</li>
        <li>Licht de docent altijd in over lichamelijke klachten die van
        invloed zijn op het volgen van de les.</li>
      </ul>
    `,
};

export const makeGroepslessen = makeLessonData(groepslessenData);
