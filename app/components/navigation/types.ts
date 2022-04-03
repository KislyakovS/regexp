import { HTMLAttributes } from 'react';

type Default = HTMLAttributes<HTMLElement>;

export type MenuItem = {
  link: string;
  label: string;
}

export interface Props extends Default {
  menu: MenuItem[];
}
