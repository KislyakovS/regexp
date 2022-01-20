// Core
import { FC } from 'react';

// Components
import Box, { links as boxLinks } from '../box';
import Navigation from '../navigation';
import Input from '../input';

// Types
import type { LinksFunction } from 'remix';

// Constants
import { menu } from './constants';

// Bus
import useContextSearch from '~/bus/search/hooks/use-context-search';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [
    ...boxLinks(),
    { rel: 'stylesheet', href: styles }
  ];
}

const Header: FC = () => {
  const [search, onChangeSearch] = useContextSearch();

  return (
    <header className="header">
      <Box className="header__wrapper">
        <Navigation
          menu={menu}
        />
        <Input placeholder="Search..." onChange={onChangeSearch} value={search} />
      </Box>
    </header>
  );
};

export default Header;
