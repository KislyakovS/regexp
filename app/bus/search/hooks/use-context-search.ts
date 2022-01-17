// Core
import { useContext } from 'react';

// Context
import Context from '../context';

// Types
import type { ReturnHook } from './types';

const useContextSearch = (): ReturnHook => {
  const [search, onChangeSearch] = useContext(Context);

  return [search, onChangeSearch] as ReturnHook;
}

export default useContextSearch;