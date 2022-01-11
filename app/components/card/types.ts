import { HTMLAttributes, DetailedHTMLProps } from 'react';

type Default = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface Props extends Default {
  title: string;
  regexp: string;
  example: string;
  tags: string;
}
