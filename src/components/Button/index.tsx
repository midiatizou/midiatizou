import './style.module.css';

import { ButtonProps } from './types';

export const Button = ({ 
  type = 'button',
  size = 'sm', 
  children, 
  ...rest }: ButtonProps
) => {

  return (
    <button className={size} type={type} {...rest} >
      {children}
    </button>
  )
}