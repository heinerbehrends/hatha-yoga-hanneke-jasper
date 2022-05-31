type ContactData = {
  adres: string;
  emailadres: string;
  telefoonnummer: string;
  telefonischBereikbaar: string;
  kvkNummer: string;
};

export function makeContactData(): ContactData {
  return {
    adres: 'adres',
    telefoonnummer: '',
    telefonischBereikbaar: '',
    emailadres: '',
    kvkNummer: '',
  };
}
