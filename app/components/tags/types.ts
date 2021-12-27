// Types
import type { Type } from './constants';

type Tag = {
  label: string,
  link?: string,
}

export type Props = {
  className?: string;
  list: Tag[],
  type: Type
}