import { ButtonProps } from './types';

import { Container } from './style';

export const Button = ({
  type = 'button',
  size = 'sm',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
