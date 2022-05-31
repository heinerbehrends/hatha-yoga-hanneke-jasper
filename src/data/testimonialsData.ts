import { ImageNode } from '../utils';

type Testimonial = {
  aanbevelingTekst: string;
  aanbevolenDoor: string;
  foto?: ImageNode;
};

type Nodes<T> = {
  nodes: T[];
};

export function makeHeinerTestimonialData(
  testimonialImage: ImageNode
): Testimonial {
  if (!testimonialImage) {
    throw new Error('testimonialImage is required');
  }
  return {
    aanbevolenDoor: 'Heiner',
    aanbevelingTekst:
      'Door Hannkes lessen heb ik zowel meer rust alsook meer energie gekregen.',
    foto: testimonialImage,
  };
}
