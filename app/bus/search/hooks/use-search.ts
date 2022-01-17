// Core
import { useState, useCallback, MouseEvent } from 'react';

// Types
import type { ReturnHook } from './types';

const useSearch = (): ReturnHook => {
  const [search, setSearch] = useState('');

  const onChangeSearch = useCallback((event: MouseEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setSearch(value);
  }, []);

  return [search, onChangeSearch];
};

export default useSearch;