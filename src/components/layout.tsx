import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { globalCss, styled } from '../../stitches.config';
import Footer from './footer';
import NavBar from './navBar';
import { getLocalImage } from '../utils';
import { makeFooterData } from '../data/footerData';

const PageContainer = styled('main', {
  maxWidth: '960px',
  marginX: 'auto',
  paddingBottom: '$3xl',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: 'white',

  '@l': {
    backgroundColor: '$background',
    paddingX: '$s',
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
  length: 0,
});

const globalStyles = globalCss({
  // Remove all the styles of the "User-Agent-Stylesheet",
  // except for the 'display' property
  '*:where(:not(iframe, canvas, img, svg, video):not(svg *))': {
    all: 'unset',
    display: 'revert',
  },
  // Preferred box-sizing value
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },
  '*': {
    fontFamily: '$default',
  },
  // For images to not be able to exceed their container
  img: {
    maxWidth: '100%',
  },
  // revert the 'white-space' property for textarea elements on Safari
  textarea: {
    whiteSpace: 'revert',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    backgroundColor: '$background',
    color: '$text',
    fontSize: '$bodySmall',
    marginTop: '60px',
    fontFamily: 'Asap',
    lineHeight: '$body',
    '@m': {
      fontSize: '$body',
    },
    h2: {
      fontSize: '$xxl',
      marginTop: '$l',
      marginBottom: '$l',
      textAlign: 'center',
    },
    h3: {
      fontSize: '$l',
      fontWeight: 500,
      marginBottom: '$xs',
      '& svg': {
        transform: 'scale(166%)',
        marginRight: '$s',
        marginLeft: '$xs',
      },
    },
  },
});

type LayoutProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
  background?: boolean;
  border?: boolean;
};

export default function Layout({ children, slot, border }: LayoutProps) {
  globalStyles();
  const image = useStaticQuery(graphql`
    query HannekeQuery {
      file(relativePath: { eq: "hanneke.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `);
  const data = makeFooterData(image);
  const aboutData = data.overMij.overMijSamenvatting;
  return (
    <>
      <Helmet>
        <meta property="og:image" content="localhost:8000/og-image.png" />
      </Helmet>
      <NavBar />
      {slot}
      <PageContainer border={border}>{children}</PageContainer>
      <Footer
        about={{
          excerpt: aboutData.samenvatting,
          image: getLocalImage(aboutData.overMijFoto.file)!,
        }}
        contact={data.contact.contactgegevens}
      />
    </>
  );
}
