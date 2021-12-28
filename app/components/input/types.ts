import { HTMLAttributes, DetailedHTMLProps } from 'react';

type Default = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface Props extends Default {
  isCopy?: boolean;
}
