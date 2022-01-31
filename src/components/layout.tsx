import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { globalCss, styled } from '../../stitches.config';
import Footer from './footer';
import NavBar from './navBar';
import { getLocalImage, ImageNode } from '../utils';
import SVG from 'svg.js';
import {
  random,
  createVoronoiTessellation,
} from '@georgedoescode/generative-utils';
import { theme } from '../../stitches.config';

const PageContainer = styled('main', {
  maxWidth: '960px',
  marginX: 'auto',
  paddingBottom: '$3xl',
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
    fontSize: '$body',
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
    '& #SvgjsSvg1001': {
      gridArea: '1/1',
      zIndex: -1,
    },
    '& #___gatsby': {
      gridArea: '1/1',
    },
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
  useEffect(() => {
    // draw the generative svg
    const body = document.getElementsByTagName('body')[0];
    const height = body.offsetHeight;
    const width = body.offsetWidth;
    const svg = SVG(body).viewbox(0, 0, width, height);
    const points = [...Array(32)].map(() => ({
      x: random(0, width),
      y: random(0, height),
    }));
    const tessellation = createVoronoiTessellation({
      width,
      height,
      points,
      relaxIterations: 2,
    });
    type Cell = {
      innerCircleRadius: number;
      centroid: { x: number; y: number };
    };
    tessellation.cells.forEach((cell: Cell) =>
      svg
        .circle(cell.innerCircleRadius * 2)
        .cx(cell.centroid.x)
        .cy(cell.centroid.y)
        .stroke(
          random([
            `${theme.colors.green.value}`,
            `${theme.colors.coral.value}`,
            `${theme.colors.blue.value}`,
          ])
        )
        .attr('stroke-width', `0.75px`)
        .fill({ opacity: 0 })
        .scale(0.9)
    );
  }, []);
  return (
    <>
      <Helmet>
        <meta property="og:image" content="localhost:8000/og-image.png" />
      </Helmet>
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
