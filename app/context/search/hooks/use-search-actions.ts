// Core
import { useContext } from 'react';

// Context
import SearchContext from '../context';

const useSearchActions = () => {
  const { setSearch } = useContext(SearchContext);

  return setSearch;
}

export default useSearchActions;
