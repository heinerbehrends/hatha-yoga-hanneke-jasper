import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from '../../stitches.config';
import Footer from './footer';
import NavBar from './navBar';
import { getLocalImage } from '../utils';
import { makeFooterData } from '../data/footerData';
import { globalStyles } from '../globalCSS';

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
