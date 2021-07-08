import React from 'react';

import { WrapperButton } from './styles';

import { ButtonProps } from './interface';

export const Button = ({
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <WrapperButton
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {icon}
      {children && <span>{children}</span>}
    </WrapperButton>
  );
};
