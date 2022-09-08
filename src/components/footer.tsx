import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  BackpackIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  PaperPlaneIcon,
} from '@modulz/radix-icons';
import {
  FooterStyled,
  FooterContainer,
  FooterContact,
  ContactItem,
  FooterBio,
  BioContainer,
  FooterParagraph,
  footerImageStyles,
} from './footerStyles';
import { SmallerHeading } from './infoCardStyles';

type FooterProps = {
  about: {
    image: IGatsbyImageData;
    excerpt: string;
  };
  contact: {
    emailadres: string;
    telefoonnummer: string;
    adres: string;
    kvkNummer: string;
  };
};

export default function Footer({ about, contact }: FooterProps) {
  const telNrAfterDash = contact.telefoonnummer.split('-')[1];
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterContact>
          <SmallerHeading>Contact</SmallerHeading>
          <ContactItem href={`https://wa.me/316${telNrAfterDash}`}>
            <PaperPlaneIcon />
            Stuur een appje
          </ContactItem>
          <ContactItem href={`mailto:${contact.emailadres}`}>
            <EnvelopeClosedIcon />
            {contact.emailadres}
          </ContactItem>
          <ContactItem href={`tel:+316${telNrAfterDash}`}>
            <ChatBubbleIcon />
            {contact.telefoonnummer}
          </ContactItem>
          <ContactItem href="https://www.google.com/maps/place/Emmastraat+15,+9722+GR+Groningen/@53.1973042,6.5821441,17z/data=!3m1!4b1!4m5!3m4!1s0x47c82d5a8ee924bd:0x9f4ec5ae0a07ec0!8m2!3d53.1973042!4d6.5821441">
            <HomeIcon />
            {contact.adres}
          </ContactItem>
          <ContactItem>
            <BackpackIcon />
            KVK-nummer: {contact.kvkNummer}
          </ContactItem>
        </FooterContact>
        <FooterBio>
          <BioContainer>
            <div style={{ width: '75%' }}>
              <SmallerHeading>Over mij</SmallerHeading>
              <FooterParagraph
                dangerouslySetInnerHTML={{ __html: about.excerpt }}
              />
            </div>
            <GatsbyImage
              alt="foto van yogadocent Hanneke Jasper"
              image={about.image}
              className={footerImageStyles()}
            />
          </BioContainer>
        </FooterBio>
      </FooterContainer>
    </FooterStyled>
  );
}
