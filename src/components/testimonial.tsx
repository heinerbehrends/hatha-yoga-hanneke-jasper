import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { styled } from '../../stitches.config';

const TestimonialContainer = styled('figure', {
  fontSize: '$xl',
  fontStyle: 'italic',
  display: 'flex',
  backgroundColor: '$white',
  lineHeight: 1.1,
  border: '1px solid $blue',
  padding: '$s',
  marginTop: '$s',
  borderRadius: '$s',
  overflow: 'hidden',
  '& figcaption': {
    fontSize: '$body',
  },

  '&:before': {
    fontWeight: 'light',
    content: 'open-quote',
    paddingRight: '$xl',
    fontSize: '240px',
    lineHeight: '80px',
    transform: 'translateY(50px)',
  },
});

const ImageContainer = styled('div', {
  overflow: 'hidden',
  flexShrink: 0,
  flexBasis: '90px',
});

type TestimonialProps = {
  quote: string;
  author: string;
  image: {
    alt: string;
    gatsbyImageData: IGatsbyImageData;
  };
};

export default function Testimonial({
  quote,
  author,
  image,
}: TestimonialProps) {
  return (
    <TestimonialContainer>
      <div>
        <blockquote dangerouslySetInnerHTML={{ __html: quote }} />
        <figcaption>{author}</figcaption>
      </div>
      <ImageContainer>
        <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
      </ImageContainer>
    </TestimonialContainer>
  );
}
