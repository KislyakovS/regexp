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
      <Box className="flex items-center justify-between px-5">
        <Navigation
          menu={menu}
        />
        <Search />
      </Box>
    </header>
  );
};

export default Header;
