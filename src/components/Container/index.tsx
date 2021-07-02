import { ReactNode } from 'react';

import { Section } from './style';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <Section>{children}</Section>;
};
