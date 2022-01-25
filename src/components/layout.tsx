import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { globalCss, styled } from '../../stitches.config';
import Footer from './footer';
import NavBar from './navBar';
import { getLocalImage, ImageNode } from '../utils';

const PageContainer = styled('main', {
  maxWidth: '960px',
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: 'white',
  '@m': {
    backgroundColor: 'inherit',
    paddingX: 'none',
  },
  variants: {
    background: {
      true: {
        backgroundColor: '$white',
      },
    },
    border: {
      true: {
        borderRight: '2px solid $blue',
        borderLeft: '2px solid $green',
      },
    },
  },
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$default',
    fontSize: '$body',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
  },
});

type LayoutProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
  background?: boolean;
  border?: boolean;
};

type FooterData = {
  overMij: {
    overMijSamenvatting: {
      samenvatting: string;
      overMijFoto: ImageNode;
    };
  };
  contact: {
    contactgegevens: {
      emailadres: string;
      telefoonnummer: string;
      adres: string;
      kvkNummer: string;
    };
  };
};

export default function Layout({
  children,
  slot,
  background,
  border,
}: LayoutProps) {
  globalStyles();
  const data: FooterData = useStaticQuery(graphql`
    query FooterQuery {
      overMij: wpPage(title: { eq: "Wie ik ben" }) {
        overMijSamenvatting {
          samenvatting
          overMijFoto {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 90, height: 120, placeholder: NONE)
              }
            }
          }
        }
      }
      contact: wpPage(isFrontPage: { eq: true }) {
        contactgegevens {
          emailadres
          telefoonnummer
          adres
          kvkNummer
        }
      }
    }
  `);
  const aboutData = data.overMij.overMijSamenvatting;
  return (
    <>
      <NavBar />
      {slot}
      <PageContainer background={background} border={border}>
        {children}
      </PageContainer>
      <Footer
        about={{
          excerpt: aboutData.samenvatting,
          image: getLocalImage(aboutData.overMijFoto),
        }}
        contact={data.contact.contactgegevens}
      />
    </>
  );
}
