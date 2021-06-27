import { ReactNode } from "react";

export interface ButtonProps {
  type?:  'button' | 'submit' | 'reset';
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
};