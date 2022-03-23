// Types
import type { TagType } from './constants';
import { HTMLAttributes } from 'react';

type Default = HTMLAttributes<HTMLUListElement>;

export type Tag = {
  label: string,
  link?: string,
}

export interface Props extends Default {
  list: Tag[],
  type?: TagType
}
