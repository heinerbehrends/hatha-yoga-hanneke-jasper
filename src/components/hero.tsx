import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HYHJ from '../images/HYHJ.svg';
import {
  HeroContainer,
  ImageContainer,
  heroImageStyles,
  LogoContainer,
  PaddingContainer,
  svgStyles,
  TextLogo,
} from './heroStyles';

export default function Hero() {
  // const dahliaRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <LogoContainer>
        <TextLogo>
          hatha yoga <br /> hanneke jasper
        </TextLogo>
      </LogoContainer>
      <HeroContainer
        // ref={dahliaRef}
        size={{ '@initial': 'mobile', '@m': 'bigScreen' }}
      >
        <ImageContainer>
          <PaddingContainer>
            <StaticImage
              className={heroImageStyles()}
              alt="picture of a dahlia"
              src="../images/dahlia.png"
              placeholder="none"
              width={400}
            />
            <HYHJ className={svgStyles()} />
          </PaddingContainer>
        </ImageContainer>
      </HeroContainer>
    </>
  );
}
