import { Image } from '../Image';

import { Container } from './style';

import { HeaderProps } from './type';

export const Header = ({ logoHeader }: HeaderProps) => {
  return (
    <Container>
      <Image
        url={logoHeader.url}
        alt={logoHeader.alt}
        dimensions={{ width: 155, height: 38 }}
      />
    </Container>
  );
};
