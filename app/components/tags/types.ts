// Types
import type { Type } from './constants';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

type Default = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export type Tag = {
  label: string,
  link?: string,
}

export interface Props extends Default {
  list: Tag[],
  type?: Type
}
