// Types
import type { IconType } from './constants';
import { HTMLAttributes } from 'react';

type Default = HTMLAttributes<HTMLSpanElement>;

export interface Props extends Default {
  type: IconType
}
