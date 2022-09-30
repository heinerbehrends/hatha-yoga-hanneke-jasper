import { ImageNode } from '../utils';

type Testimonial = {
  aanbevelingTekst: string;
  aanbevolenDoor: string;
  foto?: ImageNode;
};

export function makeTestimonialData(testimonialImage: ImageNode): Testimonial {
  if (!testimonialImage) {
    throw new Error('testimonialImage is required');
  }
  return {
    aanbevolenDoor: 'Heiner',
    aanbevelingTekst:
      'Door de lessen van Hanneke heb ik meer rust en energie gekregen.',
    foto: testimonialImage,
  };
}
