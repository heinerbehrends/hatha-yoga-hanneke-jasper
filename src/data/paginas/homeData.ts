import HomePageProps from '../../homePageProps';
import { ImageNode } from '../../utils';
import { makeContactData } from '../contactData';
import { makeTestimonialData } from '../testimonialsData';
import { groepslessenData } from './groepslessenData';
import { individueleLessenData } from './individueleLessenData';
import { voorBedrijvenData } from './voorBedrijvenData';
import { voorKinderenData } from './voorKinderenData';

export type HomeImages = {
  houdingen: {
    held: ImageNode;
    plow: ImageNode;
    torsion: ImageNode;
  };
  aanbevelingen: {
    heiner: ImageNode;
  };
};

export function makeHomeData(images: HomeImages): HomePageProps {
  return {
    data: {
      wpPage: {
        title: 'Hatha Yoga Hanneke Jasper',
        introductie: {
          kop: 'Yogalessen in Groningen',
          introductie: /* html */ `
            Of je nieuw wilt beginnen of al ervaring hebt, of je ontspanning zoekt of energie, 
            je bent van harte uitgenodigd. Ik biedt groepslessen en individuele lessen aan.
            <br>Daarnaast ontwikkel ik ook speciale lessen voor bedrijven, om bijvoorbeeld aan
            een betere postuur en concentratie te werken en lessen voor scholieren, die
            helpen het welzijn van de kinderen en de rust in klas te vergroten.`,
        },
        overHathaYoga: {
          infoKop: 'Wat kan Hatha Yoga voor je doen?',
          infos: [
            {
              titel: 'Hatha Yoga is rustgevend',
              inhoud: /* html */ `
                Saswitha yoga is een vorm van hatha yoga die uitgaat van de eenheid van 
                lichaam en bewustzijn, waarbij de adem de verbinding vormt.<br>
                De adem wordt gebruikt als middel om in jezelf die verbinding te ervaren. 
                De adem is de dragende kracht in elke beweging.
                Door concentratie op de adem ontstaat een meditatieve aandacht die leidt
                tot verstilling.`,
              afbeelding: images.houdingen.held,
            },
            {
              titel: 'Hatha yoga is vitaliserend',
              inhoud: /* html */ `In de beoefening staat de adem centraal. Door tijdens de oefeningen 
                juist te leren ademen, kan energie door het hele lichaam gaan stromen. 
                In de yogahoudingen kom je je eigen grenzen tegen. Met de adem kun je als 
                het ware door deze grenzen heen ademen.<br>Vastgezette spanningen kun je
                hierdoor loslaten. Je masseert het lichaam als het ware van binnenuit met
                je adem. Dit geeft ruimte, ontspanning en vitaliteit.`,
              afbeelding: images.houdingen.plow,
            },
            {
              titel: 'Hatha Yoga is helend',
              inhoud: /* html */ `
                Saswitha yoga is een vorm van hatha yoga die uitgaat van de eenheid van 
                lichaam en bewustzijn, waarbij de adem de verbinding vormt. De adem wordt 
                De adem is de dragende kracht in elke beweging. <br>
                Door concentratie op de adem ontstaat een meditatieve aandacht die leidt 
                tot verstilling. Dit samenvallen van bewustzijn, adem en lichaam zorgt
                voor een gevoel van harmonie.`,
              afbeelding: images.houdingen.torsion,
            },
          ],
        },
        seo: {
          omschrijving: /* html */ `
            Yogalessen in Groningen door de gecertificeerde docente Hanneke Jasper. 
            Toegankelijke lessen met aandacht voor ieder cursist.`,
        },
        contactgegevens: makeContactData(),
      },
      allWpLes: {
        nodes: [
          groepslessenData,
          individueleLessenData,
          voorKinderenData,
          voorBedrijvenData,
        ],
      },
      allWpAanbeveling: {
        nodes: [
          {
            id: '',
            aanbeveling: {
              ...makeTestimonialData(images.aanbevelingen.heiner),
            },
          },
        ],
      },
    },
  };
}
