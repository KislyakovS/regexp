// Core
import { FC, useCallback, ChangeEvent } from 'react';

// Components
import Input from '../input';

// Context
import useSearchState from '~/context/search/hooks/use-search-state';
import useSearchActions from '~/context/search/hooks/use-search-actions';

const Search: FC = () => {
  const search = useSearchState();
  const setSearch = useSearchActions();

  const onChangeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(event.target.value);
    }
  }, [setSearch]);

  return <Input placeholder="Search..." onChange={onChangeSearch} value={search} />
}

export default Search;
