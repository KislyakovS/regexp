import { HTMLAttributes } from 'react';

type Default = HTMLAttributes<HTMLDivElement>;

export interface Props extends Default {
  title: string;
  regexp: string;
  example: string;
  tags: string;
}
