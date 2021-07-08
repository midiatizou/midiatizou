import React from 'react';

import { Container } from './styles';

import { SpacingProps } from './types';

export const Spacing = ({ spacingHeight = 1 }: SpacingProps) => {
  return <Container spacingHeight={spacingHeight} />;
};
