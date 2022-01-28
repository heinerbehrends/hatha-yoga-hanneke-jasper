import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ImageContainer } from './infoCardStyles';
import { TestimonialContainer, FigCaption } from './testimonialStyles';
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
