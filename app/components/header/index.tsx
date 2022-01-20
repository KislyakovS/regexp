// Core
import { FC } from 'react';

// Components
import Box from '../box';
import Navigation from '../navigation';
import Input from '../input';

// Constants
import { menu } from './constants';

// Bus
import useContextSearch from '~/bus/search/hooks/use-context-search';

const Header: FC = () => {
  const [search, onChangeSearch] = useContextSearch();

  return (
    <header className="mb-5">
      <Box className="flex items-center justify-between px-5">
        <Navigation
          menu={menu}
        />
        <Input placeholder="Search..." onChange={onChangeSearch} value={search} />
      </Box>
    </header>
  );
};

export default Header;
