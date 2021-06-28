
import React from 'react';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { styles }  from './style';

import { SectionHomeProps } from './type';

export const SectionHome = ({ banner, logos }: SectionHomeProps) => {

  return (
    <Container>
      <Header logoHeader={logos.logoHeader} />

    <div style={{ width: '50%', marginTop: '32px'}}>
      <Title title={banner.title} />
      <p style={{ fontSize: '22px', color: '#D5D5D5', marginTop: '16px' }}> {banner.subtitle} </p>
      <div style={{  marginTop: '48px' }}>
        <Button type="button" size="lg" > {banner.textButton} </Button>
      </div>
    </div>

    </Container>
  )
}
