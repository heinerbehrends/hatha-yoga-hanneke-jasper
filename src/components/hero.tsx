import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HYG from '../images/HYG.svg';

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
  return (
    <>
      <LogoContainer>
        <TextLogo>
          de yogapraktijk <br /> groningen
        </TextLogo>
      </LogoContainer>
      <HeroContainer size={{ '@initial': 'mobile', '@l': 'bigScreen' }}>
        <ImageContainer>
          <PaddingContainer>
            <StaticImage
              className={heroImageStyles()}
              alt="picture of a dahlia"
              src="../images/dahlia.png"
              placeholder="none"
              width={309}
            />
            <HYG className={svgStyles()} />
          </PaddingContainer>
        </ImageContainer>
      </HeroContainer>
    </>
  );
}
