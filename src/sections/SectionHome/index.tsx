import React from 'react';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Image } from '../../components/Image';
import { Card } from '../../components/Card';

import { ContainerBanner, SubtitleBanner } from './style';

import { SectionHomeProps } from './type';

const data = [
  {
    icon: <p>icon 1</p>,
    text: 'text 1',
    description: 'description 1'
  },
  {
    icon: <p>icon 2</p>,
    text: 'text 2',
    description: 'description 2'
  },
  {
    icon: <p>icon 3</p>,
    text: 'text 3',
    description: 'description 3'
  }
];

export const SectionHome = ({ banner, logos }: SectionHomeProps) => {
  return (
    <Container>
      <Header logoHeader={logos.logoHeader} />

      <ContainerBanner>
        <div className="division mt">
          <Title title={banner.title} asTag="h1" weight="300" />
          <SubtitleBanner>{banner.subtitle}</SubtitleBanner>
          <Button type="button" size="lg">
            {banner.textButton}
          </Button>
        </div>

        <div className="division center">
          <Image
            url={banner.banner.url}
            alt={banner.banner.alt}
            dimensions={{ width: 380, height: 430 }}
          />
        </div>
      </ContainerBanner>
    </Container>
  );
};
