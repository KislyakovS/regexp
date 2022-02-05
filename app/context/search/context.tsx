// Core
import { createContext } from 'react';

// Types
import { Context } from './types';

const initContext: Context = {
  search: '',
  setSearch: () => { }
}

export default createContext<Context>(initContext);