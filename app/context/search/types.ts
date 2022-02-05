// Core
import { ReactNode } from 'react';

export interface PropsProvider {
  children: ReactNode
}

export interface Context {
  search: string;
  setSearch: Function;
}