// Core
import { FC, useState } from 'react';

// Context
import SearchContext from './context';

// Types
import type { PropsProvider } from './types';

const SearchContextProvider: FC<PropsProvider> = ({ children }) => {
  const [search, setSearch] = useState('');

  return <SearchContext.Provider value={{ search, setSearch }}>
    {children}
  </SearchContext.Provider>
};

export default SearchContextProvider;
