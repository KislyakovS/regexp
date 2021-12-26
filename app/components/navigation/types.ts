import { HTMLAttributes, DetailedHTMLProps } from 'react';

type Default = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type MenuItem = {
  link: string;
  label: string;
}

export interface Props extends Default {
  menu: MenuItem[];
}
