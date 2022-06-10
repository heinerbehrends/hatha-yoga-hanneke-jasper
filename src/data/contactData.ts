export type ContactData = {
  adres: string;
  emailadres: string;
  telefoonnummer: string;
  telefonischBereikbaar: string;
  kvkNummer: string;
};

export function makeContactData(): ContactData {
  return {
    adres: 'Emmastraat 15 g 206 - 9722EW Groningen',
    telefoonnummer: '06-44834632',
    telefonischBereikbaar: 'Ik ben telefonisch bereikbaar tussen 9 en 14 uur.',
    emailadres: 'hanneke.jasper@gmail.com',
    kvkNummer: '75888300',
  };
}
