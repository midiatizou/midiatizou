import React from 'react';
import Head from 'next/head';

import {
  Image,
  Button,
  Header,
  Title,
  Container,
  Slider,
  Spacing,
  Carousel
} from '../..';

import { ContainerBanner, SubtitleBanner, DivisionBanner } from './style';

import { SectionHomeProps } from './types';

export const SectionHome = ({ banner, logos, seo }: SectionHomeProps) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>

      <Header logoHeader={logos.logoHeader} />
      <Container>
        <ContainerBanner>
          <DivisionBanner verticalCenter>
            <Title title={banner.title} asTag="h1" weight="300" />
            <Spacing spacingHeight={1.6} />
            <SubtitleBanner>{banner.subtitle}</SubtitleBanner>
            <Spacing spacingHeight={5.6} />
            <Button type="button" size="large">
              {banner.textButton}
            </Button>
          </DivisionBanner>

          <DivisionBanner horizontalCenter>
            <Image
              url={banner.banner.url}
              alt={banner.banner.alt}
              dimensions={{ width: 380, height: 430 }}
            />
          </DivisionBanner>
        </ContainerBanner>

        <Container>
          <Carousel />
        </Container>
      </Container>
    </>
  );
};
