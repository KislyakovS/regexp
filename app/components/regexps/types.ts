// Types
import { HTMLAttributes, DetailedHTMLProps } from 'react';
import type Regexp from '~/types/regexp';

type Default = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export interface Props extends Default {
  regexps: Regexp[]
}
