import {
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import Button from './button';
import {
  ContactCardsContainer,
  Adress,
  ContactCardWrapper,
  ContactCardInner,
  HideAboveMobile,
} from './contactStyles';
import { SmallerHeading } from './infoCardStyles';

type ContactCardsProps = {
  telefoonnummer: string;
  telefonischBereikbaar: string;
  emailadres: string;
};

function ContactCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <ContactCardWrapper>
      <ContactCardInner>{children}</ContactCardInner>
    </ContactCardWrapper>
  );
}

export default function ContactCards(props: ContactCardsProps) {
  const nummerNaarDeZes = props.telefoonnummer.split('-')[1];
  return (
    <ContactCardsContainer>
      <Adress>
        <ContactCardContainer>
          <SmallerHeading>
            <PaperPlaneIcon /> WhatsApp
          </SmallerHeading>
          Ik ben op WhatsApp! Je kunt me een bericht sturen naar{' '}
          {props.telefoonnummer}{' '}
          <HideAboveMobile>
            of maak gebruik van onderstaande button.
          </HideAboveMobile>
          <Button
            as="a"
            href={`https://api.whatsapp.com/send?phone=+316${nummerNaarDeZes}`}
            size="big"
            hide="aboveMobile"
            color="green"
          >
            Stuur nu een appje
          </Button>
        </ContactCardContainer>
        <ContactCardContainer>
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
            hide="aboveMobile"
          >
            Bel nu
          </Button>
        </ContactCardContainer>
        <ContactCardContainer>
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
        </ContactCardContainer>
      </Adress>
    </ContactCardsContainer>
  );
}
