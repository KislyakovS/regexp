// Core
import { useContext } from 'react';

// Context
import SearchContext from '../context';

const useSearchState = () => {
  const { search } = useContext(SearchContext);

  return search;
}

export default useSearchState;
