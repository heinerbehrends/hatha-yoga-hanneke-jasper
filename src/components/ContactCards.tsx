import React from 'react';
import { styled } from '../../stitches.config';
import Button from './button';

const ContactCardsContainer = styled('section', {
  display: 'grid',
  gridGap: '$s',
  gridTemplateColumns: 'none',
});

const ContactCard = styled('div', {
  backgroundColor: '$white',
  paddingX: '$m',
  paddingY: '$m',
  borderRadius: '$s',
  border: '1px solid $green',
  '&:not(:first-child)': {
    marginTop: '$s',
  },
});

const Adress = styled('address', {
  '& a': {
    fontsize: '$mobile',
    display: 'block',
    width: 'fit-content',
    marginLeft: 0,
    marginTop: '$s',
    '@s': {
      fontsize: '$body',
    },
  },
});

const data = {
  contactgegevens: {
    adres: 'Straatnaam 00a, 9700 Groningen',
    emailadres: 'voorbeeld@gmail.com',
    telefoonnummer: '06-xxxxxxxx',
    kvkNummer: '12345678',
  },
};
console.log(data.contactgegevens.telefoonnummer.split('-')[1]);

type ContactCardsProps = {
  telefoonnummer: string;
  telefonischBereikbaar: string;
  emailadres: string;
};

export default function ContactCards(props: ContactCardsProps) {
  const nummerNaarDeZes = props.telefoonnummer.split('-')[1];
  return (
    <ContactCardsContainer>
      <Adress>
        <ContactCard>
          Ik ben op WhatsApp! Je kunt me een bericht sturen naar{' '}
          {props.telefoonnummer} of maak gebruik van onderstaande button.
          <Button
            as="a"
            href={`https://api.whatsapp.com/send?phone=+316${nummerNaarDeZes}`}
            size="big"
            color="green"
          >
            Stuur nu een appje
          </Button>
        </ContactCard>
        <ContactCard>
          {props.telefonischBereikbaar} Je kunt me bellen onder{' '}
          {props.telefoonnummer}.
          <Button
            as="a"
            href={`tel:+316${nummerNaarDeZes}`}
            size="big"
            color="green"
          >
            Bel nu
          </Button>
        </ContactCard>
        <ContactCard>
          Of stuur een mailtje aan {props.emailadres}
          <Button
            as="a"
            href={`mailto:${props.emailadres}`}
            size="big"
            color="green"
          >
            Mail nu
          </Button>
        </ContactCard>
      </Adress>
    </ContactCardsContainer>
  );
}
