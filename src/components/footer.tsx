import {
  BackpackIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  PaperPlaneIcon,
} from '@modulz/radix-icons';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { css, styled } from '../../stitches.config';
import { Paragraph, SmallerHeading } from './InfoCard';

const FooterStyled = styled('footer', {
  marginTop: '$3xl',
  backgroundColor: '$blueDark',
  color: '$white',
  paddingY: '$l',
});

const FooterContainer = styled('section', {
  display: 'grid',
  gridGap: '$m',
  gridTemplateColumns: 'repeat(auto-fill, minmax(45ch, 1fr))',
  maxWidth: '960px',
  marginX: 'auto',
});

const FooterBio = styled('article', {});

const FooterContact = styled('address', {
  '@l': {
    paddingLeft: '$xl',
  },
});

const ContactItem = styled('a', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$bodySmall',
  paddingX: '$m',
  paddingY: '$xxs',
  '&:hover': {
    textDecoration: 'underline',
  },
  '& svg': {
    marginRight: '$xs',
  },
  '@s': {},
  '@l': {
    fontSize: '$body',
    paddingLeft: 0,
  },
});

const imageStyles = css({
  width: '90px',
  height: '120px',
});

const FooterParagraph = styled(Paragraph, {
  width: '75%',
  '@s': {
    fontSize: '$bodySmall',
  },
  '& a': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

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
            Ik ben op WhatsApp
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
          <SmallerHeading>Over mij</SmallerHeading>
          <div style={{ display: 'flex' }}>
            <FooterParagraph
              dangerouslySetInnerHTML={{ __html: about.excerpt }}
            />
            <GatsbyImage
              alt="foto van yogadocent Hanneke Jasper"
              image={about.image}
              className={imageStyles()}
            />
          </div>
        </FooterBio>
      </FooterContainer>
    </FooterStyled>
  );
}
