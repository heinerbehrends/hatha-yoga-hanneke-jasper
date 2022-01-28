import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  TestimonialContainer,
  FigCaption,
  TestimonialImage,
} from './testimonialStyles';
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
          <TestimonialImage>
            <GatsbyImage alt="" image={image} />
          </TestimonialImage>
        ) : null}
      </div>
    </TestimonialContainer>
  );
}
