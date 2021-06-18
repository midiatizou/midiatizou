import './style.module.css';

import { IButton } from './types';

export const Button = ({ children }: IButton) => {

  return (
    <button className="container">
      {children}
    </button>
  )
}