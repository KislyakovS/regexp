// Types
import { HTMLAttributes } from 'react';
import type Regexp from '~/types/regexp';

type Default = HTMLAttributes<HTMLUListElement>;

export interface Props extends Default {
  regexps: Regexp[]
}
