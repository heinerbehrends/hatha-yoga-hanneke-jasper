import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { styled } from '../../stitches.config';

const TestimonialContainer = styled('figure', {
  fontSize: '$m',
  fontStyle: 'italic',
  display: 'flex',
  backgroundColor: '$white',
  lineHeight: 1.1,
  padding: '$s',
  marginX: '$s',
  marginTop: '$s',
  borderTop: '1px solid $blue',
  overflow: 'hidden',
  '& figcaption': {
    fontSize: '$s',
    fontStyle: 'normal',
  },
  '&:before': {
    content: 'open-quote',
    fontSize: '100px',
    paddingRight: '$m',
    lineHeight: '60px',
    transform: 'translateY(10px)',
    '@s': {
      paddingRight: '$l',
      fontSize: '120px',
      lineHeight: '80px',
      transform: 'translate(-5px, 10px)',
    },
    '@m': {
      transform: 'translate(-15px, 10px)',
      paddingRight: '$s',
    },
    '@l': {
      transform: 'translate(-15px, 10px)',
    },
  },
  '@s': {
    border: '1px solid $blue',
    borderRadius: '$s',
    fontSize: '$l',
    '& figcaption': {
      fontSize: '$body',
    },
    '@m': {
      fontSize: '$xl',
    },
  },
});

const ImageContainer = styled('div', {
  borderRadius: '50%',
  marginLeft: '$s',
  overflow: 'hidden',
  flexShrink: 0,
  height: '60px',
  flexBasis: '60px',
  marginRight: '$s',
  '@s': {
    marginRight: 0,
    height: '90px',
    flexBasis: '90px',
  },
});

const FigCaption = styled('figcaption', {
  marginLeft: '$s-resp',
  display: 'inline',
});

type TestimonialProps = {
  quote: string;
  author: string;
  image?: IGatsbyImageData;
};

export default function Testimonial({
  quote,
  author,
  image,
}: TestimonialProps) {
  return (
    <TestimonialContainer>
      <div style={{ display: 'flex' }}>
        <div>
          <blockquote
            style={{ display: 'inline' }}
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <FigCaption>{author}</FigCaption>
        </div>
        {image ? (
          <ImageContainer>
            <GatsbyImage alt="" image={image} />
          </ImageContainer>
        ) : null}
      </div>
    </TestimonialContainer>
  );
}
