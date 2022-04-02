// Core
import { FC } from 'react';

// Components
import Box from '../box';
import Navigation from '../navigation';
import Search from '../search';

// Constants
import { menu } from './constants';

const Header: FC = () => {
  return (
    <header className="mb-5">
      <Box className="flex relative items-center justify-between h-16 px-5">
        <Navigation
          menu={menu}
        />
        <Search className="ml-auto xl:ml-0" />
      </Box>
    </header>
  );
};

export default Header;
