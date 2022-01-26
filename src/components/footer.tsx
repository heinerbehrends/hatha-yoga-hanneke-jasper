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
import { SmallerHeading } from './InfoCard';

const FooterStyled = styled('footer', {
  backgroundColor: '$blueDark',
  color: '$white',
  paddingY: '$3xl',
  paddingLeft: '$m',
  '@s': {
    paddingLeft: '$l',
  },
});

const FooterContainer = styled('section', {
  display: 'grid',
  gridGap: '$m',
  maxWidth: '960px',
  marginX: 'auto',
  '@m': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
  },
});

const FooterBio = styled('article', {});

const FooterContact = styled('address', {
  width: 'fit-content',
  '@l': {
    paddingLeft: '$xl',
  },
});

const ContactItem = styled('a', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  paddingY: '$xxs',
  '&:hover': {
    textDecoration: 'underline',
  },
  '& svg': {
    marginRight: '$xs',
  },
  '@s': {},
  '@l': {
    paddingLeft: 0,
  },
});

const imageStyles = css({
  width: '90px',
  height: '120px',
});

const FooterParagraph = styled('p', {
  width: '66%',
  '@s': {
    width: '75%',
  },
  '& a': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

const BioContainer = styled('div', {
  display: 'flex',
  width: 'content',
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
          <SmallerHeading>Over mij</SmallerHeading>
          <BioContainer>
            <FooterParagraph
              dangerouslySetInnerHTML={{ __html: about.excerpt }}
            />
            <GatsbyImage
              alt="foto van yogadocent Hanneke Jasper"
              image={about.image}
              className={imageStyles()}
            />
          </BioContainer>
        </FooterBio>
      </FooterContainer>
    </FooterStyled>
  );
}
