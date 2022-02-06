import { HTMLAttributes } from 'react';

type Default = HTMLAttributes<HTMLDivElement>;

export type MenuItem = {
  link: string;
  label: string;
}

export interface Props extends Default {
  menu: MenuItem[];
}
