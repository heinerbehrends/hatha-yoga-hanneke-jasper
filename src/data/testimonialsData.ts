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
      'Door Hannekes lessen heb ik zowel meer rust alsook meer energie gekregen.',
    foto: testimonialImage,
  };
}
