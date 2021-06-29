import { Container } from './style';

import { CardProps } from './type';

export const Card = ({ icon, text, description }: CardProps) => {
  return (
    <Container>
      <div>{icon}</div>
      <p>{text}</p>
      <p>{description}</p>
    </Container>
  );
};
