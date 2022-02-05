// Core
import { FC } from 'react';

// Components
import Input from '../input';

// Bus
import useContextSearch from '~/bus/search/hooks/use-context-search';

const Search: FC = () => {
  const [search, onChangeSearch] = useContextSearch();

  return <Input placeholder="Search..." onChange={onChangeSearch} value={search} />
}

export default Search;
