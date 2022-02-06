import { InputHTMLAttributes } from 'react';

type Default = InputHTMLAttributes<HTMLInputElement>

export interface Props extends Default {
  isCopy?: boolean;
}
