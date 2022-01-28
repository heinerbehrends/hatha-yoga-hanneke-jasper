import {
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
} from '@modulz/radix-icons';
import React from 'react';
import Button from './button';
import { ContactCardsContainer, Adress, ContactCard } from './contactStyles';
import { SmallerHeading } from './infoCardStyles';

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
          <SmallerHeading>
            <PaperPlaneIcon /> WhatsApp
          </SmallerHeading>
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
          <SmallerHeading>
            <ChatBubbleIcon /> Telefoon
          </SmallerHeading>
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
          <SmallerHeading>
            <EnvelopeClosedIcon />
            Email{' '}
          </SmallerHeading>
          Gebruik het contactformulier of stuur een mailtje naar{' '}
          {props.emailadres}.
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
